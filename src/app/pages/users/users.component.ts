import { Component, OnInit, ViewChild } from '@angular/core';

import { Profile } from '../../interface/profile';
import { User } from '../../interface/user';
import { UserProvider } from '../../provider/user-provider.service';
import { UsersLabel } from './users.label';

import * as _ from 'lodash';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild("listBtn", {static: false}) listBtn: any;
  @ViewChild("squareBtn", {static: false}) squareBtn: any;
  @ViewChild("modalUser", {static: false}) modalUser: any;

  public typeView: string;
  public label: Object;
  public profile: Profile;
  public users: User;
  public flagModal: boolean;


  constructor(
    private userProvider: UserProvider,
  ) {
    this.label = UsersLabel;
    this.flagModal = false;
  }
  
  public async ngOnInit() {
    this.users = await this.userProvider.getUsers();
    this.profile = await this.userProvider.getProfile();
    this.getProfile();
    this.typeView = 'list';
    // this.flagUsers = true;
  }
  
  public getProfile(): void {
    _.forEach(this.users.users, (user, index) => {
      if (user.active) {
        user.imgActive = '../../../assets/toggle_on.svg';
      } else {
        user.imgActive = '../../../assets/toggle_off.svg';
      }
      _.forEach(this.profile.roles, profile => {
        if (profile.id === user.roleId) {
          this.users.users[index].roleId = profile.position;
        }
      });
    });
  }

  public changeStatus(index: number): void{
    var active = this.users.users[index].active;
    this.users.users[index].active = !active;
    if (!active) {
      this.users.users[index].imgActive = '../../../assets/toggle_on.svg';
    } else {
      this.users.users[index].imgActive = '../../../assets/toggle_off.svg';
    }
  }

  public deleteItem(index: number): void{
    delete this.users.users[index];
  }

  public viewUsers(type: string): void{
    if(type === 'square') {
      this.listBtn.nativeElement.src  = "../../../assets/list.svg";
      this.squareBtn.nativeElement.src  = "../../../assets/squarecolor.svg";
      this.typeView = 'square';
    } else {
      this.listBtn.nativeElement.src  = "../../../assets/listcolor.svg";
      this.squareBtn.nativeElement.src  = "../../../assets/square.svg";
      this.typeView = 'list';
    }
  }

  public addUser(): void{
    this.flagModal = true;
    this.modalUser.nativeElement.setAttribute('style', 'display: block;');
  }

  public cancelarModal(flag: boolean): void{
    if (!flag){
      this.modalUser.nativeElement.setAttribute('style', 'display: none;');
    }
  }

}

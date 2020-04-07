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
  
  /**
   * @description Get data json of user and profile
   */
  public async ngOnInit() {
    this.users = await this.userProvider.getUsers();
    this.profile = await this.userProvider.getProfile();
    this.getProfile();
    this.typeView = 'list';
  }

  /**
   * @description Set type profile of the user
   */
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

  /**
   * @description Change status of the user
   * @param {number} index Index to change
   */
  public changeStatus(index: number): void{
    var active = this.users.users[index].active;
    this.users.users[index].active = !active;
    if (!active) {
      this.users.users[index].imgActive = '../../../assets/toggle_on.svg';
    } else {
      this.users.users[index].imgActive = '../../../assets/toggle_off.svg';
    }
  }

  /**
   * @description Delete user
   * @param {number} index Index to delete
   */
  public deleteItem(index: number): void{
    delete this.users.users[index];
  }

  /**
   * @description Change of view's mode
   * @param {string} type View selected
   */
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

  /**
   * @description Event for show the modal
   */
  public addUser(): void{
    this.flagModal = true;
    this.modalUser.nativeElement.setAttribute('style', 'display: block;');
  }

  /**
   * @description Event for hidden the modal
   * @param {boolean} flag Flag of the modal
   */
  public cancelarModal(flag: boolean): void{
    if (!flag){
      this.modalUser.nativeElement.setAttribute('style', 'display: none;');
    }
  }

}

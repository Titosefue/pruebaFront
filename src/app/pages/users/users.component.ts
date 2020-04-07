import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

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

  public flagUsers: Boolean;
  public label: Object;
  public profile: Profile;
  public users: User;

  constructor(
    private userProvider: UserProvider,
  ) {
    this.label = UsersLabel;
    this.flagUsers = false;
  }

  async ngOnInit() {
    this.users = await this.userProvider.getUsers();
    this.profile = await this.userProvider.getProfile();
    setTimeout(this.getProfile, 10000);
    this.flagUsers = true;
    console.log(this.users, this.profile );
  }
  
  public getProfile(): void {
    console.log('dsafsdfads', this.users)
    _.forEach(this.users, user => {
      console.log('sadasfasfasd')
      _.forEach(this.profile, profile => {
        console.log('entrooo', profile.id, user.profile)
        if (profile.id === user.profile) {
          console.log(profile.id, user.profile, profile.position)
        }
      });
    });
  }

}

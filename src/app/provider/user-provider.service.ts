import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../interface/user';
import { Profile } from '../interface/profile';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserProvider {

  constructor(private http: HttpClient) { }

  public getUsers(): Promise<User> {    
    return this.http.get<User>(apiUrl + 'users.json').toPromise();
  }

  public getProfile(): Promise<Profile> {    
    return this.http.get<Profile>(apiUrl + 'roles.json').toPromise();
  }
}
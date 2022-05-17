import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { users } from './users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  allUsers = users;
  _userSubject = new BehaviorSubject<User[]>(this.allUsers);

  constructor() {}

  addUser(newUser: User) {
    this.allUsers.unshift(newUser);
    this._userSubject.next(this.allUsers);
  }
}

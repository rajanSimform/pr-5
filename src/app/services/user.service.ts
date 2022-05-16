import { Injectable } from '@angular/core';
import { users } from './users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = users;

  constructor() {}

  getUsers() {
    return this.users;
  }
}

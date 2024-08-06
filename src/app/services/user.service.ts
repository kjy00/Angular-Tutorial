import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = '';
  users: IUser[] = [
    { name: '김지윤', age: '25', imgUrl: 'profile.jpg' },
    { name: 'user2', age: '22', imgUrl: 'profile.jpg' },
  ];

  getUsers() {
    return this.users;
  }
  getUser(id: number) {}
}

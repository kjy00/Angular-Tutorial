import { Component } from '@angular/core';
import { UserComponent } from './user-info/user-info.component';

@Component({
  selector: 'about-root',
  template: `
    <h2>여기는 <span style="color:navy;">어바웃페이지</span>거둔요오</h2>
    @for (user of users; track $index) {
    <user-info [user]="user" />
    }
  `,
  imports: [UserComponent],
  standalone: true,
})
export class AboutComponent {
  users = [
    { name: '김지윤', age: '25', imgUrl: 'profile.jpg' },
    { name: 'user2', age: '22', imgUrl: 'profile.jpg' },
  ];
}

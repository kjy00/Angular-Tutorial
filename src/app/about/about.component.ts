import { Component, inject } from '@angular/core';
import { UserComponent } from './user-info/user-info.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'about-root',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [UserComponent, FormsModule, ReactiveFormsModule],
  providers: [UserService],
  standalone: true,
})
export class AboutComponent {
  value = '';
  users: IUser[] = [];
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });
  userService = inject(UserService);
  constructor() {
    this.users = this.userService.getUsers();
  }

  onSubmit() {
    if (!this.profileForm.valid) {
      alert('입력값을 확인하세요!');
      return;
    }
    const formValue = this.profileForm.value as Partial<IUser>;
    if (!formValue.name || !formValue.age) return;
    this.users.push({
      name: formValue.name,
      age: formValue.age,
      imgUrl: 'profile.jpg',
    });
    this.profileForm.reset();
  }
}

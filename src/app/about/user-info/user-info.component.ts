import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
  standalone: true,
  imports: [NgOptimizedImage, UpperCasePipe],
})
export class UserComponent {
  @Input() user: IUser = {
    name: '',
    age: '',
    imgUrl: '',
  };
  hover = false;
  myUpperCase(value: string): string {
    return value.toUpperCase();
  }
  onMouseEnter() {
    this.hover = true;
  }
  onMouseLeave() {
    this.hover = false;
  }
}

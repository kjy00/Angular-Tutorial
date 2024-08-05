import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
  standalone: true,
})
export class UserComponent {
  @Input() user!: { name: string; age: string; imgUrl: string };
  hover = false;
  onMouseEnter() {
    this.hover = true;
  }
  onMouseLeave() {
    this.hover = false;
  }
}

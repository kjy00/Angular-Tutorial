import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  standalone: true,
})
export class HomeComponent {
  clicked = false;
  onClick() {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }
}

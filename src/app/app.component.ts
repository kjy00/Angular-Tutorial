import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl:"./app.component.html",
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'ngTutorials';
  public onClick() {
    alert('clicked!')
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'ngTutorials';
  currentUrl: string = '';

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }
  public onClick() {
    alert('clicked!');
  }
}

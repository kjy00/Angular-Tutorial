import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import DetailsComponent from './details/details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    title: 'Angular Tutorials About',
    component: AboutComponent,
  },
  {
    path: 'about/:id',
    title: 'About Page',
    component: AboutComponent,
  },
  { path: 'details/:id', title: 'Detail Page', component: DetailsComponent },
];

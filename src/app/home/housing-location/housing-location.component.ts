import { Component, Input } from '@angular/core';
import { IHousingLocation } from './housing-location';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'housing-location',
  standalone: true,
  imports: [RouterLink],
  template: `<section class="listing">
    <a [routerLink]="['/details', housingLocation.id]">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
    </a>
  </section> `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: IHousingLocation;
}

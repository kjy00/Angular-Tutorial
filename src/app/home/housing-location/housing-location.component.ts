import { Component, Input } from '@angular/core';
import { IHousingLocation } from './housing-location';

@Component({
  selector: 'housing-location',
  standalone: true,
  template: `<section class="listing">
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
  </section> `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: IHousingLocation;
}

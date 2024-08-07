import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { HousingService } from './housing.service';
import { IHousingLocation } from './housing-location/housing-location';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  imports: [HousingLocationComponent],
  providers: [HousingService],
  standalone: true,
})
export class HomeComponent {
  clicked = false;
  housingLocationList: IHousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    console.log('constructor');
  }
  onClick() {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }
}

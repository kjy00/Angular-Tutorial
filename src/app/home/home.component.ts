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
  filteredLocationList: IHousingLocation[] = [];
  constructor() {
    this.housingService.getAllHousingLocations().then((data) => {
      this.housingLocationList = data;
      this.filteredLocationList = this.housingLocationList;
    });
  }
  onClick() {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHousingLocation } from '../home/housing-location/housing-location';
import { HousingService } from '../home/housing.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [HousingService],
  standalone: true,
})
export default class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  housingService = inject(HousingService);
  housingLocation: IHousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService
      .getHousingLocationById(this.housingLocationId)
      .then((data) => {
        this.housingLocation = data;
      });
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}

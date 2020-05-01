import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllDataService } from 'src/app/services/all-data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countryAll: any;
  country: string;
  countryToday: any;

  constructor(
    private router: ActivatedRoute,
    private routerNav: Router,
    private dataService: AllDataService
  ) {
    this.router.params.subscribe((params) => {
      this.countryAll = this.dataService.getCountry(params['country']);
      this.country = params['country'];
      this.setCountryToday();
    });
  }

  ngOnInit(): void {}

  setCountryToday() {
    this.countryToday = this.countryAll[this.countryAll.length - 1];
    this.countryToday['country'] = this.country;
  }
  compareCountry() {
    this.routerNav.navigate(['comparison', this.country]);
  }
}

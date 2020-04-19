import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-country-number',
  templateUrl: './country-number.component.html',
  styleUrls: ['./country-number.component.scss'],
})
export class CountryNumberComponent implements OnInit, OnChanges {
  @Input() country: any;
  percentages: any;

  constructor() {}

  ngOnInit(): void {
    this.setPercentages();
  }
  ngOnChanges(): void {
    this.percentages = {
      deaths: Math.round((this.country.deaths / this.country.confirmed) * 100),
      recovered: Math.round(
        (this.country.recovered / this.country.confirmed) * 100
      ),
    };
  }
  setPercentages() {
    this.percentages = {
      deaths: Math.round((this.country.deaths / this.country.confirmed) * 100),
      recovered: Math.round(
        (this.country.recovered / this.country.confirmed) * 100
      ),
    };
  }
}

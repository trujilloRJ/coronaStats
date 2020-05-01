import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss'],
})
export class ComparisonComponent implements OnInit {
  nameA: string;
  nameB: string = 'United Kingdom';
  countryA: any;
  countryB = this.dataService.all_data[this.nameB];
  field = 'confirmed';

  constructor(
    private dataService: AllDataService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.nameA = params.country;
      this.countryA = this.dataService.all_data[this.nameA];
    });
  }

  setCountryB(country) {
    this.nameB = country;
    this.countryB = this.dataService.all_data[country];
  }
  setCountryA(country) {
    this.nameA = country;
    this.countryA = this.dataService.all_data[country];
  }

  changeField(event) {
    switch (event.target.innerText) {
      case 'Total Cases':
        this.field = 'confirmed';
        break;
      case 'Active Cases':
        this.field = 'activeCases';
        break;
      case 'Deaths':
        this.field = 'deaths';
        break;
      case 'Recovered':
        this.field = 'recovered';
        break;
      case 'New Cases':
        this.field = 'newCases';
        break;
      case 'New Deaths':
        this.field = 'newDeaths';
        break;
      case 'New Recovered':
        this.field = 'newRecovered';
        break;
    }
  }
}

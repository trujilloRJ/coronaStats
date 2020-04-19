import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  presentValues: any[];
  active = 'confirmed';

  constructor(private dataService: AllDataService, private router: Router) {}

  ngOnInit(): void {
    this.presentValues = this.dataService.getPresentValues();
    this.sort('confirmed');
  }

  sort(column: string) {
    this.presentValues.sort((a, b) => b[column] - a[column]);
    this.active = column;
  }

  verCountry(country: any) {
    this.router.navigate(['countries', 'country', country]);
  }
}

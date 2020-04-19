import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  countryList: string[];
  searchText: string = '';

  constructor(private dataService: AllDataService, private router: Router) {}

  ngOnInit(): void {
    this.countryList = this.dataService.getCountries();
  }

  verCountry(country: any) {
    this.router.navigate(['countries', 'country', country]);
    this.searchText = '';
  }
}

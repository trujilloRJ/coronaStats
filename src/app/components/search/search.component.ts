import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() search;
  @Output() countrySelected = new EventEmitter<string>();
  listActive = true;
  @Input() initCountry: string;

  constructor(private dataService: AllDataService, private router: Router) {}

  ngOnInit(): void {
    this.countryList = this.dataService.getCountries();
  }

  showList() {
    this.listActive = true;
  }

  sendCountry(country: string) {
    this.countrySelected.emit(country);
    this.searchText = country;
    this.listActive = false;
  }

  verCountry(country: any) {
    this.router.navigate(['countries', 'country', country]);
    this.searchText = '';
  }
}

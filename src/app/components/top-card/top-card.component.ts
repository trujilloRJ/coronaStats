import { Component, OnInit, Input } from '@angular/core';
import { AllDataService, DayLong } from 'src/app/services/all-data.service';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss'],
})
export class TopCardComponent implements OnInit {
  @Input() feature: string;
  topCountries: any[];
  showC = false;

  constructor(private allService: AllDataService) {}

  ngOnInit(): void {
    this.topCountries = this.getTopCountries();
  }

  getTopCountries() {
    switch (this.feature) {
      case 'cases':
        return this.allService.getTopCases();
      case 'death':
        return this.allService.getTopDeaths();
      default:
        return this.allService.getTopRecovered();
    }
  }
}

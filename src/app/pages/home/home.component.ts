import { Component, OnInit } from '@angular/core';
import { AllDataService } from 'src/app/services/all-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  worldData: any[];
  worldToday: any;

  constructor(private dataService: AllDataService) {
    this.worldData = this.dataService.getWorld();
    this.setCountryToday();
  }

  ngOnInit(): void {}

  setCountryToday() {
    this.worldToday = this.worldData[this.worldData.length - 1];
    this.worldToday['country'] = 'World';
  }
}

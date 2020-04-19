import { Injectable } from '@angular/core';
import * as data from 'src/assets/data/processed_timeseries.json';
import * as world from 'src/assets/data/total_timeseries.json';

export interface DayLong {
  confirmed: number;
  deaths: number;
  recovered: number;
  date: string;
  newCases: number;
  newDeaths: number;
  newRecovered: number;
}

@Injectable({
  providedIn: 'root',
})
export class AllDataService {
  all_data = data['default'];
  world_data = world['default'];
  constructor() {}

  getCountries() {
    return Object.keys(this.all_data);
  }
  getWorld() {
    return this.world_data;
  }

  getCountry(country: string) {
    console.log(this.all_data[country]);
    return this.all_data[country];
  }

  getTopCases() {
    return this.getTopSorted('cases');
  }
  getTopDeaths() {
    return this.getTopSorted('deaths');
  }
  getTopRecovered() {
    return this.getTopSorted('recovered');
  }
  getPresentValues() {
    var arr = [];
    Object.keys(this.all_data)
      .slice(0, -3)
      .forEach((country, i) => {
        arr[i] = this.all_data[country][this.all_data[country].length - 1];
        arr[i]['country'] = country;
        arr[i]['activeCases'] =
          arr[i]['confirmed'] - (arr[i]['deaths'] + arr[i]['recovered']);
      });
    return arr;
  }

  private getTopSorted(feature: string) {
    var arr = [];
    switch (feature) {
      case 'cases':
        this.all_data.top_cases.forEach((country, i) => {
          arr[i] = this.all_data[country][this.all_data[country].length - 1];
          arr[i]['country'] = country;
        });
        arr.sort((a, b) => b.newCases - a.newCases);
        return arr;
      case 'deaths':
        this.all_data.top_deaths.forEach((country, i) => {
          arr[i] = this.all_data[country][this.all_data[country].length - 1];
          arr[i]['country'] = country;
        });
        arr.sort((a, b) => b.newDeaths - a.newDeaths);
        return arr;
      default:
        this.all_data.top_recovered.forEach((country, i) => {
          arr[i] = this.all_data[country][this.all_data[country].length - 1];
          arr[i]['country'] = country;
        });
        arr.sort((a, b) => b.newRecovered - a.newRecovered);
        return arr;
    }
  }
}

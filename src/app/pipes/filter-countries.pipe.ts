import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCountries',
})
export class FilterCountriesPipe implements PipeTransform {
  transform(countries: string[], searchText: string) {
    if (!countries) return [];
    if (!searchText) return [];
    searchText = searchText.toLocaleLowerCase();
    return countries.filter((c) => {
      return c.toLowerCase().includes(searchText);
    });
  }
}

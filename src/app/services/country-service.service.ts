import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryServiceService {
  url_ip = 'https://api.ipify.org/?format=json';
  url_country = 'https://ipapi.co/';
  field = '/country/';

  constructor(private http: HttpClient) {}

  getIp() {
    return this.http.get(this.url_ip);
  }
  getCountry(ip: string) {
    return this.http.get(this.url_country + ip + '/json');
  }
}

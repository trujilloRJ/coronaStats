import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from 'src/app/services/country-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  country: string;
  mob: boolean = false;

  constructor(
    private countryService: CountryServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countryService.getIp().subscribe((ip) => {
      this.countryService
        .getCountry(ip['ip'])
        .subscribe((d) => (this.country = d['country_name']));
    });
  }

  verCountry() {
    this.router.navigate(['countries', 'country', this.country]);
  }

  showMob() {
    this.mob = !this.mob;
  }
}

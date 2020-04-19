import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-number',
  templateUrl: './country-number.component.html',
  styleUrls: ['./country-number.component.scss'],
})
export class CountryNumberComponent implements OnInit {
  @Input() country: any;

  constructor() {}

  ngOnInit(): void {}
}

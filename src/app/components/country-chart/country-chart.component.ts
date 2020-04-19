import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { CONST } from 'src/app/shared/constants';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.scss'],
})
export class CountryChartComponent implements OnInit, OnChanges {
  @Input() countryAll: any[];

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          type: 'linear',
          ticks: {
            callback: function (value) {
              return JSON.stringify(+value / CONST.thousands) + 'K';
            },
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date',
          },
        },
      ],
    },
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartLabels: Label = [];
  barChartData: ChartDataSets[];
  public barChartColors: Color[] = [
    { backgroundColor: CONST.deathColor },
    { backgroundColor: CONST.recoveredColor },
    { backgroundColor: CONST.casesColor },
  ];

  constructor() {}

  ngOnInit() {
    this.setDataChart();
    // global config chart
    Chart.defaults.global.defaultFontSize = CONST.fontSize;
    Chart.defaults.global.defaultFontFamily = CONST.fontFamily;
    Chart.defaults.global.defaultFontColor = '#000000';
  }
  ngOnChanges() {
    this.setDataChart();
  }

  setDataChart() {
    this.barChartLabels = this.countryAll.map((d) => d.date);
    this.barChartData = [
      {
        data: this.countryAll.map((d) => d.deaths),
        label: 'Deaths',
        stack: 'b',
      },
      {
        data: this.countryAll.map((d) => d.recovered),
        label: 'Recovered',
        stack: 'b',
      },
      {
        data: this.countryAll.map((d) => d.activeCases),
        label: 'Active Cases',
        stack: 'b',
      },
    ];
  }
}

import { Component, Input, OnChanges } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import { CONST } from 'src/app/shared/constants';

@Component({
  selector: 'app-comparison-chart',
  templateUrl: './comparison-chart.component.html',
  styleUrls: ['./comparison-chart.component.scss'],
})
export class ComparisonChartComponent implements OnChanges {
  @Input() countryA: any[];
  @Input() countryB: any[];
  @Input() nameCountryA: string;
  @Input() nameCountryB: string;
  @Input() field: string;

  lineChartLabels: Label = [];
  lineChartData: ChartDataSets[];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
  lineChartColors: Color[] = [
    {
      // countryA
      backgroundColor: 'rgba(100,0,0,0.2)',
      borderColor: 'rgba(100,0,0,1)',
      pointBackgroundColor: 'rgba(100,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      // countryB
      backgroundColor: 'rgba(0,0,100,0.2)',
      borderColor: 'rgba(0,0,100,1)',
      pointBackgroundColor: 'rgba(0,0,100,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,0,100,1)',
    },
  ];
  lineChartPlugins = [];

  constructor() {
    // global config chart
    Chart.defaults.global.defaultFontSize = CONST.fontSize;
    Chart.defaults.global.defaultFontFamily = CONST.fontFamily;
    Chart.defaults.global.defaultFontColor = '#000000';
  }

  ngOnChanges(): void {
    this.setDataChart();
  }

  setDataChart() {
    this.lineChartLabels = this.countryA.map((d) => d.date);
    this.lineChartData = [
      {
        data: this.countryA.map((d) => d[this.field]),
        label: this.nameCountryA,
      },
      {
        data: this.countryB.map((d) => d[this.field]),
        label: this.nameCountryB,
      },
    ];
  }
}

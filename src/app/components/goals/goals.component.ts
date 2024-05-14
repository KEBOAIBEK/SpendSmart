import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "This year",
          data: [200, 400, 600, 800, 1000, 1200, 1400]
        },
        {
          name: "Last year",
          data: [101, 320, 450, 320, 340, 520, 410]
        }
      ],
      chart: {
        height: 280,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-05-01T00:00:00.000Z",
          "2018-05-02T01:00:00.000Z",
          "2018-05-03T02:00:00.000Z",
          "2018-05-04T03:00:00.000Z",
          "2018-05-05T04:00:00.000Z",
          "2018-05-06T05:00:00.000Z",
          "2018-05-07T06:00:00.000Z"
        ]
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return '$ ' + value;
          },
        }
      },
      tooltip: {
        x: {
          format: 'HH:mm MMM dd'
        }
      }
    };
  }

  public generateData(baseval: number, count: number, yrange: { max: number; min: number; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  imagePath: string = 'assets/img/Graph.jpg';
}

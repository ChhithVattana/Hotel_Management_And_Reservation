import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#ebedf0',
        },
      },
    },
  };

  public barChartLabels = [
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '16',
    '17',
    '18',
  ];
  public barChartLegend = true;

  public barChartData = [
    {
      data: [250, 360, 880, 975, 452, 601, 230, 231, 657, 324],
      label: 'Revenue',
      backgroundColor: '#87C9F0',
      barThickness: 20, // Adjust bar the thickness as needed
    },
  ];

  constructor() {}

  ngOnInit() {}
}

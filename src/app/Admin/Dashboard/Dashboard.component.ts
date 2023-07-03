import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { AuthGaurdService } from 'src/app/Service/AuthGaurd.service';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = true;
  searchTerm: string = '';
  canAccess: Boolean = false;

  constructor(
    private authGuardService: AuthGaurdService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authGuardService.canAccess()) {
      setTimeout(() => {
        this.getUserInfo();
        this.canAccess = this.authGuardService.canAccess();
        this.isLoading = false;
      }, 1000);
    } else {
      this.router.navigate(['login']);
    }
  }

  // bar chart
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

  public barChartLabels = ['12', '13', '14', '15', '16', '17', '18'];
  public barChartLegend = false;
  public barChartData = [
    {
      data: [350, 460, 1080, 1175, 752, 901, 630],
      label: '1st Year',
      backgroundColor: [
        '#BAEDBD',
        '#C6C7F8',
        '#1C1C1C',
        '#B1E3FF',
        '#B1E3FF',
        '#95A4FC',
        '#D1E8FD',
      ],
      barThickness: 20,
    },
  ];

  // Pie chart
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public pieChartLabels = ['Rooms', 'Events', 'Meeting'];
  public pieChartDatasets = [
    {
      data: [50, 4, 8],
      backgroundColor: ['#5DB9EF', '#8269FA', '#0054D9'],
      borderWidth: 2,
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // line chart
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [
          7300, 6500, 8200, 6709, 7000, 8000, 6000, 6900, 6000, 7657, 6709,
          7000,
        ],
        label: 'Monthly Incomes',
        fill: true,
        tension: 0.5,
        borderColor: '#9f30f6',
        backgroundColor: '#C0B6D350',
        pointBorderColor: '#fff',
        pointBackgroundColor: '#003DD3',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
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
          display: true,
          drawTicks: true,
          drawOnChartArea: true,
          color: '#ebedf0',
          lineWidth: 1,
          offset: true,
          tickLength: 8,
          tickWidth: 1,
        },
      },
    },
  };
  public lineChartLegend = false;

  // line chart
  public lineChartData_1: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [
          7300, 6500, 8200, 6709, 7000, 8000, 6000, 6900, 6000, 7657, 6709,
          7000,
        ],
        fill: false,
        tension: 0.1,
        borderColor: '#ffffff',
        backgroundColor: 'rgba(130,130,130,0.15)',
        pointBorderColor: '#ffffff',
        pointBackgroundColor: '#9C34F6',
      },
    ],
  };
  public lineChartOptions_1: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Hide x scale border
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Hide x-axis labels
        },
      },
      y: {
        display: false, // Hide y scale border
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Hide y-axis labels
        },
      },
    },
  };
  public lineChartLegend_1 = false;

  // search box
  search() {
    // Perform search functionality using the searchTerm
    console.log('Searching for:', this.searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
  }

  username: string = '';

  // get user info
  getUserInfo() {
    this.username = this.authGuardService.getUserName();
  }
}

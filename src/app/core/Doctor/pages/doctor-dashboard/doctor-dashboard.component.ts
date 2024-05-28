import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartModule } from 'primeng/chart';
import { LineChartComponent } from '../../../../shared/Components/Charts/line-chart/line-chart.component';
import { DoctorService } from '../../Services/doctor-services/doctor.service';
import { DashBoardDataResponse, DashboardData } from '../../models/doctor.models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [ChartModule,BaseChartDirective,LineChartComponent,CommonModule],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent implements OnInit {
  intialLoding:boolean=true;
  data1: any;
  options1: any;
  lineChartData:any;
  lineChartOptions: any;
  pieChartData!:DashBoardDataResponse['typeOfAppointments'];
  pieData:any;
  pieChartOptions: any;
  dashboardData!: DashboardData;
  totalAppointments: number = 0;
  totalPatients:number=0
  constructor(private doctorService: DoctorService) {

  }

  ngOnInit(): void {
    this.fetchDashboardDetails();
  }

  fetchDashboardDetails(): void {
    this.doctorService.getDashboardDetails().subscribe({
      next: (res) => {
        this.intialLoding = false
        console.log("Doctor DashboardDetails",res)
        this.dashboardData = res.data.dashboardData;
        this.pieChartData = res.data.typeOfAppointments
        this.intilializeLinearChart();
        this.intilializePieChart()
        this.totalAppointments = this.calculateTotalAppointments(res.data.dashboardData);
        this.totalPatients = res.data.totalPatients;


      },
      error: (err) => {
        this.intialLoding = false
        console.log(err);
        // Handle error
      }
    });
  }

  intilializeLinearChart(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const months = Object.keys(this.dashboardData);
    console.log("months",months);

    const completedAppointmentsData = months.map(month => this.dashboardData[month].completedAppointments);
    const cancelledAppointmentsData = months.map(month => this.dashboardData[month].cancelledAppointments);

    console.log("completedAppointmentsData cancelledAppointmentsData",cancelledAppointmentsData,completedAppointmentsData);

    this.lineChartOptions = {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawOnChartArea: false,
                    color: surfaceBorder
                }
            }
        }
    };

    // Adding datasets for completed and cancelled appointments
    this.lineChartData = {
        labels: months,
        datasets: [
            {
                label: 'Completed Appointments',
                data: completedAppointmentsData,
                borderColor: documentStyle.getPropertyValue('--green-500'),
                tension: 0.4,
                fill: true
            },
            {
                label: 'Cancelled Appointments',
                data: cancelledAppointmentsData,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4,
                fill: true
            }
        ]
    };
  }

  intilializePieChart(): void{
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
    console.log(Object.keys(this.pieChartData),Object.values(this.pieChartData),);
        this.pieData = {
            labels: Object.keys(this.pieChartData),
            datasets: [
                {
                    data: Object.values(this.pieChartData),
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.pieChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
  }

  calculateTotalAppointments(dashboardData: DashboardData): number {
    let totalAppointments = 0;
    Object.values(dashboardData).forEach(monthData => {
      totalAppointments += monthData.totalAppointments;
    });
    return totalAppointments;
  }
}

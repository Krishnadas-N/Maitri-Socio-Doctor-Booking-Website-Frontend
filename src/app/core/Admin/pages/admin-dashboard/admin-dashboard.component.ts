import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
Chart.register(...registerables);
import { CommonModule, formatDate } from '@angular/common';
import { AdminService } from '../../Services/admin-service/auth.service';
import { AdminDashboardDetails, AdminDashboardUserandDoctorDetails, appoinmentTableDetails } from '../../Models/dashboard.model';
import { BaseChartDirective } from 'ng2-charts';
import { LineChartComponent } from '../../../../shared/Components/Charts/line-chart/line-chart.component';
import { ChartModule } from 'primeng/chart';
import { StarRatingComponent } from '../../Components/star-rating/star-rating.component';
import { AppoinmentTableComponent } from '../../Components/appoinment-table/appoinment-table.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone:true,
  imports:[CommonModule,BaseChartDirective,LineChartComponent,ChartModule,StarRatingComponent,AppoinmentTableComponent]
})
export class AdminDashboardComponent implements OnInit {
  appoinmentStatusdata: any;
  appoinmentStatusoptions: any;
  doctorAndUserDetails!:AdminDashboardUserandDoctorDetails;
  public lineChartData!: ChartConfiguration['data'];
  public lineChartOptions!: ChartConfiguration['options']
  eventDate: any = formatDate(new Date(), 'MMM dd, yyyy', 'en');
  dashBoardData!:AdminDashboardDetails;
  constructor(private adminService:AdminService, private router:Router,){}
  ngOnInit(): void {
    this.fetchDasboardDetails();
    this.getUserAndDoctorDashboardDetails();
    this.getAppoinmentDetails()

  }

  fetchDasboardDetails(){
    this.adminService.getDashboardDetails().subscribe({
      next:(res:any)=>{
        console.log("DashBoard Data",res);
        this.dashBoardData = res.data
        this.intiateRevenueGraph();
        this.intiateAppoinmentStatusGraph()
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }


  intiateRevenueGraph(){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   const labels = this.dashBoardData.monthlyRevenue.map(entry => `${monthNames[entry.month - 1]} ${entry.year}`);
   const data = this.dashBoardData.monthlyRevenue.map(entry => entry.monthlyRevenue);
    this.lineChartData = {
      datasets: [
        {
          data: data,
          label: 'Revenue',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(70, 130, 180, 0.7)',
          pointBackgroundColor: 'rgba(70, 130, 180, 0.7)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(60, 179, 113, 0.7)',
          fill: 'origin',
        },
      ],
      labels: labels,
    };


    this.lineChartOptions= {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      elements: {
        line: {
          tension: 0.5,
        },
      },
      scales: {
        y: {
          position: 'left',
        },
        y1: {
          position: 'right',
          grid: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            color: 'red',
          },
        },
      },
  
      plugins: {
        legend: {
          labels: {
              usePointStyle: true,
              color: 'rgba(255,0,0,0.3)'
          }
      }
      },
    };
  }

  intiateAppoinmentStatusGraph(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const labels: string[] = [];
    const completedData: number[] = [];
    const cancelledData: number[] = [];
    const pendingData: number[] = [];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    this.dashBoardData.monthlyStats.forEach(({ year, month, stats }) => {
      labels.push(`${monthNames[month - 1]} ${year}`);
      completedData.push(stats['Completed'] || 0);
      cancelledData.push(stats['Cancelled'] || 0);
      pendingData.push(stats['Pending'] || 0);
  });

  this.appoinmentStatusdata = {
    labels: labels,
    datasets: [
        {
            label: 'Completed Appointments',
            data: completedData,
            fill: false,
            tension: 0.4,
            borderColor: documentStyle.getPropertyValue('--blue-500')
        },
        {
            label: 'Cancelled Appointments',
            data: cancelledData,
            fill: false,
            borderDash: [5, 5],
            tension: 0.4,
            borderColor: documentStyle.getPropertyValue('--teal-500')
        },
        {
            label: 'Pending Appointments',
            data: pendingData,
            fill: true,
            borderColor: documentStyle.getPropertyValue('--orange-500'),
            tension: 0.4,
            backgroundColor: 'rgba(255,167,38,0.2)'
        }
    ]
};

this.appoinmentStatusoptions = {
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
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder
            }
        }
    }
  };
  }

  getUserAndDoctorDashboardDetails(){
    this.adminService.getUsersAndDoctorsDashBoardDetails().subscribe({
      next:(res)=>{
        console.log("getUsersAndDoctorsDashBoardDetails",res);
        this.doctorAndUserDetails =res.data
      },
      error:()=>{

      }
    })
  }

  appoinmentDetails!:appoinmentTableDetails[];
    tableHeaders = [
      { text: 'Doctor Name', key: 'doctorName' },
      { text: 'Speciality', key: 'speciality' },
      { text: 'Patient Name', key: 'patientName' },
      { text: 'Appointment Time', key: 'appointmentTime' },
      { text: 'Status', key: 'status' },
      { text: 'Amount', key: 'amount' }
    ]
config = {
  showViewButton: true,
  showDeleteButton: false
};

tableRows = [
  {
    productName: 'Apple MacBook Pro 13',
    stock: 77,
    status: 'Active'
  },
  
];
getAppoinmentDetails(){
  this.adminService.getAppoinmentDetails().subscribe({
    next:(res)=>{
      console.log("response from appoinmentListing",res);
      this.appoinmentDetails = res.data.appointments;
      
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

viewAppoinment(event:any){
  this.router.navigate(['/admin/appointments',event])
 }
}

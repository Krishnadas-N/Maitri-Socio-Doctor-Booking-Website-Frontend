import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/admin-service/auth.service';
import { TransactionDetailsByWeek, Wallet } from '../../Models/transaction.model';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdminPaginationComponent } from '../../Components/admin-pagination/admin-pagination.component';

@Component({
  selector: 'app-admin-transaction',
  templateUrl: './admin-transaction.component.html',
  styleUrls: ['./admin-transaction.component.css'],
  standalone:true,
  imports:[CommonModule,NgxChartsModule,AdminPaginationComponent]
})
export class AdminTransactionComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0; 
  pageSize: number = 6;
  currentDoctorWallet!: Wallet;
  transactionDetailsOfWeek!: TransactionDetailsByWeek[];
  dataLC: any[] = []; // Initial empty data

  viewLC: [number, number] = [700, 300];
  animationsLC = true;
  showGridLinesLC = true;
  legendLC = true;
  legendTitleLC = "Transactions";
  roundDomainsLC = true;
  xAxisLC = true;
  yAxisLC = true;
  constructor(private adminService:AdminService) { }
  ngOnInit() {
    this.loadDoctorWallet();
    this.loadTransactionDetails()

  }

  loadTransactionDetails(){
    this.adminService.getAdminTransactionDetails().subscribe({
      next:(res)=>{
        console.log(res);
        this.transactionDetailsOfWeek = res.data;
        this.updateChartData();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  loadDoctorWallet(){
    this.adminService.getAdminWalletDetails(this.currentPage, this.pageSize).subscribe({
      next:(res)=>{
        this.currentDoctorWallet= res.data.wallet
         this.currentPage = res.data.page;
         this.pageSize = res.data.pageSize;
         this.totalCount = res.data.totalCount;
        this.totalPages = res.data.totalPages;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


  currencyFormatterLC(moneyAmount: any): string {
    const currencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
    });
    return currencyFormat.format(moneyAmount);
  }

  dateFormatterLC(date: string): string {
    const datePipe = new DatePipe("en-US");
    let formatted = datePipe.transform(date);
    return formatted ? formatted : date;
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  updateChartData() {
    if (this.transactionDetailsOfWeek && this.transactionDetailsOfWeek.length > 0) {
      const transformedData = this.transactionDetailsOfWeek.map(item => {
        return {
          name: 'Transactions',
          series: [
            { name: item.startDate, value: item.credit },
            { name: item.startDate, value: item.debit }
          ]
        };
      });
      this.dataLC = transformedData;
    }
  }

}

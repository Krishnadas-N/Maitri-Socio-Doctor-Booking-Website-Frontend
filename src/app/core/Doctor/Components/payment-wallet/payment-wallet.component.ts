import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { DatePipe } from '@angular/common';
import { UserPaginationComponent } from '../../../../shared/Components/user-pagination/user-pagination.component';
import { DoctorService } from '../../Services/doctor-services/doctor.service';
import { TransactionDetailsByWeek, Wallet } from '../../models/wallet-model';
@Component({
  selector: 'app-payment-wallet',
  templateUrl: './payment-wallet.component.html',
  styleUrls: ['./payment-wallet.component.css'],
  standalone:true,
  imports:[NgxChartsModule,UserPaginationComponent],
})
export class PaymentWalletComponent implements OnInit {
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
  constructor(private doctorService:DoctorService) { }
  ngOnInit() {
    this.loadDoctorWallet();
    this.loadTransactionDetails()

  }

  loadTransactionDetails(){
    this.doctorService.getTransactionDetails().subscribe({
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
    this.doctorService.getWalletOfDoctor(this.currentPage, this.pageSize).subscribe({
      next:(res)=>{
        this.currentDoctorWallet= res.data.wallet
         this.currentPage = res.data.page;
         this.pageSize = res.data.pageSize;
         this.totalCount = res.data.totalCount;
        this.totalPages = res.data.totalPages;
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

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { Wallet } from '../Models/userWallet.model';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  currentUserWallet!: Wallet;
  currentPage: number = 1;
  totalPages: number = 0;
  totalCount: number = 0;
  pageSize: number = 6;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadWalletOfUser();
  }

  loadWalletOfUser() {
    this.userService
      .getWalletOfUser(this.currentPage, this.pageSize)
      .subscribe({
        next: (res) => {
          this.currentUserWallet = res.data.wallet;
          this.currentPage = res.data.page;
          this.pageSize = res.data.pageSize;
          this.totalCount = res.data.totalCount;
          this.totalPages = res.data.totalPages;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}

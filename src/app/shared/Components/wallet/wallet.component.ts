import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/User/Services/user.service';

@Component({
  selector: 'app-wallet',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  currentUserWallet:any;
  
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getWalletOfUser().subscribe(
      (res)=>{
        this.currentUserWallet = res.data
      },
      (err:any)=>{
        console.log(err);
      }
      )
  }

}

import { Component, OnInit } from '@angular/core';
import { BankAccount } from 'src/app/models/BankAccount';
import { User } from 'src/app/models/User';
import { BankingService } from 'src/app/services/banking.service';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {

  constructor(private bankingService: BankingService, private userDataService: UserdataService) { }

  accounts: BankAccount[] = [{bankaccount_id: 0, user_id: 1, total_amount: 5000, account_type: 'checking', account_num: 5331},
  {bankaccount_id: 1, user_id: 1, total_amount: 2000, account_type: 'savings', account_num: 5123}];
  currUser!: User;

  ngOnInit(): void {
  //   this.currUser = this.userDataService.getUserData()
  //   if(this.currUser.user_id != 0) {
  //     this.bankingService.getBankAccounts(this.currUser.user_id).subscribe(res => {
  //       this.accounts = res;
  //     });
  //   }
  }

  transactionHistory(bankaccount_id: number) {

  }

  makeATransfer(bankAccount: BankAccount) {

  }

}

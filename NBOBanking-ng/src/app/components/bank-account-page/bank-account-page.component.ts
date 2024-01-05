import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { Account } from '../../models/Account.model';
import { Transaction } from '../../models/Transaction.model';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, } from '@angular/material/dialog';

export interface DialogData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-bank-account',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDialogModule, FormsModule, ReactiveFormsModule],
  templateUrl: './bank-account-page.component.html',
  styleUrl: './bank-account-page.component.css'
})
export class BankAccountComponent implements OnInit {
  username: string = '';
  password: string = '';
  showCheckingAccounts: boolean = true;
  isExistingUser: boolean = false;
  requestingNewAcct: boolean = false;
  checkingAccounts: Account[] = [
    {accountId: 0, accountType: 'checking', accountNum: '*4123', balance: "10,000", transactionHistory: [{transactionId: 0, amount: '250', description: 'Test Payment', transactionFrom: '(******4123) Account', transactionTo: 'PetCo International'}, {transactionId: 0, amount: '250', description: 'Test Payment', transactionFrom: '(******4123) Account', transactionTo: 'PetCo International'}, {transactionId: 0, amount: '250', description: 'Test Payment', transactionFrom: '(******4123) Account', transactionTo: 'PetCo International'}]},
    {accountId: 0, accountType: 'checking', accountNum: '*4123', balance: "10,000", transactionHistory: [{transactionId: 0, amount: '250', description: 'Test Payment', transactionFrom: '(******4123) Account', transactionTo: 'PetCo International'}]},
    {accountId: 0, accountType: 'checking', accountNum: '*4123', balance: "10,000", transactionHistory: [{transactionId: 0, amount: '250', description: 'Test Payment', transactionFrom: '(******4123) Account', transactionTo: 'PetCo International'}]}
  ];
  savingAccounts: Account[] = [];
  currTransactions: Transaction[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.currTransactions = this.checkingAccounts[0].transactionHistory;
    this.showCheckingAccounts = true;
    this.requestingNewAcct = false;
    this.isExistingUser = false;
  }
  
  showTransactionHistory(transactions: Transaction[]) {
    this.currTransactions = transactions;
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(BankAccountLoginDialog, {
      data: {username: this.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was close');
      this.username = result;
    })
  }

  initiateNewAccountRequest(newAccountType: string) {
    if (newAccountType == 'checking') {
      this.requestingNewAcct = true;
    } else if (newAccountType == 'savings') {
      this.requestingNewAcct = true;
    }
  }
}


@Component({
  selector: 'bank-account-login-dialog',
  templateUrl: './bank-account-login-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class BankAccountLoginDialog {
  constructor(
    public dialogRef: MatDialogRef<BankAccountLoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.data.username = '';
    this.data.password = '';
    this.dialogRef.close();
  }

  attemptToLogin(username: string, password: string) {

  }
}
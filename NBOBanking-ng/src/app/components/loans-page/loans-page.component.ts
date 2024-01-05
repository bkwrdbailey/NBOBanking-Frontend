import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { Loan } from '../../models/Loan.model';

@Component({
  selector: 'app-loans-page',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatRadioModule],
  templateUrl: './loans-page.component.html',
  styleUrl: './loans-page.component.css'
})
export class LoansPageComponent implements OnInit {
  isPersonalLoan: boolean = true;
  isHomeLoan: boolean = false;
  isAutoLoan: boolean = false;
  isNewLoan: boolean = false;
  amount: string = '';
  paymentOption: string = '';
  selectedMonths: string = '';
  loanPurpose: string = '';
  currentLoans: Loan[] = [{loanId: 1, loanType: 'Personal', totalAmount: "100000", totalMonths: 72, requestReason: "Debt Consolidation", paymentPlan: {paymentId: 0, paymentDate: "12/12/2023", onAutoPay: true, amountDue: "256", paymentMethod: 'Checking (*5324)'}}, {loanId: 1, loanType: 'Personal', totalAmount: "100000", totalMonths: 72, requestReason: "Debt Consolidation", paymentPlan: {paymentId: 0, paymentDate: "12/12/2023", onAutoPay: true, amountDue: "256", paymentMethod: 'Checking (*5324)'}}];

  constructor() {}

  ngOnInit(): void {
    this.isNewLoan = false;
    this.isPersonalLoan = true;
    this.isHomeLoan = false;
    this.isAutoLoan = false;
  }

  loanAmt = new FormControl('', Validators.required);
  pymntOpt = new FormControl('', Validators.required);
  totalMonths = new FormControl('', Validators.required);
  purpose = new FormControl('', Validators.required);

  newLoanRequest() {
    this.isNewLoan = true;
  }
}

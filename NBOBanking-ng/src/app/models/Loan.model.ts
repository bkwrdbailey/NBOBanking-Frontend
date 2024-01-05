import { Payment } from "./Payment.model";

export interface Loan {
    loanId: number;
    totalAmount: string;
    paymentPlan: Payment;
    totalMonths: number;
    loanType: string;
    requestReason: string;
}
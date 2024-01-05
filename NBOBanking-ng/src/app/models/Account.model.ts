import { Transaction } from "./Transaction.model";

export interface Account {
    accountId: number;
    accountType: string
    accountNum: string;
    balance: string;
    transactionHistory: Transaction[];
}
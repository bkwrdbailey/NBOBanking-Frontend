export interface Transaction {
    transactionId: number;
    amount: number;
    description: string;
    transactionTo: string;
    transactionFrom: string;
}
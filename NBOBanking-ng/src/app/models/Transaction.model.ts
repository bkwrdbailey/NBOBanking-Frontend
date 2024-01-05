export interface Transaction {
    transactionId: number;
    amount: string;
    description: string;
    transactionTo: string;
    transactionFrom: string;
}
export interface Transaction {
  transaction_id: number;
  bankaccount_id: number;
  transaction_type: string;
  transaction_amount: number;
  transaction_date: Date;
}

export interface Payment {
    paymentId: number;
    onAutoPay: boolean;
    amountDue: string;
    paymentDate: string;
    paymentMethod: string;
}
export interface Payment {
    paid: boolean;
    description: string;
    payment: number;
    payday: string;
    paymentlink: string;
    editing?: null;
    deleting?: null;
}
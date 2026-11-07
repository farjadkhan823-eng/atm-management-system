export type TransactionType = 'Desposit' | 'Withdrawl';
export type TransactionStatus = 'Success' | 'Failed';

export interface Transaction {
    id: string;
    atmId: string;
    amount: number;
    type: TransactionType;
    timestamp: string;
    status: TransactionStatus;
}
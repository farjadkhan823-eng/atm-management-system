export type AtmStatus = 'ACTIVE' | 'INACTIVE' | 'OUT OF CASH';

export const ATM_STATUS_OPTIONS: AtmStatus[] = [
    'ACTIVE',
    'INACTIVE',
    'OUT OF CASH'
];

export interface ATM {
    id: string;
    atmName: string;
    code: string;
    area: string;
    address: string;
    status: AtmStatus;
}
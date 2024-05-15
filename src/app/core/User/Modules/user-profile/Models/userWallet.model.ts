export class Wallet {
    constructor(
        public owner: string, 
        public balance: number,
        public transactions: Transaction[]
    ) {}
}

export interface Transaction {
    type: 'credit' | 'debit';
    amount: number;
    description: string;
    date: Date;
}

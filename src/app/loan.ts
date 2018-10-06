export class Loan {
  id: number;
  bank: string;
  interestMin: number;
  interestMax: number;
  monthlyRate: number;
  totalLoanAmount: number;
  flags: Array<number>;
}

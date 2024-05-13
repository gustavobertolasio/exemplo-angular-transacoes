export interface Operation {
  originAccountNumber: number;
  destinationAccountNumber: number;
  amount: number;
  scheduledOperationDate: string;
  tax: number;
}

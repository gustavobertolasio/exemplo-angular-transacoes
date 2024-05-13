export interface Transfer {
  originAccount: number;
  destinationAccount: number;
  transferDate: Date;
  scheduledOperationDate: Date;
  amount: number;
  transferTax: number,
  nextStepEnabled: boolean;
}

export interface TransferRequest {
  originAccount: number;
  destinationAccount: number;
  scheduledOperationDate: Date;
  amount: number;
}

import { Injectable } from '@angular/core';
import { Store } from '../../../core/models/store-model';
import { Transfer } from '../models/transfer';

@Injectable({
  providedIn: 'root',
})
export class TransferStoreService extends Store<Transfer> {
  constructor() {
    super({
      destinationAccount: 0,
      originAccount: 0,
      scheduledOperationDate: new Date(),
      amount: 0,
      transferDate: new Date(),
      transferTax: 0,
      nextStepEnabled: false,
    });
  }
}

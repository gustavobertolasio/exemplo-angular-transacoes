import { TestBed } from '@angular/core/testing';

import { TransferStoreService } from './transfer-store.service';

describe('TransferStoreService', () => {
  let service: TransferStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

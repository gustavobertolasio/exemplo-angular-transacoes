import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledTransferListComponent } from './scheduled-transfer-list.component';

describe('ScheduledTransferListComponent', () => {
  let component: ScheduledTransferListComponent;
  let fixture: ComponentFixture<ScheduledTransferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledTransferListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduledTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

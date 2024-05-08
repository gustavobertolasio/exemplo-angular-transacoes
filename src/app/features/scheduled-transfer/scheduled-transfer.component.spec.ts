import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledTransferComponent } from './scheduled-transfer.component';

describe('ScheduledTransferComponent', () => {
  let component: ScheduledTransferComponent;
  let fixture: ComponentFixture<ScheduledTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduledTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

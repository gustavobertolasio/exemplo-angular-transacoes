import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountDataComponent } from './amount-data.component';

describe('AmountDataComponent', () => {
  let component: AmountDataComponent;
  let fixture: ComponentFixture<AmountDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmountDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

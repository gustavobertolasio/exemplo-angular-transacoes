import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { TransferStoreService } from '../../store/transfer-store.service';

@Component({
  selector: 'app-amount-data',
  standalone: true,
  imports: [SharedModule, CommonModule, ReactiveFormsModule],
  templateUrl: './amount-data.component.html',
  styleUrl: './amount-data.component.scss',
})
export class AmountDataComponent {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    protected transferStore: TransferStoreService
  ) {
    this.form = this.formBuilder.group({
      amount: ['', [Validators.required]],
    });

    this.form.valueChanges.subscribe((change) => {
      this.transferStore.setState({
        ...this.transferStore.state,
        ...change,
        nextStepEnabled: this.form.valid,
      });
    });
  }

  getTaxAmount() {
    return (
      (+this.transferStore.state.transferTax / 100) *
      +this.transferStore.state.amount
    );
  }

  getFinalAmount() {
    return this.getTaxAmount() + +this.transferStore.state.amount;
  }
}

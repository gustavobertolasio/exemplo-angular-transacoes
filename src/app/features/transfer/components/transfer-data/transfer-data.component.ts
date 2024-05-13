import { OperationApiService } from '../../services/operation-api.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TransferStoreService } from '../../store/transfer-store.service';

@Component({
  selector: 'app-transfer-data',
  standalone: true,
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  providers: [OperationApiService],
  templateUrl: './transfer-data.component.html',
  styleUrl: './transfer-data.component.scss',
})
export class TransferDataComponent {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    protected transferStore: TransferStoreService,
    private operationApi: OperationApiService
  ) {
    this.form = this.formBuilder.group({
      originAccount: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      destinationAccount: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      scheduledOperationDate: ['', [Validators.required]],
    });

    this.form.valueChanges.subscribe((change) => {
      this.transferStore.setState({
        ...this.transferStore.state,
        ...change,
        nextStepEnabled:
          this.form.valid && this.transferStore.state.transferTax > 0,
      });
    });

    this.form
      .get('scheduledOperationDate')
      ?.valueChanges.subscribe((change) => {
        this.operationApi.getTransferTax(change).subscribe((tax) => {
          if (!tax) {
            alert('A taxa do dia é zero. Realize a transferência em outro dia');
          }

          this.transferStore.setState({
            ...this.transferStore.state,
            transferTax: tax,
            nextStepEnabled:
              this.form.valid && tax > 0,
          });
        });
      });
  }

  getTransferTax() {
    return this.transferStore.state.transferTax
      ? `${this.transferStore.state.transferTax}%`
      : '-';
  }
}

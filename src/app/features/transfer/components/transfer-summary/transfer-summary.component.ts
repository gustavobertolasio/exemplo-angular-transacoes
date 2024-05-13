import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { TransferStoreService } from '../../store/transfer-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transfer-summary',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './transfer-summary.component.html',
  styleUrl: './transfer-summary.component.scss',
})
export class TransferSummaryComponent {
  constructor(protected transferStore: TransferStoreService) {}
}

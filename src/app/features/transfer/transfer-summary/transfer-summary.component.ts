import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-transfer-summary',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './transfer-summary.component.html',
  styleUrl: './transfer-summary.component.scss',
})
export class TransferSummaryComponent {}

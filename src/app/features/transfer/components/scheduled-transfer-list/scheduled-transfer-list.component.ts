import { Component, Input } from '@angular/core';
import { Operation } from '../../models/operation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scheduled-transfer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scheduled-transfer-list.component.html',
  styleUrl: './scheduled-transfer-list.component.scss'
})
export class ScheduledTransferListComponent {
  @Input() operations: Operation[] = [];
}

import { ScheduledTransferListComponent } from './../../components/scheduled-transfer-list/scheduled-transfer-list.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { Operation } from '../../models/operation';
import { OperationApiService } from './../../services/operation-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled-transfer',
  standalone: true,
  imports: [ScheduledTransferListComponent, CommonModule, SharedModule],
  providers: [OperationApiService],
  templateUrl: './scheduled-transfer.component.html',
  styleUrl: './scheduled-transfer.component.scss',
})
export class ScheduledTransferComponent implements OnInit {
  constructor(private operationApi: OperationApiService) {}

  operations: Operation[] = [];

  ngOnInit(): void {
    this.operationApi
      .getScheduledOperations()
      .subscribe((data) => (this.operations = data));
  }
}

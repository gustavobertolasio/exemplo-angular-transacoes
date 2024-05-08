import { Routes } from '@angular/router';
import { TransferComponent } from './features/transfer/transfer.component';
import { ScheduledTransferComponent } from './features/scheduled-transfer/scheduled-transfer.component';

export const routes: Routes = [
  { path: 'transferir', component: TransferComponent },
  { path: 'transferencias-agendadas', component: ScheduledTransferComponent },
];

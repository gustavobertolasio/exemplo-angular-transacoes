import { Routes } from '@angular/router';
import { TransferComponent } from './features/transfer/transfer.component';
import { ScheduledTransferComponent } from './features/scheduled-transfer/scheduled-transfer.component';
import { TransferDataComponent } from './features/transfer/transfer-data/transfer-data.component';
import { AmountDataComponent } from './features/transfer/amount-data/amount-data.component';
import { TransferSummaryComponent } from './features/transfer/transfer-summary/transfer-summary.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/transferir',
    pathMatch: 'full',
  },
  {
    path: 'transferir',
    component: TransferComponent,
    children: [
      {
        path: '',

        component: TransferDataComponent,
      },
      {
        path: 'quantia',
        component: AmountDataComponent,
      },
      {
        path: 'resumo',
        component: TransferSummaryComponent,
      },
    ],
  },
  {
    path: 'transferencias-agendadas',
    component: ScheduledTransferComponent,
    loadChildren: () =>
      import('./features/scheduled-transfer/scheduled-transfer.module').then(
        (m) => m.ScheduledTransferModule
      ),
  },
];

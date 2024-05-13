import { Routes } from '@angular/router';
import { TransferComponent } from './features/transfer/pages/transfer-page/transfer.component';
import { TransferDataComponent } from './features/transfer/components/transfer-data/transfer-data.component';
import { AmountDataComponent } from './features/transfer/components/amount-data/amount-data.component';
import { TransferSummaryComponent } from './features/transfer/components/transfer-summary/transfer-summary.component';
import { ScheduledTransferComponent } from './features/transfer/pages/scheduled-transfer-page/scheduled-transfer.component';

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
  },
];

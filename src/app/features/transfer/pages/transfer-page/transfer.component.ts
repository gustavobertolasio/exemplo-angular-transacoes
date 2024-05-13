import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Router, RouterOutlet } from '@angular/router';
import { TransferStoreService } from '../../store/transfer-store.service';
import { OperationApiService } from '../../services/operation-api.service';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterOutlet],
  providers: [OperationApiService],

  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss',
})
export class TransferComponent {
  constructor(
    public router: Router,
    private transferStore: TransferStoreService,
    private operationApi: OperationApiService
  ) {
    this.transferStore.state$.subscribe(
      (store) => (this.nextStepEnabled = store.nextStepEnabled)
    );
  }

  step: number = 0;
  stepName: string = 'Dados de conta';
  nextStepEnabled = false;

  nextStep = (): void => {
    if (this.nextStepEnabled) {
      const actualStep = this.steps[this.step];

      this.router.navigateByUrl(actualStep.url, {
        skipLocationChange: true,
      });

      this.stepName = actualStep.stepTitle;
      this.step++;
      this.transferStore.setState({
        ...this.transferStore.state,
        nextStepEnabled: this.step === this.steps.length - 1 ? true : false,
      });
    }
  };

  transfer = (): void => {
    this.operationApi
      .transferAmount(this.transferStore.state)
      .subscribe((tax) => alert('Transferência feita com sucesso'));
  };

  steps = [
    {
      url: 'transferir/quantia',
      buttonText: 'Próximo',
      stepTitle: 'Valores',
      onClick: this.nextStep,
    },
    {
      url: 'transferir/resumo',
      buttonText: 'Próximo',
      stepTitle: 'Resumo da operação',
      onClick: this.nextStep,
    },
    {
      url: 'transferir/resumo',
      buttonText: 'Concluir',
      stepTitle: '',
      onClick: this.transfer,
    },
  ];
}

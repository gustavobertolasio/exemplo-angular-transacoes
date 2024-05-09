import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterOutlet],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss',
})
export class TransferComponent {
  constructor(private router: Router) {}
  step: number = 0;
  urls = ['transferir/quantia', 'transferir/resumo'];

  nextStep = (): void => {
    this.router.navigateByUrl(this.urls[this.step], {
      skipLocationChange: true,
    });

    this.step++;
  };
}

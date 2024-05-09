import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-amount-data',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './amount-data.component.html',
  styleUrl: './amount-data.component.scss',
})
export class AmountDataComponent {}

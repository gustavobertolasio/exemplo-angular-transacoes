import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { IconConfigurationService } from '../../../core/services/icon-configuration.service';

@Component({
  selector: 'app-transfer-data',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './transfer-data.component.html',
  styleUrl: './transfer-data.component.scss'
})
export class TransferDataComponent {
  constructor(public iconService: IconConfigurationService) {}

}

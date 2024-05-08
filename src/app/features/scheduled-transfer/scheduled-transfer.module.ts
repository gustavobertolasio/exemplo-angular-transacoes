import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduledTransferComponent } from './scheduled-transfer.component';



@NgModule({
  declarations: [ScheduledTransferComponent],
  imports: [
    CommonModule
  ],
  exports: [ScheduledTransferComponent]
})
export class ScheduledTransferModule { }

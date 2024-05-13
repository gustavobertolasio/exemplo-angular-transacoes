import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonModule } from './button/button.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, ButtonModule, HttpClientModule],
  declarations: [],
  exports: [ButtonComponent],
})
export class SharedModule {}

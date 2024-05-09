import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [CommonModule, ButtonModule, InputModule],
  declarations: [],
  exports: [ButtonComponent, InputComponent],
})
export class SharedModule {}

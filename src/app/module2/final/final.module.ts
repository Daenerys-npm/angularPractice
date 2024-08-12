import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalRoutingModule } from './final-routing.module';

console.warn('Final module works');

@NgModule({
  declarations: [],
  imports: [CommonModule, FinalRoutingModule],
})
export class FinalModule {}

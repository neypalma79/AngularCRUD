import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PrimengModule, FormsModule],
  exports: [],
  declarations: [DashboardComponent],
})
export class GeneralModule {}

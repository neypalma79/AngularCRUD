import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [CommonModule, InputTextModule, ButtonModule],
  exports: [InputTextModule, ButtonModule, TableModule],
})
export class PrimengModule {}

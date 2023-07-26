import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { RouterModule } from '@angular/router';
import { ProductNewComponent } from './product-new/product-new.component';

@NgModule({
  imports: [CommonModule, PrimengModule, FormsModule, RouterModule],
  exports: [],
  declarations: [DashboardComponent, MenuComponent, ProductTableComponent, ProductNewComponent],
})
export class GeneralModule {}

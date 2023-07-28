import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authorization/login/login.component';
import { DashboardComponent } from './modules/general/dashboard/dashboard.component';
import { ProductTableComponent } from './modules/general/product-table/product-table.component';
import { ProductNewComponent } from './modules/general/product-new/product-new.component';
import { ProductDeleteComponent } from './modules/general/product-delete/product-delete.component';
import { ProductUpdateComponent } from './modules/general/product-update/product-update.component';
import { canActivateParent } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [canActivateParent],
    children: [
      { path: 'list', component: ProductTableComponent },
      { path: 'new', component: ProductNewComponent },
      { path: 'update', component: ProductUpdateComponent },
      { path: 'delete', component: ProductDeleteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

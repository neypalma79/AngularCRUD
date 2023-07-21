import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrimengModule } from 'src/app/primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, PrimengModule, FormsModule],
})
export class AuthorizationModule {}

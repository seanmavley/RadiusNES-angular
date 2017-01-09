import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from '../services/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [AdminComponent, LoginComponent, DashboardComponent],
  providers: [AuthGuard]
})
export class AdminModule { }

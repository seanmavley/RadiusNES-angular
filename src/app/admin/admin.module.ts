import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../services/auth.guard';
import { UsersService } from '../services/users.service';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ProfileComponent } from './management/profile/profile.component';
import { UserComponent } from './management/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    ManagementComponent,
    ProfileComponent,
    UserComponent
  ],
  providers: [AuthGuard, UsersService]
})
export class AdminModule { }

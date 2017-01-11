import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../services/auth.guard';
import { UsersService } from '../services/users.service';
import { HelperService } from '../services/helpers.service';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ProfileComponent } from './management/profile/profile.component';
import { UserDash, UserList, UserComponent, UserCreate, UserDetail, UserEdit } from './management/user/user.component';

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
    // Users Declarations
    UserDash, UserComponent, UserList, UserCreate, UserDetail, UserEdit,
  ],
  providers: [AuthGuard, UsersService, HelperService]
})
export class AdminModule { }

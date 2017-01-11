import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { AuthGuard } from '../services/auth.guard';

// Admin and Dashboard
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Management Related routes
import { ManagementComponent } from './management/management.component';
import { ProfileComponent } from './management/profile/profile.component';
import { UserDash } from './management/user/user.component';

// User Add Edit 
import { UserList, UserComponent, UserCreate, UserDetail, UserEdit } from './management/user/user.component';

const routes: Routes = [
  // Admin page will be LOGGED IN state of the Administrator. If not authenticated
  // Will redirect to Admin/Login URL for authentication
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
    // /admin
    children: [
          { path: '', component: DashboardComponent },
          { path: 'management', component: ManagementComponent,
          // /admin/management
          children: [
            // /admin/management/user
            { path: 'users', component: UserDash, 
            children: [
              // /admin/management/user/*
              { path: '', component: UserComponent },
              { path: 'list', component: UserList },
              { path: 'create', component: UserCreate },
              { path: 'edit', component: UserEdit },
              { path: 'detail', component: UserDetail }
            ]},
            { path: 'profile', component: ProfileComponent },
          ]}
        ]
     },

  { path: 'admin/login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthenticationService]
})
export class AdminRoutingModule { }

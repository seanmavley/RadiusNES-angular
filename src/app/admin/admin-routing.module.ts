import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // Admin page will be LOGGED IN state of the Administrator. If not authenticated
  // Will redirect to Admin/Login URL for authentication
  // The Admin page will be AuthGuarded eventually
  { path: 'admin', component: AdminComponent },

  // This login Page will be separate from the Hotspotlogin page for public users 
  // to authenticate in order to use Network.
  { path: 'admin/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }

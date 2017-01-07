import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotspotloginComponent } from './hotspotlogin/hotspotlogin.component';

const routes: Routes = [
  { path: 'hotspotlogin', component: HotspotloginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RadiusRoutingModule { }

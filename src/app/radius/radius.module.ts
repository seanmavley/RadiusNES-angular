import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadiusRoutingModule } from './radius-routing.module';
import { HotspotloginComponent } from './hotspotlogin/hotspotlogin.component';

@NgModule({
  imports: [
    CommonModule,
    RadiusRoutingModule
  ],
  declarations: [HotspotloginComponent]
})
export class RadiusModule { }

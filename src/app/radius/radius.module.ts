import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadiusRoutingModule } from './radius-routing.module';
import { HotspotloginComponent } from './hotspotlogin/hotspotlogin.component';


@NgModule({
  imports: [
    CommonModule,
    RadiusRoutingModule,
    FormsModule
  ],
  declarations: [HotspotloginComponent],
  providers: []
})
export class RadiusModule { }

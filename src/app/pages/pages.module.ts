import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PagesRouting } from './pages-module.routing';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRouting
  ],
  declarations: [HomeComponent, NotfoundComponent]
})
export class PagesModule { }

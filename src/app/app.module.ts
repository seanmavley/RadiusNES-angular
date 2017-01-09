import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Own Modules 
import { AdminModule } from './admin/admin.module';
import { RadiusModule } from './radius/radius.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

// A passthrough routing placeholder.
// We need this in order to render our primary 
// <router-outlet></router-outlet>
// TODO: Eventually move the bootstrap component 
// to a Pages pages.component
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    RadiusModule,
    PagesModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

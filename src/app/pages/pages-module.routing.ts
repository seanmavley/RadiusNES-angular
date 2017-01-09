import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

export const PagesRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
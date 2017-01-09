import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './pages/home/home.component';
// import { NotfoundComponent } from './pages/notfound/notfound.component';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: '**', component: NotfoundComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
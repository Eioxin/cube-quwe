import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.page';
import { LandingComponent } from './pages/landing/landing.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'landing', pathMatch: 'full', component: LandingComponent },
];

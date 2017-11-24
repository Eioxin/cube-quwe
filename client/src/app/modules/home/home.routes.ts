import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent }
];

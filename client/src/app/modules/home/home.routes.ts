import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.page';
import { CreateComponent } from './pages/create/create.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'create', pathMatch: 'full', component: CreateComponent },
];

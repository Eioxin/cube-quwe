import { Routes } from '@angular/router';
import { QueueComponent } from './pages/queue/queue.page';

export const routes: Routes = [
  { path: 'queue', pathMatch: 'full', component: QueueComponent }
];

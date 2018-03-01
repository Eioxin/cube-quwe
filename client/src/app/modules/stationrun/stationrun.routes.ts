import { Routes } from '@angular/router';
import { QueueComponent } from './pages/queue/queue.page';
import { PlayerViewComponent } from './pages/playerview/playerview.page';
import { CreatorViewComponent } from './pages/creatorview/creatorview.page';

export const routes: Routes = [
  { path: ':id/queue', pathMatch: 'full', component: QueueComponent },
  { path: ':id/playerview', pathMatch: 'full', component: PlayerViewComponent },
  { path: ':id/creatorview', pathMatch: 'full', component: CreatorViewComponent }
];

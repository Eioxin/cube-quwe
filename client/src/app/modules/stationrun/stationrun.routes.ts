import { Routes } from '@angular/router';
import { QueueComponent } from './pages/queue/queue.page';
import { PlayerViewComponent } from './pages/playerview/playerview.page';
import { CreatorViewComponent } from './pages/creatorview/creatorview.page';

export const routes: Routes = [
  { path: 'queue', pathMatch: 'full', component: QueueComponent },
  { path: 'playerview', pathMatch: 'full', component: PlayerViewComponent },
  { path: 'creatorview', pathMatch: 'full', component: CreatorViewComponent }
];

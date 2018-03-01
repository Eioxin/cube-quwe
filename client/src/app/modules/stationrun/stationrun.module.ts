import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QueueComponent } from './pages/queue/queue.page';
import { PlayerViewComponent } from './pages/playerview/playerview.page';
import { CreatorViewComponent } from './pages/creatorview/creatorview.page';
import { routes } from './stationrun.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    QueueComponent,
    PlayerViewComponent,
    CreatorViewComponent
  ]
})
export class StationrunModule { }

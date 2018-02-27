import { Component } from '@angular/core';
import { StationRunService } from '../../../../shared/services/stationruns.service';
import { User } from '../../../../shared/models/user';
import { isEmpty } from 'rxjs/operators/isEmpty';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.css']
})
export class QueueComponent {
  code: string;
  userlist: User[] = [];

  constructor() {}

  // create() {
  //   this._stationRunService.createStationRun().subscribe(result => {
  //     this.userlist.forEach(station => {
  //       this._stationRunService.createStation(result.id, station.name, station.description).subscribe();
  //     });
  //   });
  // }

  login() {
    // TODO login from service
  }
}

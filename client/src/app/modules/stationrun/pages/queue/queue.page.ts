import { Component } from '@angular/core';
import { StationRunService } from '../../../../shared/services/stationruns.service';
import { User } from '../../../../shared/models/user';
import { isEmpty } from 'rxjs/operators/isEmpty';
import { Route, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.css']
})
export class QueueComponent {
  code: string;
  name: string;
  userlist: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private database: AngularFireDatabase
  ) {
    this.route.params
      .pipe(
        map(params => params.id),
        switchMap(id =>
          this.database.object<any>(`stationruns/${id}`).valueChanges()
        )
      )
      .subscribe(run => {
        this.name = run.name;
        this.code = run.id;
      });
  }

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

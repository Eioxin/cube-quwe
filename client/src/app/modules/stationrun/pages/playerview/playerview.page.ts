import { Component } from '@angular/core';
import { StationRunService } from '../../../../shared/services/stationruns.service';
import { User } from '../../../../shared/models/user';
import { isEmpty } from 'rxjs/operators/isEmpty';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-playerview',
  templateUrl: './playerview.page.html',
  styleUrls: ['./playerview.page.css']
})
export class PlayerViewComponent {
  code: string;
  name = '';
  stations = [];
  started = false;

  userlist: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private database: AngularFireDatabase
  ) {
    this.route.params.pipe(map(params => params.id)).subscribe(id => {
      this.database
        .object<any>(`players/${id}`)
        .valueChanges()
        .pipe(
          switchMap(player =>
            this.database
              .object<any>(`stationruns/${player.runId}`)
              .valueChanges()
          )
        )
        .subscribe(stationRun => {
          this.name = stationRun.name;
        });
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

import { Component } from '@angular/core';
import { StationRunService } from '../../../../shared/services/stationruns.service';
import { User } from '../../../../shared/models/user';
import { isEmpty } from 'rxjs/operators/isEmpty';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-playerview',
  templateUrl: './playerview.page.html',
  styleUrls: ['./playerview.page.css']
})
export class PlayerViewComponent {
  id: string;
  name = '';
  stations = [];
  started$: Observable<boolean>;

  userlist: User[] = [];

  player$: Observable<any>;

  inStation = false;

  constructor(
    private route: ActivatedRoute,
    private database: AngularFireDatabase
  ) {
    this.player$ = this.route.params.pipe(
      map(params => params.id),
      tap(id => (this.id = id)),
      switchMap(id => this.database.object<any>(`players/${id}`).valueChanges())
    );

    this.started$ = this.route.params.pipe(
      map(params => params.id),
      switchMap(id =>
        this.database.object<any>(`players/${id}`).valueChanges()
      ),
      map(player => player.runId),
      switchMap(runId =>
        this.database.object<any>(`stationruns/${runId}/started`).valueChanges()
      ),
      tap(test => console.log(test))
    );

    this.route.params.pipe(map(params => params.id)).subscribe(id => {
      this.database
        .object<any>(`players/${id}`)
        .valueChanges()
        .pipe(
          take(1),
          switchMap(player =>
            this.database
              .object<any>(`stationruns/${player.runId}`)
              .valueChanges()
              .pipe(take(1))
          )
        )
        .subscribe(stationRun => {
          this.name = stationRun.name;

          const stationIds = Object.keys(stationRun.stations || {});
          const stations = [];

          stationIds.forEach(stationId => {
            this.database
              .object<any>(`stations/${stationId}`)
              .valueChanges()
              .pipe(take(1))
              .subscribe(station => {
                this.stations.push(station);
              });

            this.database
              .object(`players/${id}/stations/${stationId}`)
              .set({ status: 'notstarted' });
          });
        });
    });
  }

  startStation(stationId: string) {
    if (!this.inStation) {
      this.database
        .object(`players/${this.id}/stations/${stationId}/status`)
        .set('started');

      this.inStation = true;
    }
      
  }

  stopStation(stationId: string) {
    if (this.inStation) {
      this.database
        .object(`players/${this.id}/stations/${stationId}/status`)
        .set('done');

      this.inStation = false;
    }
    
  }
}

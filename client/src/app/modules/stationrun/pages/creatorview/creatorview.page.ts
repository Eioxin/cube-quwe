import { Component } from '@angular/core';
import { StationRunService } from '../../../../shared/services/stationruns.service';
import { User } from '../../../../shared/models/user';
import { isEmpty } from 'rxjs/operators/isEmpty';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-creatorview',
  templateUrl: './creatorview.page.html',
  styleUrls: ['./creatorview.page.css']
})
export class CreatorViewComponent {
  code: string;
  userlist: User[] = [];
  players = [];
  name = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private database: AngularFireDatabase
  ) {
    this.route.params.pipe(map(params => params.id)).subscribe(id => {
      this.database
        .object<any>(`stationruns/${id}`)
        .valueChanges()
        .subscribe(run => {
          const players = run.players || {};
          this.players = Object.keys(players);
          this.name = run.name;
          this.code = run.id;
        });
    });
  }
}

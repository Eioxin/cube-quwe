import { Component } from '@angular/core';
import { StationRunService } from '../../../../shared/services/stationruns.service';
import { Station } from '../../../../shared/models/station';
import { isEmpty } from 'rxjs/operators/isEmpty';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.css']
})
export class CreateComponent {

  code: string;
  password: string;
  stationlist: Station[] = [];

  constructor(private _stationRunService: StationRunService) { }

  create() {
    this._stationRunService.createStationRun().subscribe(result => {
      this.stationlist.forEach(station => {
        this._stationRunService.createStation(result.id, station.name, station.description).subscribe();
      });
    });
  }

  add() {
    const newStation = new Station();
    newStation.name = 'Neue Station';
    this.stationlist.push(newStation);
  }

  up(item: Station) {
    const index = this.stationlist.indexOf(item);

    if (index === 0) {
      return;
    }

    this.stationlist.splice(index, 1);
    this.stationlist.splice(index - 1, 0, item);
  }

  down(item: Station) {
    const index = this.stationlist.indexOf(item);

    if (index === this.stationlist.length - 1) {
      return;
    }

    this.stationlist.splice(index, 1);
    this.stationlist.splice(index + 1, 0, item);
  }

  remove(item: Station) {
    this.stationlist.splice(this.stationlist.indexOf(item), 1);
  }
}

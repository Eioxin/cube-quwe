import { Component } from '@angular/core';
import { StationRunService } from '../../../../shared/services/stationruns.service';
import { Station } from '../../../../shared/models/station';
import { isEmpty } from 'rxjs/operators/isEmpty';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.css']
})
export class LandingComponent {

  code: string;
  password: string;
  stationlist: Station[] = [
    {id: 1, name: 'neuer Stationslauf-Name', description: 'hier beschreiben'}
  ];

  constructor(private _stationRunService: StationRunService) { }

  create() {
    this._stationRunService.createStationRun().subscribe(result => {
      console.log(result);
    });
  }

  up() {}
    var newid :number = 1;
    let stationlist :Station[] = this.stationlist;
    if (stationlist.length !== 0) {
      newid = newid + stationlist[stationlist.length-1].id;
    }

    let toAddArray :Station = {id: newid, name: 'neuer Stationslauf-Name', description: 'hier beschreiben'};
    stationlist.push(toAddArray);
  }

  remove(id :number){
    let stationlist :Station[] = this.stationlist;

    stationlist.forEach((element, index) => {
      console.log(element.id)
      if (element.id === id){
        stationlist.splice(index, 1);
      }
    });

  }
}

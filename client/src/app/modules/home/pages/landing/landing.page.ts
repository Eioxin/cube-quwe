import { Component } from '@angular/core';
import { StationRunService } from '../../../../shared/services/stationruns.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.css']
})
export class LandingComponent {

  code: string;
  password: string;
  testArray: any[] = [
    {name: 'second', description: 'aaa'},
    {name: 'first', description: 'aaa'},
    {name: 'third', description: 'aaa'}
  ];

  constructor(private _stationRunService: StationRunService) { }

  create() {
    this._stationRunService.createStationRun().subscribe(result => {
      console.log(result);
    });
  }

  up() {}

  down() {}

  add() {}

  remove() {}
}

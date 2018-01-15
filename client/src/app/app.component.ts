import { Component } from '@angular/core';
import { StationRunService } from './shared/services/stationruns.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _apiService: StationRunService) {
    this._apiService.createStationRun().subscribe(result => console.log(result));
  }
}

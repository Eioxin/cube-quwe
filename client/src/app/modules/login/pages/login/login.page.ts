import { Component } from '@angular/core';
import { StationRunService } from '../../../../shared/services/stationruns.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginComponent {
  code: string;
  password: string;

  constructor(private stationRuns: StationRunService, private router: Router) {}

  join() {
    this.stationRuns.joinStationRun(this.code).subscribe(result => {
      this.router.navigate([`${result.id}/playerview`]);
    });
  }
}

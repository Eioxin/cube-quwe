import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { StationRunService } from './shared/services/stationruns.service';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';
import { StationrunModule } from './modules/stationrun/stationrun.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpModule,
    RouterModule.forRoot([]),
    HomeModule,
    LoginModule,
    StationrunModule
  ],
  providers: [StationRunService],
  bootstrap: [AppComponent]
})
export class AppModule {}

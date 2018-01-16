import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StationRunService } from './shared/services/stationruns.service';
import { HomeModule } from './modules/home/home.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginModule } from './modules/login/login.module';
import { CreatorModule } from './modules/creator/creator.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([]),
    HomeModule,
    LoginModule,
    CreatorModule
  ],
  providers: [StationRunService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiService } from './shared/services/api.service';
import { HomeModule } from './modules/home/home.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginModule } from './modules/login/login.module';
import { AccountsService } from './shared/services/accounts.service';

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
    LoginModule
  ],
  providers: [ApiService, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

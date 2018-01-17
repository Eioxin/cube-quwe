import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.page';
import { LandingComponent } from './pages/landing/landing.page';
import { routes } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    LandingComponent
  ]
})
export class HomeModule { }

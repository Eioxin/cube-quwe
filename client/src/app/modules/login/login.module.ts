import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.page';
import { RegisterComponent } from './pages/register/register.page';
import { routes } from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class LoginModule { }

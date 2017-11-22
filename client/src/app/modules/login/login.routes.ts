import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.page';
import { RegisterComponent } from './pages/register/register.page';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

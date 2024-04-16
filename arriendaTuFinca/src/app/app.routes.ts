import { Routes } from '@angular/router';
import { LoginComponent } from './templates/login/login.component'; 
import { NewPropertyComponent } from './templates/new-property/new-property.component';
import { SignUpComponent } from './templates/sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    {path: 'newProperty', component: NewPropertyComponent},
    {path: 'sign-up', component: SignUpComponent},
];

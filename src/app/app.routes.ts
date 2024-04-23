import { Routes } from '@angular/router';
import { LoginComponent } from './templates/login/login.component'; 
import { NewPropertyComponent } from './templates/new-property/new-property.component';
import { SignUpComponent } from './templates/sign-up/sign-up.component';
import { AccountActivationComponent } from './templates/account-activation/account-activation.component';
import { EditPropertyComponent } from './templates/edit-property/edit-property.component';
import { PropertyDetailsComponent } from './templates/property-details/property-details.component';
import { PropertiesComponent } from './templates/properties/properties.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    {path: 'newProperty', component: NewPropertyComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'activation', component: AccountActivationComponent},
    {path: 'properties', component: PropertiesComponent},
    {path: 'edit-property', component: EditPropertyComponent},
    {path: 'property-details', component: PropertyDetailsComponent},
    {path: 'edit-property', component: EditPropertyComponent},

];

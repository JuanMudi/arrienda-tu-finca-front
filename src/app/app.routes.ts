import { Routes } from '@angular/router';
import { LoginComponent } from './templates/login/login.component'; 
import { NewPropertyComponent } from './templates/new-property/new-property.component';
import { SignUpComponent } from './templates/sign-up/sign-up.component';
import { AccountActivationComponent } from './templates/account-activation/account-activation.component';
import { EditPropertyComponent } from './templates/edit-property/edit-property.component';
import { PropertyDetailsComponent } from './templates/property-details/property-details.component';
import { PropertiesComponent } from './templates/properties/properties.component';
import { AuthGuard } from './services/auth-guard.service';
import { PropertyFinderComponent } from './templates/property-finder/property-finder.component';
import { RequestRentalComponent } from './templates/request-rental/request-rental.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    {path: 'newProperty', component: NewPropertyComponent, canActivate: [AuthGuard]},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'activation', component: AccountActivationComponent},
    {path: 'properties', component: PropertiesComponent, canActivate: [AuthGuard]},
    {path: 'edit-property', component: EditPropertyComponent, canActivate: [AuthGuard]},
    {path: 'property-details', component: PropertyDetailsComponent, canActivate: [AuthGuard]},
    {path: 'property-finder', component: PropertyFinderComponent, canActivate: [AuthGuard]},
    {path: 'rental-request', component: RequestRentalComponent, canActivate: [AuthGuard]}

];

import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { IconsComponent } from 'src/app/pages/icons/icons.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'icons',          component: IconsComponent },
    //{ path: 'register',       component: RegisterComponent }
];

import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { DetallesComponent } from 'src/app/pages/detalles/detalles.component';
import { PacientesComponent } from 'src/app/pages/pacientes/pacientes.component';
import { CitasComponent } from 'src/app/pages/citas/citas.component';
import { ReportesComponent } from 'src/app/reportes/reportes.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    //{ path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'detalles',       component: DetallesComponent },
    { path: 'pacientes',       component: PacientesComponent },
    { path: 'citas',       component: CitasComponent },
    { path: 'reportes',       component: ReportesComponent }
];

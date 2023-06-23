import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/maps', title: 'Perfil de pacientes',  icon:'ni-key-25 text-info', class: ''},
    { path: '/pacientes', title: 'Gestión de pacientes',  icon:'fa fa-user text-info', class: ''},
    { path: '/citas', title: 'Agendamiento de citas',  icon:'ni ni-bullet-list-67 text-info', class: ''},
    { path: '/reportes', title: 'Reporte por fechas',  icon:'fa fa-bar-chart text-info', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  nombre:any;
  constructor(private router: Router, private servicio: AccesoService) { }

  ngOnInit() {
    this.nombre=localStorage.getItem('nombre')
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   if(localStorage.getItem('id')=='0' || localStorage.getItem('id')=='' || localStorage.getItem('id')==null){
    Swal.fire('Iniciar sesion','','warning')
    this.router.navigateByUrl("login")
  }
  }

  set(){
    this.servicio.pacienteId='0'
  }
}

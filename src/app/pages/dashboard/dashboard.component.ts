import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Router } from '@angular/router';
import { AccesoService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  turnos:any;
  empleados:any;
  id_empleado:any='0';
  dropdown:any='Odontólogo';
  fecha:any='';
  cedula:any='';
  cedula1:any='';
  cedula2:any='';
  cedula3:any='';
  cedula4:any='';
  cedula5:any='';
  cedula6:any='';
  cedula7:any='';
  cedula8:any='';
  cedula9:any='';
  cedula10:any='';
  nombre:any='';
  nombre1:any='';
  nombre2:any='';
  nombre3:any='';
  nombre4:any='';
  nombre5:any='';
  nombre6:any='';
  nombre7:any='';
  nombre8:any='';
  nombre9:any='';
  nombre10:any='';
  apellido:any='';
  apellido1:any='';
  apellido2:any='';
  apellido3:any='';
  apellido4:any='';
  apellido5:any='';
  apellido6:any='';
  apellido7:any='';
  apellido8:any='';
  apellido9:any='';
  apellido10:any='';
  estado:any='';
  estado1:any='';
  estado2:any='';
  estado3:any='';
  estado4:any='';
  estado5:any='';
  estado6:any='';
  estado7:any='';
  estado8:any='';
  estado9:any='';
  estado10:any='';
  hora:any='';
  hora1:any='8:00-8:45';
  hora2:any='9:00-9:45';
  hora3:any='10:00-10:45';
  hora4:any='11:00-11:45';
  hora5:any='12:00-12:45';
  hora6:any='14:00-14:45';
  hora7:any='15:00-15:45';
  hora8:any='16:00-16:45';
  hora9:any='17:00-17:45';
  hora10:any='18:00-18:45';
  id_paciente:any='';
  id_paciente1:any='';
  id_paciente2:any='';
  id_paciente3:any='';
  id_paciente4:any='';
  id_paciente5:any='';
  id_paciente6:any='';
  id_paciente7:any='';
  id_paciente8:any='';
  id_paciente9:any='';
  id_paciente10:any='';
  numero:any='';
  bandera:any;
  diente:any=1
  tip:any='Sano';

  constructor(private servicio: AccesoService,
    private router: Router) { }

  ngOnInit() {


    this.id_empleado=localStorage.getItem('id')
    this.fechajs();
    this.consultarTurnos1();

    if(localStorage.getItem('id')=='0' || localStorage.getItem('id')=='' || localStorage.getItem('id')==null){
      Swal.fire('Iniciar sesion','','warning')
      this.router.navigateByUrl("login")
    }
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});

  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  fechajs(){
    let dia;
    let mes;
    const currentDate = new Date();

    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth()+1; // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();
    if(currentDayOfMonth<=9){
      dia='0'+currentDayOfMonth
    }else{
      dia=currentDayOfMonth
    }
    if(currentMonth<=9){
      mes='0'+currentMonth
    }else{
      mes=currentMonth
    }

    this.fecha = currentYear + "-" + mes + "-" + dia;
    console.log(this.fecha)
  }

  consultarTurnos1(){
    if(this.id_empleado=='0'){
      Swal.fire('Seleccione un doctor','','warning')
    }else if(this.fecha==''){
      Swal.fire('Seleccione una fecha','','warning')
    }else{
      let body={
        'accion': 'consultar_turnos_secretaria',
        'id_empleado': this.id_empleado,
        'fecha': this.fecha,
        'numero': '1'
      }
      return new Promise(resolve=>{
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado){
            let turno=res.datos;
            this.nombre1=turno[0].p_nombre;
            this.apellido1=turno[0].p_apellido;
            this.cedula1=turno[0].cedula;
            this.estado1=turno[0].estado;
            this.id_paciente1=turno[0].id_paciente;
            this.consultarTurnos2();
          }else{
            this.nombre1='Disponible'
            this.apellido1='Disponible'
            this.cedula1='Disponible'
            this.estado1='Disponible'
            this.consultarTurnos2();
          }
        });
      });
    }
  }

  consultarTurnos2(){
    if(this.id_empleado=='0'){
      Swal.fire('Seleccione un doctor','','warning')
    }else if(this.fecha==''){
      Swal.fire('Seleccione una fecha','','warning')
    }
    let body={
      'accion': 'consultar_turnos_secretaria',
      'id_empleado': this.id_empleado,
      'fecha': this.fecha,
      'numero': '2'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let turno=res.datos;
          this.nombre2=turno[0].p_nombre;
          this.apellido2=turno[0].p_apellido;
          this.cedula2=turno[0].cedula;
          this.estado2=turno[0].estado;
          this.id_paciente2=turno[0].id_paciente;
          this.consultarTurnos3();
        }else{
          this.nombre2='Disponible'
          this.apellido2='Disponible'
          this.cedula2='Disponible'
          this.estado2='Disponible'
          this.consultarTurnos3();
        }
      });
    });
  }

  consultarTurnos3(){
    if(this.id_empleado=='0'){
      Swal.fire('Seleccione un doctor','','warning')
    }else if(this.fecha==''){
      Swal.fire('Seleccione una fecha','','warning')
    }
    let body={
      'accion': 'consultar_turnos_secretaria',
      'id_empleado': this.id_empleado,
      'fecha': this.fecha,
      'numero': '3'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let turno=res.datos;
          this.nombre3=turno[0].p_nombre;
          this.apellido3=turno[0].p_apellido;
          this.cedula3=turno[0].cedula;
          this.estado3=turno[0].estado;
          this.id_paciente3=turno[0].id_paciente;
          this.consultarTurnos4();
        }else{
          this.nombre3='Disponible'
          this.apellido3='Disponible'
          this.cedula3='Disponible'
          this.estado3='Disponible'
          this.consultarTurnos4();
        }
      });
    });
  }

  consultarTurnos4(){
    if(this.id_empleado=='0'){
      Swal.fire('Seleccione un doctor','','warning')
    }else if(this.fecha==''){
      Swal.fire('Seleccione una fecha','','warning')
    }
    let body={
      'accion': 'consultar_turnos_secretaria',
      'id_empleado': this.id_empleado,
      'fecha': this.fecha,
      'numero': '4'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let turno=res.datos;
          this.nombre4=turno[0].p_nombre;
          this.apellido4=turno[0].p_apellido;
          this.cedula4=turno[0].cedula;
          this.estado4=turno[0].estado;
          this.id_paciente4=turno[0].id_paciente;
          this.consultarTurnos5();
        }else{
          this.nombre4='Disponible'
          this.apellido4='Disponible'
          this.cedula4='Disponible'
          this.estado4='Disponible'
          this.consultarTurnos5();
        }
      });
    });
  }

  consultarTurnos5(){
    if(this.id_empleado=='0'){
      Swal.fire('Seleccione un doctor','','warning')
    }else if(this.fecha==''){
      Swal.fire('Seleccione una fecha','','warning')
    }
    let body={
      'accion': 'consultar_turnos_secretaria',
      'id_empleado': this.id_empleado,
      'fecha': this.fecha,
      'numero': '5'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let turno=res.datos;
          this.nombre5=turno[0].p_nombre;
          this.apellido5=turno[0].p_apellido;
          this.cedula5=turno[0].cedula;
          this.estado5=turno[0].estado;
          this.id_paciente5=turno[0].id_paciente;
          this.consultarTurnos6();
        }else{
          this.nombre5='Disponible'
          this.apellido5='Disponible'
          this.cedula5='Disponible'
          this.estado5='Disponible'
          this.consultarTurnos6();
        }
      });
    });
  }

  consultarTurnos6(){
    if(this.id_empleado=='0'){
      Swal.fire('Seleccione un doctor','','warning')
    }else if(this.fecha==''){
      Swal.fire('Seleccione una fecha','','warning')
    }
    let body={
      'accion': 'consultar_turnos_secretaria',
      'id_empleado': this.id_empleado,
      'fecha': this.fecha,
      'numero': '6'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let turno=res.datos;
          this.nombre6=turno[0].p_nombre;
          this.apellido6=turno[0].p_apellido;
          this.cedula6=turno[0].cedula;
          this.estado6=turno[0].estado;
          this.id_paciente6=turno[0].id_paciente;
          this.consultarTurnos7();
        }else{
          this.nombre6='Disponible'
          this.apellido6='Disponible'
          this.cedula6='Disponible'
          this.estado6='Disponible'
          this.consultarTurnos7();
        }
      });
    });
  }

  consultarTurnos7(){
    if(this.id_empleado=='0'){
      Swal.fire('Seleccione un doctor','','warning')
    }else if(this.fecha==''){
      Swal.fire('Seleccione una fecha','','warning')
    }
    let body={
      'accion': 'consultar_turnos_secretaria',
      'id_empleado': this.id_empleado,
      'fecha': this.fecha,
      'numero': '7'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let turno=res.datos;
          this.nombre7=turno[0].p_nombre;
          this.apellido7=turno[0].p_apellido;
          this.cedula7=turno[0].cedula;
          this.estado7=turno[0].estado;
          this.id_paciente7=turno[0].id_paciente;
          this.consultarTurnos8();
        }else{
          this.nombre7='Disponible'
          this.apellido7='Disponible'
          this.cedula7='Disponible'
          this.estado7='Disponible'
          this.consultarTurnos8();
        }
      });
    });
  }

  consultarTurnos8(){
    if(this.id_empleado=='0'){
      Swal.fire('Seleccione un doctor','','warning')
    }else if(this.fecha==''){
      Swal.fire('Seleccione una fecha','','warning')
    }
    let body={
      'accion': 'consultar_turnos_secretaria',
      'id_empleado': this.id_empleado,
      'fecha': this.fecha,
      'numero': '8'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let turno=res.datos;
          this.nombre8=turno[0].p_nombre;
          this.apellido8=turno[0].p_apellido;
          this.cedula8=turno[0].cedula;
          this.estado8=turno[0].estado;
          this.id_paciente8=turno[0].id_paciente;
          this.consultarTurnos9();
        }else{
          this.nombre8='Disponible'
          this.apellido8='Disponible'
          this.cedula8='Disponible'
          this.estado8='Disponible'
          this.consultarTurnos9();
        }
      });
    });
  }

  consultarTurnos9(){
    if(this.id_empleado=='0'){
      Swal.fire('Seleccione un doctor','','warning')
    }else if(this.fecha==''){
      Swal.fire('Seleccione una fecha','','warning')
    }
    let body={
      'accion': 'consultar_turnos_secretaria',
      'id_empleado': this.id_empleado,
      'fecha': this.fecha,
      'numero': '9'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let turno=res.datos;
          this.nombre9=turno[0].p_nombre;
          this.apellido9=turno[0].p_apellido;
          this.cedula9=turno[0].cedula;
          this.estado9=turno[0].estado;
          this.id_paciente9=turno[0].id_paciente;
          this.consultarTurnos10();
        }else{
          this.nombre9='Disponible'
          this.apellido9='Disponible'
          this.cedula9='Disponible'
          this.estado9='Disponible'
          this.consultarTurnos10();
        }
      });
    });
  }

  consultarTurnos10(){
    if(this.id_empleado=='0'){
      Swal.fire('Seleccione un doctor','','warning')
    }else if(this.fecha==''){
      Swal.fire('Seleccione una fecha','','warning')
    }
    let body={
      'accion': 'consultar_turnos_secretaria',
      'id_empleado': this.id_empleado,
      'fecha': this.fecha,
      'numero': '10'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let turno=res.datos;
          this.nombre10=turno[0].p_nombre;
          this.apellido10=turno[0].p_apellido;
          this.cedula10=turno[0].cedula;
          this.estado10=turno[0].estado;
          this.id_paciente10=turno[0].id_paciente;
        }else{
          this.nombre10='Disponible'
          this.apellido10='Disponible'
          this.cedula10='Disponible'
          this.estado10='Disponible'
        }
      });
    });
  }

  cambiar(){
    if(this.diente>11){
      this.diente=1
      this.tip='Sano'
    }else{
      this.diente=this.diente+1
      if(this.diente==1){
        this.tip='Sano'
      }
      else if(this.diente==2){
        this.tip='Extracción indicada'
      }
      else if(this.diente==3){
        this.tip='Pérdida por caries'
      }
      else if(this.diente==4){
        this.tip='Sellante necesario'
      }
      else if(this.diente==5){
        this.tip='Sellante realizado'
      }
      else if(this.diente==6){
        this.tip='Caries'
      }
      else if(this.diente==7){
        this.tip='Obturado'
      }
      else if(this.diente==8){
        this.tip='Endodoncia'
      }
      else if(this.diente==9){
        this.tip='Pérdida'
      }
      else if(this.diente==10){
        this.tip='Protesis total'
      }
      else if(this.diente==11){
        this.tip='Protesis fija'
      }
      else if(this.diente==12){
        this.tip='Protesis removible'
      }
    }

  }

  historia1(){
    this.servicio.pacienteId=this.id_paciente1;
    this.servicio.cedulaPaciente=this.cedula1;
    this.router.navigateByUrl("maps")
  }

  historia2(){
    this.servicio.pacienteId=this.id_paciente2;
    this.servicio.cedulaPaciente=this.cedula2;
    this.router.navigateByUrl("maps")
  }

  historia3(){
    this.servicio.pacienteId=this.id_paciente3;
    this.servicio.cedulaPaciente=this.cedula3;
    this.router.navigateByUrl("maps")
  }

  historia4(){
    this.servicio.pacienteId=this.id_paciente4;
    this.servicio.cedulaPaciente=this.cedula4;
    this.router.navigateByUrl("maps")
  }

  historia5(){
    this.servicio.pacienteId=this.id_paciente5;
    this.servicio.cedulaPaciente=this.cedula5;
    this.router.navigateByUrl("maps")
  }

  historia6(){
    this.servicio.pacienteId=this.id_paciente6;
    this.servicio.cedulaPaciente=this.cedula6;
    this.router.navigateByUrl("maps")
  }

  historia7(){
    this.servicio.pacienteId=this.id_paciente7;
    this.servicio.cedulaPaciente=this.cedula7;
    this.router.navigateByUrl("maps")
  }

  historia8(){
    this.servicio.pacienteId=this.id_paciente8;
    this.servicio.cedulaPaciente=this.cedula8;
    this.router.navigateByUrl("maps")
  }

  historia9(){
    this.servicio.pacienteId=this.id_paciente9;
    this.servicio.cedulaPaciente=this.cedula9;
    this.router.navigateByUrl("maps")
  }

  historia10(){
    this.servicio.pacienteId=this.id_paciente10;
    this.servicio.cedulaPaciente=this.cedula10;
    this.router.navigateByUrl("maps")
  }
}

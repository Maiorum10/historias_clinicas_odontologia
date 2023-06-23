import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  cedula:any;
  id_paciente:any;
  nombre:any;
  apellido:any;
  s_nombre:any;
  s_apellido:any;
  celular:any;
  fecha_n:any;
  sexo:any;
  canton:any;
  provincia:any;
  ocupacion:any;
  empresa:any;
  seguro:any;
  referencia:any;
  tel_referencia:any;
  par_referencia:any;
  clave:any;
  direccion:any;
  parroquia:any;
  lug_nacimiento:any;
  est_civil:any;
  edad:any;
  id_historia:any;
  fecha:any;
  hora:any;
  doctor:any;

  constructor(private servicio: AccesoService,
    private router: Router) { }

  ngOnInit() {
    if(this.servicio.cedulaPaciente=='0'||this.servicio.cedulaPaciente==null){
      Swal.fire('Seleccione un paciente','','warning')
      this.router.navigateByUrl("dashboard")
    }else{
      this.doctor=localStorage.getItem('nombre')
      this.cedula=this.servicio.cedulaPaciente;
      this.buscador();
      this.fechajs();
    }
  }

  buscador(){
    let body={
      'accion': 'consulta_pacientes_cedula',
      'cedula': '%'+this.cedula+'%'
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let paciente=res.datos;
          console.log(paciente)
          this.nombre=paciente[0].p_nombre;
          this.apellido=paciente[0].p_apellido;
          this.id_paciente=paciente[0].id_paciente;
          this.s_nombre=paciente[0].s_nombre
          this.s_apellido=paciente[0].s_apellido
          this.celular=paciente[0].celular
          this.fecha_n=paciente[0].fecha_n
          this.sexo=paciente[0].sexo
          this.canton=paciente[0].canton
          this.provincia=paciente[0].provincia
          this.ocupacion=paciente[0].ocupacion
          this.empresa=paciente[0].empresa
          this.seguro=paciente[0].seguro
          this.referencia=paciente[0].referencia
          this.tel_referencia=paciente[0].tel_referencia
          this.par_referencia=paciente[0].par_referencia
          this.clave=paciente[0].clave
          this.direccion=paciente[0].direccion
          this.parroquia=paciente[0].parroquia
          this.lug_nacimiento=paciente[0].lug_nacimiento
          this.est_civil=paciente[0].est_civil
          this.cedula=paciente[0].cedula
          this.id_historia=paciente[0].id_historia
          this.servicio.cedulaPaciente=this.cedula
          if(this.fecha_n==''||this.fecha_n==null){
            Swal.fire('Existen campos vacios','','info')
            this.edad=''
            this.router.navigateByUrl("maps")
          }else{
            this.getEdad(this.fecha_n);
          }
        }else{
          Swal.fire('No existe esa cédula','','warning')
          this.nombre=''
          this.apellido=''
          this.id_paciente=''
          this.s_nombre=''
          this.s_apellido=''
          this.celular=''
          this.fecha_n=''
          this.sexo=''
          this.canton=''
          this.provincia=''
          this.ocupacion=''
          this.empresa=''
          this.seguro=''
          this.referencia=''
          this.tel_referencia=''
          this.par_referencia=''
          this.clave=''
          this.direccion=''
          this.parroquia=''
          this.lug_nacimiento=''
          this.est_civil=''
        }
      });
    });
  }

  getEdad(dateString) {
    let hoy = new Date()
    let fechaNacimiento = new Date(dateString)
    this.edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      this.edad--
    }
    return this.edad
  }

  fechajs(){
    let dia;
    let mes;
    let horas;
    let minutos;
    const currentDate = new Date();

    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth()+1; // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();
    horas = currentDate.getHours();
    minutos = currentDate.getMinutes();

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
    this.hora = horas + ":" + minutos
  }

  pdf(){
    document.getElementById('btn').style.display = 'none';
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 210;
      let fileHeight = 275;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 5;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('consentimiento_'+this.nombre+'_'+this.apellido+'.pdf');
      this.router.navigateByUrl("maps")
    });
  }

}

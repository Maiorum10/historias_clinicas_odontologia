import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  @ViewChild('pdf') pdfTable: ElementRef;
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
  id_historia:any;
  edad:any;
  a:any;
  m:any;
  d:any;
  detalles:any;
  fecha:any;
  historias:any;
  diagnostico_complicaciones:any
  procedimientos:any

  constructor(private servicio: AccesoService,
    private router: Router) { }

  ngOnInit() {
    if(this.servicio.cedulaPaciente=='0'||this.servicio.cedulaPaciente==null){
      Swal.fire('Seleccione un paciente','','warning')
      this.router.navigateByUrl("dashboard")
    }else{
      document.getElementById('pdf').style.display = 'none';
      this.cedula=this.servicio.cedulaPaciente;
      this.buscador();
    }
  }

  public downloadAsPDF() {
    const doc = new jsPDF();
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
  }

  pdf(){
    document.getElementById('pdf').style.display = 'block';
    let DATA: any = document.getElementById('pdf');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = canvas.width;
      let fileHeight = canvas.height;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('l', 'pt', [canvas.width, canvas.height]);
      let position = 5;
      PDF.addImage(FILEURI, 'JPEG', 5, position, fileWidth, fileHeight);
      PDF.save(this.nombre+'_'+this.apellido+'.pdf');
    });
      document.getElementById('pdf').style.display = 'none';
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
          this.servicio.cedulaPaciente=this.cedula
          this.id_historia=paciente[0].id_historia
          this.consultar_detalles();
          this.tratamientos();
          if(this.fecha_n==''||this.fecha_n==null){
            Swal.fire('Existen campos vacios','','info')
            this.edad=''
            document.getElementById('resumen').style.display = 'none';
          }else{
            this.getEdad(this.fecha_n);
            document.getElementById('resumen').style.display = 'block';
          }
        }else{
          Swal.fire('No existe esa cédula','','warning')
          document.getElementById('resumen').style.display = 'none';
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

  nuevo(){
    this.servicio.atencion='0';
    this.servicio.id_historia=this.id_historia
    this.router.navigateByUrl("icons")
  }

  consultar_detalles(){
    let body={
      'accion': 'detalle_historias',
      'historia_id_historia': this.id_historia
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.detalles=res.datos;
        }else{
          Swal.fire('No hay atenciones previas','','warning');
        }
      },(err)=>{
        Swal.fire('','Error de conexión','error');
        console.log(err)
      });
    });
  }

  previsualizar(detalle){
    this.fecha=detalle.fecha;
    this.servicio.atencion=this.fecha
    this.servicio.id_historia=this.id_historia
    this.servicio.sesion=detalle.sesion
    this.router.navigateByUrl("icons")
  }
  evolucion(detalle){
    this.diagnostico_complicaciones=detalle.diagnosticos_complicaciones
    this.procedimientos=detalle.procedimientos

  }
  tratamientos(){
    let body={
      'accion': 'tratamientos',
      'id_historia': this.id_historia
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.historias=res.datos;
          console.log(this.historias)
        }else{

        }
      },(err)=>{
        console.log(err)
      });
    });
  }

}

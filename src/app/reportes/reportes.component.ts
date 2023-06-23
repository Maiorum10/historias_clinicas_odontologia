import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';
import { calendar, reporte, jAlert, reset, limpiar } from 'src/assets/javascript/date';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  fecha:any='';
  f1:any='dd/mm/aaaa';
  f2:any='dd/mm/aaaa';
  button:any='Seleccione la primera fecha';
  tabla:any;
  constructor(private servicio: AccesoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  calendar(){
    if(this.f1=='dd/mm/aaaa' && this.f2=='dd/mm/aaaa'){
      if(this.fecha==''){
        jAlert('Seleccione una fecha')
      }else{
        this.f1=this.fecha
        this.button='Seleccione la segunda fecha'
        this.fecha=''
        reporte(this.f1)
      }
    } else if(this.f1!='dd/mm/aaaa' && this.f2=='dd/mm/aaaa'){
      if(this.fecha==''){
        jAlert('Seleccione una fecha')
      }else{
        this.f2=this.fecha
        this.button='Limpiar'
        document.getElementById('btn1').style.display = 'block';
        this.fecha=''
      }
    } else if(this.f1!='dd/mm/aaaa' && this.f2!='dd/mm/aaaa'){
      this.fecha=''
      this.button='Seleccione la primera fecha'
      this.f1='dd/mm/aaaa'
      this.f2='dd/mm/aaaa'
      document.getElementById('btn1').style.display = 'none';
      document.getElementById('btn2').style.display = 'none';
      reset()
    }
  }

  limpiar(){
    limpiar()
    this.tabla=[]
    this.fecha=''
    this.f1=''
    this.f2=''
  }

  calendario(){
    calendar()
  }

  consultaReporte(){
    let body={
      'accion': 'rango',
      'id_empleado': localStorage.getItem('id'),
      'f1': this.f1,
      'f2': this.f2
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          this.tabla=res.datos;
          document.getElementById('btn2').style.display = 'block';
        }else{
          Swal.fire('No existen registros','','warning')
          this.limpiar()
        }
      });
    });
  }

  pdf(){
    let DATA: any = document.getElementById('pdf');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = canvas.width;
      let fileHeight = canvas.height;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('l', 'pt', [canvas.width, canvas.height]);
      let position = 5;
      PDF.addImage(FILEURI, 'JPEG', 5, position, fileWidth, fileHeight);
      PDF.save(this.fecha+'_'+'reporte'+'.pdf');
    });
  }

}

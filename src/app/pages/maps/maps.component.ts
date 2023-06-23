import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccesoService } from 'src/app/servicios/servicio.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { alerta, calendar } from 'src/assets/javascript/date';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  cedula:any;
  id_paciente:any;
  nombre:any;
  apellido:any;
  s_nombre:any;
  s_apellido:any;
  celular:any;
  fecha_n:any;
  sexo:any='Seleccione';
  canton:any;
  provincia:any='Seleccione';
  ocupacion:any;
  empresa:any;
  seguro:any='Seleccione';
  referencia:any;
  tel_referencia:any;
  par_referencia:any;
  clave:any;
  direccion:any;
  parroquia:any;
  lug_nacimiento:any;
  est_civil:any='Seleccione';
  edad:any;
  cedula2:any
  a:any;
  m:any;
  d:any;

  constructor(private servicio: AccesoService,
    private router: Router, public datepipe: DatePipe) { }

  ngOnInit() {
    if(this.servicio.pacienteId=='0'){
      document.getElementById('buscador').style.display = 'block';
    }else{
      document.getElementById('buscador').style.display = 'none';
      this.cedula=this.servicio.cedulaPaciente;
      this.buscador2();
    }
    alerta()
  }
  calendar(){
    calendar()
    this.fecha_n=''
  }
  buscador(){
    if(this.cedula2==''){
      document.getElementById('resumen').style.display = 'none';
      this.nombre=''
      this.apellido=''
      this.id_paciente=''
      this.s_nombre=''
      this.s_apellido=''
      this.celular=''
      this.cedula=''
      this.fecha_n=''
      this.sexo='Seleccione'
      this.canton=''
      this.provincia='Seleccione'
      this.ocupacion=''
      this.empresa=''
      this.seguro='Seleccione'
      this.referencia=''
      this.tel_referencia=''
      this.par_referencia=''
      this.clave=''
      this.direccion=''
      this.parroquia=''
      this.lug_nacimiento=''
      this.est_civil='Seleccione'
    }else{
      let body={
        'accion': 'consulta_pacientes_cedula',
        'cedula': '%'+this.cedula2+'%'
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
            if(this.fecha_n==''||this.fecha_n==null){
              //Swal.fire('Existen campos vacios','','info')
              this.edad=''
              document.getElementById('resumen').style.display = 'none';
            }else{
              this.getEdad(this.fecha_n);
              document.getElementById('resumen').style.display = 'block';
            }
          }else{
            //Swal.fire('No existe esa cédula','','warning')
            document.getElementById('resumen').style.display = 'none';
            this.nombre=''
            this.apellido=''
            this.id_paciente=''
            this.s_nombre=''
            this.s_apellido=''
            this.celular=''
            this.cedula=''
            this.fecha_n=''
            this.sexo='Seleccione'
            this.canton=''
            this.provincia='Seleccione'
            this.ocupacion=''
            this.empresa=''
            this.seguro='Seleccione'
            this.referencia=''
            this.tel_referencia=''
            this.par_referencia=''
            this.clave=''
            this.direccion=''
            this.parroquia=''
            this.lug_nacimiento=''
            this.est_civil='Seleccione'
          }
        });
      });
    }
  }
  buscador2(){
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
            if(this.fecha_n==''||this.fecha_n==null){
              //Swal.fire('Existen campos vacios','','info')
              this.edad=''
              document.getElementById('resumen').style.display = 'none';
            }else{
              this.getEdad(this.fecha_n);
              document.getElementById('resumen').style.display = 'block';
            }
          }else{
            //Swal.fire('No existe esa cédula','','warning')
            document.getElementById('resumen').style.display = 'none';
            this.nombre=''
            this.apellido=''
            this.id_paciente=''
            this.s_nombre=''
            this.s_apellido=''
            this.celular=''
            this.cedula=''
            this.fecha_n=''
            this.sexo='Seleccione'
            this.canton=''
            this.provincia='Seleccione'
            this.ocupacion=''
            this.empresa=''
            this.seguro='Seleccione'
            this.referencia=''
            this.tel_referencia=''
            this.par_referencia=''
            this.clave=''
            this.direccion=''
            this.parroquia=''
            this.lug_nacimiento=''
            this.est_civil='Seleccione'
          }
        });
      });
  }

  actualizar(){
    if(this.nombre==''||this.nombre==null){
      Swal.fire('Ingrese el primer nombre','','warning')
    }else if(this.s_nombre==''||this.s_nombre==null){
      Swal.fire('Ingrese el segundo nombre','','warning')
    }else if(this.apellido==''||this.apellido==null){
      Swal.fire('Ingrese el primer apellido','','warning')
    }else if(this.s_apellido==''||this.s_apellido==null){
      Swal.fire('Ingrese el segundo apellido','','warning')
    }else if(this.cedula==''||this.cedula==null){
      Swal.fire('Ingrese la cédula','','warning')
    }else if(this.celular==''||this.celular==null){
      Swal.fire('Ingrese el celular','','warning')
    }else if(this.fecha_n==''||this.fecha_n==null){
      Swal.fire('Ingrese la fecha de nacimiento','','warning')
    }else if(this.sexo==''||this.sexo==null){
      Swal.fire('Ingrese el sexo','','warning')
    }else if(this.canton==''||this.canton==null){
      Swal.fire('Ingrese el cantón','','warning')
    }else if(this.provincia==''||this.provincia==null){
      Swal.fire('Ingrese la provincia','','warning')
    }else if(this.direccion==''||this.direccion==null){
      Swal.fire('Ingrese la dirección','','warning')
    }else if(this.parroquia==''||this.parroquia==null){
      Swal.fire('Ingrese la parroquia','','warning')
    }else if(this.lug_nacimiento==''||this.lug_nacimiento==null){
      Swal.fire('Ingrese el lugar de nacimiento','','warning')
    }else if(this.est_civil==''||this.est_civil==null){
      Swal.fire('Ingrese el estado civil','','warning')
    }else if(this.ocupacion==''||this.ocupacion==null){
      Swal.fire('Ingrese la ocupación','','warning')
    }else if(this.empresa==''||this.empresa==null){
      Swal.fire('Ingrese la empresa','','warning')
    }else if(this.seguro==''||this.seguro==null){
      Swal.fire('Ingrese el seguro','','warning')
    }else if(this.referencia==''||this.referencia==null){
      Swal.fire('Ingrese la referencia','','warning')
    }else if(this.tel_referencia==''||this.tel_referencia==null){
      Swal.fire('Ingrese el teléfono de referencia','','warning')
    }else if(this.par_referencia==''||this.par_referencia==null){
      Swal.fire('Ingrese el parentezco de la referencia','','warning')
    }else{
      let body={
        'accion': 'actualizar_pacientes_historia',
        'id_paciente': this.id_paciente,
        'p_nombre': this.nombre,
        'p_apellido': this.apellido,
        's_nombre': this.s_nombre,
        's_apellido': this.s_apellido,
        'celular': this.celular,
        'fecha_n': this.fecha_n,
        'sexo': this.sexo,
        'canton': this.canton,
        'provincia': this.provincia,
        'ocupacion': this.ocupacion,
        'empresa': this.empresa,
        'seguro': this.seguro,
        'referencia': this.referencia,
        'tel_referencia': this.tel_referencia,
        'par_referencia': this.par_referencia,
        'clave': this.clave,
        'direccion': this.direccion,
        'parroquia': this.parroquia,
        'lug_nacimiento': this.lug_nacimiento,
        'est_civil': this.est_civil,
        'cedula': this.cedula
      }
      return new Promise(resolve=>{
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado){
            let paciente=res.datos;
            Swal.fire('Actualizado con éxito','','success')
            this.buscador();
          }else{
            Swal.fire('Datos incorrectos','','warning')
          }
        });
      });
    }
  }

  fecha(){
    this.a=this.datepipe.transform(this.fecha_n, 'yyyy')
    console.log(this.a)
    this.m=this.datepipe.transform(this.fecha_n, 'M')
    console.log(this.m)
    this.d=this.datepipe.transform(this.fecha_n, 'd')
    console.log(this.d)
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

  provincias(provincia){
    this.provincia=provincia
  }

  sexos(sexo){
    this.sexo=sexo
  }
  seguros(seguro){
    this.seguro=seguro
  }
  estados(estado){
    this.est_civil=estado
  }

  public validador;
    validadorDeCedula(cedula: String) {
    let cedulaCorrecta = false;
    if (cedula.length == 10)
    {
        let tercerDigito = parseInt(cedula.substring(2, 3));
        if (tercerDigito < 6) {
            // El ultimo digito se lo considera dígito verificador
            let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
            let verificador = parseInt(cedula.substring(9, 10));
            let suma:number = 0;
            let digito:number = 0;
            for (let i = 0; i < (cedula.length - 1); i++) {
                digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
                suma += ((parseInt((digito % 10)+'') + (parseInt((digito / 10)+''))));
          //      console.log(suma+" suma"+coefValCedula[i]);
            }
            suma= Math.round(suma);
          //  console.log(verificador);
          //  console.log(suma);
          //  console.log(digito);
            if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10)== verificador)) {
                cedulaCorrecta = true;
            } else if ((10 - (Math.round(suma % 10))) == verificador) {
                cedulaCorrecta = true;
            } else {
                cedulaCorrecta = false;
                Swal.fire('Cédula inválida','','warning')
                this.cedula=''
            }
          } else {
            cedulaCorrecta = false;
            Swal.fire('Cédula inválida','','warning')
            this.cedula=''
          }
    } else {
          cedulaCorrecta = false;
          Swal.fire('Cédula inválida','','warning')
          this.cedula=''
    }
    this.validador= cedulaCorrecta;
    }

}

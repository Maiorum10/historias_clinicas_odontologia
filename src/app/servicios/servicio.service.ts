import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AccesoService {

  usuarioId:string='0';
  cedulaSesion:string='0';
  claveSesion:string='0';
  nombreSesion:string='';
  pacienteId:string='0';
  cedulaPaciente:string='0';
  atencion:any='0';
  id_historia:any='0';
  sesion:any='0';

  server : string= 'http://186.71.211.14:1023/api/api_odontologia/servicio.php';
  constructor(public http:HttpClient) { }

  private refresh=new Subject<void>();

  get Refreshrequired(){
    return this.refresh;
  }

  postData(body){
    let headers=new HttpHeaders({
      'Content-Type':'application/json; charset=UTF-8'
    });
    let options={
      headers:headers
    }
    return this.http.post(this.server, JSON.stringify(body), options);
  }
  getData(){
    let headers=new HttpHeaders({
      'Content-Type':'application/json; charset=UTF-8'
    });
    let options={
      headers:headers
    }
    return this.http.get(this.server,options);
  }

}

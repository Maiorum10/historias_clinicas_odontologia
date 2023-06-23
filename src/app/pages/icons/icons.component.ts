import { Component, OnInit } from '@angular/core';
import { AccesoService } from '../../servicios/servicio.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public copy: string;
  id_historia:any

  motivo:any=''
  descripcion:any=''
  otro:any=''

  p_arterial:any=''
  f_cardiaca:any=''
  temperatura:any=''
  f_respiratoria:any=''

  labios:any=1
  mejillas:any=1
  max_superior:any=1
  max_inferior:any=1
  lengua:any=1
  paladar:any=1
  piso:any=1
  carrillos:any=1
  glandulas_salivales:any=1
  oro_faringe:any=1
  atm:any=1
  ganglios:any=1






  fecha:any
  diente:any=1
  tip:any='Sano';
    // d=DIENTES
    // CUADRANTE  DIENTES 1
  d11:any=1
  d11a:any
  d11b:any
  d11c:any
  d11d:any
  d11e:any
  d12:any=2
  d12a:any
  d12b:any
  d12c:any
  d12d:any
  d12e:any
  d13:any=3
  d13a:any
  d13b:any
  d13c:any
  d13d:any
  d13e:any
  d14:any=4
  d14a:any
  d14b:any
  d14c:any
  d14d:any
  d14e:any
  d15:any=5
  d15a:any
  d15b:any
  d15c:any
  d15d:any
  d15e:any
  d16:any=6
  d16a:any
  d16b:any
  d16c:any
  d16d:any
  d16e:any
  d17:any=7
  d17a:any
  d17b:any
  d17c:any
  d17d:any
  d17e:any
  d18:any=8
  d18a:any
  d18b:any
  d18c:any
  d18d:any
  d18e:any
  // CUADRANTE  DIENTES 2
  d21:any=9
  d21a:any
  d21b:any
  d21c:any
  d21d:any
  d21e:any
  d22:any=10
  d22a:any
  d22b:any
  d22c:any
  d22d:any
  d22e:any
  d23:any=11
  d23a:any
  d23b:any
  d23c:any
  d23d:any
  d23e:any
  d24:any=12
  d24a:any
  d24b:any
  d24c:any
  d24d:any
  d24e:any
  d25:any=13
  d25a:any
  d25b:any
  d25c:any
  d25d:any
  d25e:any
  d26:any=14
  d26a:any
  d26b:any
  d26c:any
  d26d:any
  d26e:any
  d27:any=15
  d27a:any
  d27b:any
  d27c:any
  d27d:any
  d27e:any
  d28:any=16
  d28a:any
  d28b:any
  d28c:any
  d28d:any
  d28e:any
  // CUADRANTE  DIENTES 3
  d31:any=17
  d31a:any
  d31b:any
  d31c:any
  d31d:any
  d31e:any
  d32:any=18
  d32a:any
  d32b:any
  d32c:any
  d32d:any
  d32e:any
  d33:any=19
  d33a:any
  d33b:any
  d33c:any
  d33d:any
  d33e:any
  d34:any=20
  d34a:any
  d34b:any
  d34c:any
  d34d:any
  d34e:any
  d35:any=21
  d35a:any
  d35b:any
  d35c:any
  d35d:any
  d35e:any
  d36:any=22
  d36a:any
  d36b:any
  d36c:any
  d36d:any
  d36e:any
  d37:any=23
  d37a:any
  d37b:any
  d37c:any
  d37d:any
  d37e:any
  d38:any=24
  d38a:any
  d38b:any
  d38c:any
  d38d:any
  d38e:any
  // CUADRANTE  DIENTES 4
  d41:any=25
  d41a:any
  d41b:any
  d41c:any
  d41d:any
  d41e:any
  d42:any=26
  d42a:any
  d42b:any
  d42c:any
  d42d:any
  d42e:any
  d43:any=27
  d43a:any
  d43b:any
  d43c:any
  d43d:any
  d43e:any
  d44:any=28
  d44a:any
  d44b:any
  d44c:any
  d44d:any
  d44e:any
  d45:any=29
  d45a:any
  d45b:any
  d45c:any
  d45d:any
  d45e:any
  d46:any=30
  d46a:any
  d46b:any
  d46c:any
  d46d:any
  d46e:any
  d47:any=31
  d47a:any
  d47b:any
  d47c:any
  d47d:any
  d47e:any
  d48:any=32
  d48a:any
  d48b:any
  d48c:any
  d48d:any
  d48e:any
  // CUADRANTE  DIENTES 5
  d51:any=33
  d51a:any
  d51b:any
  d51c:any
  d51d:any
  d51e:any
  d52:any=34
  d52a:any
  d52b:any
  d52c:any
  d52d:any
  d52e:any
  d53:any=35
  d53a:any
  d53b:any
  d53c:any
  d53d:any
  d53e:any
  d54:any=36
  d54a:any
  d54b:any
  d54c:any
  d54d:any
  d54e:any
  d55:any=37
  d55a:any
  d55b:any
  d55c:any
  d55d:any
  d55e:any
  // CUADRANTE  DIENTES 6
  d61:any=38
  d61a:any
  d61b:any
  d61c:any
  d61d:any
  d61e:any
  d62:any=39
  d62a:any
  d62b:any
  d62c:any
  d62d:any
  d62e:any
  d63:any=40
  d63a:any
  d63b:any
  d63c:any
  d63d:any
  d63e:any
  d64:any=41
  d64a:any
  d64b:any
  d64c:any
  d64d:any
  d64e:any
  d65:any=42
  d65a:any
  d65b:any
  d65c:any
  d65d:any
  d65e:any
  // CUADRANTE  DIENTES 7
  d71:any=43
  d71a:any
  d71b:any
  d71c:any
  d71d:any
  d71e:any
  d72:any=44
  d72a:any
  d72b:any
  d72c:any
  d72d:any
  d72e:any
  d73:any=45
  d73a:any
  d73b:any
  d73c:any
  d73d:any
  d73e:any
  d74:any=46
  d74a:any
  d74b:any
  d74c:any
  d74d:any
  d74e:any
  d75:any=47
  d75a:any
  d75b:any
  d75c:any
  d75d:any
  d75e:any
  // CUADRANTE  DIENTES 8
  d81:any=48
  d81a:any
  d81b:any
  d81c:any
  d81d:any
  d81e:any
  d82:any=49
  d82a:any
  d82b:any
  d82c:any
  d82d:any
  d82e:any
  d83:any=50
  d83a:any
  d83b:any
  d83c:any
  d83d:any
  d83e:any
  d84:any=51
  d84a:any
  d84b:any
  d84c:any
  d84d:any
  d84e:any
  d85:any=52
  d85a:any
  d85b:any
  d85c:any
  d85d:any
  d85e:any


  id_d11a:any
  id_d11b:any
  id_d11c:any
  id_d11d:any
  id_d11e:any

  id_d12a:any
  id_d12b:any
  id_d12c:any
  id_d12d:any
  id_d12e:any

  id_d13a:any
  id_d13b:any
  id_d13c:any
  id_d13d:any
  id_d13e:any

  id_d14a:any
  id_d14b:any
  id_d14c:any
  id_d14d:any
  id_d14e:any

  id_d15a:any
  id_d15b:any
  id_d15c:any
  id_d15d:any
  id_d15e:any

  id_d16a:any
  id_d16b:any
  id_d16c:any
  id_d16d:any
  id_d16e:any

  id_d17a:any
  id_d17b:any
  id_d17c:any
  id_d17d:any
  id_d17e:any

  id_d18a:any
  id_d18b:any
  id_d18c:any
  id_d18d:any
  id_d18e:any
  // CUADRANTE  DIENTES 2

  id_d21a:any
  id_d21b:any
  id_d21c:any
  id_d21d:any
  id_d21e:any

  id_d22a:any
  id_d22b:any
  id_d22c:any
  id_d22d:any
  id_d22e:any

  id_d23a:any
  id_d23b:any
  id_d23c:any
  id_d23d:any
  id_d23e:any

  id_d24a:any
  id_d24b:any
  id_d24c:any
  id_d24d:any
  id_d24e:any

  id_d25a:any
  id_d25b:any
  id_d25c:any
  id_d25d:any
  id_d25e:any

  id_d26a:any
  id_d26b:any
  id_d26c:any
  id_d26d:any
  id_d26e:any

  id_d27a:any
  id_d27b:any
  id_d27c:any
  id_d27d:any
  id_d27e:any

  id_d28a:any
  id_d28b:any
  id_d28c:any
  id_d28d:any
  id_d28e:any
  // CUADRANTE  DIENTES 3

  id_d31a:any
  id_d31b:any
  id_d31c:any
  id_d31d:any
  id_d31e:any

  id_d32a:any
  id_d32b:any
  id_d32c:any
  id_d32d:any
  id_d32e:any

  id_d33a:any
  id_d33b:any
  id_d33c:any
  id_d33d:any
  id_d33e:any

  id_d34a:any
  id_d34b:any
  id_d34c:any
  id_d34d:any
  id_d34e:any

  id_d35a:any
  id_d35b:any
  id_d35c:any
  id_d35d:any
  id_d35e:any

  id_d36a:any
  id_d36b:any
  id_d36c:any
  id_d36d:any
  id_d36e:any

  id_d37a:any
  id_d37b:any
  id_d37c:any
  id_d37d:any
  id_d37e:any

  id_d38a:any
  id_d38b:any
  id_d38c:any
  id_d38d:any
  id_d38e:any
  // CUADRANTE  DIENTES 4

  id_d41a:any
  id_d41b:any
  id_d41c:any
  id_d41d:any
  id_d41e:any

  id_d42a:any
  id_d42b:any
  id_d42c:any
  id_d42d:any
  id_d42e:any

  id_d43a:any
  id_d43b:any
  id_d43c:any
  id_d43d:any
  id_d43e:any

  id_d44a:any
  id_d44b:any
  id_d44c:any
  id_d44d:any
  id_d44e:any

  id_d45a:any
  id_d45b:any
  id_d45c:any
  id_d45d:any
  id_d45e:any

  id_d46a:any
  id_d46b:any
  id_d46c:any
  id_d46d:any
  id_d46e:any

  id_d47a:any
  id_d47b:any
  id_d47c:any
  id_d47d:any
  id_d47e:any

  id_d48a:any
  id_d48b:any
  id_d48c:any
  id_d48d:any
  id_d48e:any
  // CUADRANTE  DIENTES 5

  id_d51a:any
  id_d51b:any
  id_d51c:any
  id_d51d:any
  id_d51e:any

  id_d52a:any
  id_d52b:any
  id_d52c:any
  id_d52d:any
  id_d52e:any

  id_d53a:any
  id_d53b:any
  id_d53c:any
  id_d53d:any
  id_d53e:any

  id_d54a:any
  id_d54b:any
  id_d54c:any
  id_d54d:any
  id_d54e:any

  id_d55a:any
  id_d55b:any
  id_d55c:any
  id_d55d:any
  id_d55e:any
  // CUADRANTE  DIENTES 6

  id_d61a:any
  id_d61b:any
  id_d61c:any
  id_d61d:any
  id_d61e:any

  id_d62a:any
  id_d62b:any
  id_d62c:any
  id_d62d:any
  id_d62e:any

  id_d63a:any
  id_d63b:any
  id_d63c:any
  id_d63d:any
  id_d63e:any

  id_d64a:any
  id_d64b:any
  id_d64c:any
  id_d64d:any
  id_d64e:any

  id_d65a:any
  id_d65b:any
  id_d65c:any
  id_d65d:any
  id_d65e:any
  // CUADRANTE  DIENTES 7

  id_d71a:any
  id_d71b:any
  id_d71c:any
  id_d71d:any
  id_d71e:any

  id_d72a:any
  id_d72b:any
  id_d72c:any
  id_d72d:any
  id_d72e:any

  id_d73a:any
  id_d73b:any
  id_d73c:any
  id_d73d:any
  id_d73e:any

  id_d74a:any
  id_d74b:any
  id_d74c:any
  id_d74d:any
  id_d74e:any

  id_d75a:any
  id_d75b:any
  id_d75c:any
  id_d75d:any
  id_d75e:any
  // CUADRANTE  DIENTES 8

  id_d81a:any
  id_d81b:any
  id_d81c:any
  id_d81d:any
  id_d81e:any

  id_d82a:any
  id_d82b:any
  id_d82c:any
  id_d82d:any
  id_d82e:any

  id_d83a:any
  id_d83b:any
  id_d83c:any
  id_d83d:any
  id_d83e:any

  id_d84a:any
  id_d84b:any
  id_d84c:any
  id_d84d:any
  id_d84e:any

  id_d85a:any
  id_d85b:any
  id_d85c:any
  id_d85d:any
  id_d85e:any


  t11a:any='Sano';
  t11b:any='Sano';
  t11c:any='Sano';
  t11d:any='Sano';
  t11e:any='Sano';
  t12a:any='Sano';
  t12b:any='Sano';
  t12c:any='Sano';
  t12d:any='Sano';
  t12e:any='Sano';
  t13a:any='Sano';
  t13b:any='Sano';
  t13c:any='Sano';
  t13d:any='Sano';
  t13e:any='Sano';
  t14a:any='Sano';
  t14b:any='Sano';
  t14c:any='Sano';
  t14d:any='Sano';
  t14e:any='Sano';
  t15a:any='Sano';
  t15b:any='Sano';
  t15c:any='Sano';
  t15d:any='Sano';
  t15e:any='Sano';
  t16a:any='Sano';
  t16b:any='Sano';
  t16c:any='Sano';
  t16d:any='Sano';
  t16e:any='Sano';
  t17a:any='Sano';
  t17b:any='Sano';
  t17c:any='Sano';
  t17d:any='Sano';
  t17e:any='Sano';
  t18a:any='Sano';
  t18b:any='Sano';
  t18c:any='Sano';
  t18d:any='Sano';
  t18e:any='Sano';
  // CUADRANTE  DIENTES 2
  t21a:any='Sano';
  t21b:any='Sano';
  t21c:any='Sano';
  t21d:any='Sano';
  t21e:any='Sano';
  t22a:any='Sano';
  t22b:any='Sano';
  t22c:any='Sano';
  t22d:any='Sano';
  t22e:any='Sano';
  t23a:any='Sano';
  t23b:any='Sano';
  t23c:any='Sano';
  t23d:any='Sano';
  t23e:any='Sano';
  t24a:any='Sano';
  t24b:any='Sano';
  t24c:any='Sano';
  t24d:any='Sano';
  t24e:any='Sano';
  t25a:any='Sano';
  t25b:any='Sano';
  t25c:any='Sano';
  t25d:any='Sano';
  t25e:any='Sano';
  t26a:any='Sano';
  t26b:any='Sano';
  t26c:any='Sano';
  t26d:any='Sano';
  t26e:any='Sano';
  t27a:any='Sano';
  t27b:any='Sano';
  t27c:any='Sano';
  t27d:any='Sano';
  t27e:any='Sano';
  t28a:any='Sano';
  t28b:any='Sano';
  t28c:any='Sano';
  t28d:any='Sano';
  t28e:any='Sano';
  // CUADRANTE  DIENTES 3
  t31a:any='Sano';
  t31b:any='Sano';
  t31c:any='Sano';
  t31d:any='Sano';
  t31e:any='Sano';
  t32a:any='Sano';
  t32b:any='Sano';
  t32c:any='Sano';
  t32d:any='Sano';
  t32e:any='Sano';
  t33a:any='Sano';
  t33b:any='Sano';
  t33c:any='Sano';
  t33d:any='Sano';
  t33e:any='Sano';
  t34a:any='Sano';
  t34b:any='Sano';
  t34c:any='Sano';
  t34d:any='Sano';
  t34e:any='Sano';
  t35a:any='Sano';
  t35b:any='Sano';
  t35c:any='Sano';
  t35d:any='Sano';
  t35e:any='Sano';
  t36a:any='Sano';
  t36b:any='Sano';
  t36c:any='Sano';
  t36d:any='Sano';
  t36e:any='Sano';
  t37a:any='Sano';
  t37b:any='Sano';
  t37c:any='Sano';
  t37d:any='Sano';
  t37e:any='Sano';
  t38a:any='Sano';
  t38b:any='Sano';
  t38c:any='Sano';
  t38d:any='Sano';
  t38e:any='Sano';
  // CUADRANTE  DIENTES 4
  t41a:any='Sano';
  t41b:any='Sano';
  t41c:any='Sano';
  t41d:any='Sano';
  t41e:any='Sano';
  t42a:any='Sano';
  t42b:any='Sano';
  t42c:any='Sano';
  t42d:any='Sano';
  t42e:any='Sano';
  t43a:any='Sano';
  t43b:any='Sano';
  t43c:any='Sano';
  t43d:any='Sano';
  t43e:any='Sano';
  t44a:any='Sano';
  t44b:any='Sano';
  t44c:any='Sano';
  t44d:any='Sano';
  t44e:any='Sano';
  t45a:any='Sano';
  t45b:any='Sano';
  t45c:any='Sano';
  t45d:any='Sano';
  t45e:any='Sano';
  t46a:any='Sano';
  t46b:any='Sano';
  t46c:any='Sano';
  t46d:any='Sano';
  t46e:any='Sano';
  t47a:any='Sano';
  t47b:any='Sano';
  t47c:any='Sano';
  t47d:any='Sano';
  t47e:any='Sano';
  t48a:any='Sano';
  t48b:any='Sano';
  t48c:any='Sano';
  t48d:any='Sano';
  t48e:any='Sano';
  // CUADRANTE  DIENTES 5
  t51a:any='Sano';
  t51b:any='Sano';
  t51c:any='Sano';
  t51d:any='Sano';
  t51e:any='Sano';
  t52a:any='Sano';
  t52b:any='Sano';
  t52c:any='Sano';
  t52d:any='Sano';
  t52e:any='Sano';
  t53a:any='Sano';
  t53b:any='Sano';
  t53c:any='Sano';
  t53d:any='Sano';
  t53e:any='Sano';
  t54a:any='Sano';
  t54b:any='Sano';
  t54c:any='Sano';
  t54d:any='Sano';
  t54e:any='Sano';
  t55a:any='Sano';
  t55b:any='Sano';
  t55c:any='Sano';
  t55d:any='Sano';
  t55e:any='Sano';
  // CUADRANTE  DIENTES 6
  t61a:any='Sano';
  t61b:any='Sano';
  t61c:any='Sano';
  t61d:any='Sano';
  t61e:any='Sano';
  t62a:any='Sano';
  t62b:any='Sano';
  t62c:any='Sano';
  t62d:any='Sano';
  t62e:any='Sano';
  t63a:any='Sano';
  t63b:any='Sano';
  t63c:any='Sano';
  t63d:any='Sano';
  t63e:any='Sano';
  t64a:any='Sano';
  t64b:any='Sano';
  t64c:any='Sano';
  t64d:any='Sano';
  t64e:any='Sano';
  t65a:any='Sano';
  t65b:any='Sano';
  t65c:any='Sano';
  t65d:any='Sano';
  t65e:any='Sano';
  // CUADRANTE  DIENTES 7
  t71a:any='Sano';
  t71b:any='Sano';
  t71c:any='Sano';
  t71d:any='Sano';
  t71e:any='Sano';
  t72a:any='Sano';
  t72b:any='Sano';
  t72c:any='Sano';
  t72d:any='Sano';
  t72e:any='Sano';
  t73a:any='Sano';
  t73b:any='Sano';
  t73c:any='Sano';
  t73d:any='Sano';
  t73e:any='Sano';
  t74a:any='Sano';
  t74b:any='Sano';
  t74c:any='Sano';
  t74d:any='Sano';
  t74e:any='Sano';
  t75a:any='Sano';
  t75b:any='Sano';
  t75c:any='Sano';
  t75d:any='Sano';
  t75e:any='Sano';
  // CUADRANTE  DIENTES 8
  t81a:any='Sano';
  t81b:any='Sano';
  t81c:any='Sano';
  t81d:any='Sano';
  t81e:any='Sano';
  t82a:any='Sano';
  t82b:any='Sano';
  t82c:any='Sano';
  t82d:any='Sano';
  t82e:any='Sano';
  t83a:any='Sano';
  t83b:any='Sano';
  t83c:any='Sano';
  t83d:any='Sano';
  t83e:any='Sano';
  t84a:any='Sano';
  t84b:any='Sano';
  t84c:any='Sano';
  t84d:any='Sano';
  t84e:any='Sano';
  t85a:any='Sano';
  t85b:any='Sano';
  t85c:any='Sano';
  t85d:any='Sano';
  t85e:any='Sano';
  //edades
  edad1:any=1
  edad2:any=1
  edad3:any=1
  edad4:any=1
  edad5:any=1
  edad6:any=1
  edad7:any=1
  edad8:any=1
  //antecedentes
  antecedentes1:any=1
  antecedentes2:any=1
  antecedentes3:any=1
  antecedentes4:any=1
  antecedentes5:any=1
  antecedentes6:any=1
  antecedentes7:any=1
  antecedentes8:any=1
  antecedentes9:any=1
  //adulto-niño
  adultos:any=2
  ninos:any=1
  //plan diagnostico
  p_diagnostico1:any=1
  p_diagnostico2:any=1
  p_diagnostico3:any=1
  //diagnostico
  pre:any=1
  dif:any=1

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

  detalle_odontograma:any=""

  //PIEZAS DENTALES
  p16:any=1
  p17:any=1
  p55:any=1
  p11:any=1
  p21:any=1
  p51:any=1
  p26:any=1
  p27:any=1
  p65:any=1
  p36:any=1
  p37:any=1
  p75:any=1
  p31:any=1
  p41:any=1
  p71:any=1
  p46:any=1
  p47:any=1
  p85:any=1
  // ENFERMEDAD PERIODENTAL
  ep:any=''
  ep1:any=1
  ep2:any=1
  ep3:any=1
  // MAL OCLUSION
  mo:any=''
  mo1:any=1
  mo2:any=1
  mo3:any=1
  //FLUOROSIS
  fl:any=''
  fl1:any=1
  fl2:any=1
  fl3:any=1
  //placa 0-1-2-3
  placa_1:any=0
  placa_2:any=0
  placa_3:any=0
  placa_4:any=0
  placa_5:any=0
  placa_6:any=0
  placa_t:any=0
  //calculo 0-1-2-3
  calculo_1:any=0
  calculo_2:any=0
  calculo_3:any=0
  calculo_4:any=0
  calculo_5:any=0
  calculo_6:any=0
  calculo_t:any=0
  //gingivitis 0-1
  gingivitis_1:any=0
  gingivitis_2:any=0
  gingivitis_3:any=0
  gingivitis_4:any=0
  gingivitis_5:any=0
  gingivitis_6:any=0
  gingivitis_t:any=0

  datos_años:any=''

  //indices CPO-ceo
  cpo_c:any=0
  cpo_p:any=0
  cpo_o:any=0
  cpo_t:any=0
  ceo_c:any=0
  ceo_e:any=0
  ceo_o:any=0
  ceo_t:any=0

  otros_diagnostico:any=''

  diagnostico:any=''
  cie:any=''

  sesion:any=''
  diagnostico_complicaciones:any=''
  procedimientos:any=''
  prescripciones:any=''
  codigo:any=''

  placa_calculo:any=0
  constructor(
    private servicio:AccesoService,
    private router:Router
  ) { }

  ngOnInit() {
    if(this.servicio.cedulaPaciente=='0'||this.servicio.cedulaPaciente==null){
      Swal.fire('Seleccione un paciente','','warning')
      this.router.navigateByUrl("dashboard")
    }else{
      this.fechajs()
      this.cedula=this.servicio.cedulaPaciente;
      this.id_historia=this.servicio.id_historia;
      this.consultar()
      this.buscador();



    document.getElementById('niños').style.display = 'none';
    }

  }
  calculos_cpo(){
    let a
    a=this.cpo_c*1+this.cpo_p*1+this.cpo_o*1
    this.cpo_t=a
  }
  calculos_ceo(){
    let a
    a=this.ceo_c*1+this.ceo_e*1+this.ceo_o*1
    this.ceo_t=a
  }
  calculos_placa(){
    let a, b
    a=this.placa_1*1+this.placa_2*1+this.placa_3*1+this.placa_4*1+this.placa_5*1+this.placa_6*1
    b=a*1/6
    this.placa_t=b
  }
  calculos_calculo(){
    let a, b
    a=this.calculo_1*1+this.calculo_2*1+this.calculo_3*1+this.calculo_4*1+this.calculo_5*1+this.calculo_6*1
    b=a*1/6
    this.calculo_t=b
  }
  gingivitiss_gingivitis(){
    let a, b
    a=this.gingivitis_1*1+this.gingivitis_2*1+this.gingivitis_3*1+this.gingivitis_4*1+this.gingivitis_5*1+this.gingivitis_6*1
    b=a*1/6
    this.gingivitis_t=b
  }
  consultar(){
    let a
    a=this.servicio.atencion
    console.log(a+'id_historia'+this.id_historia)
    if(a==0){
      this.codigo='COCN'+localStorage.getItem('id')
      document.getElementById('guardar').style.display = 'block';
      let body={
        'accion': 'consultar_detalles_sesion',
        'id_historia': this.id_historia
      }
      console.log(body)
      return new Promise(resolve=>{
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado){
            let historia=res.datos
            let a
            a=historia[0].sesion
            this.sesion=a*1+1
          }else{
            this.sesion='1'
          }
        });
      });
    }else{
      document.getElementById('guardar').style.display = 'none';
      let sesion= this.servicio.sesion
      let body={
        'accion': 'consultar_detalles_fecha',
        'fecha': a,
        'id_historia': this.id_historia,
        'sesion': sesion
      }
      console.log(body)
      return new Promise(resolve=>{
        this.servicio.postData(body).subscribe((res:any)=>{
          if(res.estado){
            let historia=res.datos
            if(historia[0].datos_años==1){
              this.edad1=2
            }
            if(historia[0].datos_años==2){
              this.edad2=2
            }
            if(historia[0].datos_años==3){
              this.edad3=2
            }
            if(historia[0].datos_años==4){
              this.edad4=2
            }
            if(historia[0].datos_años==5){
              this.edad5=2
            }
            if(historia[0].datos_años==6){
              this.edad6=2
            }
            if(historia[0].datos_años==7){
              this.edad7=2
            }
            if(historia[0].datos_años==8){
              this.edad8=2
            }
            this.motivo=historia[0].motivo
            this.descripcion=historia[0].descripcion
            this.antecedentes1=historia[0].alergia_antibiotico
            this.antecedentes2=historia[0].alergia
            this.antecedentes3=historia[0].hemo
            this.antecedentes4=historia[0].vih
            this.antecedentes5=historia[0].tuber
            this.antecedentes6=historia[0].asma
            this.antecedentes7=historia[0].diabet
            this.antecedentes8=historia[0].hiper
            this.antecedentes9=historia[0].cardiacas
            this.otro=historia[0].otros
            this.p_arterial=historia[0].presion_arterial
            this.f_cardiaca=historia[0].frecuencia_cardiaca
            this.temperatura=historia[0].temperatura
            this.f_respiratoria=historia[0].frecuencia_respiratoria
            this.labios=historia[0].labios
            this.mejillas=historia[0].mejillas
            this.max_superior=historia[0].maxilar_superior
            this.max_inferior=historia[0].maxilar_inferior
            this.lengua=historia[0].lengua
            this.paladar=historia[0].paladar
            this.piso=historia[0].piso
            this.carrillos=historia[0].carrillos
            this.glandulas_salivales=historia[0].glandulas_salivales
            this.oro_faringe=historia[0].oro_faringe
            this.atm=historia[0].atm
            this.ganglios=historia[0].ganglios
            this.p16=historia[0].pd16
            this.p17=historia[0].pd17
            this.p55=historia[0].pd55
            this.p11=historia[0].pd11
            this.p21=historia[0].pd21
            this.p51=historia[0].pd51
            this.p26=historia[0].pd26
            this.p27=historia[0].pd27
            this.p65=historia[0].pd65
            this.p36=historia[0].pd36
            this.p37=historia[0].pd37
            this.p75=historia[0].pd75
            this.p31=historia[0].pd31
            this.p41=historia[0].pd41
            this.p71=historia[0].pd71
            this.p46=historia[0].pd46
            this.p47=historia[0].pd47
            this.p85=historia[0].pd85
            this.placa_1=historia[0].placa_1
            this.placa_2=historia[0].placa_2
            this.placa_3=historia[0].placa_3
            this.placa_4=historia[0].placa_4
            this.placa_5=historia[0].placa_5
            this.placa_6=historia[0].placa_6
            this.placa_t=historia[0].placa_t
            this.calculo_1=historia[0].calculo_1
            this.calculo_2=historia[0].calculo_2
            this.calculo_3=historia[0].calculo_3
            this.calculo_4=historia[0].calculo_4
            this.calculo_5=historia[0].calculo_5
            this.calculo_6=historia[0].calculo_6
            this.calculo_t=historia[0].calculo_t
            this.gingivitis_1=historia[0].gingivitis_1
            this.gingivitis_2=historia[0].gingivitis_2
            this.gingivitis_3=historia[0].gingivitis_3
            this.gingivitis_4=historia[0].gingivitis_4
            this.gingivitis_5=historia[0].gingivitis_5
            this.gingivitis_6=historia[0].gingivitis_6
            this.gingivitis_t=historia[0].gingivitis_t
            if(historia[0].enfermedad_periodental==1){
              this.ep1=2
            }
            if(historia[0].enfermedad_periodental==2){
              this.ep2=2
            }
            if(historia[0].enfermedad_periodental==3){
              this.ep3=2
            }
            if(historia[0].mal_oclusion==1){
              this.mo1=2
            }
            if(historia[0].mal_oclusion==2){
              this.mo2=2
            }
            if(historia[0].mal_oclusion==3){
              this.mo3=2
            }
            if(historia[0].fluorosis==1){
              this.fl1=2
            }
            if(historia[0].fluorosis==2){
              this.fl2=2
            }
            if(historia[0].fluorosis==3){
              this.fl3=2
            }
            this.cpo_c=historia[0].cpo_c
            this.cpo_p=historia[0].cpo_p
            this.cpo_o=historia[0].cpo_o
            this.cpo_t=historia[0].cpo_t
            this.ceo_c=historia[0].ceo_c
            this.ceo_e=historia[0].ceo_e
            this.ceo_o=historia[0].ceo_o
            this.ceo_t=historia[0].ceo_t
            this.p_diagnostico1=historia[0].biometria
            this.p_diagnostico2=historia[0].quimica_sanguinea
            this.p_diagnostico3=historia[0].rayos_x
            this.otros_diagnostico=historia[0].otros_diagnostico
            this.diagnostico=historia[0].diagnostico
            this.cie=historia[0].cie
            this.pre=historia[0].presuntivo
            this.dif=historia[0].definitivo
            this.fecha=historia[0].fecha
            this.sesion=historia[0].sesion
            this.diagnostico_complicaciones=historia[0].diagnosticos_complicaciones
            this.procedimientos=historia[0].procedimientos
            this.prescripciones=historia[0].prescripcion
            this.codigo=historia[0].codigo
          }else{
          }
        });
      });
    }
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
  guardar_historia(){
    let body={
      'accion': 'llenar_historia',
      'historia_id_historia': this.id_historia,
      'datos_años': this.datos_años,
      'motivo': this.motivo,
      'descripcion': this.descripcion,
      'alergia_antibiotico': this.antecedentes1,
      'alergia': this.antecedentes2,
      'hemo': this.antecedentes3,
      'vih': this.antecedentes4,
      'tuber': this.antecedentes5,
      'asma': this.antecedentes6,
      'diabet': this.antecedentes7,
      'hiper': this.antecedentes8,
      'cardiacas': this.antecedentes9,
      'otros': this.otro,
      'presion_arterial': this.p_arterial,
      'frecuencia_cardiaca': this.f_cardiaca,
      'temperatura': this.temperatura,
      'frecuencia_respiratoria': this.f_respiratoria,
      'labios': this.labios,
      'mejillas': this.mejillas,
      'maxilar_superior': this.max_superior,
      'maxilar_inferior': this.max_inferior,
      'lengua': this.lengua,
      'paladar': this.paladar,
      'piso': this.piso,
      'carrillos': this.carrillos,
      'glandulas_salivales': this.glandulas_salivales,
      'oro_faringe': this.oro_faringe,
      'atm': this.atm,
      'ganglios': this.ganglios,
      'pd16': this.p16,
      'pd17': this.p17,
      'pd55': this.p55,
      'pd11': this.p11,
      'pd21': this.p21,
      'pd51': this.p51,
      'pd26': this.p26,
      'pd27': this.p27,
      'pd65': this.p65,
      'pd36': this.p36,
      'pd37': this.p37,
      'pd75': this.p75,
      'pd31': this.p31,
      'pd41': this.p41,
      'pd71': this.p71,
      'pd46': this.p46,
      'pd47': this.p47,
      'pd85': this.p85,
      'placa_1': this.placa_1,
      'placa_2': this.placa_2,
      'placa_3': this.placa_3,
      'placa_4': this.placa_4,
      'placa_5': this.placa_5,
      'placa_6': this.placa_6,
      'placa_t': this.placa_t,
      'calculo_1': this.calculo_1,
      'calculo_2': this.calculo_2,
      'calculo_3': this.calculo_3,
      'calculo_4': this.calculo_4,
      'calculo_5': this.calculo_5,
      'calculo_6': this.calculo_6,
      'calculo_t': this.calculo_t,
      'gingivitis_1': this.gingivitis_1,
      'gingivitis_2': this.gingivitis_2,
      'gingivitis_3': this.gingivitis_3,
      'gingivitis_4': this.gingivitis_4,
      'gingivitis_5': this.gingivitis_5,
      'gingivitis_6': this.gingivitis_6,
      'gingivitis_t': this.gingivitis_t,
      'enfermedad_periodental': this.ep,
      'mal_oclusion': this.mo,
      'fluorosis': this.fl,
      'cpo_c': this.cpo_c,
      'cpo_p': this.cpo_p,
      'cpo_o': this.cpo_o,
      'cpo_t': this.cpo_t,
      'ceo_c': this.ceo_c,
      'ceo_e': this.ceo_e,
      'ceo_o': this.ceo_o,
      'ceo_t': this.ceo_t,
      'biometria': this.p_diagnostico1,
      'quimica_sanguinea': this.p_diagnostico2,
      'rayos_x': this.p_diagnostico3,
      'otros_diagnostico': this.otros_diagnostico,
      'diagnostico': this.diagnostico,
      'cie': this.cie,
      'presuntivo': this.pre,
      'definitivo': this.dif,
      'fecha': this.fecha,
      'sesion': this.sesion,
      'diagnosticos_complicaciones': this.diagnostico_complicaciones,
      'procedimientos': this.procedimientos,
      'prescripcion': this.prescripciones,
      'codigo': this.codigo
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          Swal.fire('Historia guardada con exito','','success')
          this.actualizar_odontograma()

          this.router.navigateByUrl("detalles")
        }else{
        }
      });
    });
  }
  actualizar_odontograma(){
    this.actualizar_odontograma_d11()
    this.actualizar_odontograma_d12()
    this.actualizar_odontograma_d13()
    this.actualizar_odontograma_d14()
    this.actualizar_odontograma_d15()
    this.actualizar_odontograma_d16()
    this.actualizar_odontograma_d17()
    this.actualizar_odontograma_d18()
    this.actualizar_odontograma_d21()
    this.actualizar_odontograma_d22()
    this.actualizar_odontograma_d23()
    this.actualizar_odontograma_d24()
    this.actualizar_odontograma_d25()
    this.actualizar_odontograma_d26()
    this.actualizar_odontograma_d27()
    this.actualizar_odontograma_d28()
    this.actualizar_odontograma_d31()
    this.actualizar_odontograma_d32()
    this.actualizar_odontograma_d33()
    this.actualizar_odontograma_d34()
    this.actualizar_odontograma_d35()
    this.actualizar_odontograma_d36()
    this.actualizar_odontograma_d37()
    this.actualizar_odontograma_d38()
    this.actualizar_odontograma_d41()
    this.actualizar_odontograma_d42()
    this.actualizar_odontograma_d43()
    this.actualizar_odontograma_d44()
    this.actualizar_odontograma_d45()
    this.actualizar_odontograma_d46()
    this.actualizar_odontograma_d47()
    this.actualizar_odontograma_d48()
    this.actualizar_odontograma_d51()
    this.actualizar_odontograma_d52()
    this.actualizar_odontograma_d53()
    this.actualizar_odontograma_d54()
    this.actualizar_odontograma_d55()
    this.actualizar_odontograma_d61()
    this.actualizar_odontograma_d62()
    this.actualizar_odontograma_d63()
    this.actualizar_odontograma_d64()
    this.actualizar_odontograma_d65()
    this.actualizar_odontograma_d71()
    this.actualizar_odontograma_d72()
    this.actualizar_odontograma_d73()
    this.actualizar_odontograma_d74()
    this.actualizar_odontograma_d75()
    this.actualizar_odontograma_d81()
    this.actualizar_odontograma_d82()
    this.actualizar_odontograma_d83()
    this.actualizar_odontograma_d84()
    this.actualizar_odontograma_d85()
  }
    actualizar_odontograma_d11(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d11a,
      'id_detalle_odontograma' : this.id_d11a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d11b,
            'id_detalle_odontograma' : this.id_d11b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d11c,
                  'id_detalle_odontograma' : this.id_d11c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d11d,
                        'id_detalle_odontograma' : this.id_d11d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d11e,
                              'id_detalle_odontograma' : this.id_d11e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d12(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d12a,
      'id_detalle_odontograma' : this.id_d12a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d12b,
            'id_detalle_odontograma' : this.id_d12b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d12c,
                  'id_detalle_odontograma' : this.id_d12c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d12d,
                        'id_detalle_odontograma' : this.id_d12d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d12e,
                              'id_detalle_odontograma' : this.id_d12e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d13(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d13a,
      'id_detalle_odontograma' : this.id_d13a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d13b,
            'id_detalle_odontograma' : this.id_d13b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d13c,
                  'id_detalle_odontograma' : this.id_d13c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d13d,
                        'id_detalle_odontograma' : this.id_d13d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d13e,
                              'id_detalle_odontograma' : this.id_d13e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d14(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d14a,
      'id_detalle_odontograma' : this.id_d14a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d14b,
            'id_detalle_odontograma' : this.id_d14b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d14c,
                  'id_detalle_odontograma' : this.id_d14c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d14d,
                        'id_detalle_odontograma' : this.id_d14d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d14e,
                              'id_detalle_odontograma' : this.id_d14e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d15(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d15a,
      'id_detalle_odontograma' : this.id_d15a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d15b,
            'id_detalle_odontograma' : this.id_d15b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d15c,
                  'id_detalle_odontograma' : this.id_d15c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d15d,
                        'id_detalle_odontograma' : this.id_d15d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d15e,
                              'id_detalle_odontograma' : this.id_d15e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d16(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d16a,
      'id_detalle_odontograma' : this.id_d16a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d16b,
            'id_detalle_odontograma' : this.id_d16b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d16c,
                  'id_detalle_odontograma' : this.id_d16c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d16d,
                        'id_detalle_odontograma' : this.id_d16d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d16e,
                              'id_detalle_odontograma' : this.id_d16e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d17(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d17a,
      'id_detalle_odontograma' : this.id_d17a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d17b,
            'id_detalle_odontograma' : this.id_d17b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d17c,
                  'id_detalle_odontograma' : this.id_d17c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d17d,
                        'id_detalle_odontograma' : this.id_d17d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d17e,
                              'id_detalle_odontograma' : this.id_d17e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d18(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d18a,
      'id_detalle_odontograma' : this.id_d18a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d18b,
            'id_detalle_odontograma' : this.id_d18b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d18c,
                  'id_detalle_odontograma' : this.id_d18c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d18d,
                        'id_detalle_odontograma' : this.id_d18d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d18e,
                              'id_detalle_odontograma' : this.id_d18e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d21(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d21a,
      'id_detalle_odontograma' : this.id_d21a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d21b,
            'id_detalle_odontograma' : this.id_d21b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d21c,
                  'id_detalle_odontograma' : this.id_d21c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d21d,
                        'id_detalle_odontograma' : this.id_d21d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d21e,
                              'id_detalle_odontograma' : this.id_d21e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d22(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d22a,
      'id_detalle_odontograma' : this.id_d22a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d22b,
            'id_detalle_odontograma' : this.id_d22b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d22c,
                  'id_detalle_odontograma' : this.id_d22c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d22d,
                        'id_detalle_odontograma' : this.id_d22d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d22e,
                              'id_detalle_odontograma' : this.id_d22e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d23(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d23a,
      'id_detalle_odontograma' : this.id_d23a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d23b,
            'id_detalle_odontograma' : this.id_d23b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d23c,
                  'id_detalle_odontograma' : this.id_d23c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d23d,
                        'id_detalle_odontograma' : this.id_d23d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d23e,
                              'id_detalle_odontograma' : this.id_d23e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d24(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d24a,
      'id_detalle_odontograma' : this.id_d24a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d24b,
            'id_detalle_odontograma' : this.id_d24b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d24c,
                  'id_detalle_odontograma' : this.id_d24c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d24d,
                        'id_detalle_odontograma' : this.id_d24d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d24e,
                              'id_detalle_odontograma' : this.id_d24e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d25(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d25a,
      'id_detalle_odontograma' : this.id_d25a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d25b,
            'id_detalle_odontograma' : this.id_d25b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d25c,
                  'id_detalle_odontograma' : this.id_d25c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d25d,
                        'id_detalle_odontograma' : this.id_d25d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d25e,
                              'id_detalle_odontograma' : this.id_d25e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d26(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d26a,
      'id_detalle_odontograma' : this.id_d26a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d26b,
            'id_detalle_odontograma' : this.id_d26b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d26c,
                  'id_detalle_odontograma' : this.id_d26c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d26d,
                        'id_detalle_odontograma' : this.id_d26d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d26e,
                              'id_detalle_odontograma' : this.id_d26e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d27(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d27a,
      'id_detalle_odontograma' : this.id_d27a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d27b,
            'id_detalle_odontograma' : this.id_d27b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d27c,
                  'id_detalle_odontograma' : this.id_d27c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d27d,
                        'id_detalle_odontograma' : this.id_d27d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d27e,
                              'id_detalle_odontograma' : this.id_d27e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d28(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d28a,
      'id_detalle_odontograma' : this.id_d28a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d28b,
            'id_detalle_odontograma' : this.id_d28b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d28c,
                  'id_detalle_odontograma' : this.id_d28c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d28d,
                        'id_detalle_odontograma' : this.id_d28d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d28e,
                              'id_detalle_odontograma' : this.id_d28e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d31(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d31a,
      'id_detalle_odontograma' : this.id_d31a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d31b,
            'id_detalle_odontograma' : this.id_d31b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d31c,
                  'id_detalle_odontograma' : this.id_d31c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d31d,
                        'id_detalle_odontograma' : this.id_d31d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d31e,
                              'id_detalle_odontograma' : this.id_d31e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d32(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d32a,
      'id_detalle_odontograma' : this.id_d32a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d32b,
            'id_detalle_odontograma' : this.id_d32b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d32c,
                  'id_detalle_odontograma' : this.id_d32c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d32d,
                        'id_detalle_odontograma' : this.id_d32d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d32e,
                              'id_detalle_odontograma' : this.id_d32e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d33(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d33a,
      'id_detalle_odontograma' : this.id_d33a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d33b,
            'id_detalle_odontograma' : this.id_d33b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d33c,
                  'id_detalle_odontograma' : this.id_d33c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d33d,
                        'id_detalle_odontograma' : this.id_d33d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d33e,
                              'id_detalle_odontograma' : this.id_d33e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d34(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d34a,
      'id_detalle_odontograma' : this.id_d34a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d34b,
            'id_detalle_odontograma' : this.id_d34b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d34c,
                  'id_detalle_odontograma' : this.id_d34c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d34d,
                        'id_detalle_odontograma' : this.id_d34d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d34e,
                              'id_detalle_odontograma' : this.id_d34e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d35(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d35a,
      'id_detalle_odontograma' : this.id_d35a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d35b,
            'id_detalle_odontograma' : this.id_d35b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d35c,
                  'id_detalle_odontograma' : this.id_d35c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d35d,
                        'id_detalle_odontograma' : this.id_d35d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d35e,
                              'id_detalle_odontograma' : this.id_d35e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d36(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d36a,
      'id_detalle_odontograma' : this.id_d36a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d36b,
            'id_detalle_odontograma' : this.id_d36b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d36c,
                  'id_detalle_odontograma' : this.id_d36c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d36d,
                        'id_detalle_odontograma' : this.id_d36d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d36e,
                              'id_detalle_odontograma' : this.id_d36e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d37(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d37a,
      'id_detalle_odontograma' : this.id_d37a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d37b,
            'id_detalle_odontograma' : this.id_d37b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d37c,
                  'id_detalle_odontograma' : this.id_d37c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d37d,
                        'id_detalle_odontograma' : this.id_d37d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d37e,
                              'id_detalle_odontograma' : this.id_d37e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d38(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d38a,
      'id_detalle_odontograma' : this.id_d38a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d38b,
            'id_detalle_odontograma' : this.id_d38b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d38c,
                  'id_detalle_odontograma' : this.id_d38c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d38d,
                        'id_detalle_odontograma' : this.id_d38d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d38e,
                              'id_detalle_odontograma' : this.id_d38e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d41(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d41a,
      'id_detalle_odontograma' : this.id_d41a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d41b,
            'id_detalle_odontograma' : this.id_d41b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d41c,
                  'id_detalle_odontograma' : this.id_d41c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d41d,
                        'id_detalle_odontograma' : this.id_d41d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d41e,
                              'id_detalle_odontograma' : this.id_d41e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d42(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d42a,
      'id_detalle_odontograma' : this.id_d42a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d42b,
            'id_detalle_odontograma' : this.id_d42b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d42c,
                  'id_detalle_odontograma' : this.id_d42c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d42d,
                        'id_detalle_odontograma' : this.id_d42d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d42e,
                              'id_detalle_odontograma' : this.id_d42e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d43(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d43a,
      'id_detalle_odontograma' : this.id_d43a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d43b,
            'id_detalle_odontograma' : this.id_d43b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d43c,
                  'id_detalle_odontograma' : this.id_d43c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d43d,
                        'id_detalle_odontograma' : this.id_d43d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d43e,
                              'id_detalle_odontograma' : this.id_d43e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d44(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d44a,
      'id_detalle_odontograma' : this.id_d44a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d44b,
            'id_detalle_odontograma' : this.id_d44b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d44c,
                  'id_detalle_odontograma' : this.id_d44c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d44d,
                        'id_detalle_odontograma' : this.id_d44d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d44e,
                              'id_detalle_odontograma' : this.id_d44e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d45(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d45a,
      'id_detalle_odontograma' : this.id_d45a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d45b,
            'id_detalle_odontograma' : this.id_d45b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d45c,
                  'id_detalle_odontograma' : this.id_d45c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d45d,
                        'id_detalle_odontograma' : this.id_d45d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d45e,
                              'id_detalle_odontograma' : this.id_d45e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d46(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d46a,
      'id_detalle_odontograma' : this.id_d46a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d46b,
            'id_detalle_odontograma' : this.id_d46b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d46c,
                  'id_detalle_odontograma' : this.id_d46c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d46d,
                        'id_detalle_odontograma' : this.id_d46d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d46e,
                              'id_detalle_odontograma' : this.id_d46e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d47(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d47a,
      'id_detalle_odontograma' : this.id_d47a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d47b,
            'id_detalle_odontograma' : this.id_d47b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d47c,
                  'id_detalle_odontograma' : this.id_d47c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d47d,
                        'id_detalle_odontograma' : this.id_d47d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d47e,
                              'id_detalle_odontograma' : this.id_d47e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d48(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d48a,
      'id_detalle_odontograma' : this.id_d48a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d48b,
            'id_detalle_odontograma' : this.id_d48b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d48c,
                  'id_detalle_odontograma' : this.id_d48c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d48d,
                        'id_detalle_odontograma' : this.id_d48d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d48e,
                              'id_detalle_odontograma' : this.id_d48e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d51(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d51a,
      'id_detalle_odontograma' : this.id_d51a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d51b,
            'id_detalle_odontograma' : this.id_d51b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d51c,
                  'id_detalle_odontograma' : this.id_d51c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d51d,
                        'id_detalle_odontograma' : this.id_d51d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d51e,
                              'id_detalle_odontograma' : this.id_d51e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d52(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d52a,
      'id_detalle_odontograma' : this.id_d52a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d52b,
            'id_detalle_odontograma' : this.id_d52b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d52c,
                  'id_detalle_odontograma' : this.id_d52c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d52d,
                        'id_detalle_odontograma' : this.id_d52d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d52e,
                              'id_detalle_odontograma' : this.id_d52e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d53(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d53a,
      'id_detalle_odontograma' : this.id_d53a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d53b,
            'id_detalle_odontograma' : this.id_d53b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d53c,
                  'id_detalle_odontograma' : this.id_d53c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d53d,
                        'id_detalle_odontograma' : this.id_d53d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d53e,
                              'id_detalle_odontograma' : this.id_d53e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d54(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d54a,
      'id_detalle_odontograma' : this.id_d54a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d54b,
            'id_detalle_odontograma' : this.id_d54b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d54c,
                  'id_detalle_odontograma' : this.id_d54c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d54d,
                        'id_detalle_odontograma' : this.id_d54d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d54e,
                              'id_detalle_odontograma' : this.id_d54e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d55(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d55a,
      'id_detalle_odontograma' : this.id_d55a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d55b,
            'id_detalle_odontograma' : this.id_d55b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d55c,
                  'id_detalle_odontograma' : this.id_d55c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d55d,
                        'id_detalle_odontograma' : this.id_d55d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d55e,
                              'id_detalle_odontograma' : this.id_d55e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d61(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d61a,
      'id_detalle_odontograma' : this.id_d61a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d61b,
            'id_detalle_odontograma' : this.id_d61b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d61c,
                  'id_detalle_odontograma' : this.id_d61c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d61d,
                        'id_detalle_odontograma' : this.id_d61d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d61e,
                              'id_detalle_odontograma' : this.id_d61e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d62(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d62a,
      'id_detalle_odontograma' : this.id_d62a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d62b,
            'id_detalle_odontograma' : this.id_d62b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d62c,
                  'id_detalle_odontograma' : this.id_d62c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d62d,
                        'id_detalle_odontograma' : this.id_d62d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d62e,
                              'id_detalle_odontograma' : this.id_d62e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d63(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d63a,
      'id_detalle_odontograma' : this.id_d63a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d63b,
            'id_detalle_odontograma' : this.id_d63b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d63c,
                  'id_detalle_odontograma' : this.id_d63c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d63d,
                        'id_detalle_odontograma' : this.id_d63d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d63e,
                              'id_detalle_odontograma' : this.id_d63e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d64(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d64a,
      'id_detalle_odontograma' : this.id_d64a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d64b,
            'id_detalle_odontograma' : this.id_d64b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d64c,
                  'id_detalle_odontograma' : this.id_d64c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d64d,
                        'id_detalle_odontograma' : this.id_d64d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d64e,
                              'id_detalle_odontograma' : this.id_d64e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d65(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d65a,
      'id_detalle_odontograma' : this.id_d65a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d65b,
            'id_detalle_odontograma' : this.id_d65b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d65c,
                  'id_detalle_odontograma' : this.id_d65c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d65d,
                        'id_detalle_odontograma' : this.id_d65d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d65e,
                              'id_detalle_odontograma' : this.id_d65e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d71(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d71a,
      'id_detalle_odontograma' : this.id_d71a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d71b,
            'id_detalle_odontograma' : this.id_d71b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d71c,
                  'id_detalle_odontograma' : this.id_d71c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d71d,
                        'id_detalle_odontograma' : this.id_d71d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d71e,
                              'id_detalle_odontograma' : this.id_d71e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d72(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d72a,
      'id_detalle_odontograma' : this.id_d72a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d72b,
            'id_detalle_odontograma' : this.id_d72b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d72c,
                  'id_detalle_odontograma' : this.id_d72c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d72d,
                        'id_detalle_odontograma' : this.id_d72d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d72e,
                              'id_detalle_odontograma' : this.id_d72e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d73(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d73a,
      'id_detalle_odontograma' : this.id_d73a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d73b,
            'id_detalle_odontograma' : this.id_d73b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d73c,
                  'id_detalle_odontograma' : this.id_d73c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d73d,
                        'id_detalle_odontograma' : this.id_d73d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d73e,
                              'id_detalle_odontograma' : this.id_d73e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d74(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d74a,
      'id_detalle_odontograma' : this.id_d74a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d74b,
            'id_detalle_odontograma' : this.id_d74b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d74c,
                  'id_detalle_odontograma' : this.id_d74c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d74d,
                        'id_detalle_odontograma' : this.id_d74d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d74e,
                              'id_detalle_odontograma' : this.id_d74e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d75(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d75a,
      'id_detalle_odontograma' : this.id_d75a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d75b,
            'id_detalle_odontograma' : this.id_d75b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d75c,
                  'id_detalle_odontograma' : this.id_d75c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d75d,
                        'id_detalle_odontograma' : this.id_d75d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d75e,
                              'id_detalle_odontograma' : this.id_d75e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d81(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d81a,
      'id_detalle_odontograma' : this.id_d81a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d81b,
            'id_detalle_odontograma' : this.id_d81b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d81c,
                  'id_detalle_odontograma' : this.id_d81c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d81d,
                        'id_detalle_odontograma' : this.id_d81d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d81e,
                              'id_detalle_odontograma' : this.id_d81e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d82(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d82a,
      'id_detalle_odontograma' : this.id_d82a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d82b,
            'id_detalle_odontograma' : this.id_d82b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d82c,
                  'id_detalle_odontograma' : this.id_d82c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d82d,
                        'id_detalle_odontograma' : this.id_d82d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d82e,
                              'id_detalle_odontograma' : this.id_d82e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d83(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d83a,
      'id_detalle_odontograma' : this.id_d83a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d83b,
            'id_detalle_odontograma' : this.id_d83b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d83c,
                  'id_detalle_odontograma' : this.id_d83c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d83d,
                        'id_detalle_odontograma' : this.id_d83d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d83e,
                              'id_detalle_odontograma' : this.id_d83e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d84(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d84a,
      'id_detalle_odontograma' : this.id_d84a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d84b,
            'id_detalle_odontograma' : this.id_d84b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d84c,
                  'id_detalle_odontograma' : this.id_d84c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d84d,
                        'id_detalle_odontograma' : this.id_d84d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d84e,
                              'id_detalle_odontograma' : this.id_d84e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
    actualizar_odontograma_d85(){
    let body={
      'accion': 'actualizar_odontograma',
      'detalle': this.d85a,
      'id_detalle_odontograma' : this.id_d85a
    }
    console.log(body)
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let body={
            'accion': 'actualizar_odontograma',
            'detalle': this.d85b,
            'id_detalle_odontograma' : this.id_d85b
          }
          console.log(body)
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){
                let body={
                  'accion': 'actualizar_odontograma',
                  'detalle': this.d85c,
                  'id_detalle_odontograma' : this.id_d85c
                }
                console.log(body)
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){
                      let body={
                        'accion': 'actualizar_odontograma',
                        'detalle': this.d85d,
                        'id_detalle_odontograma' : this.id_d85d
                      }
                      console.log(body)
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){
                            let body={
                              'accion': 'actualizar_odontograma',
                              'detalle': this.d85e,
                              'id_detalle_odontograma' : this.id_d85e
                            }
                            console.log(body)
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){

                                }else{
                                }
                              });
                            });
                          }else{
                          }
                        });
                      });
                    }else{
                    }
                  });
                });
              }else{
              }
            });
          });
        }else{
        }
      });
    });
  }
  consulta_odontograma(){
    let body={
      'accion': 'consulta_detalle_odontograma',
      'id_historia': this.id_historia
    }
    return new Promise(resolve=>{
      this.servicio.postData(body).subscribe((res:any)=>{
        if(res.estado){
          let dientes=res.datos

          this.d11a=dientes[0].detalle
          this.d11b=dientes[1].detalle
          this.d11c=dientes[2].detalle
          this.d11d=dientes[3].detalle
          this.d11e=dientes[4].detalle

          this.d12a=dientes[5].detalle
          this.d12b=dientes[6].detalle
          this.d12c=dientes[7].detalle
          this.d12d=dientes[8].detalle
          this.d12e=dientes[9].detalle

          this.d13a=dientes[10].detalle
          this.d13b=dientes[11].detalle
          this.d13c=dientes[12].detalle
          this.d13d=dientes[13].detalle
          this.d13e=dientes[14].detalle

          this.d14a=dientes[15].detalle
          this.d14b=dientes[16].detalle
          this.d14c=dientes[17].detalle
          this.d14d=dientes[18].detalle
          this.d14e=dientes[19].detalle

          this.d15a=dientes[20].detalle
          this.d15b=dientes[21].detalle
          this.d15c=dientes[22].detalle
          this.d15d=dientes[23].detalle
          this.d15e=dientes[24].detalle

          this.d16a=dientes[25].detalle
          this.d16b=dientes[26].detalle
          this.d16c=dientes[27].detalle
          this.d16d=dientes[28].detalle
          this.d16e=dientes[29].detalle

          this.d17a=dientes[30].detalle
          this.d17b=dientes[31].detalle
          this.d17c=dientes[32].detalle
          this.d17d=dientes[33].detalle
          this.d17e=dientes[34].detalle

          this.d18a=dientes[35].detalle
          this.d18b=dientes[36].detalle
          this.d18c=dientes[37].detalle
          this.d18d=dientes[38].detalle
          this.d18e=dientes[39].detalle
            // CUADRANTE  DIENTES 2

          this.d21a=dientes[40].detalle
          this.d21b=dientes[41].detalle
          this.d21c=dientes[42].detalle
          this.d21d=dientes[43].detalle
          this.d21e=dientes[44].detalle

          this.d22a=dientes[45].detalle
          this.d22b=dientes[46].detalle
          this.d22c=dientes[47].detalle
          this.d22d=dientes[48].detalle
          this.d22e=dientes[49].detalle

          this.d23a=dientes[50].detalle
          this.d23b=dientes[51].detalle
          this.d23c=dientes[52].detalle
          this.d23d=dientes[53].detalle
          this.d23e=dientes[54].detalle

          this.d24a=dientes[55].detalle
          this.d24b=dientes[56].detalle
          this.d24c=dientes[57].detalle
          this.d24d=dientes[58].detalle
          this.d24e=dientes[59].detalle

          this.d25a=dientes[60].detalle
          this.d25b=dientes[61].detalle
          this.d25c=dientes[62].detalle
          this.d25d=dientes[63].detalle
          this.d25e=dientes[64].detalle

          this.d26a=dientes[65].detalle
          this.d26b=dientes[66].detalle
          this.d26c=dientes[67].detalle
          this.d26d=dientes[68].detalle
          this.d26e=dientes[69].detalle

          this.d27a=dientes[70].detalle
          this.d27b=dientes[71].detalle
          this.d27c=dientes[72].detalle
          this.d27d=dientes[73].detalle
          this.d27e=dientes[74].detalle

          this.d28a=dientes[75].detalle
          this.d28b=dientes[76].detalle
          this.d28c=dientes[77].detalle
          this.d28d=dientes[78].detalle
          this.d28e=dientes[79].detalle
            // CUADRANTE  DIENTES 3

          this.d31a=dientes[80].detalle
          this.d31b=dientes[81].detalle
          this.d31c=dientes[82].detalle
          this.d31d=dientes[83].detalle
          this.d31e=dientes[84].detalle

          this.d32a=dientes[85].detalle
          this.d32b=dientes[86].detalle
          this.d32c=dientes[87].detalle
          this.d32d=dientes[88].detalle
          this.d32e=dientes[89].detalle

          this.d33a=dientes[90].detalle
          this.d33b=dientes[91].detalle
          this.d33c=dientes[92].detalle
          this.d33d=dientes[93].detalle
          this.d33e=dientes[94].detalle

          this.d34a=dientes[95].detalle
          this.d34b=dientes[96].detalle
          this.d34c=dientes[97].detalle
          this.d34d=dientes[98].detalle
          this.d34e=dientes[99].detalle

          this.d35a=dientes[100].detalle
          this.d35b=dientes[101].detalle
          this.d35c=dientes[102].detalle
          this.d35d=dientes[103].detalle
          this.d35e=dientes[104].detalle

          this.d36a=dientes[105].detalle
          this.d36b=dientes[106].detalle
          this.d36c=dientes[107].detalle
          this.d36d=dientes[108].detalle
          this.d36e=dientes[109].detalle

          this.d37a=dientes[110].detalle
          this.d37b=dientes[111].detalle
          this.d37c=dientes[112].detalle
          this.d37d=dientes[113].detalle
          this.d37e=dientes[114].detalle

          this.d38a=dientes[115].detalle
          this.d38b=dientes[116].detalle
          this.d38c=dientes[117].detalle
          this.d38d=dientes[118].detalle
          this.d38e=dientes[119].detalle
            // CUADRANTE  DIENTES 4

          this.d41a=dientes[120].detalle
          this.d41b=dientes[121].detalle
          this.d41c=dientes[122].detalle
          this.d41d=dientes[123].detalle
          this.d41e=dientes[124].detalle

          this.d42a=dientes[125].detalle
          this.d42b=dientes[126].detalle
          this.d42c=dientes[127].detalle
          this.d42d=dientes[128].detalle
          this.d42e=dientes[129].detalle

          this.d43a=dientes[130].detalle
          this.d43b=dientes[131].detalle
          this.d43c=dientes[132].detalle
          this.d43d=dientes[133].detalle
          this.d43e=dientes[134].detalle

          this.d44a=dientes[135].detalle
          this.d44b=dientes[136].detalle
          this.d44c=dientes[137].detalle
          this.d44d=dientes[138].detalle
          this.d44e=dientes[139].detalle

          this.d45a=dientes[140].detalle
          this.d45b=dientes[141].detalle
          this.d45c=dientes[142].detalle
          this.d45d=dientes[143].detalle
          this.d45e=dientes[144].detalle

          this.d46a=dientes[145].detalle
          this.d46b=dientes[146].detalle
          this.d46c=dientes[147].detalle
          this.d46d=dientes[148].detalle
          this.d46e=dientes[149].detalle

          this.d47a=dientes[150].detalle
          this.d47b=dientes[151].detalle
          this.d47c=dientes[152].detalle
          this.d47d=dientes[153].detalle
          this.d47e=dientes[154].detalle

          this.d48a=dientes[155].detalle
          this.d48b=dientes[156].detalle
          this.d48c=dientes[157].detalle
          this.d48d=dientes[158].detalle
          this.d48e=dientes[159].detalle
            // CUADRANTE  DIENTES 5

          this.d51a=dientes[160].detalle
          this.d51b=dientes[161].detalle
          this.d51c=dientes[162].detalle
          this.d51d=dientes[163].detalle
          this.d51e=dientes[164].detalle

          this.d52a=dientes[165].detalle
          this.d52b=dientes[166].detalle
          this.d52c=dientes[167].detalle
          this.d52d=dientes[168].detalle
          this.d52e=dientes[169].detalle

          this.d53a=dientes[170].detalle
          this.d53b=dientes[171].detalle
          this.d53c=dientes[172].detalle
          this.d53d=dientes[173].detalle
          this.d53e=dientes[174].detalle

          this.d54a=dientes[175].detalle
          this.d54b=dientes[176].detalle
          this.d54c=dientes[177].detalle
          this.d54d=dientes[178].detalle
          this.d54e=dientes[179].detalle

          this.d55a=dientes[180].detalle
          this.d55b=dientes[181].detalle
          this.d55c=dientes[182].detalle
          this.d55d=dientes[183].detalle
          this.d55e=dientes[184].detalle
            // CUADRANTE  DIENTES 6

          this.d61a=dientes[185].detalle
          this.d61b=dientes[186].detalle
          this.d61c=dientes[187].detalle
          this.d61d=dientes[188].detalle
          this.d61e=dientes[189].detalle

          this.d62a=dientes[190].detalle
          this.d62b=dientes[191].detalle
          this.d62c=dientes[192].detalle
          this.d62d=dientes[193].detalle
          this.d62e=dientes[194].detalle

          this.d63a=dientes[195].detalle
          this.d63b=dientes[196].detalle
          this.d63c=dientes[197].detalle
          this.d63d=dientes[198].detalle
          this.d63e=dientes[199].detalle

          this.d64a=dientes[200].detalle
          this.d64b=dientes[201].detalle
          this.d64c=dientes[202].detalle
          this.d64d=dientes[203].detalle
          this.d64e=dientes[204].detalle

          this.d65a=dientes[205].detalle
          this.d65b=dientes[206].detalle
          this.d65c=dientes[207].detalle
          this.d65d=dientes[208].detalle
          this.d65e=dientes[209].detalle
            // CUADRANTE  DIENTES 7

          this.d71a=dientes[210].detalle
          this.d71b=dientes[211].detalle
          this.d71c=dientes[212].detalle
          this.d71d=dientes[213].detalle
          this.d71e=dientes[214].detalle

          this.d72a=dientes[215].detalle
          this.d72b=dientes[216].detalle
          this.d72c=dientes[217].detalle
          this.d72d=dientes[218].detalle
          this.d72e=dientes[219].detalle

          this.d73a=dientes[220].detalle
          this.d73b=dientes[221].detalle
          this.d73c=dientes[222].detalle
          this.d73d=dientes[223].detalle
          this.d73e=dientes[224].detalle

          this.d74a=dientes[225].detalle
          this.d74b=dientes[226].detalle
          this.d74c=dientes[227].detalle
          this.d74d=dientes[228].detalle
          this.d74e=dientes[229].detalle

          this.d75a=dientes[230].detalle
          this.d75b=dientes[231].detalle
          this.d75c=dientes[232].detalle
          this.d75d=dientes[233].detalle
          this.d75e=dientes[234].detalle
            // CUADRANTE  DIENTES 8

          this.d81a=dientes[235].detalle
          this.d81b=dientes[236].detalle
          this.d81c=dientes[237].detalle
          this.d81d=dientes[238].detalle
          this.d81e=dientes[239].detalle

          this.d82a=dientes[240].detalle
          this.d82b=dientes[241].detalle
          this.d82c=dientes[242].detalle
          this.d82d=dientes[243].detalle
          this.d82e=dientes[244].detalle

          this.d83a=dientes[245].detalle
          this.d83b=dientes[246].detalle
          this.d83c=dientes[247].detalle
          this.d83d=dientes[248].detalle
          this.d83e=dientes[249].detalle

          this.d84a=dientes[250].detalle
          this.d84b=dientes[251].detalle
          this.d84c=dientes[252].detalle
          this.d84d=dientes[253].detalle
          this.d84e=dientes[254].detalle

          this.d85a=dientes[255].detalle
          this.d85b=dientes[256].detalle
          this.d85c=dientes[257].detalle
          this.d85d=dientes[258].detalle
          this.d85e=dientes[259].detalle

          if(this.d11a==1){
            this.t11a='Sano'
          }
          else if(this.d11a==2){
            this.t11a='Extracción indicada'
          }
          else if(this.d11a==3){
            this.t11a='Pérdida por caries'
          }
          else if(this.d11a==4){
            this.t11a='Sellante necesario'
          }
          else if(this.d11a==5){
            this.t11a='Sellante realizado'
          }
          else if(this.d11a==6){
            this.t11a='Caries'
          }
          else if(this.d11a==7){
            this.t11a='Obturado'
          }
          else if(this.d11a==8){
            this.t11a='Endodoncia'
          }
          else if(this.d11a==9){
            this.t11a='Pérdida'
          }
          else if(this.d11a==10){
            this.t11a='Protesis total'
          }
          else if(this.d11a==11){
            this.t11a='Protesis fija'
          }
          else if(this.d11a==12){
            this.t11a='Protesis removible'
          }

          if(this.d11b==1){
            this.t11b='Sano'
          }
          else if(this.d11b==2){
            this.t11b='Extracción indicada'
          }
          else if(this.d11b==3){
            this.t11b='Pérdida por caries'
          }
          else if(this.d11b==4){
            this.t11b='Sellante necesario'
          }
          else if(this.d11b==5){
            this.t11b='Sellante realizado'
          }
          else if(this.d11b==6){
            this.t11b='Caries'
          }
          else if(this.d11b==7){
            this.t11b='Obturado'
          }
          else if(this.d11b==8){
            this.t11b='Endodoncia'
          }
          else if(this.d11b==9){
            this.t11b='Pérdida'
          }
          else if(this.d11b==10){
            this.t11b='Protesis total'
          }
          else if(this.d11b==11){
            this.t11b='Protesis fija'
          }
          else if(this.d11b==12){
            this.t11b='Protesis removible'
          }

          if(this.d11c==1){
            this.t11c='Sano'
          }
          else if(this.d11c==2){
            this.t11c='Extracción indicada'
          }
          else if(this.d11c==3){
            this.t11c='Pérdida por caries'
          }
          else if(this.d11c==4){
            this.t11c='Sellante necesario'
          }
          else if(this.d11c==5){
            this.t11c='Sellante realizado'
          }
          else if(this.d11c==6){
            this.t11c='Caries'
          }
          else if(this.d11c==7){
            this.t11c='Obturado'
          }
          else if(this.d11c==8){
            this.t11c='Endodoncia'
          }
          else if(this.d11c==9){
            this.t11c='Pérdida'
          }
          else if(this.d11c==10){
            this.t11c='Protesis total'
          }
          else if(this.d11c==11){
            this.t11c='Protesis fija'
          }
          else if(this.d11c==12){
            this.t11c='Protesis removible'
          }

          if(this.d11d==1){
            this.t11d='Sano'
          }
          else if(this.d11d==2){
            this.t11d='Extracción indicada'
          }
          else if(this.d11d==3){
            this.t11d='Pérdida por caries'
          }
          else if(this.d11d==4){
            this.t11d='Sellante necesario'
          }
          else if(this.d11d==5){
            this.t11d='Sellante realizado'
          }
          else if(this.d11d==6){
            this.t11d='Caries'
          }
          else if(this.d11d==7){
            this.t11d='Obturado'
          }
          else if(this.d11d==8){
            this.t11d='Endodoncia'
          }
          else if(this.d11d==9){
            this.t11d='Pérdida'
          }
          else if(this.d11d==10){
            this.t11d='Protesis total'
          }
          else if(this.d11d==11){
            this.t11d='Protesis fija'
          }
          else if(this.d11d==12){
            this.t11d='Protesis removible'
          }

          if(this.d11e==1){
            this.t11e='Sano'
          }
          else if(this.d11e==2){
            this.t11e='Extracción indicada'
          }
          else if(this.d11e==3){
            this.t11e='Pérdida por caries'
          }
          else if(this.d11e==4){
            this.t11e='Sellante necesario'
          }
          else if(this.d11e==5){
            this.t11e='Sellante realizado'
          }
          else if(this.d11e==6){
            this.t11e='Caries'
          }
          else if(this.d11e==7){
            this.t11e='Obturado'
          }
          else if(this.d11e==8){
            this.t11e='Endodoncia'
          }
          else if(this.d11e==9){
            this.t11e='Pérdida'
          }
          else if(this.d11e==10){
            this.t11e='Protesis total'
          }
          else if(this.d11e==11){
            this.t11e='Protesis fija'
          }
          else if(this.d11e==12){
            this.t11e='Protesis removible'
          }

          if(this.d12a==1){
            this.t12a='Sano'
          }
          else if(this.d12a==2){
            this.t12a='Extracción indicada'
          }
          else if(this.d12a==3){
            this.t12a='Pérdida por caries'
          }
          else if(this.d12a==4){
            this.t12a='Sellante necesario'
          }
          else if(this.d12a==5){
            this.t12a='Sellante realizado'
          }
          else if(this.d12a==6){
            this.t12a='Caries'
          }
          else if(this.d12a==7){
            this.t12a='Obturado'
          }
          else if(this.d12a==8){
            this.t12a='Endodoncia'
          }
          else if(this.d12a==9){
            this.t12a='Pérdida'
          }
          else if(this.d12a==10){
            this.t12a='Protesis total'
          }
          else if(this.d12a==11){
            this.t12a='Protesis fija'
          }
          else if(this.d12a==12){
            this.t12a='Protesis removible'
          }

          if(this.d12b==1){
            this.t12b='Sano'
          }
          else if(this.d12b==2){
            this.t12b='Extracción indicada'
          }
          else if(this.d12b==3){
            this.t12b='Pérdida por caries'
          }
          else if(this.d12b==4){
            this.t12b='Sellante necesario'
          }
          else if(this.d12b==5){
            this.t12b='Sellante realizado'
          }
          else if(this.d12b==6){
            this.t12b='Caries'
          }
          else if(this.d12b==7){
            this.t12b='Obturado'
          }
          else if(this.d12b==8){
            this.t12b='Endodoncia'
          }
          else if(this.d12b==9){
            this.t12b='Pérdida'
          }
          else if(this.d12b==10){
            this.t12b='Protesis total'
          }
          else if(this.d12b==11){
            this.t12b='Protesis fija'
          }
          else if(this.d12b==12){
            this.t12b='Protesis removible'
          }

          if(this.d12c==1){
            this.t12c='Sano'
          }
          else if(this.d12c==2){
            this.t12c='Extracción indicada'
          }
          else if(this.d12c==3){
            this.t12c='Pérdida por caries'
          }
          else if(this.d12c==4){
            this.t12c='Sellante necesario'
          }
          else if(this.d12c==5){
            this.t12c='Sellante realizado'
          }
          else if(this.d12c==6){
            this.t12c='Caries'
          }
          else if(this.d12c==7){
            this.t12c='Obturado'
          }
          else if(this.d12c==8){
            this.t12c='Endodoncia'
          }
          else if(this.d12c==9){
            this.t12c='Pérdida'
          }
          else if(this.d12c==10){
            this.t12c='Protesis total'
          }
          else if(this.d12c==11){
            this.t12c='Protesis fija'
          }
          else if(this.d12c==12){
            this.t12c='Protesis removible'
          }

          if(this.d12d==1){
            this.t12d='Sano'
          }
          else if(this.d12d==2){
            this.t12d='Extracción indicada'
          }
          else if(this.d12d==3){
            this.t12d='Pérdida por caries'
          }
          else if(this.d12d==4){
            this.t12d='Sellante necesario'
          }
          else if(this.d12d==5){
            this.t12d='Sellante realizado'
          }
          else if(this.d12d==6){
            this.t12d='Caries'
          }
          else if(this.d12d==7){
            this.t12d='Obturado'
          }
          else if(this.d12d==8){
            this.t12d='Endodoncia'
          }
          else if(this.d12d==9){
            this.t12d='Pérdida'
          }
          else if(this.d12d==10){
            this.t12d='Protesis total'
          }
          else if(this.d12d==11){
            this.t12d='Protesis fija'
          }
          else if(this.d12d==12){
            this.t12d='Protesis removible'
          }

          if(this.d12e==1){
            this.t12e='Sano'
          }
          else if(this.d12e==2){
            this.t12e='Extracción indicada'
          }
          else if(this.d12e==3){
            this.t12e='Pérdida por caries'
          }
          else if(this.d12e==4){
            this.t12e='Sellante necesario'
          }
          else if(this.d12e==5){
            this.t12e='Sellante realizado'
          }
          else if(this.d12e==6){
            this.t12e='Caries'
          }
          else if(this.d12e==7){
            this.t12e='Obturado'
          }
          else if(this.d12e==8){
            this.t12e='Endodoncia'
          }
          else if(this.d12e==9){
            this.t12e='Pérdida'
          }
          else if(this.d12e==10){
            this.t12e='Protesis total'
          }
          else if(this.d12e==11){
            this.t12e='Protesis fija'
          }
          else if(this.d12e==12){
            this.t12e='Protesis removible'
          }

          if(this.d13a==1){
            this.t13a='Sano'
          }
          else if(this.d13a==2){
            this.t13a='Extracción indicada'
          }
          else if(this.d13a==3){
            this.t13a='Pérdida por caries'
          }
          else if(this.d13a==4){
            this.t13a='Sellante necesario'
          }
          else if(this.d13a==5){
            this.t13a='Sellante realizado'
          }
          else if(this.d13a==6){
            this.t13a='Caries'
          }
          else if(this.d13a==7){
            this.t13a='Obturado'
          }
          else if(this.d13a==8){
            this.t13a='Endodoncia'
          }
          else if(this.d13a==9){
            this.t13a='Pérdida'
          }
          else if(this.d13a==10){
            this.t13a='Protesis total'
          }
          else if(this.d13a==11){
            this.t13a='Protesis fija'
          }
          else if(this.d13a==12){
            this.t13a='Protesis removible'
          }

          if(this.d13b==1){
            this.t13b='Sano'
          }
          else if(this.d13b==2){
            this.t13b='Extracción indicada'
          }
          else if(this.d13b==3){
            this.t13b='Pérdida por caries'
          }
          else if(this.d13b==4){
            this.t13b='Sellante necesario'
          }
          else if(this.d13b==5){
            this.t13b='Sellante realizado'
          }
          else if(this.d13b==6){
            this.t13b='Caries'
          }
          else if(this.d13b==7){
            this.t13b='Obturado'
          }
          else if(this.d13b==8){
            this.t13b='Endodoncia'
          }
          else if(this.d13b==9){
            this.t13b='Pérdida'
          }
          else if(this.d13b==10){
            this.t13b='Protesis total'
          }
          else if(this.d13b==11){
            this.t13b='Protesis fija'
          }
          else if(this.d13b==12){
            this.t13b='Protesis removible'
          }

          if(this.d13c==1){
            this.t13c='Sano'
          }
          else if(this.d13c==2){
            this.t13c='Extracción indicada'
          }
          else if(this.d13c==3){
            this.t13c='Pérdida por caries'
          }
          else if(this.d13c==4){
            this.t13c='Sellante necesario'
          }
          else if(this.d13c==5){
            this.t13c='Sellante realizado'
          }
          else if(this.d13c==6){
            this.t13c='Caries'
          }
          else if(this.d13c==7){
            this.t13c='Obturado'
          }
          else if(this.d13c==8){
            this.t13c='Endodoncia'
          }
          else if(this.d13c==9){
            this.t13c='Pérdida'
          }
          else if(this.d13c==10){
            this.t13c='Protesis total'
          }
          else if(this.d13c==11){
            this.t13c='Protesis fija'
          }
          else if(this.d13c==12){
            this.t13c='Protesis removible'
          }

          if(this.d13d==1){
            this.t13d='Sano'
          }
          else if(this.d13d==2){
            this.t13d='Extracción indicada'
          }
          else if(this.d13d==3){
            this.t13d='Pérdida por caries'
          }
          else if(this.d13d==4){
            this.t13d='Sellante necesario'
          }
          else if(this.d13d==5){
            this.t13d='Sellante realizado'
          }
          else if(this.d13d==6){
            this.t13d='Caries'
          }
          else if(this.d13d==7){
            this.t13d='Obturado'
          }
          else if(this.d13d==8){
            this.t13d='Endodoncia'
          }
          else if(this.d13d==9){
            this.t13d='Pérdida'
          }
          else if(this.d13d==10){
            this.t13d='Protesis total'
          }
          else if(this.d13d==11){
            this.t13d='Protesis fija'
          }
          else if(this.d13d==12){
            this.t13d='Protesis removible'
          }

          if(this.d13e==1){
            this.t13e='Sano'
          }
          else if(this.d13e==2){
            this.t13e='Extracción indicada'
          }
          else if(this.d13e==3){
            this.t13e='Pérdida por caries'
          }
          else if(this.d13e==4){
            this.t13e='Sellante necesario'
          }
          else if(this.d13e==5){
            this.t13e='Sellante realizado'
          }
          else if(this.d13e==6){
            this.t13e='Caries'
          }
          else if(this.d13e==7){
            this.t13e='Obturado'
          }
          else if(this.d13e==8){
            this.t13e='Endodoncia'
          }
          else if(this.d13e==9){
            this.t13e='Pérdida'
          }
          else if(this.d13e==10){
            this.t13e='Protesis total'
          }
          else if(this.d13e==11){
            this.t13e='Protesis fija'
          }
          else if(this.d13e==12){
            this.t13e='Protesis removible'
          }

          if(this.d14a==1){
            this.t14a='Sano'
          }
          else if(this.d14a==2){
            this.t14a='Extracción indicada'
          }
          else if(this.d14a==3){
            this.t14a='Pérdida por caries'
          }
          else if(this.d14a==4){
            this.t14a='Sellante necesario'
          }
          else if(this.d14a==5){
            this.t14a='Sellante realizado'
          }
          else if(this.d14a==6){
            this.t14a='Caries'
          }
          else if(this.d14a==7){
            this.t14a='Obturado'
          }
          else if(this.d14a==8){
            this.t14a='Endodoncia'
          }
          else if(this.d14a==9){
            this.t14a='Pérdida'
          }
          else if(this.d14a==10){
            this.t14a='Protesis total'
          }
          else if(this.d14a==11){
            this.t14a='Protesis fija'
          }
          else if(this.d14a==12){
            this.t14a='Protesis removible'
          }

          if(this.d14b==1){
            this.t14b='Sano'
          }
          else if(this.d14b==2){
            this.t14b='Extracción indicada'
          }
          else if(this.d14b==3){
            this.t14b='Pérdida por caries'
          }
          else if(this.d14b==4){
            this.t14b='Sellante necesario'
          }
          else if(this.d14b==5){
            this.t14b='Sellante realizado'
          }
          else if(this.d14b==6){
            this.t14b='Caries'
          }
          else if(this.d14b==7){
            this.t14b='Obturado'
          }
          else if(this.d14b==8){
            this.t14b='Endodoncia'
          }
          else if(this.d14b==9){
            this.t14b='Pérdida'
          }
          else if(this.d14b==10){
            this.t14b='Protesis total'
          }
          else if(this.d14b==11){
            this.t14b='Protesis fija'
          }
          else if(this.d14b==12){
            this.t14b='Protesis removible'
          }

          if(this.d14c==1){
            this.t14c='Sano'
          }
          else if(this.d14c==2){
            this.t14c='Extracción indicada'
          }
          else if(this.d14c==3){
            this.t14c='Pérdida por caries'
          }
          else if(this.d14c==4){
            this.t14c='Sellante necesario'
          }
          else if(this.d14c==5){
            this.t14c='Sellante realizado'
          }
          else if(this.d14c==6){
            this.t14c='Caries'
          }
          else if(this.d14c==7){
            this.t14c='Obturado'
          }
          else if(this.d14c==8){
            this.t14c='Endodoncia'
          }
          else if(this.d14c==9){
            this.t14c='Pérdida'
          }
          else if(this.d14c==10){
            this.t14c='Protesis total'
          }
          else if(this.d14c==11){
            this.t14c='Protesis fija'
          }
          else if(this.d14c==12){
            this.t14c='Protesis removible'
          }

          if(this.d14d==1){
            this.t14d='Sano'
          }
          else if(this.d14d==2){
            this.t14d='Extracción indicada'
          }
          else if(this.d14d==3){
            this.t14d='Pérdida por caries'
          }
          else if(this.d14d==4){
            this.t14d='Sellante necesario'
          }
          else if(this.d14d==5){
            this.t14d='Sellante realizado'
          }
          else if(this.d14d==6){
            this.t14d='Caries'
          }
          else if(this.d14d==7){
            this.t14d='Obturado'
          }
          else if(this.d14d==8){
            this.t14d='Endodoncia'
          }
          else if(this.d14d==9){
            this.t14d='Pérdida'
          }
          else if(this.d14d==10){
            this.t14d='Protesis total'
          }
          else if(this.d14d==11){
            this.t14d='Protesis fija'
          }
          else if(this.d14d==12){
            this.t14d='Protesis removible'
          }

          if(this.d14e==1){
            this.t14e='Sano'
          }
          else if(this.d14e==2){
            this.t14e='Extracción indicada'
          }
          else if(this.d14e==3){
            this.t14e='Pérdida por caries'
          }
          else if(this.d14e==4){
            this.t14e='Sellante necesario'
          }
          else if(this.d14e==5){
            this.t14e='Sellante realizado'
          }
          else if(this.d14e==6){
            this.t14e='Caries'
          }
          else if(this.d14e==7){
            this.t14e='Obturado'
          }
          else if(this.d14e==8){
            this.t14e='Endodoncia'
          }
          else if(this.d14e==9){
            this.t14e='Pérdida'
          }
          else if(this.d14e==10){
            this.t14e='Protesis total'
          }
          else if(this.d14e==11){
            this.t14e='Protesis fija'
          }
          else if(this.d14e==12){
            this.t14e='Protesis removible'
          }

          if(this.d15a==1){
            this.t15a='Sano'
          }
          else if(this.d15a==2){
            this.t15a='Extracción indicada'
          }
          else if(this.d15a==3){
            this.t15a='Pérdida por caries'
          }
          else if(this.d15a==4){
            this.t15a='Sellante necesario'
          }
          else if(this.d15a==5){
            this.t15a='Sellante realizado'
          }
          else if(this.d15a==6){
            this.t15a='Caries'
          }
          else if(this.d15a==7){
            this.t15a='Obturado'
          }
          else if(this.d15a==8){
            this.t15a='Endodoncia'
          }
          else if(this.d15a==9){
            this.t15a='Pérdida'
          }
          else if(this.d15a==10){
            this.t15a='Protesis total'
          }
          else if(this.d15a==11){
            this.t15a='Protesis fija'
          }
          else if(this.d15a==12){
            this.t15a='Protesis removible'
          }

          if(this.d15b==1){
            this.t15b='Sano'
          }
          else if(this.d15b==2){
            this.t15b='Extracción indicada'
          }
          else if(this.d15b==3){
            this.t15b='Pérdida por caries'
          }
          else if(this.d15b==4){
            this.t15b='Sellante necesario'
          }
          else if(this.d15b==5){
            this.t15b='Sellante realizado'
          }
          else if(this.d15b==6){
            this.t15b='Caries'
          }
          else if(this.d15b==7){
            this.t15b='Obturado'
          }
          else if(this.d15b==8){
            this.t15b='Endodoncia'
          }
          else if(this.d15b==9){
            this.t15b='Pérdida'
          }
          else if(this.d15b==10){
            this.t15b='Protesis total'
          }
          else if(this.d15b==11){
            this.t15b='Protesis fija'
          }
          else if(this.d15b==12){
            this.t15b='Protesis removible'
          }

          if(this.d15c==1){
            this.t15c='Sano'
          }
          else if(this.d15c==2){
            this.t15c='Extracción indicada'
          }
          else if(this.d15c==3){
            this.t15c='Pérdida por caries'
          }
          else if(this.d15c==4){
            this.t15c='Sellante necesario'
          }
          else if(this.d15c==5){
            this.t15c='Sellante realizado'
          }
          else if(this.d15c==6){
            this.t15c='Caries'
          }
          else if(this.d15c==7){
            this.t15c='Obturado'
          }
          else if(this.d15c==8){
            this.t15c='Endodoncia'
          }
          else if(this.d15c==9){
            this.t15c='Pérdida'
          }
          else if(this.d15c==10){
            this.t15c='Protesis total'
          }
          else if(this.d15c==11){
            this.t15c='Protesis fija'
          }
          else if(this.d15c==12){
            this.t15c='Protesis removible'
          }

          if(this.d15d==1){
            this.t15d='Sano'
          }
          else if(this.d15d==2){
            this.t15d='Extracción indicada'
          }
          else if(this.d15d==3){
            this.t15d='Pérdida por caries'
          }
          else if(this.d15d==4){
            this.t15d='Sellante necesario'
          }
          else if(this.d15d==5){
            this.t15d='Sellante realizado'
          }
          else if(this.d15d==6){
            this.t15d='Caries'
          }
          else if(this.d15d==7){
            this.t15d='Obturado'
          }
          else if(this.d15d==8){
            this.t15d='Endodoncia'
          }
          else if(this.d15d==9){
            this.t15d='Pérdida'
          }
          else if(this.d15d==10){
            this.t15d='Protesis total'
          }
          else if(this.d15d==11){
            this.t15d='Protesis fija'
          }
          else if(this.d15d==12){
            this.t15d='Protesis removible'
          }

          if(this.d15e==1){
            this.t15e='Sano'
          }
          else if(this.d15e==2){
            this.t15e='Extracción indicada'
          }
          else if(this.d15e==3){
            this.t15e='Pérdida por caries'
          }
          else if(this.d15e==4){
            this.t15e='Sellante necesario'
          }
          else if(this.d15e==5){
            this.t15e='Sellante realizado'
          }
          else if(this.d15e==6){
            this.t15e='Caries'
          }
          else if(this.d15e==7){
            this.t15e='Obturado'
          }
          else if(this.d15e==8){
            this.t15e='Endodoncia'
          }
          else if(this.d15e==9){
            this.t15e='Pérdida'
          }
          else if(this.d15e==10){
            this.t15e='Protesis total'
          }
          else if(this.d15e==11){
            this.t15e='Protesis fija'
          }
          else if(this.d15e==12){
            this.t15e='Protesis removible'
          }

          if(this.d16a==1){
            this.t16a='Sano'
          }
          else if(this.d16a==2){
            this.t16a='Extracción indicada'
          }
          else if(this.d16a==3){
            this.t16a='Pérdida por caries'
          }
          else if(this.d16a==4){
            this.t16a='Sellante necesario'
          }
          else if(this.d16a==5){
            this.t16a='Sellante realizado'
          }
          else if(this.d16a==6){
            this.t16a='Caries'
          }
          else if(this.d16a==7){
            this.t16a='Obturado'
          }
          else if(this.d16a==8){
            this.t16a='Endodoncia'
          }
          else if(this.d16a==9){
            this.t16a='Pérdida'
          }
          else if(this.d16a==10){
            this.t16a='Protesis total'
          }
          else if(this.d16a==11){
            this.t16a='Protesis fija'
          }
          else if(this.d16a==12){
            this.t16a='Protesis removible'
          }

          if(this.d16b==1){
            this.t16b='Sano'
          }
          else if(this.d16b==2){
            this.t16b='Extracción indicada'
          }
          else if(this.d16b==3){
            this.t16b='Pérdida por caries'
          }
          else if(this.d16b==4){
            this.t16b='Sellante necesario'
          }
          else if(this.d16b==5){
            this.t16b='Sellante realizado'
          }
          else if(this.d16b==6){
            this.t16b='Caries'
          }
          else if(this.d16b==7){
            this.t16b='Obturado'
          }
          else if(this.d16b==8){
            this.t16b='Endodoncia'
          }
          else if(this.d16b==9){
            this.t16b='Pérdida'
          }
          else if(this.d16b==10){
            this.t16b='Protesis total'
          }
          else if(this.d16b==11){
            this.t16b='Protesis fija'
          }
          else if(this.d16b==12){
            this.t16b='Protesis removible'
          }

          if(this.d16c==1){
            this.t16c='Sano'
          }
          else if(this.d16c==2){
            this.t16c='Extracción indicada'
          }
          else if(this.d16c==3){
            this.t16c='Pérdida por caries'
          }
          else if(this.d16c==4){
            this.t16c='Sellante necesario'
          }
          else if(this.d16c==5){
            this.t16c='Sellante realizado'
          }
          else if(this.d16c==6){
            this.t16c='Caries'
          }
          else if(this.d16c==7){
            this.t16c='Obturado'
          }
          else if(this.d16c==8){
            this.t16c='Endodoncia'
          }
          else if(this.d16c==9){
            this.t16c='Pérdida'
          }
          else if(this.d16c==10){
            this.t16c='Protesis total'
          }
          else if(this.d16c==11){
            this.t16c='Protesis fija'
          }
          else if(this.d16c==12){
            this.t16c='Protesis removible'
          }

          if(this.d16d==1){
            this.t16d='Sano'
          }
          else if(this.d16d==2){
            this.t16d='Extracción indicada'
          }
          else if(this.d16d==3){
            this.t16d='Pérdida por caries'
          }
          else if(this.d16d==4){
            this.t16d='Sellante necesario'
          }
          else if(this.d16d==5){
            this.t16d='Sellante realizado'
          }
          else if(this.d16d==6){
            this.t16d='Caries'
          }
          else if(this.d16d==7){
            this.t16d='Obturado'
          }
          else if(this.d16d==8){
            this.t16d='Endodoncia'
          }
          else if(this.d16d==9){
            this.t16d='Pérdida'
          }
          else if(this.d16d==10){
            this.t16d='Protesis total'
          }
          else if(this.d16d==11){
            this.t16d='Protesis fija'
          }
          else if(this.d16d==12){
            this.t16d='Protesis removible'
          }

          if(this.d16e==1){
            this.t16e='Sano'
          }
          else if(this.d16e==2){
            this.t16e='Extracción indicada'
          }
          else if(this.d16e==3){
            this.t16e='Pérdida por caries'
          }
          else if(this.d16e==4){
            this.t16e='Sellante necesario'
          }
          else if(this.d16e==5){
            this.t16e='Sellante realizado'
          }
          else if(this.d16e==6){
            this.t16e='Caries'
          }
          else if(this.d16e==7){
            this.t16e='Obturado'
          }
          else if(this.d16e==8){
            this.t16e='Endodoncia'
          }
          else if(this.d16e==9){
            this.t16e='Pérdida'
          }
          else if(this.d16e==10){
            this.t16e='Protesis total'
          }
          else if(this.d16e==11){
            this.t16e='Protesis fija'
          }
          else if(this.d16e==12){
            this.t16e='Protesis removible'
          }

          if(this.d17a==1){
            this.t17a='Sano'
          }
          else if(this.d17a==2){
            this.t17a='Extracción indicada'
          }
          else if(this.d17a==3){
            this.t17a='Pérdida por caries'
          }
          else if(this.d17a==4){
            this.t17a='Sellante necesario'
          }
          else if(this.d17a==5){
            this.t17a='Sellante realizado'
          }
          else if(this.d17a==6){
            this.t17a='Caries'
          }
          else if(this.d17a==7){
            this.t17a='Obturado'
          }
          else if(this.d17a==8){
            this.t17a='Endodoncia'
          }
          else if(this.d17a==9){
            this.t17a='Pérdida'
          }
          else if(this.d17a==10){
            this.t17a='Protesis total'
          }
          else if(this.d17a==11){
            this.t17a='Protesis fija'
          }
          else if(this.d17a==12){
            this.t17a='Protesis removible'
          }

          if(this.d17b==1){
            this.t17b='Sano'
          }
          else if(this.d17b==2){
            this.t17b='Extracción indicada'
          }
          else if(this.d17b==3){
            this.t17b='Pérdida por caries'
          }
          else if(this.d17b==4){
            this.t17b='Sellante necesario'
          }
          else if(this.d17b==5){
            this.t17b='Sellante realizado'
          }
          else if(this.d17b==6){
            this.t17b='Caries'
          }
          else if(this.d17b==7){
            this.t17b='Obturado'
          }
          else if(this.d17b==8){
            this.t17b='Endodoncia'
          }
          else if(this.d17b==9){
            this.t17b='Pérdida'
          }
          else if(this.d17b==10){
            this.t17b='Protesis total'
          }
          else if(this.d17b==11){
            this.t17b='Protesis fija'
          }
          else if(this.d17b==12){
            this.t17b='Protesis removible'
          }

          if(this.d17c==1){
            this.t17c='Sano'
          }
          else if(this.d17c==2){
            this.t17c='Extracción indicada'
          }
          else if(this.d17c==3){
            this.t17c='Pérdida por caries'
          }
          else if(this.d17c==4){
            this.t17c='Sellante necesario'
          }
          else if(this.d17c==5){
            this.t17c='Sellante realizado'
          }
          else if(this.d17c==6){
            this.t17c='Caries'
          }
          else if(this.d17c==7){
            this.t17c='Obturado'
          }
          else if(this.d17c==8){
            this.t17c='Endodoncia'
          }
          else if(this.d17c==9){
            this.t17c='Pérdida'
          }
          else if(this.d17c==10){
            this.t17c='Protesis total'
          }
          else if(this.d17c==11){
            this.t17c='Protesis fija'
          }
          else if(this.d17c==12){
            this.t17c='Protesis removible'
          }

          if(this.d17d==1){
            this.t17d='Sano'
          }
          else if(this.d17d==2){
            this.t17d='Extracción indicada'
          }
          else if(this.d17d==3){
            this.t17d='Pérdida por caries'
          }
          else if(this.d17d==4){
            this.t17d='Sellante necesario'
          }
          else if(this.d17d==5){
            this.t17d='Sellante realizado'
          }
          else if(this.d17d==6){
            this.t17d='Caries'
          }
          else if(this.d17d==7){
            this.t17d='Obturado'
          }
          else if(this.d17d==8){
            this.t17d='Endodoncia'
          }
          else if(this.d17d==9){
            this.t17d='Pérdida'
          }
          else if(this.d17d==10){
            this.t17d='Protesis total'
          }
          else if(this.d17d==11){
            this.t17d='Protesis fija'
          }
          else if(this.d17d==12){
            this.t17d='Protesis removible'
          }

          if(this.d17e==1){
            this.t17e='Sano'
          }
          else if(this.d17e==2){
            this.t17e='Extracción indicada'
          }
          else if(this.d17e==3){
            this.t17e='Pérdida por caries'
          }
          else if(this.d17e==4){
            this.t17e='Sellante necesario'
          }
          else if(this.d17e==5){
            this.t17e='Sellante realizado'
          }
          else if(this.d17e==6){
            this.t17e='Caries'
          }
          else if(this.d17e==7){
            this.t17e='Obturado'
          }
          else if(this.d17e==8){
            this.t17e='Endodoncia'
          }
          else if(this.d17e==9){
            this.t17e='Pérdida'
          }
          else if(this.d17e==10){
            this.t17e='Protesis total'
          }
          else if(this.d17e==11){
            this.t17e='Protesis fija'
          }
          else if(this.d17e==12){
            this.t17e='Protesis removible'
          }

          if(this.d18a==1){
            this.t18a='Sano'
          }
          else if(this.d18a==2){
            this.t18a='Extracción indicada'
          }
          else if(this.d18a==3){
            this.t18a='Pérdida por caries'
          }
          else if(this.d18a==4){
            this.t18a='Sellante necesario'
          }
          else if(this.d18a==5){
            this.t18a='Sellante realizado'
          }
          else if(this.d18a==6){
            this.t18a='Caries'
          }
          else if(this.d18a==7){
            this.t18a='Obturado'
          }
          else if(this.d18a==8){
            this.t18a='Endodoncia'
          }
          else if(this.d18a==9){
            this.t18a='Pérdida'
          }
          else if(this.d18a==10){
            this.t18a='Protesis total'
          }
          else if(this.d18a==11){
            this.t18a='Protesis fija'
          }
          else if(this.d18a==12){
            this.t18a='Protesis removible'
          }

          if(this.d18b==1){
            this.t18b='Sano'
          }
          else if(this.d18b==2){
            this.t18b='Extracción indicada'
          }
          else if(this.d18b==3){
            this.t18b='Pérdida por caries'
          }
          else if(this.d18b==4){
            this.t18b='Sellante necesario'
          }
          else if(this.d18b==5){
            this.t18b='Sellante realizado'
          }
          else if(this.d18b==6){
            this.t18b='Caries'
          }
          else if(this.d18b==7){
            this.t18b='Obturado'
          }
          else if(this.d18b==8){
            this.t18b='Endodoncia'
          }
          else if(this.d18b==9){
            this.t18b='Pérdida'
          }
          else if(this.d18b==10){
            this.t18b='Protesis total'
          }
          else if(this.d18b==11){
            this.t18b='Protesis fija'
          }
          else if(this.d18b==12){
            this.t18b='Protesis removible'
          }

          if(this.d18c==1){
            this.t18c='Sano'
          }
          else if(this.d18c==2){
            this.t18c='Extracción indicada'
          }
          else if(this.d18c==3){
            this.t18c='Pérdida por caries'
          }
          else if(this.d18c==4){
            this.t18c='Sellante necesario'
          }
          else if(this.d18c==5){
            this.t18c='Sellante realizado'
          }
          else if(this.d18c==6){
            this.t18c='Caries'
          }
          else if(this.d18c==7){
            this.t18c='Obturado'
          }
          else if(this.d18c==8){
            this.t18c='Endodoncia'
          }
          else if(this.d18c==9){
            this.t18c='Pérdida'
          }
          else if(this.d18c==10){
            this.t18c='Protesis total'
          }
          else if(this.d18c==11){
            this.t18c='Protesis fija'
          }
          else if(this.d18c==12){
            this.t18c='Protesis removible'
          }

          if(this.d18d==1){
            this.t18d='Sano'
          }
          else if(this.d18d==2){
            this.t18d='Extracción indicada'
          }
          else if(this.d18d==3){
            this.t18d='Pérdida por caries'
          }
          else if(this.d18d==4){
            this.t18d='Sellante necesario'
          }
          else if(this.d18d==5){
            this.t18d='Sellante realizado'
          }
          else if(this.d18d==6){
            this.t18d='Caries'
          }
          else if(this.d18d==7){
            this.t18d='Obturado'
          }
          else if(this.d18d==8){
            this.t18d='Endodoncia'
          }
          else if(this.d18d==9){
            this.t18d='Pérdida'
          }
          else if(this.d18d==10){
            this.t18d='Protesis total'
          }
          else if(this.d18d==11){
            this.t18d='Protesis fija'
          }
          else if(this.d18d==12){
            this.t18d='Protesis removible'
          }

          if(this.d18e==1){
            this.t18e='Sano'
          }
          else if(this.d18e==2){
            this.t18e='Extracción indicada'
          }
          else if(this.d18e==3){
            this.t18e='Pérdida por caries'
          }
          else if(this.d18e==4){
            this.t18e='Sellante necesario'
          }
          else if(this.d18e==5){
            this.t18e='Sellante realizado'
          }
          else if(this.d18e==6){
            this.t18e='Caries'
          }
          else if(this.d18e==7){
            this.t18e='Obturado'
          }
          else if(this.d18e==8){
            this.t18e='Endodoncia'
          }
          else if(this.d18e==9){
            this.t18e='Pérdida'
          }
          else if(this.d18e==10){
            this.t18e='Protesis total'
          }
          else if(this.d18e==11){
            this.t18e='Protesis fija'
          }
          else if(this.d18e==12){
            this.t18e='Protesis removible'
          }

          //CUADRANTE 2

          if(this.d21a==1){
            this.t21a='Sano'
          }
          else if(this.d21a==2){
            this.t21a='Extracción indicada'
          }
          else if(this.d21a==3){
            this.t21a='Pérdida por caries'
          }
          else if(this.d21a==4){
            this.t21a='Sellante necesario'
          }
          else if(this.d21a==5){
            this.t21a='Sellante realizado'
          }
          else if(this.d21a==6){
            this.t21a='Caries'
          }
          else if(this.d21a==7){
            this.t21a='Obturado'
          }
          else if(this.d21a==8){
            this.t21a='Endodoncia'
          }
          else if(this.d21a==9){
            this.t21a='Pérdida'
          }
          else if(this.d21a==10){
            this.t21a='Protesis total'
          }
          else if(this.d21a==11){
            this.t21a='Protesis fija'
          }
          else if(this.d21a==12){
            this.t21a='Protesis removible'
          }

          if(this.d21b==1){
            this.t21b='Sano'
          }
          else if(this.d21b==2){
            this.t21b='Extracción indicada'
          }
          else if(this.d21b==3){
            this.t21b='Pérdida por caries'
          }
          else if(this.d21b==4){
            this.t21b='Sellante necesario'
          }
          else if(this.d21b==5){
            this.t21b='Sellante realizado'
          }
          else if(this.d21b==6){
            this.t21b='Caries'
          }
          else if(this.d21b==7){
            this.t21b='Obturado'
          }
          else if(this.d21b==8){
            this.t21b='Endodoncia'
          }
          else if(this.d21b==9){
            this.t21b='Pérdida'
          }
          else if(this.d21b==10){
            this.t21b='Protesis total'
          }
          else if(this.d21b==11){
            this.t21b='Protesis fija'
          }
          else if(this.d21b==12){
            this.t21b='Protesis removible'
          }

          if(this.d21c==1){
            this.t21c='Sano'
          }
          else if(this.d21c==2){
            this.t21c='Extracción indicada'
          }
          else if(this.d21c==3){
            this.t21c='Pérdida por caries'
          }
          else if(this.d21c==4){
            this.t21c='Sellante necesario'
          }
          else if(this.d21c==5){
            this.t21c='Sellante realizado'
          }
          else if(this.d21c==6){
            this.t21c='Caries'
          }
          else if(this.d21c==7){
            this.t21c='Obturado'
          }
          else if(this.d21c==8){
            this.t21c='Endodoncia'
          }
          else if(this.d21c==9){
            this.t21c='Pérdida'
          }
          else if(this.d21c==10){
            this.t21c='Protesis total'
          }
          else if(this.d21c==11){
            this.t21c='Protesis fija'
          }
          else if(this.d21c==12){
            this.t21c='Protesis removible'
          }

          if(this.d21d==1){
            this.t21d='Sano'
          }
          else if(this.d21d==2){
            this.t21d='Extracción indicada'
          }
          else if(this.d21d==3){
            this.t21d='Pérdida por caries'
          }
          else if(this.d21d==4){
            this.t21d='Sellante necesario'
          }
          else if(this.d21d==5){
            this.t21d='Sellante realizado'
          }
          else if(this.d21d==6){
            this.t21d='Caries'
          }
          else if(this.d21d==7){
            this.t21d='Obturado'
          }
          else if(this.d21d==8){
            this.t21d='Endodoncia'
          }
          else if(this.d21d==9){
            this.t21d='Pérdida'
          }
          else if(this.d21d==10){
            this.t21d='Protesis total'
          }
          else if(this.d21d==11){
            this.t21d='Protesis fija'
          }
          else if(this.d21d==12){
            this.t21d='Protesis removible'
          }

          if(this.d21e==1){
            this.t21e='Sano'
          }
          else if(this.d21e==2){
            this.t21e='Extracción indicada'
          }
          else if(this.d21e==3){
            this.t21e='Pérdida por caries'
          }
          else if(this.d21e==4){
            this.t21e='Sellante necesario'
          }
          else if(this.d21e==5){
            this.t21e='Sellante realizado'
          }
          else if(this.d21e==6){
            this.t21e='Caries'
          }
          else if(this.d21e==7){
            this.t21e='Obturado'
          }
          else if(this.d21e==8){
            this.t21e='Endodoncia'
          }
          else if(this.d21e==9){
            this.t21e='Pérdida'
          }
          else if(this.d21e==10){
            this.t21e='Protesis total'
          }
          else if(this.d21e==11){
            this.t21e='Protesis fija'
          }
          else if(this.d21e==12){
            this.t21e='Protesis removible'
          }

          if(this.d22a==1){
            this.t22a='Sano'
          }
          else if(this.d22a==2){
            this.t22a='Extracción indicada'
          }
          else if(this.d22a==3){
            this.t22a='Pérdida por caries'
          }
          else if(this.d22a==4){
            this.t22a='Sellante necesario'
          }
          else if(this.d22a==5){
            this.t22a='Sellante realizado'
          }
          else if(this.d22a==6){
            this.t22a='Caries'
          }
          else if(this.d22a==7){
            this.t22a='Obturado'
          }
          else if(this.d22a==8){
            this.t22a='Endodoncia'
          }
          else if(this.d22a==9){
            this.t22a='Pérdida'
          }
          else if(this.d22a==10){
            this.t22a='Protesis total'
          }
          else if(this.d22a==11){
            this.t22a='Protesis fija'
          }
          else if(this.d22a==12){
            this.t22a='Protesis removible'
          }

          if(this.d22b==1){
            this.t22b='Sano'
          }
          else if(this.d22b==2){
            this.t22b='Extracción indicada'
          }
          else if(this.d22b==3){
            this.t22b='Pérdida por caries'
          }
          else if(this.d22b==4){
            this.t22b='Sellante necesario'
          }
          else if(this.d22b==5){
            this.t22b='Sellante realizado'
          }
          else if(this.d22b==6){
            this.t22b='Caries'
          }
          else if(this.d22b==7){
            this.t22b='Obturado'
          }
          else if(this.d22b==8){
            this.t22b='Endodoncia'
          }
          else if(this.d22b==9){
            this.t22b='Pérdida'
          }
          else if(this.d22b==10){
            this.t22b='Protesis total'
          }
          else if(this.d22b==11){
            this.t22b='Protesis fija'
          }
          else if(this.d22b==12){
            this.t22b='Protesis removible'
          }

          if(this.d22c==1){
            this.t22c='Sano'
          }
          else if(this.d22c==2){
            this.t22c='Extracción indicada'
          }
          else if(this.d22c==3){
            this.t22c='Pérdida por caries'
          }
          else if(this.d22c==4){
            this.t22c='Sellante necesario'
          }
          else if(this.d22c==5){
            this.t22c='Sellante realizado'
          }
          else if(this.d22c==6){
            this.t22c='Caries'
          }
          else if(this.d22c==7){
            this.t22c='Obturado'
          }
          else if(this.d22c==8){
            this.t22c='Endodoncia'
          }
          else if(this.d22c==9){
            this.t22c='Pérdida'
          }
          else if(this.d22c==10){
            this.t22c='Protesis total'
          }
          else if(this.d22c==11){
            this.t22c='Protesis fija'
          }
          else if(this.d22c==12){
            this.t22c='Protesis removible'
          }

          if(this.d22d==1){
            this.t22d='Sano'
          }
          else if(this.d22d==2){
            this.t22d='Extracción indicada'
          }
          else if(this.d22d==3){
            this.t22d='Pérdida por caries'
          }
          else if(this.d22d==4){
            this.t22d='Sellante necesario'
          }
          else if(this.d22d==5){
            this.t22d='Sellante realizado'
          }
          else if(this.d22d==6){
            this.t22d='Caries'
          }
          else if(this.d22d==7){
            this.t22d='Obturado'
          }
          else if(this.d22d==8){
            this.t22d='Endodoncia'
          }
          else if(this.d22d==9){
            this.t22d='Pérdida'
          }
          else if(this.d22d==10){
            this.t22d='Protesis total'
          }
          else if(this.d22d==11){
            this.t22d='Protesis fija'
          }
          else if(this.d22d==12){
            this.t22d='Protesis removible'
          }

          if(this.d22e==1){
            this.t22e='Sano'
          }
          else if(this.d22e==2){
            this.t22e='Extracción indicada'
          }
          else if(this.d22e==3){
            this.t22e='Pérdida por caries'
          }
          else if(this.d22e==4){
            this.t22e='Sellante necesario'
          }
          else if(this.d22e==5){
            this.t22e='Sellante realizado'
          }
          else if(this.d22e==6){
            this.t22e='Caries'
          }
          else if(this.d22e==7){
            this.t22e='Obturado'
          }
          else if(this.d22e==8){
            this.t22e='Endodoncia'
          }
          else if(this.d22e==9){
            this.t22e='Pérdida'
          }
          else if(this.d22e==10){
            this.t22e='Protesis total'
          }
          else if(this.d22e==11){
            this.t22e='Protesis fija'
          }
          else if(this.d22e==12){
            this.t22e='Protesis removible'
          }

          if(this.d23a==1){
            this.t23a='Sano'
          }
          else if(this.d23a==2){
            this.t23a='Extracción indicada'
          }
          else if(this.d23a==3){
            this.t23a='Pérdida por caries'
          }
          else if(this.d23a==4){
            this.t23a='Sellante necesario'
          }
          else if(this.d23a==5){
            this.t23a='Sellante realizado'
          }
          else if(this.d23a==6){
            this.t23a='Caries'
          }
          else if(this.d23a==7){
            this.t23a='Obturado'
          }
          else if(this.d23a==8){
            this.t23a='Endodoncia'
          }
          else if(this.d23a==9){
            this.t23a='Pérdida'
          }
          else if(this.d23a==10){
            this.t23a='Protesis total'
          }
          else if(this.d23a==11){
            this.t23a='Protesis fija'
          }
          else if(this.d23a==12){
            this.t23a='Protesis removible'
          }

          if(this.d23b==1){
            this.t23b='Sano'
          }
          else if(this.d23b==2){
            this.t23b='Extracción indicada'
          }
          else if(this.d23b==3){
            this.t23b='Pérdida por caries'
          }
          else if(this.d23b==4){
            this.t23b='Sellante necesario'
          }
          else if(this.d23b==5){
            this.t23b='Sellante realizado'
          }
          else if(this.d23b==6){
            this.t23b='Caries'
          }
          else if(this.d23b==7){
            this.t23b='Obturado'
          }
          else if(this.d23b==8){
            this.t23b='Endodoncia'
          }
          else if(this.d23b==9){
            this.t23b='Pérdida'
          }
          else if(this.d23b==10){
            this.t23b='Protesis total'
          }
          else if(this.d23b==11){
            this.t23b='Protesis fija'
          }
          else if(this.d23b==12){
            this.t23b='Protesis removible'
          }

          if(this.d23c==1){
            this.t23c='Sano'
          }
          else if(this.d23c==2){
            this.t23c='Extracción indicada'
          }
          else if(this.d23c==3){
            this.t23c='Pérdida por caries'
          }
          else if(this.d23c==4){
            this.t23c='Sellante necesario'
          }
          else if(this.d23c==5){
            this.t23c='Sellante realizado'
          }
          else if(this.d23c==6){
            this.t23c='Caries'
          }
          else if(this.d23c==7){
            this.t23c='Obturado'
          }
          else if(this.d23c==8){
            this.t23c='Endodoncia'
          }
          else if(this.d23c==9){
            this.t23c='Pérdida'
          }
          else if(this.d23c==10){
            this.t23c='Protesis total'
          }
          else if(this.d23c==11){
            this.t23c='Protesis fija'
          }
          else if(this.d23c==12){
            this.t23c='Protesis removible'
          }

          if(this.d23d==1){
            this.t23d='Sano'
          }
          else if(this.d23d==2){
            this.t23d='Extracción indicada'
          }
          else if(this.d23d==3){
            this.t23d='Pérdida por caries'
          }
          else if(this.d23d==4){
            this.t23d='Sellante necesario'
          }
          else if(this.d23d==5){
            this.t23d='Sellante realizado'
          }
          else if(this.d23d==6){
            this.t23d='Caries'
          }
          else if(this.d23d==7){
            this.t23d='Obturado'
          }
          else if(this.d23d==8){
            this.t23d='Endodoncia'
          }
          else if(this.d23d==9){
            this.t23d='Pérdida'
          }
          else if(this.d23d==10){
            this.t23d='Protesis total'
          }
          else if(this.d23d==11){
            this.t23d='Protesis fija'
          }
          else if(this.d23d==12){
            this.t23d='Protesis removible'
          }

          if(this.d23e==1){
            this.t23e='Sano'
          }
          else if(this.d23e==2){
            this.t23e='Extracción indicada'
          }
          else if(this.d23e==3){
            this.t23e='Pérdida por caries'
          }
          else if(this.d23e==4){
            this.t23e='Sellante necesario'
          }
          else if(this.d23e==5){
            this.t23e='Sellante realizado'
          }
          else if(this.d23e==6){
            this.t23e='Caries'
          }
          else if(this.d23e==7){
            this.t23e='Obturado'
          }
          else if(this.d23e==8){
            this.t23e='Endodoncia'
          }
          else if(this.d23e==9){
            this.t23e='Pérdida'
          }
          else if(this.d23e==10){
            this.t23e='Protesis total'
          }
          else if(this.d23e==11){
            this.t23e='Protesis fija'
          }
          else if(this.d23e==12){
            this.t23e='Protesis removible'
          }

          if(this.d24a==1){
            this.t24a='Sano'
          }
          else if(this.d24a==2){
            this.t24a='Extracción indicada'
          }
          else if(this.d24a==3){
            this.t24a='Pérdida por caries'
          }
          else if(this.d24a==4){
            this.t24a='Sellante necesario'
          }
          else if(this.d24a==5){
            this.t24a='Sellante realizado'
          }
          else if(this.d24a==6){
            this.t24a='Caries'
          }
          else if(this.d24a==7){
            this.t24a='Obturado'
          }
          else if(this.d24a==8){
            this.t24a='Endodoncia'
          }
          else if(this.d24a==9){
            this.t24a='Pérdida'
          }
          else if(this.d24a==10){
            this.t24a='Protesis total'
          }
          else if(this.d24a==11){
            this.t24a='Protesis fija'
          }
          else if(this.d24a==12){
            this.t24a='Protesis removible'
          }

          if(this.d24b==1){
            this.t24b='Sano'
          }
          else if(this.d24b==2){
            this.t24b='Extracción indicada'
          }
          else if(this.d24b==3){
            this.t24b='Pérdida por caries'
          }
          else if(this.d24b==4){
            this.t24b='Sellante necesario'
          }
          else if(this.d24b==5){
            this.t24b='Sellante realizado'
          }
          else if(this.d24b==6){
            this.t24b='Caries'
          }
          else if(this.d24b==7){
            this.t24b='Obturado'
          }
          else if(this.d24b==8){
            this.t24b='Endodoncia'
          }
          else if(this.d24b==9){
            this.t24b='Pérdida'
          }
          else if(this.d24b==10){
            this.t24b='Protesis total'
          }
          else if(this.d24b==11){
            this.t24b='Protesis fija'
          }
          else if(this.d24b==12){
            this.t24b='Protesis removible'
          }

          if(this.d24c==1){
            this.t24c='Sano'
          }
          else if(this.d24c==2){
            this.t24c='Extracción indicada'
          }
          else if(this.d24c==3){
            this.t24c='Pérdida por caries'
          }
          else if(this.d24c==4){
            this.t24c='Sellante necesario'
          }
          else if(this.d24c==5){
            this.t24c='Sellante realizado'
          }
          else if(this.d24c==6){
            this.t24c='Caries'
          }
          else if(this.d24c==7){
            this.t24c='Obturado'
          }
          else if(this.d24c==8){
            this.t24c='Endodoncia'
          }
          else if(this.d24c==9){
            this.t24c='Pérdida'
          }
          else if(this.d24c==10){
            this.t24c='Protesis total'
          }
          else if(this.d24c==11){
            this.t24c='Protesis fija'
          }
          else if(this.d24c==12){
            this.t24c='Protesis removible'
          }

          if(this.d24d==1){
            this.t24d='Sano'
          }
          else if(this.d24d==2){
            this.t24d='Extracción indicada'
          }
          else if(this.d24d==3){
            this.t24d='Pérdida por caries'
          }
          else if(this.d24d==4){
            this.t24d='Sellante necesario'
          }
          else if(this.d24d==5){
            this.t24d='Sellante realizado'
          }
          else if(this.d24d==6){
            this.t24d='Caries'
          }
          else if(this.d24d==7){
            this.t24d='Obturado'
          }
          else if(this.d24d==8){
            this.t24d='Endodoncia'
          }
          else if(this.d24d==9){
            this.t24d='Pérdida'
          }
          else if(this.d24d==10){
            this.t24d='Protesis total'
          }
          else if(this.d24d==11){
            this.t24d='Protesis fija'
          }
          else if(this.d24d==12){
            this.t24d='Protesis removible'
          }

          if(this.d24e==1){
            this.t24e='Sano'
          }
          else if(this.d24e==2){
            this.t24e='Extracción indicada'
          }
          else if(this.d24e==3){
            this.t24e='Pérdida por caries'
          }
          else if(this.d24e==4){
            this.t24e='Sellante necesario'
          }
          else if(this.d24e==5){
            this.t24e='Sellante realizado'
          }
          else if(this.d24e==6){
            this.t24e='Caries'
          }
          else if(this.d24e==7){
            this.t24e='Obturado'
          }
          else if(this.d24e==8){
            this.t24e='Endodoncia'
          }
          else if(this.d24e==9){
            this.t24e='Pérdida'
          }
          else if(this.d24e==10){
            this.t24e='Protesis total'
          }
          else if(this.d24e==11){
            this.t24e='Protesis fija'
          }
          else if(this.d24e==12){
            this.t24e='Protesis removible'
          }

          if(this.d25a==1){
            this.t25a='Sano'
          }
          else if(this.d25a==2){
            this.t25a='Extracción indicada'
          }
          else if(this.d25a==3){
            this.t25a='Pérdida por caries'
          }
          else if(this.d25a==4){
            this.t25a='Sellante necesario'
          }
          else if(this.d25a==5){
            this.t25a='Sellante realizado'
          }
          else if(this.d25a==6){
            this.t25a='Caries'
          }
          else if(this.d25a==7){
            this.t25a='Obturado'
          }
          else if(this.d25a==8){
            this.t25a='Endodoncia'
          }
          else if(this.d25a==9){
            this.t25a='Pérdida'
          }
          else if(this.d25a==10){
            this.t25a='Protesis total'
          }
          else if(this.d25a==11){
            this.t25a='Protesis fija'
          }
          else if(this.d25a==12){
            this.t25a='Protesis removible'
          }

          if(this.d25b==1){
            this.t25b='Sano'
          }
          else if(this.d25b==2){
            this.t25b='Extracción indicada'
          }
          else if(this.d25b==3){
            this.t25b='Pérdida por caries'
          }
          else if(this.d25b==4){
            this.t25b='Sellante necesario'
          }
          else if(this.d25b==5){
            this.t25b='Sellante realizado'
          }
          else if(this.d25b==6){
            this.t25b='Caries'
          }
          else if(this.d25b==7){
            this.t25b='Obturado'
          }
          else if(this.d25b==8){
            this.t25b='Endodoncia'
          }
          else if(this.d25b==9){
            this.t25b='Pérdida'
          }
          else if(this.d25b==10){
            this.t25b='Protesis total'
          }
          else if(this.d25b==11){
            this.t25b='Protesis fija'
          }
          else if(this.d25b==12){
            this.t25b='Protesis removible'
          }

          if(this.d25c==1){
            this.t25c='Sano'
          }
          else if(this.d25c==2){
            this.t25c='Extracción indicada'
          }
          else if(this.d25c==3){
            this.t25c='Pérdida por caries'
          }
          else if(this.d25c==4){
            this.t25c='Sellante necesario'
          }
          else if(this.d25c==5){
            this.t25c='Sellante realizado'
          }
          else if(this.d25c==6){
            this.t25c='Caries'
          }
          else if(this.d25c==7){
            this.t25c='Obturado'
          }
          else if(this.d25c==8){
            this.t25c='Endodoncia'
          }
          else if(this.d25c==9){
            this.t25c='Pérdida'
          }
          else if(this.d25c==10){
            this.t25c='Protesis total'
          }
          else if(this.d25c==11){
            this.t25c='Protesis fija'
          }
          else if(this.d25c==12){
            this.t25c='Protesis removible'
          }

          if(this.d25d==1){
            this.t25d='Sano'
          }
          else if(this.d25d==2){
            this.t25d='Extracción indicada'
          }
          else if(this.d25d==3){
            this.t25d='Pérdida por caries'
          }
          else if(this.d25d==4){
            this.t25d='Sellante necesario'
          }
          else if(this.d25d==5){
            this.t25d='Sellante realizado'
          }
          else if(this.d25d==6){
            this.t25d='Caries'
          }
          else if(this.d25d==7){
            this.t25d='Obturado'
          }
          else if(this.d25d==8){
            this.t25d='Endodoncia'
          }
          else if(this.d25d==9){
            this.t25d='Pérdida'
          }
          else if(this.d25d==10){
            this.t25d='Protesis total'
          }
          else if(this.d25d==11){
            this.t25d='Protesis fija'
          }
          else if(this.d25d==12){
            this.t25d='Protesis removible'
          }

          if(this.d25e==1){
            this.t25e='Sano'
          }
          else if(this.d25e==2){
            this.t25e='Extracción indicada'
          }
          else if(this.d25e==3){
            this.t25e='Pérdida por caries'
          }
          else if(this.d25e==4){
            this.t25e='Sellante necesario'
          }
          else if(this.d25e==5){
            this.t25e='Sellante realizado'
          }
          else if(this.d25e==6){
            this.t25e='Caries'
          }
          else if(this.d25e==7){
            this.t25e='Obturado'
          }
          else if(this.d25e==8){
            this.t25e='Endodoncia'
          }
          else if(this.d25e==9){
            this.t25e='Pérdida'
          }
          else if(this.d25e==10){
            this.t25e='Protesis total'
          }
          else if(this.d25e==11){
            this.t25e='Protesis fija'
          }
          else if(this.d25e==12){
            this.t25e='Protesis removible'
          }

          if(this.d26a==1){
            this.t26a='Sano'
          }
          else if(this.d26a==2){
            this.t26a='Extracción indicada'
          }
          else if(this.d26a==3){
            this.t26a='Pérdida por caries'
          }
          else if(this.d26a==4){
            this.t26a='Sellante necesario'
          }
          else if(this.d26a==5){
            this.t26a='Sellante realizado'
          }
          else if(this.d26a==6){
            this.t26a='Caries'
          }
          else if(this.d26a==7){
            this.t26a='Obturado'
          }
          else if(this.d26a==8){
            this.t26a='Endodoncia'
          }
          else if(this.d26a==9){
            this.t26a='Pérdida'
          }
          else if(this.d26a==10){
            this.t26a='Protesis total'
          }
          else if(this.d26a==11){
            this.t26a='Protesis fija'
          }
          else if(this.d26a==12){
            this.t26a='Protesis removible'
          }

          if(this.d26b==1){
            this.t26b='Sano'
          }
          else if(this.d26b==2){
            this.t26b='Extracción indicada'
          }
          else if(this.d26b==3){
            this.t26b='Pérdida por caries'
          }
          else if(this.d26b==4){
            this.t26b='Sellante necesario'
          }
          else if(this.d26b==5){
            this.t26b='Sellante realizado'
          }
          else if(this.d26b==6){
            this.t26b='Caries'
          }
          else if(this.d26b==7){
            this.t26b='Obturado'
          }
          else if(this.d26b==8){
            this.t26b='Endodoncia'
          }
          else if(this.d26b==9){
            this.t26b='Pérdida'
          }
          else if(this.d26b==10){
            this.t26b='Protesis total'
          }
          else if(this.d26b==11){
            this.t26b='Protesis fija'
          }
          else if(this.d26b==12){
            this.t26b='Protesis removible'
          }

          if(this.d26c==1){
            this.t26c='Sano'
          }
          else if(this.d26c==2){
            this.t26c='Extracción indicada'
          }
          else if(this.d26c==3){
            this.t26c='Pérdida por caries'
          }
          else if(this.d26c==4){
            this.t26c='Sellante necesario'
          }
          else if(this.d26c==5){
            this.t26c='Sellante realizado'
          }
          else if(this.d26c==6){
            this.t26c='Caries'
          }
          else if(this.d26c==7){
            this.t26c='Obturado'
          }
          else if(this.d26c==8){
            this.t26c='Endodoncia'
          }
          else if(this.d26c==9){
            this.t26c='Pérdida'
          }
          else if(this.d26c==10){
            this.t26c='Protesis total'
          }
          else if(this.d26c==11){
            this.t26c='Protesis fija'
          }
          else if(this.d26c==12){
            this.t26c='Protesis removible'
          }

          if(this.d26d==1){
            this.t26d='Sano'
          }
          else if(this.d26d==2){
            this.t26d='Extracción indicada'
          }
          else if(this.d26d==3){
            this.t26d='Pérdida por caries'
          }
          else if(this.d26d==4){
            this.t26d='Sellante necesario'
          }
          else if(this.d26d==5){
            this.t26d='Sellante realizado'
          }
          else if(this.d26d==6){
            this.t26d='Caries'
          }
          else if(this.d26d==7){
            this.t26d='Obturado'
          }
          else if(this.d26d==8){
            this.t26d='Endodoncia'
          }
          else if(this.d26d==9){
            this.t26d='Pérdida'
          }
          else if(this.d26d==10){
            this.t26d='Protesis total'
          }
          else if(this.d26d==11){
            this.t26d='Protesis fija'
          }
          else if(this.d26d==12){
            this.t26d='Protesis removible'
          }

          if(this.d26e==1){
            this.t26e='Sano'
          }
          else if(this.d26e==2){
            this.t26e='Extracción indicada'
          }
          else if(this.d26e==3){
            this.t26e='Pérdida por caries'
          }
          else if(this.d26e==4){
            this.t26e='Sellante necesario'
          }
          else if(this.d26e==5){
            this.t26e='Sellante realizado'
          }
          else if(this.d26e==6){
            this.t26e='Caries'
          }
          else if(this.d26e==7){
            this.t26e='Obturado'
          }
          else if(this.d26e==8){
            this.t26e='Endodoncia'
          }
          else if(this.d26e==9){
            this.t26e='Pérdida'
          }
          else if(this.d26e==10){
            this.t26e='Protesis total'
          }
          else if(this.d26e==11){
            this.t26e='Protesis fija'
          }
          else if(this.d26e==12){
            this.t26e='Protesis removible'
          }

          if(this.d27a==1){
            this.t27a='Sano'
          }
          else if(this.d27a==2){
            this.t27a='Extracción indicada'
          }
          else if(this.d27a==3){
            this.t27a='Pérdida por caries'
          }
          else if(this.d27a==4){
            this.t27a='Sellante necesario'
          }
          else if(this.d27a==5){
            this.t27a='Sellante realizado'
          }
          else if(this.d27a==6){
            this.t27a='Caries'
          }
          else if(this.d27a==7){
            this.t27a='Obturado'
          }
          else if(this.d27a==8){
            this.t27a='Endodoncia'
          }
          else if(this.d27a==9){
            this.t27a='Pérdida'
          }
          else if(this.d27a==10){
            this.t27a='Protesis total'
          }
          else if(this.d27a==11){
            this.t27a='Protesis fija'
          }
          else if(this.d27a==12){
            this.t27a='Protesis removible'
          }

          if(this.d27b==1){
            this.t27b='Sano'
          }
          else if(this.d27b==2){
            this.t27b='Extracción indicada'
          }
          else if(this.d27b==3){
            this.t27b='Pérdida por caries'
          }
          else if(this.d27b==4){
            this.t27b='Sellante necesario'
          }
          else if(this.d27b==5){
            this.t27b='Sellante realizado'
          }
          else if(this.d27b==6){
            this.t27b='Caries'
          }
          else if(this.d27b==7){
            this.t27b='Obturado'
          }
          else if(this.d27b==8){
            this.t27b='Endodoncia'
          }
          else if(this.d27b==9){
            this.t27b='Pérdida'
          }
          else if(this.d27b==10){
            this.t27b='Protesis total'
          }
          else if(this.d27b==11){
            this.t27b='Protesis fija'
          }
          else if(this.d27b==12){
            this.t27b='Protesis removible'
          }

          if(this.d27c==1){
            this.t27c='Sano'
          }
          else if(this.d27c==2){
            this.t27c='Extracción indicada'
          }
          else if(this.d27c==3){
            this.t27c='Pérdida por caries'
          }
          else if(this.d27c==4){
            this.t27c='Sellante necesario'
          }
          else if(this.d27c==5){
            this.t27c='Sellante realizado'
          }
          else if(this.d27c==6){
            this.t27c='Caries'
          }
          else if(this.d27c==7){
            this.t27c='Obturado'
          }
          else if(this.d27c==8){
            this.t27c='Endodoncia'
          }
          else if(this.d27c==9){
            this.t27c='Pérdida'
          }
          else if(this.d27c==10){
            this.t27c='Protesis total'
          }
          else if(this.d27c==11){
            this.t27c='Protesis fija'
          }
          else if(this.d27c==12){
            this.t27c='Protesis removible'
          }

          if(this.d27d==1){
            this.t27d='Sano'
          }
          else if(this.d27d==2){
            this.t27d='Extracción indicada'
          }
          else if(this.d27d==3){
            this.t27d='Pérdida por caries'
          }
          else if(this.d27d==4){
            this.t27d='Sellante necesario'
          }
          else if(this.d27d==5){
            this.t27d='Sellante realizado'
          }
          else if(this.d27d==6){
            this.t27d='Caries'
          }
          else if(this.d27d==7){
            this.t27d='Obturado'
          }
          else if(this.d27d==8){
            this.t27d='Endodoncia'
          }
          else if(this.d27d==9){
            this.t27d='Pérdida'
          }
          else if(this.d27d==10){
            this.t27d='Protesis total'
          }
          else if(this.d27d==11){
            this.t27d='Protesis fija'
          }
          else if(this.d27d==12){
            this.t27d='Protesis removible'
          }

          if(this.d27e==1){
            this.t27e='Sano'
          }
          else if(this.d27e==2){
            this.t27e='Extracción indicada'
          }
          else if(this.d27e==3){
            this.t27e='Pérdida por caries'
          }
          else if(this.d27e==4){
            this.t27e='Sellante necesario'
          }
          else if(this.d27e==5){
            this.t27e='Sellante realizado'
          }
          else if(this.d27e==6){
            this.t27e='Caries'
          }
          else if(this.d27e==7){
            this.t27e='Obturado'
          }
          else if(this.d27e==8){
            this.t27e='Endodoncia'
          }
          else if(this.d27e==9){
            this.t27e='Pérdida'
          }
          else if(this.d27e==10){
            this.t27e='Protesis total'
          }
          else if(this.d27e==11){
            this.t27e='Protesis fija'
          }
          else if(this.d27e==12){
            this.t27e='Protesis removible'
          }

          if(this.d28a==1){
            this.t28a='Sano'
          }
          else if(this.d28a==2){
            this.t28a='Extracción indicada'
          }
          else if(this.d28a==3){
            this.t28a='Pérdida por caries'
          }
          else if(this.d28a==4){
            this.t28a='Sellante necesario'
          }
          else if(this.d28a==5){
            this.t28a='Sellante realizado'
          }
          else if(this.d28a==6){
            this.t28a='Caries'
          }
          else if(this.d28a==7){
            this.t28a='Obturado'
          }
          else if(this.d28a==8){
            this.t28a='Endodoncia'
          }
          else if(this.d28a==9){
            this.t28a='Pérdida'
          }
          else if(this.d28a==10){
            this.t28a='Protesis total'
          }
          else if(this.d28a==11){
            this.t28a='Protesis fija'
          }
          else if(this.d28a==12){
            this.t28a='Protesis removible'
          }

          if(this.d28b==1){
            this.t28b='Sano'
          }
          else if(this.d28b==2){
            this.t28b='Extracción indicada'
          }
          else if(this.d28b==3){
            this.t28b='Pérdida por caries'
          }
          else if(this.d28b==4){
            this.t28b='Sellante necesario'
          }
          else if(this.d28b==5){
            this.t28b='Sellante realizado'
          }
          else if(this.d28b==6){
            this.t28b='Caries'
          }
          else if(this.d28b==7){
            this.t28b='Obturado'
          }
          else if(this.d28b==8){
            this.t28b='Endodoncia'
          }
          else if(this.d28b==9){
            this.t28b='Pérdida'
          }
          else if(this.d28b==10){
            this.t28b='Protesis total'
          }
          else if(this.d28b==11){
            this.t28b='Protesis fija'
          }
          else if(this.d28b==12){
            this.t28b='Protesis removible'
          }

          if(this.d28c==1){
            this.t28c='Sano'
          }
          else if(this.d28c==2){
            this.t28c='Extracción indicada'
          }
          else if(this.d28c==3){
            this.t28c='Pérdida por caries'
          }
          else if(this.d28c==4){
            this.t28c='Sellante necesario'
          }
          else if(this.d28c==5){
            this.t28c='Sellante realizado'
          }
          else if(this.d28c==6){
            this.t28c='Caries'
          }
          else if(this.d28c==7){
            this.t28c='Obturado'
          }
          else if(this.d28c==8){
            this.t28c='Endodoncia'
          }
          else if(this.d28c==9){
            this.t28c='Pérdida'
          }
          else if(this.d28c==10){
            this.t28c='Protesis total'
          }
          else if(this.d28c==11){
            this.t28c='Protesis fija'
          }
          else if(this.d28c==12){
            this.t28c='Protesis removible'
          }

          if(this.d28d==1){
            this.t28d='Sano'
          }
          else if(this.d28d==2){
            this.t28d='Extracción indicada'
          }
          else if(this.d28d==3){
            this.t28d='Pérdida por caries'
          }
          else if(this.d28d==4){
            this.t28d='Sellante necesario'
          }
          else if(this.d28d==5){
            this.t28d='Sellante realizado'
          }
          else if(this.d28d==6){
            this.t28d='Caries'
          }
          else if(this.d28d==7){
            this.t28d='Obturado'
          }
          else if(this.d28d==8){
            this.t28d='Endodoncia'
          }
          else if(this.d28d==9){
            this.t28d='Pérdida'
          }
          else if(this.d28d==10){
            this.t28d='Protesis total'
          }
          else if(this.d28d==11){
            this.t28d='Protesis fija'
          }
          else if(this.d28d==12){
            this.t28d='Protesis removible'
          }

          if(this.d28e==1){
            this.t28e='Sano'
          }
          else if(this.d28e==2){
            this.t28e='Extracción indicada'
          }
          else if(this.d28e==3){
            this.t28e='Pérdida por caries'
          }
          else if(this.d28e==4){
            this.t28e='Sellante necesario'
          }
          else if(this.d28e==5){
            this.t28e='Sellante realizado'
          }
          else if(this.d28e==6){
            this.t28e='Caries'
          }
          else if(this.d28e==7){
            this.t28e='Obturado'
          }
          else if(this.d28e==8){
            this.t28e='Endodoncia'
          }
          else if(this.d28e==9){
            this.t28e='Pérdida'
          }
          else if(this.d28e==10){
            this.t28e='Protesis total'
          }
          else if(this.d28e==11){
            this.t28e='Protesis fija'
          }
          else if(this.d28e==12){
            this.t28e='Protesis removible'
          }

          //CUADRANTE 3

          if(this.d31a==1){
            this.t31a='Sano'
          }
          else if(this.d31a==2){
            this.t31a='Extracción indicada'
          }
          else if(this.d31a==3){
            this.t31a='Pérdida por caries'
          }
          else if(this.d31a==4){
            this.t31a='Sellante necesario'
          }
          else if(this.d31a==5){
            this.t31a='Sellante realizado'
          }
          else if(this.d31a==6){
            this.t31a='Caries'
          }
          else if(this.d31a==7){
            this.t31a='Obturado'
          }
          else if(this.d31a==8){
            this.t31a='Endodoncia'
          }
          else if(this.d31a==9){
            this.t31a='Pérdida'
          }
          else if(this.d31a==10){
            this.t31a='Protesis total'
          }
          else if(this.d31a==11){
            this.t31a='Protesis fija'
          }
          else if(this.d31a==12){
            this.t31a='Protesis removible'
          }

          if(this.d31b==1){
            this.t31b='Sano'
          }
          else if(this.d31b==2){
            this.t31b='Extracción indicada'
          }
          else if(this.d31b==3){
            this.t31b='Pérdida por caries'
          }
          else if(this.d31b==4){
            this.t31b='Sellante necesario'
          }
          else if(this.d31b==5){
            this.t31b='Sellante realizado'
          }
          else if(this.d31b==6){
            this.t31b='Caries'
          }
          else if(this.d31b==7){
            this.t31b='Obturado'
          }
          else if(this.d31b==8){
            this.t31b='Endodoncia'
          }
          else if(this.d31b==9){
            this.t31b='Pérdida'
          }
          else if(this.d31b==10){
            this.t31b='Protesis total'
          }
          else if(this.d31b==11){
            this.t31b='Protesis fija'
          }
          else if(this.d31b==12){
            this.t31b='Protesis removible'
          }

          if(this.d31c==1){
            this.t31c='Sano'
          }
          else if(this.d31c==2){
            this.t31c='Extracción indicada'
          }
          else if(this.d31c==3){
            this.t31c='Pérdida por caries'
          }
          else if(this.d31c==4){
            this.t31c='Sellante necesario'
          }
          else if(this.d31c==5){
            this.t31c='Sellante realizado'
          }
          else if(this.d31c==6){
            this.t31c='Caries'
          }
          else if(this.d31c==7){
            this.t31c='Obturado'
          }
          else if(this.d31c==8){
            this.t31c='Endodoncia'
          }
          else if(this.d31c==9){
            this.t31c='Pérdida'
          }
          else if(this.d31c==10){
            this.t31c='Protesis total'
          }
          else if(this.d31c==11){
            this.t31c='Protesis fija'
          }
          else if(this.d31c==12){
            this.t31c='Protesis removible'
          }

          if(this.d31d==1){
            this.t31d='Sano'
          }
          else if(this.d31d==2){
            this.t31d='Extracción indicada'
          }
          else if(this.d31d==3){
            this.t31d='Pérdida por caries'
          }
          else if(this.d31d==4){
            this.t31d='Sellante necesario'
          }
          else if(this.d31d==5){
            this.t31d='Sellante realizado'
          }
          else if(this.d31d==6){
            this.t31d='Caries'
          }
          else if(this.d31d==7){
            this.t31d='Obturado'
          }
          else if(this.d31d==8){
            this.t31d='Endodoncia'
          }
          else if(this.d31d==9){
            this.t31d='Pérdida'
          }
          else if(this.d31d==10){
            this.t31d='Protesis total'
          }
          else if(this.d31d==11){
            this.t31d='Protesis fija'
          }
          else if(this.d31d==12){
            this.t31d='Protesis removible'
          }

          if(this.d31e==1){
            this.t31e='Sano'
          }
          else if(this.d31e==2){
            this.t31e='Extracción indicada'
          }
          else if(this.d31e==3){
            this.t31e='Pérdida por caries'
          }
          else if(this.d31e==4){
            this.t31e='Sellante necesario'
          }
          else if(this.d31e==5){
            this.t31e='Sellante realizado'
          }
          else if(this.d31e==6){
            this.t31e='Caries'
          }
          else if(this.d31e==7){
            this.t31e='Obturado'
          }
          else if(this.d31e==8){
            this.t31e='Endodoncia'
          }
          else if(this.d31e==9){
            this.t31e='Pérdida'
          }
          else if(this.d31e==10){
            this.t31e='Protesis total'
          }
          else if(this.d31e==11){
            this.t31e='Protesis fija'
          }
          else if(this.d31e==12){
            this.t31e='Protesis removible'
          }

          if(this.d32a==1){
            this.t32a='Sano'
          }
          else if(this.d32a==2){
            this.t32a='Extracción indicada'
          }
          else if(this.d32a==3){
            this.t32a='Pérdida por caries'
          }
          else if(this.d32a==4){
            this.t32a='Sellante necesario'
          }
          else if(this.d32a==5){
            this.t32a='Sellante realizado'
          }
          else if(this.d32a==6){
            this.t32a='Caries'
          }
          else if(this.d32a==7){
            this.t32a='Obturado'
          }
          else if(this.d32a==8){
            this.t32a='Endodoncia'
          }
          else if(this.d32a==9){
            this.t32a='Pérdida'
          }
          else if(this.d32a==10){
            this.t32a='Protesis total'
          }
          else if(this.d32a==11){
            this.t32a='Protesis fija'
          }
          else if(this.d32a==12){
            this.t32a='Protesis removible'
          }

          if(this.d32b==1){
            this.t32b='Sano'
          }
          else if(this.d32b==2){
            this.t32b='Extracción indicada'
          }
          else if(this.d32b==3){
            this.t32b='Pérdida por caries'
          }
          else if(this.d32b==4){
            this.t32b='Sellante necesario'
          }
          else if(this.d32b==5){
            this.t32b='Sellante realizado'
          }
          else if(this.d32b==6){
            this.t32b='Caries'
          }
          else if(this.d32b==7){
            this.t32b='Obturado'
          }
          else if(this.d32b==8){
            this.t32b='Endodoncia'
          }
          else if(this.d32b==9){
            this.t32b='Pérdida'
          }
          else if(this.d32b==10){
            this.t32b='Protesis total'
          }
          else if(this.d32b==11){
            this.t32b='Protesis fija'
          }
          else if(this.d32b==12){
            this.t32b='Protesis removible'
          }

          if(this.d32c==1){
            this.t32c='Sano'
          }
          else if(this.d32c==2){
            this.t32c='Extracción indicada'
          }
          else if(this.d32c==3){
            this.t32c='Pérdida por caries'
          }
          else if(this.d32c==4){
            this.t32c='Sellante necesario'
          }
          else if(this.d32c==5){
            this.t32c='Sellante realizado'
          }
          else if(this.d32c==6){
            this.t32c='Caries'
          }
          else if(this.d32c==7){
            this.t32c='Obturado'
          }
          else if(this.d32c==8){
            this.t32c='Endodoncia'
          }
          else if(this.d32c==9){
            this.t32c='Pérdida'
          }
          else if(this.d32c==10){
            this.t32c='Protesis total'
          }
          else if(this.d32c==11){
            this.t32c='Protesis fija'
          }
          else if(this.d32c==12){
            this.t32c='Protesis removible'
          }

          if(this.d32d==1){
            this.t32d='Sano'
          }
          else if(this.d32d==2){
            this.t32d='Extracción indicada'
          }
          else if(this.d32d==3){
            this.t32d='Pérdida por caries'
          }
          else if(this.d32d==4){
            this.t32d='Sellante necesario'
          }
          else if(this.d32d==5){
            this.t32d='Sellante realizado'
          }
          else if(this.d32d==6){
            this.t32d='Caries'
          }
          else if(this.d32d==7){
            this.t32d='Obturado'
          }
          else if(this.d32d==8){
            this.t32d='Endodoncia'
          }
          else if(this.d32d==9){
            this.t32d='Pérdida'
          }
          else if(this.d32d==10){
            this.t32d='Protesis total'
          }
          else if(this.d32d==11){
            this.t32d='Protesis fija'
          }
          else if(this.d32d==12){
            this.t32d='Protesis removible'
          }

          if(this.d32e==1){
            this.t32e='Sano'
          }
          else if(this.d32e==2){
            this.t32e='Extracción indicada'
          }
          else if(this.d32e==3){
            this.t32e='Pérdida por caries'
          }
          else if(this.d32e==4){
            this.t32e='Sellante necesario'
          }
          else if(this.d32e==5){
            this.t32e='Sellante realizado'
          }
          else if(this.d32e==6){
            this.t32e='Caries'
          }
          else if(this.d32e==7){
            this.t32e='Obturado'
          }
          else if(this.d32e==8){
            this.t32e='Endodoncia'
          }
          else if(this.d32e==9){
            this.t32e='Pérdida'
          }
          else if(this.d32e==10){
            this.t32e='Protesis total'
          }
          else if(this.d32e==11){
            this.t32e='Protesis fija'
          }
          else if(this.d32e==12){
            this.t32e='Protesis removible'
          }

          if(this.d33a==1){
            this.t33a='Sano'
          }
          else if(this.d33a==2){
            this.t33a='Extracción indicada'
          }
          else if(this.d33a==3){
            this.t33a='Pérdida por caries'
          }
          else if(this.d33a==4){
            this.t33a='Sellante necesario'
          }
          else if(this.d33a==5){
            this.t33a='Sellante realizado'
          }
          else if(this.d33a==6){
            this.t33a='Caries'
          }
          else if(this.d33a==7){
            this.t33a='Obturado'
          }
          else if(this.d33a==8){
            this.t33a='Endodoncia'
          }
          else if(this.d33a==9){
            this.t33a='Pérdida'
          }
          else if(this.d33a==10){
            this.t33a='Protesis total'
          }
          else if(this.d33a==11){
            this.t33a='Protesis fija'
          }
          else if(this.d33a==12){
            this.t33a='Protesis removible'
          }

          if(this.d33b==1){
            this.t33b='Sano'
          }
          else if(this.d33b==2){
            this.t33b='Extracción indicada'
          }
          else if(this.d33b==3){
            this.t33b='Pérdida por caries'
          }
          else if(this.d33b==4){
            this.t33b='Sellante necesario'
          }
          else if(this.d33b==5){
            this.t33b='Sellante realizado'
          }
          else if(this.d33b==6){
            this.t33b='Caries'
          }
          else if(this.d33b==7){
            this.t33b='Obturado'
          }
          else if(this.d33b==8){
            this.t33b='Endodoncia'
          }
          else if(this.d33b==9){
            this.t33b='Pérdida'
          }
          else if(this.d33b==10){
            this.t33b='Protesis total'
          }
          else if(this.d33b==11){
            this.t33b='Protesis fija'
          }
          else if(this.d33b==12){
            this.t33b='Protesis removible'
          }

          if(this.d33c==1){
            this.t33c='Sano'
          }
          else if(this.d33c==2){
            this.t33c='Extracción indicada'
          }
          else if(this.d33c==3){
            this.t33c='Pérdida por caries'
          }
          else if(this.d33c==4){
            this.t33c='Sellante necesario'
          }
          else if(this.d33c==5){
            this.t33c='Sellante realizado'
          }
          else if(this.d33c==6){
            this.t33c='Caries'
          }
          else if(this.d33c==7){
            this.t33c='Obturado'
          }
          else if(this.d33c==8){
            this.t33c='Endodoncia'
          }
          else if(this.d33c==9){
            this.t33c='Pérdida'
          }
          else if(this.d33c==10){
            this.t33c='Protesis total'
          }
          else if(this.d33c==11){
            this.t33c='Protesis fija'
          }
          else if(this.d33c==12){
            this.t33c='Protesis removible'
          }

          if(this.d33d==1){
            this.t33d='Sano'
          }
          else if(this.d33d==2){
            this.t33d='Extracción indicada'
          }
          else if(this.d33d==3){
            this.t33d='Pérdida por caries'
          }
          else if(this.d33d==4){
            this.t33d='Sellante necesario'
          }
          else if(this.d33d==5){
            this.t33d='Sellante realizado'
          }
          else if(this.d33d==6){
            this.t33d='Caries'
          }
          else if(this.d33d==7){
            this.t33d='Obturado'
          }
          else if(this.d33d==8){
            this.t33d='Endodoncia'
          }
          else if(this.d33d==9){
            this.t33d='Pérdida'
          }
          else if(this.d33d==10){
            this.t33d='Protesis total'
          }
          else if(this.d33d==11){
            this.t33d='Protesis fija'
          }
          else if(this.d33d==12){
            this.t33d='Protesis removible'
          }

          if(this.d33e==1){
            this.t33e='Sano'
          }
          else if(this.d33e==2){
            this.t33e='Extracción indicada'
          }
          else if(this.d33e==3){
            this.t33e='Pérdida por caries'
          }
          else if(this.d33e==4){
            this.t33e='Sellante necesario'
          }
          else if(this.d33e==5){
            this.t33e='Sellante realizado'
          }
          else if(this.d33e==6){
            this.t33e='Caries'
          }
          else if(this.d33e==7){
            this.t33e='Obturado'
          }
          else if(this.d33e==8){
            this.t33e='Endodoncia'
          }
          else if(this.d33e==9){
            this.t33e='Pérdida'
          }
          else if(this.d33e==10){
            this.t33e='Protesis total'
          }
          else if(this.d33e==11){
            this.t33e='Protesis fija'
          }
          else if(this.d33e==12){
            this.t33e='Protesis removible'
          }

          if(this.d34a==1){
            this.t34a='Sano'
          }
          else if(this.d34a==2){
            this.t34a='Extracción indicada'
          }
          else if(this.d34a==3){
            this.t34a='Pérdida por caries'
          }
          else if(this.d34a==4){
            this.t34a='Sellante necesario'
          }
          else if(this.d34a==5){
            this.t34a='Sellante realizado'
          }
          else if(this.d34a==6){
            this.t34a='Caries'
          }
          else if(this.d34a==7){
            this.t34a='Obturado'
          }
          else if(this.d34a==8){
            this.t34a='Endodoncia'
          }
          else if(this.d34a==9){
            this.t34a='Pérdida'
          }
          else if(this.d34a==10){
            this.t34a='Protesis total'
          }
          else if(this.d34a==11){
            this.t34a='Protesis fija'
          }
          else if(this.d34a==12){
            this.t34a='Protesis removible'
          }

          if(this.d34b==1){
            this.t34b='Sano'
          }
          else if(this.d34b==2){
            this.t34b='Extracción indicada'
          }
          else if(this.d34b==3){
            this.t34b='Pérdida por caries'
          }
          else if(this.d34b==4){
            this.t34b='Sellante necesario'
          }
          else if(this.d34b==5){
            this.t34b='Sellante realizado'
          }
          else if(this.d34b==6){
            this.t34b='Caries'
          }
          else if(this.d34b==7){
            this.t34b='Obturado'
          }
          else if(this.d34b==8){
            this.t34b='Endodoncia'
          }
          else if(this.d34b==9){
            this.t34b='Pérdida'
          }
          else if(this.d34b==10){
            this.t34b='Protesis total'
          }
          else if(this.d34b==11){
            this.t34b='Protesis fija'
          }
          else if(this.d34b==12){
            this.t34b='Protesis removible'
          }

          if(this.d34c==1){
            this.t34c='Sano'
          }
          else if(this.d34c==2){
            this.t34c='Extracción indicada'
          }
          else if(this.d34c==3){
            this.t34c='Pérdida por caries'
          }
          else if(this.d34c==4){
            this.t34c='Sellante necesario'
          }
          else if(this.d34c==5){
            this.t34c='Sellante realizado'
          }
          else if(this.d34c==6){
            this.t34c='Caries'
          }
          else if(this.d34c==7){
            this.t34c='Obturado'
          }
          else if(this.d34c==8){
            this.t34c='Endodoncia'
          }
          else if(this.d34c==9){
            this.t34c='Pérdida'
          }
          else if(this.d34c==10){
            this.t34c='Protesis total'
          }
          else if(this.d34c==11){
            this.t34c='Protesis fija'
          }
          else if(this.d34c==12){
            this.t34c='Protesis removible'
          }

          if(this.d34d==1){
            this.t34d='Sano'
          }
          else if(this.d34d==2){
            this.t34d='Extracción indicada'
          }
          else if(this.d34d==3){
            this.t34d='Pérdida por caries'
          }
          else if(this.d34d==4){
            this.t34d='Sellante necesario'
          }
          else if(this.d34d==5){
            this.t34d='Sellante realizado'
          }
          else if(this.d34d==6){
            this.t34d='Caries'
          }
          else if(this.d34d==7){
            this.t34d='Obturado'
          }
          else if(this.d34d==8){
            this.t34d='Endodoncia'
          }
          else if(this.d34d==9){
            this.t34d='Pérdida'
          }
          else if(this.d34d==10){
            this.t34d='Protesis total'
          }
          else if(this.d34d==11){
            this.t34d='Protesis fija'
          }
          else if(this.d34d==12){
            this.t34d='Protesis removible'
          }

          if(this.d34e==1){
            this.t34e='Sano'
          }
          else if(this.d34e==2){
            this.t34e='Extracción indicada'
          }
          else if(this.d34e==3){
            this.t34e='Pérdida por caries'
          }
          else if(this.d34e==4){
            this.t34e='Sellante necesario'
          }
          else if(this.d34e==5){
            this.t34e='Sellante realizado'
          }
          else if(this.d34e==6){
            this.t34e='Caries'
          }
          else if(this.d34e==7){
            this.t34e='Obturado'
          }
          else if(this.d34e==8){
            this.t34e='Endodoncia'
          }
          else if(this.d34e==9){
            this.t34e='Pérdida'
          }
          else if(this.d34e==10){
            this.t34e='Protesis total'
          }
          else if(this.d34e==11){
            this.t34e='Protesis fija'
          }
          else if(this.d34e==12){
            this.t34e='Protesis removible'
          }

          if(this.d35a==1){
            this.t35a='Sano'
          }
          else if(this.d35a==2){
            this.t35a='Extracción indicada'
          }
          else if(this.d35a==3){
            this.t35a='Pérdida por caries'
          }
          else if(this.d35a==4){
            this.t35a='Sellante necesario'
          }
          else if(this.d35a==5){
            this.t35a='Sellante realizado'
          }
          else if(this.d35a==6){
            this.t35a='Caries'
          }
          else if(this.d35a==7){
            this.t35a='Obturado'
          }
          else if(this.d35a==8){
            this.t35a='Endodoncia'
          }
          else if(this.d35a==9){
            this.t35a='Pérdida'
          }
          else if(this.d35a==10){
            this.t35a='Protesis total'
          }
          else if(this.d35a==11){
            this.t35a='Protesis fija'
          }
          else if(this.d35a==12){
            this.t35a='Protesis removible'
          }

          if(this.d35b==1){
            this.t35b='Sano'
          }
          else if(this.d35b==2){
            this.t35b='Extracción indicada'
          }
          else if(this.d35b==3){
            this.t35b='Pérdida por caries'
          }
          else if(this.d35b==4){
            this.t35b='Sellante necesario'
          }
          else if(this.d35b==5){
            this.t35b='Sellante realizado'
          }
          else if(this.d35b==6){
            this.t35b='Caries'
          }
          else if(this.d35b==7){
            this.t35b='Obturado'
          }
          else if(this.d35b==8){
            this.t35b='Endodoncia'
          }
          else if(this.d35b==9){
            this.t35b='Pérdida'
          }
          else if(this.d35b==10){
            this.t35b='Protesis total'
          }
          else if(this.d35b==11){
            this.t35b='Protesis fija'
          }
          else if(this.d35b==12){
            this.t35b='Protesis removible'
          }

          if(this.d35c==1){
            this.t35c='Sano'
          }
          else if(this.d35c==2){
            this.t35c='Extracción indicada'
          }
          else if(this.d35c==3){
            this.t35c='Pérdida por caries'
          }
          else if(this.d35c==4){
            this.t35c='Sellante necesario'
          }
          else if(this.d35c==5){
            this.t35c='Sellante realizado'
          }
          else if(this.d35c==6){
            this.t35c='Caries'
          }
          else if(this.d35c==7){
            this.t35c='Obturado'
          }
          else if(this.d35c==8){
            this.t35c='Endodoncia'
          }
          else if(this.d35c==9){
            this.t35c='Pérdida'
          }
          else if(this.d35c==10){
            this.t35c='Protesis total'
          }
          else if(this.d35c==11){
            this.t35c='Protesis fija'
          }
          else if(this.d35c==12){
            this.t35c='Protesis removible'
          }

          if(this.d35d==1){
            this.t35d='Sano'
          }
          else if(this.d35d==2){
            this.t35d='Extracción indicada'
          }
          else if(this.d35d==3){
            this.t35d='Pérdida por caries'
          }
          else if(this.d35d==4){
            this.t35d='Sellante necesario'
          }
          else if(this.d35d==5){
            this.t35d='Sellante realizado'
          }
          else if(this.d35d==6){
            this.t35d='Caries'
          }
          else if(this.d35d==7){
            this.t35d='Obturado'
          }
          else if(this.d35d==8){
            this.t35d='Endodoncia'
          }
          else if(this.d35d==9){
            this.t35d='Pérdida'
          }
          else if(this.d35d==10){
            this.t35d='Protesis total'
          }
          else if(this.d35d==11){
            this.t35d='Protesis fija'
          }
          else if(this.d35d==12){
            this.t35d='Protesis removible'
          }

          if(this.d35e==1){
            this.t35e='Sano'
          }
          else if(this.d35e==2){
            this.t35e='Extracción indicada'
          }
          else if(this.d35e==3){
            this.t35e='Pérdida por caries'
          }
          else if(this.d35e==4){
            this.t35e='Sellante necesario'
          }
          else if(this.d35e==5){
            this.t35e='Sellante realizado'
          }
          else if(this.d35e==6){
            this.t35e='Caries'
          }
          else if(this.d35e==7){
            this.t35e='Obturado'
          }
          else if(this.d35e==8){
            this.t35e='Endodoncia'
          }
          else if(this.d35e==9){
            this.t35e='Pérdida'
          }
          else if(this.d35e==10){
            this.t35e='Protesis total'
          }
          else if(this.d35e==11){
            this.t35e='Protesis fija'
          }
          else if(this.d35e==12){
            this.t35e='Protesis removible'
          }

          if(this.d36a==1){
            this.t36a='Sano'
          }
          else if(this.d36a==2){
            this.t36a='Extracción indicada'
          }
          else if(this.d36a==3){
            this.t36a='Pérdida por caries'
          }
          else if(this.d36a==4){
            this.t36a='Sellante necesario'
          }
          else if(this.d36a==5){
            this.t36a='Sellante realizado'
          }
          else if(this.d36a==6){
            this.t36a='Caries'
          }
          else if(this.d36a==7){
            this.t36a='Obturado'
          }
          else if(this.d36a==8){
            this.t36a='Endodoncia'
          }
          else if(this.d36a==9){
            this.t36a='Pérdida'
          }
          else if(this.d36a==10){
            this.t36a='Protesis total'
          }
          else if(this.d36a==11){
            this.t36a='Protesis fija'
          }
          else if(this.d36a==12){
            this.t36a='Protesis removible'
          }

          if(this.d36b==1){
            this.t36b='Sano'
          }
          else if(this.d36b==2){
            this.t36b='Extracción indicada'
          }
          else if(this.d36b==3){
            this.t36b='Pérdida por caries'
          }
          else if(this.d36b==4){
            this.t36b='Sellante necesario'
          }
          else if(this.d36b==5){
            this.t36b='Sellante realizado'
          }
          else if(this.d36b==6){
            this.t36b='Caries'
          }
          else if(this.d36b==7){
            this.t36b='Obturado'
          }
          else if(this.d36b==8){
            this.t36b='Endodoncia'
          }
          else if(this.d36b==9){
            this.t36b='Pérdida'
          }
          else if(this.d36b==10){
            this.t36b='Protesis total'
          }
          else if(this.d36b==11){
            this.t36b='Protesis fija'
          }
          else if(this.d36b==12){
            this.t36b='Protesis removible'
          }

          if(this.d36c==1){
            this.t36c='Sano'
          }
          else if(this.d36c==2){
            this.t36c='Extracción indicada'
          }
          else if(this.d36c==3){
            this.t36c='Pérdida por caries'
          }
          else if(this.d36c==4){
            this.t36c='Sellante necesario'
          }
          else if(this.d36c==5){
            this.t36c='Sellante realizado'
          }
          else if(this.d36c==6){
            this.t36c='Caries'
          }
          else if(this.d36c==7){
            this.t36c='Obturado'
          }
          else if(this.d36c==8){
            this.t36c='Endodoncia'
          }
          else if(this.d36c==9){
            this.t36c='Pérdida'
          }
          else if(this.d36c==10){
            this.t36c='Protesis total'
          }
          else if(this.d36c==11){
            this.t36c='Protesis fija'
          }
          else if(this.d36c==12){
            this.t36c='Protesis removible'
          }

          if(this.d36d==1){
            this.t36d='Sano'
          }
          else if(this.d36d==2){
            this.t36d='Extracción indicada'
          }
          else if(this.d36d==3){
            this.t36d='Pérdida por caries'
          }
          else if(this.d36d==4){
            this.t36d='Sellante necesario'
          }
          else if(this.d36d==5){
            this.t36d='Sellante realizado'
          }
          else if(this.d36d==6){
            this.t36d='Caries'
          }
          else if(this.d36d==7){
            this.t36d='Obturado'
          }
          else if(this.d36d==8){
            this.t36d='Endodoncia'
          }
          else if(this.d36d==9){
            this.t36d='Pérdida'
          }
          else if(this.d36d==10){
            this.t36d='Protesis total'
          }
          else if(this.d36d==11){
            this.t36d='Protesis fija'
          }
          else if(this.d36d==12){
            this.t36d='Protesis removible'
          }

          if(this.d36e==1){
            this.t36e='Sano'
          }
          else if(this.d36e==2){
            this.t36e='Extracción indicada'
          }
          else if(this.d36e==3){
            this.t36e='Pérdida por caries'
          }
          else if(this.d36e==4){
            this.t36e='Sellante necesario'
          }
          else if(this.d36e==5){
            this.t36e='Sellante realizado'
          }
          else if(this.d36e==6){
            this.t36e='Caries'
          }
          else if(this.d36e==7){
            this.t36e='Obturado'
          }
          else if(this.d36e==8){
            this.t36e='Endodoncia'
          }
          else if(this.d36e==9){
            this.t36e='Pérdida'
          }
          else if(this.d36e==10){
            this.t36e='Protesis total'
          }
          else if(this.d36e==11){
            this.t36e='Protesis fija'
          }
          else if(this.d36e==12){
            this.t36e='Protesis removible'
          }

          if(this.d37a==1){
            this.t37a='Sano'
          }
          else if(this.d37a==2){
            this.t37a='Extracción indicada'
          }
          else if(this.d37a==3){
            this.t37a='Pérdida por caries'
          }
          else if(this.d37a==4){
            this.t37a='Sellante necesario'
          }
          else if(this.d37a==5){
            this.t37a='Sellante realizado'
          }
          else if(this.d37a==6){
            this.t37a='Caries'
          }
          else if(this.d37a==7){
            this.t37a='Obturado'
          }
          else if(this.d37a==8){
            this.t37a='Endodoncia'
          }
          else if(this.d37a==9){
            this.t37a='Pérdida'
          }
          else if(this.d37a==10){
            this.t37a='Protesis total'
          }
          else if(this.d37a==11){
            this.t37a='Protesis fija'
          }
          else if(this.d37a==12){
            this.t37a='Protesis removible'
          }

          if(this.d37b==1){
            this.t37b='Sano'
          }
          else if(this.d37b==2){
            this.t37b='Extracción indicada'
          }
          else if(this.d37b==3){
            this.t37b='Pérdida por caries'
          }
          else if(this.d37b==4){
            this.t37b='Sellante necesario'
          }
          else if(this.d37b==5){
            this.t37b='Sellante realizado'
          }
          else if(this.d37b==6){
            this.t37b='Caries'
          }
          else if(this.d37b==7){
            this.t37b='Obturado'
          }
          else if(this.d37b==8){
            this.t37b='Endodoncia'
          }
          else if(this.d37b==9){
            this.t37b='Pérdida'
          }
          else if(this.d37b==10){
            this.t37b='Protesis total'
          }
          else if(this.d37b==11){
            this.t37b='Protesis fija'
          }
          else if(this.d37b==12){
            this.t37b='Protesis removible'
          }

          if(this.d37c==1){
            this.t37c='Sano'
          }
          else if(this.d37c==2){
            this.t37c='Extracción indicada'
          }
          else if(this.d37c==3){
            this.t37c='Pérdida por caries'
          }
          else if(this.d37c==4){
            this.t37c='Sellante necesario'
          }
          else if(this.d37c==5){
            this.t37c='Sellante realizado'
          }
          else if(this.d37c==6){
            this.t37c='Caries'
          }
          else if(this.d37c==7){
            this.t37c='Obturado'
          }
          else if(this.d37c==8){
            this.t37c='Endodoncia'
          }
          else if(this.d37c==9){
            this.t37c='Pérdida'
          }
          else if(this.d37c==10){
            this.t37c='Protesis total'
          }
          else if(this.d37c==11){
            this.t37c='Protesis fija'
          }
          else if(this.d37c==12){
            this.t37c='Protesis removible'
          }

          if(this.d37d==1){
            this.t37d='Sano'
          }
          else if(this.d37d==2){
            this.t37d='Extracción indicada'
          }
          else if(this.d37d==3){
            this.t37d='Pérdida por caries'
          }
          else if(this.d37d==4){
            this.t37d='Sellante necesario'
          }
          else if(this.d37d==5){
            this.t37d='Sellante realizado'
          }
          else if(this.d37d==6){
            this.t37d='Caries'
          }
          else if(this.d37d==7){
            this.t37d='Obturado'
          }
          else if(this.d37d==8){
            this.t37d='Endodoncia'
          }
          else if(this.d37d==9){
            this.t37d='Pérdida'
          }
          else if(this.d37d==10){
            this.t37d='Protesis total'
          }
          else if(this.d37d==11){
            this.t37d='Protesis fija'
          }
          else if(this.d37d==12){
            this.t37d='Protesis removible'
          }

          if(this.d37e==1){
            this.t37e='Sano'
          }
          else if(this.d37e==2){
            this.t37e='Extracción indicada'
          }
          else if(this.d37e==3){
            this.t37e='Pérdida por caries'
          }
          else if(this.d37e==4){
            this.t37e='Sellante necesario'
          }
          else if(this.d37e==5){
            this.t37e='Sellante realizado'
          }
          else if(this.d37e==6){
            this.t37e='Caries'
          }
          else if(this.d37e==7){
            this.t37e='Obturado'
          }
          else if(this.d37e==8){
            this.t37e='Endodoncia'
          }
          else if(this.d37e==9){
            this.t37e='Pérdida'
          }
          else if(this.d37e==10){
            this.t37e='Protesis total'
          }
          else if(this.d37e==11){
            this.t37e='Protesis fija'
          }
          else if(this.d37e==12){
            this.t37e='Protesis removible'
          }

          if(this.d38a==1){
            this.t38a='Sano'
          }
          else if(this.d38a==2){
            this.t38a='Extracción indicada'
          }
          else if(this.d38a==3){
            this.t38a='Pérdida por caries'
          }
          else if(this.d38a==4){
            this.t38a='Sellante necesario'
          }
          else if(this.d38a==5){
            this.t38a='Sellante realizado'
          }
          else if(this.d38a==6){
            this.t38a='Caries'
          }
          else if(this.d38a==7){
            this.t38a='Obturado'
          }
          else if(this.d38a==8){
            this.t38a='Endodoncia'
          }
          else if(this.d38a==9){
            this.t38a='Pérdida'
          }
          else if(this.d38a==10){
            this.t38a='Protesis total'
          }
          else if(this.d38a==11){
            this.t38a='Protesis fija'
          }
          else if(this.d38a==12){
            this.t38a='Protesis removible'
          }

          if(this.d38b==1){
            this.t38b='Sano'
          }
          else if(this.d38b==2){
            this.t38b='Extracción indicada'
          }
          else if(this.d38b==3){
            this.t38b='Pérdida por caries'
          }
          else if(this.d38b==4){
            this.t38b='Sellante necesario'
          }
          else if(this.d38b==5){
            this.t38b='Sellante realizado'
          }
          else if(this.d38b==6){
            this.t38b='Caries'
          }
          else if(this.d38b==7){
            this.t38b='Obturado'
          }
          else if(this.d38b==8){
            this.t38b='Endodoncia'
          }
          else if(this.d38b==9){
            this.t38b='Pérdida'
          }
          else if(this.d38b==10){
            this.t38b='Protesis total'
          }
          else if(this.d38b==11){
            this.t38b='Protesis fija'
          }
          else if(this.d38b==12){
            this.t38b='Protesis removible'
          }

          if(this.d38c==1){
            this.t38c='Sano'
          }
          else if(this.d38c==2){
            this.t38c='Extracción indicada'
          }
          else if(this.d38c==3){
            this.t38c='Pérdida por caries'
          }
          else if(this.d38c==4){
            this.t38c='Sellante necesario'
          }
          else if(this.d38c==5){
            this.t38c='Sellante realizado'
          }
          else if(this.d38c==6){
            this.t38c='Caries'
          }
          else if(this.d38c==7){
            this.t38c='Obturado'
          }
          else if(this.d38c==8){
            this.t38c='Endodoncia'
          }
          else if(this.d38c==9){
            this.t38c='Pérdida'
          }
          else if(this.d38c==10){
            this.t38c='Protesis total'
          }
          else if(this.d38c==11){
            this.t38c='Protesis fija'
          }
          else if(this.d38c==12){
            this.t38c='Protesis removible'
          }

          if(this.d38d==1){
            this.t38d='Sano'
          }
          else if(this.d38d==2){
            this.t38d='Extracción indicada'
          }
          else if(this.d38d==3){
            this.t38d='Pérdida por caries'
          }
          else if(this.d38d==4){
            this.t38d='Sellante necesario'
          }
          else if(this.d38d==5){
            this.t38d='Sellante realizado'
          }
          else if(this.d38d==6){
            this.t38d='Caries'
          }
          else if(this.d38d==7){
            this.t38d='Obturado'
          }
          else if(this.d38d==8){
            this.t38d='Endodoncia'
          }
          else if(this.d38d==9){
            this.t38d='Pérdida'
          }
          else if(this.d38d==10){
            this.t38d='Protesis total'
          }
          else if(this.d38d==11){
            this.t38d='Protesis fija'
          }
          else if(this.d38d==12){
            this.t38d='Protesis removible'
          }

          if(this.d38e==1){
            this.t38e='Sano'
          }
          else if(this.d38e==2){
            this.t38e='Extracción indicada'
          }
          else if(this.d38e==3){
            this.t38e='Pérdida por caries'
          }
          else if(this.d38e==4){
            this.t38e='Sellante necesario'
          }
          else if(this.d38e==5){
            this.t38e='Sellante realizado'
          }
          else if(this.d38e==6){
            this.t38e='Caries'
          }
          else if(this.d38e==7){
            this.t38e='Obturado'
          }
          else if(this.d38e==8){
            this.t38e='Endodoncia'
          }
          else if(this.d38e==9){
            this.t38e='Pérdida'
          }
          else if(this.d38e==10){
            this.t38e='Protesis total'
          }
          else if(this.d38e==11){
            this.t38e='Protesis fija'
          }
          else if(this.d38e==12){
            this.t38e='Protesis removible'
          }

          //CUADRANTE 4

          if(this.d41a==1){
            this.t41a='Sano'
          }
          else if(this.d41a==2){
            this.t41a='Extracción indicada'
          }
          else if(this.d41a==3){
            this.t41a='Pérdida por caries'
          }
          else if(this.d41a==4){
            this.t41a='Sellante necesario'
          }
          else if(this.d41a==5){
            this.t41a='Sellante realizado'
          }
          else if(this.d41a==6){
            this.t41a='Caries'
          }
          else if(this.d41a==7){
            this.t41a='Obturado'
          }
          else if(this.d41a==8){
            this.t41a='Endodoncia'
          }
          else if(this.d41a==9){
            this.t41a='Pérdida'
          }
          else if(this.d41a==10){
            this.t41a='Protesis total'
          }
          else if(this.d41a==11){
            this.t41a='Protesis fija'
          }
          else if(this.d41a==12){
            this.t41a='Protesis removible'
          }

          if(this.d41b==1){
            this.t41b='Sano'
          }
          else if(this.d41b==2){
            this.t41b='Extracción indicada'
          }
          else if(this.d41b==3){
            this.t41b='Pérdida por caries'
          }
          else if(this.d41b==4){
            this.t41b='Sellante necesario'
          }
          else if(this.d41b==5){
            this.t41b='Sellante realizado'
          }
          else if(this.d41b==6){
            this.t41b='Caries'
          }
          else if(this.d41b==7){
            this.t41b='Obturado'
          }
          else if(this.d41b==8){
            this.t41b='Endodoncia'
          }
          else if(this.d41b==9){
            this.t41b='Pérdida'
          }
          else if(this.d41b==10){
            this.t41b='Protesis total'
          }
          else if(this.d41b==11){
            this.t41b='Protesis fija'
          }
          else if(this.d41b==12){
            this.t41b='Protesis removible'
          }

          if(this.d41c==1){
            this.t41c='Sano'
          }
          else if(this.d41c==2){
            this.t41c='Extracción indicada'
          }
          else if(this.d41c==3){
            this.t41c='Pérdida por caries'
          }
          else if(this.d41c==4){
            this.t41c='Sellante necesario'
          }
          else if(this.d41c==5){
            this.t41c='Sellante realizado'
          }
          else if(this.d41c==6){
            this.t41c='Caries'
          }
          else if(this.d41c==7){
            this.t41c='Obturado'
          }
          else if(this.d41c==8){
            this.t41c='Endodoncia'
          }
          else if(this.d41c==9){
            this.t41c='Pérdida'
          }
          else if(this.d41c==10){
            this.t41c='Protesis total'
          }
          else if(this.d41c==11){
            this.t41c='Protesis fija'
          }
          else if(this.d41c==12){
            this.t41c='Protesis removible'
          }

          if(this.d41d==1){
            this.t41d='Sano'
          }
          else if(this.d41d==2){
            this.t41d='Extracción indicada'
          }
          else if(this.d41d==3){
            this.t41d='Pérdida por caries'
          }
          else if(this.d41d==4){
            this.t41d='Sellante necesario'
          }
          else if(this.d41d==5){
            this.t41d='Sellante realizado'
          }
          else if(this.d41d==6){
            this.t41d='Caries'
          }
          else if(this.d41d==7){
            this.t41d='Obturado'
          }
          else if(this.d41d==8){
            this.t41d='Endodoncia'
          }
          else if(this.d41d==9){
            this.t41d='Pérdida'
          }
          else if(this.d41d==10){
            this.t41d='Protesis total'
          }
          else if(this.d41d==11){
            this.t41d='Protesis fija'
          }
          else if(this.d41d==12){
            this.t41d='Protesis removible'
          }

          if(this.d41e==1){
            this.t41e='Sano'
          }
          else if(this.d41e==2){
            this.t41e='Extracción indicada'
          }
          else if(this.d41e==3){
            this.t41e='Pérdida por caries'
          }
          else if(this.d41e==4){
            this.t41e='Sellante necesario'
          }
          else if(this.d41e==5){
            this.t41e='Sellante realizado'
          }
          else if(this.d41e==6){
            this.t41e='Caries'
          }
          else if(this.d41e==7){
            this.t41e='Obturado'
          }
          else if(this.d41e==8){
            this.t41e='Endodoncia'
          }
          else if(this.d41e==9){
            this.t41e='Pérdida'
          }
          else if(this.d41e==10){
            this.t41e='Protesis total'
          }
          else if(this.d41e==11){
            this.t41e='Protesis fija'
          }
          else if(this.d41e==12){
            this.t41e='Protesis removible'
          }

          if(this.d42a==1){
            this.t42a='Sano'
          }
          else if(this.d42a==2){
            this.t42a='Extracción indicada'
          }
          else if(this.d42a==3){
            this.t42a='Pérdida por caries'
          }
          else if(this.d42a==4){
            this.t42a='Sellante necesario'
          }
          else if(this.d42a==5){
            this.t42a='Sellante realizado'
          }
          else if(this.d42a==6){
            this.t42a='Caries'
          }
          else if(this.d42a==7){
            this.t42a='Obturado'
          }
          else if(this.d42a==8){
            this.t42a='Endodoncia'
          }
          else if(this.d42a==9){
            this.t42a='Pérdida'
          }
          else if(this.d42a==10){
            this.t42a='Protesis total'
          }
          else if(this.d42a==11){
            this.t42a='Protesis fija'
          }
          else if(this.d42a==12){
            this.t42a='Protesis removible'
          }

          if(this.d42b==1){
            this.t42b='Sano'
          }
          else if(this.d42b==2){
            this.t42b='Extracción indicada'
          }
          else if(this.d42b==3){
            this.t42b='Pérdida por caries'
          }
          else if(this.d42b==4){
            this.t42b='Sellante necesario'
          }
          else if(this.d42b==5){
            this.t42b='Sellante realizado'
          }
          else if(this.d42b==6){
            this.t42b='Caries'
          }
          else if(this.d42b==7){
            this.t42b='Obturado'
          }
          else if(this.d42b==8){
            this.t42b='Endodoncia'
          }
          else if(this.d42b==9){
            this.t42b='Pérdida'
          }
          else if(this.d42b==10){
            this.t42b='Protesis total'
          }
          else if(this.d42b==11){
            this.t42b='Protesis fija'
          }
          else if(this.d42b==12){
            this.t42b='Protesis removible'
          }

          if(this.d42c==1){
            this.t42c='Sano'
          }
          else if(this.d42c==2){
            this.t42c='Extracción indicada'
          }
          else if(this.d42c==3){
            this.t42c='Pérdida por caries'
          }
          else if(this.d42c==4){
            this.t42c='Sellante necesario'
          }
          else if(this.d42c==5){
            this.t42c='Sellante realizado'
          }
          else if(this.d42c==6){
            this.t42c='Caries'
          }
          else if(this.d42c==7){
            this.t42c='Obturado'
          }
          else if(this.d42c==8){
            this.t42c='Endodoncia'
          }
          else if(this.d42c==9){
            this.t42c='Pérdida'
          }
          else if(this.d42c==10){
            this.t42c='Protesis total'
          }
          else if(this.d42c==11){
            this.t42c='Protesis fija'
          }
          else if(this.d42c==12){
            this.t42c='Protesis removible'
          }

          if(this.d42d==1){
            this.t42d='Sano'
          }
          else if(this.d42d==2){
            this.t42d='Extracción indicada'
          }
          else if(this.d42d==3){
            this.t42d='Pérdida por caries'
          }
          else if(this.d42d==4){
            this.t42d='Sellante necesario'
          }
          else if(this.d42d==5){
            this.t42d='Sellante realizado'
          }
          else if(this.d42d==6){
            this.t42d='Caries'
          }
          else if(this.d42d==7){
            this.t42d='Obturado'
          }
          else if(this.d42d==8){
            this.t42d='Endodoncia'
          }
          else if(this.d42d==9){
            this.t42d='Pérdida'
          }
          else if(this.d42d==10){
            this.t42d='Protesis total'
          }
          else if(this.d42d==11){
            this.t42d='Protesis fija'
          }
          else if(this.d42d==12){
            this.t42d='Protesis removible'
          }

          if(this.d42e==1){
            this.t42e='Sano'
          }
          else if(this.d42e==2){
            this.t42e='Extracción indicada'
          }
          else if(this.d42e==3){
            this.t42e='Pérdida por caries'
          }
          else if(this.d42e==4){
            this.t42e='Sellante necesario'
          }
          else if(this.d42e==5){
            this.t42e='Sellante realizado'
          }
          else if(this.d42e==6){
            this.t42e='Caries'
          }
          else if(this.d42e==7){
            this.t42e='Obturado'
          }
          else if(this.d42e==8){
            this.t42e='Endodoncia'
          }
          else if(this.d42e==9){
            this.t42e='Pérdida'
          }
          else if(this.d42e==10){
            this.t42e='Protesis total'
          }
          else if(this.d42e==11){
            this.t42e='Protesis fija'
          }
          else if(this.d42e==12){
            this.t42e='Protesis removible'
          }

          if(this.d43a==1){
            this.t43a='Sano'
          }
          else if(this.d43a==2){
            this.t43a='Extracción indicada'
          }
          else if(this.d43a==3){
            this.t43a='Pérdida por caries'
          }
          else if(this.d43a==4){
            this.t43a='Sellante necesario'
          }
          else if(this.d43a==5){
            this.t43a='Sellante realizado'
          }
          else if(this.d43a==6){
            this.t43a='Caries'
          }
          else if(this.d43a==7){
            this.t43a='Obturado'
          }
          else if(this.d43a==8){
            this.t43a='Endodoncia'
          }
          else if(this.d43a==9){
            this.t43a='Pérdida'
          }
          else if(this.d43a==10){
            this.t43a='Protesis total'
          }
          else if(this.d43a==11){
            this.t43a='Protesis fija'
          }
          else if(this.d43a==12){
            this.t43a='Protesis removible'
          }

          if(this.d43b==1){
            this.t43b='Sano'
          }
          else if(this.d43b==2){
            this.t43b='Extracción indicada'
          }
          else if(this.d43b==3){
            this.t43b='Pérdida por caries'
          }
          else if(this.d43b==4){
            this.t43b='Sellante necesario'
          }
          else if(this.d43b==5){
            this.t43b='Sellante realizado'
          }
          else if(this.d43b==6){
            this.t43b='Caries'
          }
          else if(this.d43b==7){
            this.t43b='Obturado'
          }
          else if(this.d43b==8){
            this.t43b='Endodoncia'
          }
          else if(this.d43b==9){
            this.t43b='Pérdida'
          }
          else if(this.d43b==10){
            this.t43b='Protesis total'
          }
          else if(this.d43b==11){
            this.t43b='Protesis fija'
          }
          else if(this.d43b==12){
            this.t43b='Protesis removible'
          }

          if(this.d43c==1){
            this.t43c='Sano'
          }
          else if(this.d43c==2){
            this.t43c='Extracción indicada'
          }
          else if(this.d43c==3){
            this.t43c='Pérdida por caries'
          }
          else if(this.d43c==4){
            this.t43c='Sellante necesario'
          }
          else if(this.d43c==5){
            this.t43c='Sellante realizado'
          }
          else if(this.d43c==6){
            this.t43c='Caries'
          }
          else if(this.d43c==7){
            this.t43c='Obturado'
          }
          else if(this.d43c==8){
            this.t43c='Endodoncia'
          }
          else if(this.d43c==9){
            this.t43c='Pérdida'
          }
          else if(this.d43c==10){
            this.t43c='Protesis total'
          }
          else if(this.d43c==11){
            this.t43c='Protesis fija'
          }
          else if(this.d43c==12){
            this.t43c='Protesis removible'
          }

          if(this.d43d==1){
            this.t43d='Sano'
          }
          else if(this.d43d==2){
            this.t43d='Extracción indicada'
          }
          else if(this.d43d==3){
            this.t43d='Pérdida por caries'
          }
          else if(this.d43d==4){
            this.t43d='Sellante necesario'
          }
          else if(this.d43d==5){
            this.t43d='Sellante realizado'
          }
          else if(this.d43d==6){
            this.t43d='Caries'
          }
          else if(this.d43d==7){
            this.t43d='Obturado'
          }
          else if(this.d43d==8){
            this.t43d='Endodoncia'
          }
          else if(this.d43d==9){
            this.t43d='Pérdida'
          }
          else if(this.d43d==10){
            this.t43d='Protesis total'
          }
          else if(this.d43d==11){
            this.t43d='Protesis fija'
          }
          else if(this.d43d==12){
            this.t43d='Protesis removible'
          }

          if(this.d43e==1){
            this.t43e='Sano'
          }
          else if(this.d43e==2){
            this.t43e='Extracción indicada'
          }
          else if(this.d43e==3){
            this.t43e='Pérdida por caries'
          }
          else if(this.d43e==4){
            this.t43e='Sellante necesario'
          }
          else if(this.d43e==5){
            this.t43e='Sellante realizado'
          }
          else if(this.d43e==6){
            this.t43e='Caries'
          }
          else if(this.d43e==7){
            this.t43e='Obturado'
          }
          else if(this.d43e==8){
            this.t43e='Endodoncia'
          }
          else if(this.d43e==9){
            this.t43e='Pérdida'
          }
          else if(this.d43e==10){
            this.t43e='Protesis total'
          }
          else if(this.d43e==11){
            this.t43e='Protesis fija'
          }
          else if(this.d43e==12){
            this.t43e='Protesis removible'
          }

          if(this.d44a==1){
            this.t44a='Sano'
          }
          else if(this.d44a==2){
            this.t44a='Extracción indicada'
          }
          else if(this.d44a==3){
            this.t44a='Pérdida por caries'
          }
          else if(this.d44a==4){
            this.t44a='Sellante necesario'
          }
          else if(this.d44a==5){
            this.t44a='Sellante realizado'
          }
          else if(this.d44a==6){
            this.t44a='Caries'
          }
          else if(this.d44a==7){
            this.t44a='Obturado'
          }
          else if(this.d44a==8){
            this.t44a='Endodoncia'
          }
          else if(this.d44a==9){
            this.t44a='Pérdida'
          }
          else if(this.d44a==10){
            this.t44a='Protesis total'
          }
          else if(this.d44a==11){
            this.t44a='Protesis fija'
          }
          else if(this.d44a==12){
            this.t44a='Protesis removible'
          }

          if(this.d44b==1){
            this.t44b='Sano'
          }
          else if(this.d44b==2){
            this.t44b='Extracción indicada'
          }
          else if(this.d44b==3){
            this.t44b='Pérdida por caries'
          }
          else if(this.d44b==4){
            this.t44b='Sellante necesario'
          }
          else if(this.d44b==5){
            this.t44b='Sellante realizado'
          }
          else if(this.d44b==6){
            this.t44b='Caries'
          }
          else if(this.d44b==7){
            this.t44b='Obturado'
          }
          else if(this.d44b==8){
            this.t44b='Endodoncia'
          }
          else if(this.d44b==9){
            this.t44b='Pérdida'
          }
          else if(this.d44b==10){
            this.t44b='Protesis total'
          }
          else if(this.d44b==11){
            this.t44b='Protesis fija'
          }
          else if(this.d44b==12){
            this.t44b='Protesis removible'
          }

          if(this.d44c==1){
            this.t44c='Sano'
          }
          else if(this.d44c==2){
            this.t44c='Extracción indicada'
          }
          else if(this.d44c==3){
            this.t44c='Pérdida por caries'
          }
          else if(this.d44c==4){
            this.t44c='Sellante necesario'
          }
          else if(this.d44c==5){
            this.t44c='Sellante realizado'
          }
          else if(this.d44c==6){
            this.t44c='Caries'
          }
          else if(this.d44c==7){
            this.t44c='Obturado'
          }
          else if(this.d44c==8){
            this.t44c='Endodoncia'
          }
          else if(this.d44c==9){
            this.t44c='Pérdida'
          }
          else if(this.d44c==10){
            this.t44c='Protesis total'
          }
          else if(this.d44c==11){
            this.t44c='Protesis fija'
          }
          else if(this.d44c==12){
            this.t44c='Protesis removible'
          }

          if(this.d44d==1){
            this.t44d='Sano'
          }
          else if(this.d44d==2){
            this.t44d='Extracción indicada'
          }
          else if(this.d44d==3){
            this.t44d='Pérdida por caries'
          }
          else if(this.d44d==4){
            this.t44d='Sellante necesario'
          }
          else if(this.d44d==5){
            this.t44d='Sellante realizado'
          }
          else if(this.d44d==6){
            this.t44d='Caries'
          }
          else if(this.d44d==7){
            this.t44d='Obturado'
          }
          else if(this.d44d==8){
            this.t44d='Endodoncia'
          }
          else if(this.d44d==9){
            this.t44d='Pérdida'
          }
          else if(this.d44d==10){
            this.t44d='Protesis total'
          }
          else if(this.d44d==11){
            this.t44d='Protesis fija'
          }
          else if(this.d44d==12){
            this.t44d='Protesis removible'
          }

          if(this.d44e==1){
            this.t44e='Sano'
          }
          else if(this.d44e==2){
            this.t44e='Extracción indicada'
          }
          else if(this.d44e==3){
            this.t44e='Pérdida por caries'
          }
          else if(this.d44e==4){
            this.t44e='Sellante necesario'
          }
          else if(this.d44e==5){
            this.t44e='Sellante realizado'
          }
          else if(this.d44e==6){
            this.t44e='Caries'
          }
          else if(this.d44e==7){
            this.t44e='Obturado'
          }
          else if(this.d44e==8){
            this.t44e='Endodoncia'
          }
          else if(this.d44e==9){
            this.t44e='Pérdida'
          }
          else if(this.d44e==10){
            this.t44e='Protesis total'
          }
          else if(this.d44e==11){
            this.t44e='Protesis fija'
          }
          else if(this.d44e==12){
            this.t44e='Protesis removible'
          }

          if(this.d45a==1){
            this.t45a='Sano'
          }
          else if(this.d45a==2){
            this.t45a='Extracción indicada'
          }
          else if(this.d45a==3){
            this.t45a='Pérdida por caries'
          }
          else if(this.d45a==4){
            this.t45a='Sellante necesario'
          }
          else if(this.d45a==5){
            this.t45a='Sellante realizado'
          }
          else if(this.d45a==6){
            this.t45a='Caries'
          }
          else if(this.d45a==7){
            this.t45a='Obturado'
          }
          else if(this.d45a==8){
            this.t45a='Endodoncia'
          }
          else if(this.d45a==9){
            this.t45a='Pérdida'
          }
          else if(this.d45a==10){
            this.t45a='Protesis total'
          }
          else if(this.d45a==11){
            this.t45a='Protesis fija'
          }
          else if(this.d45a==12){
            this.t45a='Protesis removible'
          }

          if(this.d45b==1){
            this.t45b='Sano'
          }
          else if(this.d45b==2){
            this.t45b='Extracción indicada'
          }
          else if(this.d45b==3){
            this.t45b='Pérdida por caries'
          }
          else if(this.d45b==4){
            this.t45b='Sellante necesario'
          }
          else if(this.d45b==5){
            this.t45b='Sellante realizado'
          }
          else if(this.d45b==6){
            this.t45b='Caries'
          }
          else if(this.d45b==7){
            this.t45b='Obturado'
          }
          else if(this.d45b==8){
            this.t45b='Endodoncia'
          }
          else if(this.d45b==9){
            this.t45b='Pérdida'
          }
          else if(this.d45b==10){
            this.t45b='Protesis total'
          }
          else if(this.d45b==11){
            this.t45b='Protesis fija'
          }
          else if(this.d45b==12){
            this.t45b='Protesis removible'
          }

          if(this.d45c==1){
            this.t45c='Sano'
          }
          else if(this.d45c==2){
            this.t45c='Extracción indicada'
          }
          else if(this.d45c==3){
            this.t45c='Pérdida por caries'
          }
          else if(this.d45c==4){
            this.t45c='Sellante necesario'
          }
          else if(this.d45c==5){
            this.t45c='Sellante realizado'
          }
          else if(this.d45c==6){
            this.t45c='Caries'
          }
          else if(this.d45c==7){
            this.t45c='Obturado'
          }
          else if(this.d45c==8){
            this.t45c='Endodoncia'
          }
          else if(this.d45c==9){
            this.t45c='Pérdida'
          }
          else if(this.d45c==10){
            this.t45c='Protesis total'
          }
          else if(this.d45c==11){
            this.t45c='Protesis fija'
          }
          else if(this.d45c==12){
            this.t45c='Protesis removible'
          }

          if(this.d45d==1){
            this.t45d='Sano'
          }
          else if(this.d45d==2){
            this.t45d='Extracción indicada'
          }
          else if(this.d45d==3){
            this.t45d='Pérdida por caries'
          }
          else if(this.d45d==4){
            this.t45d='Sellante necesario'
          }
          else if(this.d45d==5){
            this.t45d='Sellante realizado'
          }
          else if(this.d45d==6){
            this.t45d='Caries'
          }
          else if(this.d45d==7){
            this.t45d='Obturado'
          }
          else if(this.d45d==8){
            this.t45d='Endodoncia'
          }
          else if(this.d45d==9){
            this.t45d='Pérdida'
          }
          else if(this.d45d==10){
            this.t45d='Protesis total'
          }
          else if(this.d45d==11){
            this.t45d='Protesis fija'
          }
          else if(this.d45d==12){
            this.t45d='Protesis removible'
          }

          if(this.d45e==1){
            this.t45e='Sano'
          }
          else if(this.d45e==2){
            this.t45e='Extracción indicada'
          }
          else if(this.d45e==3){
            this.t45e='Pérdida por caries'
          }
          else if(this.d45e==4){
            this.t45e='Sellante necesario'
          }
          else if(this.d45e==5){
            this.t45e='Sellante realizado'
          }
          else if(this.d45e==6){
            this.t45e='Caries'
          }
          else if(this.d45e==7){
            this.t45e='Obturado'
          }
          else if(this.d45e==8){
            this.t45e='Endodoncia'
          }
          else if(this.d45e==9){
            this.t45e='Pérdida'
          }
          else if(this.d45e==10){
            this.t45e='Protesis total'
          }
          else if(this.d45e==11){
            this.t45e='Protesis fija'
          }
          else if(this.d45e==12){
            this.t45e='Protesis removible'
          }

          if(this.d46a==1){
            this.t46a='Sano'
          }
          else if(this.d46a==2){
            this.t46a='Extracción indicada'
          }
          else if(this.d46a==3){
            this.t46a='Pérdida por caries'
          }
          else if(this.d46a==4){
            this.t46a='Sellante necesario'
          }
          else if(this.d46a==5){
            this.t46a='Sellante realizado'
          }
          else if(this.d46a==6){
            this.t46a='Caries'
          }
          else if(this.d46a==7){
            this.t46a='Obturado'
          }
          else if(this.d46a==8){
            this.t46a='Endodoncia'
          }
          else if(this.d46a==9){
            this.t46a='Pérdida'
          }
          else if(this.d46a==10){
            this.t46a='Protesis total'
          }
          else if(this.d46a==11){
            this.t46a='Protesis fija'
          }
          else if(this.d46a==12){
            this.t46a='Protesis removible'
          }

          if(this.d46b==1){
            this.t46b='Sano'
          }
          else if(this.d46b==2){
            this.t46b='Extracción indicada'
          }
          else if(this.d46b==3){
            this.t46b='Pérdida por caries'
          }
          else if(this.d46b==4){
            this.t46b='Sellante necesario'
          }
          else if(this.d46b==5){
            this.t46b='Sellante realizado'
          }
          else if(this.d46b==6){
            this.t46b='Caries'
          }
          else if(this.d46b==7){
            this.t46b='Obturado'
          }
          else if(this.d46b==8){
            this.t46b='Endodoncia'
          }
          else if(this.d46b==9){
            this.t46b='Pérdida'
          }
          else if(this.d46b==10){
            this.t46b='Protesis total'
          }
          else if(this.d46b==11){
            this.t46b='Protesis fija'
          }
          else if(this.d46b==12){
            this.t46b='Protesis removible'
          }

          if(this.d46c==1){
            this.t46c='Sano'
          }
          else if(this.d46c==2){
            this.t46c='Extracción indicada'
          }
          else if(this.d46c==3){
            this.t46c='Pérdida por caries'
          }
          else if(this.d46c==4){
            this.t46c='Sellante necesario'
          }
          else if(this.d46c==5){
            this.t46c='Sellante realizado'
          }
          else if(this.d46c==6){
            this.t46c='Caries'
          }
          else if(this.d46c==7){
            this.t46c='Obturado'
          }
          else if(this.d46c==8){
            this.t46c='Endodoncia'
          }
          else if(this.d46c==9){
            this.t46c='Pérdida'
          }
          else if(this.d46c==10){
            this.t46c='Protesis total'
          }
          else if(this.d46c==11){
            this.t46c='Protesis fija'
          }
          else if(this.d46c==12){
            this.t46c='Protesis removible'
          }

          if(this.d46d==1){
            this.t46d='Sano'
          }
          else if(this.d46d==2){
            this.t46d='Extracción indicada'
          }
          else if(this.d46d==3){
            this.t46d='Pérdida por caries'
          }
          else if(this.d46d==4){
            this.t46d='Sellante necesario'
          }
          else if(this.d46d==5){
            this.t46d='Sellante realizado'
          }
          else if(this.d46d==6){
            this.t46d='Caries'
          }
          else if(this.d46d==7){
            this.t46d='Obturado'
          }
          else if(this.d46d==8){
            this.t46d='Endodoncia'
          }
          else if(this.d46d==9){
            this.t46d='Pérdida'
          }
          else if(this.d46d==10){
            this.t46d='Protesis total'
          }
          else if(this.d46d==11){
            this.t46d='Protesis fija'
          }
          else if(this.d46d==12){
            this.t46d='Protesis removible'
          }

          if(this.d46e==1){
            this.t46e='Sano'
          }
          else if(this.d46e==2){
            this.t46e='Extracción indicada'
          }
          else if(this.d46e==3){
            this.t46e='Pérdida por caries'
          }
          else if(this.d46e==4){
            this.t46e='Sellante necesario'
          }
          else if(this.d46e==5){
            this.t46e='Sellante realizado'
          }
          else if(this.d46e==6){
            this.t46e='Caries'
          }
          else if(this.d46e==7){
            this.t46e='Obturado'
          }
          else if(this.d46e==8){
            this.t46e='Endodoncia'
          }
          else if(this.d46e==9){
            this.t46e='Pérdida'
          }
          else if(this.d46e==10){
            this.t46e='Protesis total'
          }
          else if(this.d46e==11){
            this.t46e='Protesis fija'
          }
          else if(this.d46e==12){
            this.t46e='Protesis removible'
          }

          if(this.d47a==1){
            this.t47a='Sano'
          }
          else if(this.d47a==2){
            this.t47a='Extracción indicada'
          }
          else if(this.d47a==3){
            this.t47a='Pérdida por caries'
          }
          else if(this.d47a==4){
            this.t47a='Sellante necesario'
          }
          else if(this.d47a==5){
            this.t47a='Sellante realizado'
          }
          else if(this.d47a==6){
            this.t47a='Caries'
          }
          else if(this.d47a==7){
            this.t47a='Obturado'
          }
          else if(this.d47a==8){
            this.t47a='Endodoncia'
          }
          else if(this.d47a==9){
            this.t47a='Pérdida'
          }
          else if(this.d47a==10){
            this.t47a='Protesis total'
          }
          else if(this.d47a==11){
            this.t47a='Protesis fija'
          }
          else if(this.d47a==12){
            this.t47a='Protesis removible'
          }

          if(this.d47b==1){
            this.t47b='Sano'
          }
          else if(this.d47b==2){
            this.t47b='Extracción indicada'
          }
          else if(this.d47b==3){
            this.t47b='Pérdida por caries'
          }
          else if(this.d47b==4){
            this.t47b='Sellante necesario'
          }
          else if(this.d47b==5){
            this.t47b='Sellante realizado'
          }
          else if(this.d47b==6){
            this.t47b='Caries'
          }
          else if(this.d47b==7){
            this.t47b='Obturado'
          }
          else if(this.d47b==8){
            this.t47b='Endodoncia'
          }
          else if(this.d47b==9){
            this.t47b='Pérdida'
          }
          else if(this.d47b==10){
            this.t47b='Protesis total'
          }
          else if(this.d47b==11){
            this.t47b='Protesis fija'
          }
          else if(this.d47b==12){
            this.t47b='Protesis removible'
          }

          if(this.d47c==1){
            this.t47c='Sano'
          }
          else if(this.d47c==2){
            this.t47c='Extracción indicada'
          }
          else if(this.d47c==3){
            this.t47c='Pérdida por caries'
          }
          else if(this.d47c==4){
            this.t47c='Sellante necesario'
          }
          else if(this.d47c==5){
            this.t47c='Sellante realizado'
          }
          else if(this.d47c==6){
            this.t47c='Caries'
          }
          else if(this.d47c==7){
            this.t47c='Obturado'
          }
          else if(this.d47c==8){
            this.t47c='Endodoncia'
          }
          else if(this.d47c==9){
            this.t47c='Pérdida'
          }
          else if(this.d47c==10){
            this.t47c='Protesis total'
          }
          else if(this.d47c==11){
            this.t47c='Protesis fija'
          }
          else if(this.d47c==12){
            this.t47c='Protesis removible'
          }

          if(this.d47d==1){
            this.t47d='Sano'
          }
          else if(this.d47d==2){
            this.t47d='Extracción indicada'
          }
          else if(this.d47d==3){
            this.t47d='Pérdida por caries'
          }
          else if(this.d47d==4){
            this.t47d='Sellante necesario'
          }
          else if(this.d47d==5){
            this.t47d='Sellante realizado'
          }
          else if(this.d47d==6){
            this.t47d='Caries'
          }
          else if(this.d47d==7){
            this.t47d='Obturado'
          }
          else if(this.d47d==8){
            this.t47d='Endodoncia'
          }
          else if(this.d47d==9){
            this.t47d='Pérdida'
          }
          else if(this.d47d==10){
            this.t47d='Protesis total'
          }
          else if(this.d47d==11){
            this.t47d='Protesis fija'
          }
          else if(this.d47d==12){
            this.t47d='Protesis removible'
          }

          if(this.d47e==1){
            this.t47e='Sano'
          }
          else if(this.d47e==2){
            this.t47e='Extracción indicada'
          }
          else if(this.d47e==3){
            this.t47e='Pérdida por caries'
          }
          else if(this.d47e==4){
            this.t47e='Sellante necesario'
          }
          else if(this.d47e==5){
            this.t47e='Sellante realizado'
          }
          else if(this.d47e==6){
            this.t47e='Caries'
          }
          else if(this.d47e==7){
            this.t47e='Obturado'
          }
          else if(this.d47e==8){
            this.t47e='Endodoncia'
          }
          else if(this.d47e==9){
            this.t47e='Pérdida'
          }
          else if(this.d47e==10){
            this.t47e='Protesis total'
          }
          else if(this.d47e==11){
            this.t47e='Protesis fija'
          }
          else if(this.d47e==12){
            this.t47e='Protesis removible'
          }

          if(this.d48a==1){
            this.t48a='Sano'
          }
          else if(this.d48a==2){
            this.t48a='Extracción indicada'
          }
          else if(this.d48a==3){
            this.t48a='Pérdida por caries'
          }
          else if(this.d48a==4){
            this.t48a='Sellante necesario'
          }
          else if(this.d48a==5){
            this.t48a='Sellante realizado'
          }
          else if(this.d48a==6){
            this.t48a='Caries'
          }
          else if(this.d48a==7){
            this.t48a='Obturado'
          }
          else if(this.d48a==8){
            this.t48a='Endodoncia'
          }
          else if(this.d48a==9){
            this.t48a='Pérdida'
          }
          else if(this.d48a==10){
            this.t48a='Protesis total'
          }
          else if(this.d48a==11){
            this.t48a='Protesis fija'
          }
          else if(this.d48a==12){
            this.t48a='Protesis removible'
          }

          if(this.d48b==1){
            this.t48b='Sano'
          }
          else if(this.d48b==2){
            this.t48b='Extracción indicada'
          }
          else if(this.d48b==3){
            this.t48b='Pérdida por caries'
          }
          else if(this.d48b==4){
            this.t48b='Sellante necesario'
          }
          else if(this.d48b==5){
            this.t48b='Sellante realizado'
          }
          else if(this.d48b==6){
            this.t48b='Caries'
          }
          else if(this.d48b==7){
            this.t48b='Obturado'
          }
          else if(this.d48b==8){
            this.t48b='Endodoncia'
          }
          else if(this.d48b==9){
            this.t48b='Pérdida'
          }
          else if(this.d48b==10){
            this.t48b='Protesis total'
          }
          else if(this.d48b==11){
            this.t48b='Protesis fija'
          }
          else if(this.d48b==12){
            this.t48b='Protesis removible'
          }

          if(this.d48c==1){
            this.t48c='Sano'
          }
          else if(this.d48c==2){
            this.t48c='Extracción indicada'
          }
          else if(this.d48c==3){
            this.t48c='Pérdida por caries'
          }
          else if(this.d48c==4){
            this.t48c='Sellante necesario'
          }
          else if(this.d48c==5){
            this.t48c='Sellante realizado'
          }
          else if(this.d48c==6){
            this.t48c='Caries'
          }
          else if(this.d48c==7){
            this.t48c='Obturado'
          }
          else if(this.d48c==8){
            this.t48c='Endodoncia'
          }
          else if(this.d48c==9){
            this.t48c='Pérdida'
          }
          else if(this.d48c==10){
            this.t48c='Protesis total'
          }
          else if(this.d48c==11){
            this.t48c='Protesis fija'
          }
          else if(this.d48c==12){
            this.t48c='Protesis removible'
          }

          if(this.d48d==1){
            this.t48d='Sano'
          }
          else if(this.d48d==2){
            this.t48d='Extracción indicada'
          }
          else if(this.d48d==3){
            this.t48d='Pérdida por caries'
          }
          else if(this.d48d==4){
            this.t48d='Sellante necesario'
          }
          else if(this.d48d==5){
            this.t48d='Sellante realizado'
          }
          else if(this.d48d==6){
            this.t48d='Caries'
          }
          else if(this.d48d==7){
            this.t48d='Obturado'
          }
          else if(this.d48d==8){
            this.t48d='Endodoncia'
          }
          else if(this.d48d==9){
            this.t48d='Pérdida'
          }
          else if(this.d48d==10){
            this.t48d='Protesis total'
          }
          else if(this.d48d==11){
            this.t48d='Protesis fija'
          }
          else if(this.d48d==12){
            this.t48d='Protesis removible'
          }

          if(this.d48e==1){
            this.t48e='Sano'
          }
          else if(this.d48e==2){
            this.t48e='Extracción indicada'
          }
          else if(this.d48e==3){
            this.t48e='Pérdida por caries'
          }
          else if(this.d48e==4){
            this.t48e='Sellante necesario'
          }
          else if(this.d48e==5){
            this.t48e='Sellante realizado'
          }
          else if(this.d48e==6){
            this.t48e='Caries'
          }
          else if(this.d48e==7){
            this.t48e='Obturado'
          }
          else if(this.d48e==8){
            this.t48e='Endodoncia'
          }
          else if(this.d48e==9){
            this.t48e='Pérdida'
          }
          else if(this.d48e==10){
            this.t48e='Protesis total'
          }
          else if(this.d48e==11){
            this.t48e='Protesis fija'
          }
          else if(this.d48e==12){
            this.t48e='Protesis removible'
          }

          if(this.d51a==1){
            this.t51a='Sano'
          }
          else if(this.d51a==2){
            this.t51a='Extracción indicada'
          }
          else if(this.d51a==3){
            this.t51a='Pérdida por caries'
          }
          else if(this.d51a==4){
            this.t51a='Sellante necesario'
          }
          else if(this.d51a==5){
            this.t51a='Sellante realizado'
          }
          else if(this.d51a==6){
            this.t51a='Caries'
          }
          else if(this.d51a==7){
            this.t51a='Obturado'
          }
          else if(this.d51a==8){
            this.t51a='Endodoncia'
          }
          else if(this.d51a==9){
            this.t51a='Pérdida'
          }
          else if(this.d51a==10){
            this.t51a='Protesis total'
          }
          else if(this.d51a==11){
            this.t51a='Protesis fija'
          }
          else if(this.d51a==12){
            this.t51a='Protesis removible'
          }

          if(this.d51b==1){
            this.t51b='Sano'
          }
          else if(this.d51b==2){
            this.t51b='Extracción indicada'
          }
          else if(this.d51b==3){
            this.t51b='Pérdida por caries'
          }
          else if(this.d51b==4){
            this.t51b='Sellante necesario'
          }
          else if(this.d51b==5){
            this.t51b='Sellante realizado'
          }
          else if(this.d51b==6){
            this.t51b='Caries'
          }
          else if(this.d51b==7){
            this.t51b='Obturado'
          }
          else if(this.d51b==8){
            this.t51b='Endodoncia'
          }
          else if(this.d51b==9){
            this.t51b='Pérdida'
          }
          else if(this.d51b==10){
            this.t51b='Protesis total'
          }
          else if(this.d51b==11){
            this.t51b='Protesis fija'
          }
          else if(this.d51b==12){
            this.t51b='Protesis removible'
          }

          if(this.d51c==1){
            this.t51c='Sano'
          }
          else if(this.d51c==2){
            this.t51c='Extracción indicada'
          }
          else if(this.d51c==3){
            this.t51c='Pérdida por caries'
          }
          else if(this.d51c==4){
            this.t51c='Sellante necesario'
          }
          else if(this.d51c==5){
            this.t51c='Sellante realizado'
          }
          else if(this.d51c==6){
            this.t51c='Caries'
          }
          else if(this.d51c==7){
            this.t51c='Obturado'
          }
          else if(this.d51c==8){
            this.t51c='Endodoncia'
          }
          else if(this.d51c==9){
            this.t51c='Pérdida'
          }
          else if(this.d51c==10){
            this.t51c='Protesis total'
          }
          else if(this.d51c==11){
            this.t51c='Protesis fija'
          }
          else if(this.d51c==12){
            this.t51c='Protesis removible'
          }

          if(this.d51d==1){
            this.t51d='Sano'
          }
          else if(this.d51d==2){
            this.t51d='Extracción indicada'
          }
          else if(this.d51d==3){
            this.t51d='Pérdida por caries'
          }
          else if(this.d51d==4){
            this.t51d='Sellante necesario'
          }
          else if(this.d51d==5){
            this.t51d='Sellante realizado'
          }
          else if(this.d51d==6){
            this.t51d='Caries'
          }
          else if(this.d51d==7){
            this.t51d='Obturado'
          }
          else if(this.d51d==8){
            this.t51d='Endodoncia'
          }
          else if(this.d51d==9){
            this.t51d='Pérdida'
          }
          else if(this.d51d==10){
            this.t51d='Protesis total'
          }
          else if(this.d51d==11){
            this.t51d='Protesis fija'
          }
          else if(this.d51d==12){
            this.t51d='Protesis removible'
          }

          if(this.d51e==1){
            this.t51e='Sano'
          }
          else if(this.d51e==2){
            this.t51e='Extracción indicada'
          }
          else if(this.d51e==3){
            this.t51e='Pérdida por caries'
          }
          else if(this.d51e==4){
            this.t51e='Sellante necesario'
          }
          else if(this.d51e==5){
            this.t51e='Sellante realizado'
          }
          else if(this.d51e==6){
            this.t51e='Caries'
          }
          else if(this.d51e==7){
            this.t51e='Obturado'
          }
          else if(this.d51e==8){
            this.t51e='Endodoncia'
          }
          else if(this.d51e==9){
            this.t51e='Pérdida'
          }
          else if(this.d51e==10){
            this.t51e='Protesis total'
          }
          else if(this.d51e==11){
            this.t51e='Protesis fija'
          }
          else if(this.d51e==12){
            this.t51e='Protesis removible'
          }

          if(this.d52a==1){
            this.t52a='Sano'
          }
          else if(this.d52a==2){
            this.t52a='Extracción indicada'
          }
          else if(this.d52a==3){
            this.t52a='Pérdida por caries'
          }
          else if(this.d52a==4){
            this.t52a='Sellante necesario'
          }
          else if(this.d52a==5){
            this.t52a='Sellante realizado'
          }
          else if(this.d52a==6){
            this.t52a='Caries'
          }
          else if(this.d52a==7){
            this.t52a='Obturado'
          }
          else if(this.d52a==8){
            this.t52a='Endodoncia'
          }
          else if(this.d52a==9){
            this.t52a='Pérdida'
          }
          else if(this.d52a==10){
            this.t52a='Protesis total'
          }
          else if(this.d52a==11){
            this.t52a='Protesis fija'
          }
          else if(this.d52a==12){
            this.t52a='Protesis removible'
          }

          if(this.d52b==1){
            this.t52b='Sano'
          }
          else if(this.d52b==2){
            this.t52b='Extracción indicada'
          }
          else if(this.d52b==3){
            this.t52b='Pérdida por caries'
          }
          else if(this.d52b==4){
            this.t52b='Sellante necesario'
          }
          else if(this.d52b==5){
            this.t52b='Sellante realizado'
          }
          else if(this.d52b==6){
            this.t52b='Caries'
          }
          else if(this.d52b==7){
            this.t52b='Obturado'
          }
          else if(this.d52b==8){
            this.t52b='Endodoncia'
          }
          else if(this.d52b==9){
            this.t52b='Pérdida'
          }
          else if(this.d52b==10){
            this.t52b='Protesis total'
          }
          else if(this.d52b==11){
            this.t52b='Protesis fija'
          }
          else if(this.d52b==12){
            this.t52b='Protesis removible'
          }

          if(this.d52c==1){
            this.t52c='Sano'
          }
          else if(this.d52c==2){
            this.t52c='Extracción indicada'
          }
          else if(this.d52c==3){
            this.t52c='Pérdida por caries'
          }
          else if(this.d52c==4){
            this.t52c='Sellante necesario'
          }
          else if(this.d52c==5){
            this.t52c='Sellante realizado'
          }
          else if(this.d52c==6){
            this.t52c='Caries'
          }
          else if(this.d52c==7){
            this.t52c='Obturado'
          }
          else if(this.d52c==8){
            this.t52c='Endodoncia'
          }
          else if(this.d52c==9){
            this.t52c='Pérdida'
          }
          else if(this.d52c==10){
            this.t52c='Protesis total'
          }
          else if(this.d52c==11){
            this.t52c='Protesis fija'
          }
          else if(this.d52c==12){
            this.t52c='Protesis removible'
          }

          if(this.d52d==1){
            this.t52d='Sano'
          }
          else if(this.d52d==2){
            this.t52d='Extracción indicada'
          }
          else if(this.d52d==3){
            this.t52d='Pérdida por caries'
          }
          else if(this.d52d==4){
            this.t52d='Sellante necesario'
          }
          else if(this.d52d==5){
            this.t52d='Sellante realizado'
          }
          else if(this.d52d==6){
            this.t52d='Caries'
          }
          else if(this.d52d==7){
            this.t52d='Obturado'
          }
          else if(this.d52d==8){
            this.t52d='Endodoncia'
          }
          else if(this.d52d==9){
            this.t52d='Pérdida'
          }
          else if(this.d52d==10){
            this.t52d='Protesis total'
          }
          else if(this.d52d==11){
            this.t52d='Protesis fija'
          }
          else if(this.d52d==12){
            this.t52d='Protesis removible'
          }

          if(this.d52e==1){
            this.t52e='Sano'
          }
          else if(this.d52e==2){
            this.t52e='Extracción indicada'
          }
          else if(this.d52e==3){
            this.t52e='Pérdida por caries'
          }
          else if(this.d52e==4){
            this.t52e='Sellante necesario'
          }
          else if(this.d52e==5){
            this.t52e='Sellante realizado'
          }
          else if(this.d52e==6){
            this.t52e='Caries'
          }
          else if(this.d52e==7){
            this.t52e='Obturado'
          }
          else if(this.d52e==8){
            this.t52e='Endodoncia'
          }
          else if(this.d52e==9){
            this.t52e='Pérdida'
          }
          else if(this.d52e==10){
            this.t52e='Protesis total'
          }
          else if(this.d52e==11){
            this.t52e='Protesis fija'
          }
          else if(this.d52e==12){
            this.t52e='Protesis removible'
          }

          if(this.d53a==1){
            this.t53a='Sano'
          }
          else if(this.d53a==2){
            this.t53a='Extracción indicada'
          }
          else if(this.d53a==3){
            this.t53a='Pérdida por caries'
          }
          else if(this.d53a==4){
            this.t53a='Sellante necesario'
          }
          else if(this.d53a==5){
            this.t53a='Sellante realizado'
          }
          else if(this.d53a==6){
            this.t53a='Caries'
          }
          else if(this.d53a==7){
            this.t53a='Obturado'
          }
          else if(this.d53a==8){
            this.t53a='Endodoncia'
          }
          else if(this.d53a==9){
            this.t53a='Pérdida'
          }
          else if(this.d53a==10){
            this.t53a='Protesis total'
          }
          else if(this.d53a==11){
            this.t53a='Protesis fija'
          }
          else if(this.d53a==12){
            this.t53a='Protesis removible'
          }

          if(this.d53b==1){
            this.t53b='Sano'
          }
          else if(this.d53b==2){
            this.t53b='Extracción indicada'
          }
          else if(this.d53b==3){
            this.t53b='Pérdida por caries'
          }
          else if(this.d53b==4){
            this.t53b='Sellante necesario'
          }
          else if(this.d53b==5){
            this.t53b='Sellante realizado'
          }
          else if(this.d53b==6){
            this.t53b='Caries'
          }
          else if(this.d53b==7){
            this.t53b='Obturado'
          }
          else if(this.d53b==8){
            this.t53b='Endodoncia'
          }
          else if(this.d53b==9){
            this.t53b='Pérdida'
          }
          else if(this.d53b==10){
            this.t53b='Protesis total'
          }
          else if(this.d53b==11){
            this.t53b='Protesis fija'
          }
          else if(this.d53b==12){
            this.t53b='Protesis removible'
          }

          if(this.d53c==1){
            this.t53c='Sano'
          }
          else if(this.d53c==2){
            this.t53c='Extracción indicada'
          }
          else if(this.d53c==3){
            this.t53c='Pérdida por caries'
          }
          else if(this.d53c==4){
            this.t53c='Sellante necesario'
          }
          else if(this.d53c==5){
            this.t53c='Sellante realizado'
          }
          else if(this.d53c==6){
            this.t53c='Caries'
          }
          else if(this.d53c==7){
            this.t53c='Obturado'
          }
          else if(this.d53c==8){
            this.t53c='Endodoncia'
          }
          else if(this.d53c==9){
            this.t53c='Pérdida'
          }
          else if(this.d53c==10){
            this.t53c='Protesis total'
          }
          else if(this.d53c==11){
            this.t53c='Protesis fija'
          }
          else if(this.d53c==12){
            this.t53c='Protesis removible'
          }

          if(this.d53d==1){
            this.t53d='Sano'
          }
          else if(this.d53d==2){
            this.t53d='Extracción indicada'
          }
          else if(this.d53d==3){
            this.t53d='Pérdida por caries'
          }
          else if(this.d53d==4){
            this.t53d='Sellante necesario'
          }
          else if(this.d53d==5){
            this.t53d='Sellante realizado'
          }
          else if(this.d53d==6){
            this.t53d='Caries'
          }
          else if(this.d53d==7){
            this.t53d='Obturado'
          }
          else if(this.d53d==8){
            this.t53d='Endodoncia'
          }
          else if(this.d53d==9){
            this.t53d='Pérdida'
          }
          else if(this.d53d==10){
            this.t53d='Protesis total'
          }
          else if(this.d53d==11){
            this.t53d='Protesis fija'
          }
          else if(this.d53d==12){
            this.t53d='Protesis removible'
          }

          if(this.d53e==1){
            this.t53e='Sano'
          }
          else if(this.d53e==2){
            this.t53e='Extracción indicada'
          }
          else if(this.d53e==3){
            this.t53e='Pérdida por caries'
          }
          else if(this.d53e==4){
            this.t53e='Sellante necesario'
          }
          else if(this.d53e==5){
            this.t53e='Sellante realizado'
          }
          else if(this.d53e==6){
            this.t53e='Caries'
          }
          else if(this.d53e==7){
            this.t53e='Obturado'
          }
          else if(this.d53e==8){
            this.t53e='Endodoncia'
          }
          else if(this.d53e==9){
            this.t53e='Pérdida'
          }
          else if(this.d53e==10){
            this.t53e='Protesis total'
          }
          else if(this.d53e==11){
            this.t53e='Protesis fija'
          }
          else if(this.d53e==12){
            this.t53e='Protesis removible'
          }

          if(this.d54a==1){
            this.t54a='Sano'
          }
          else if(this.d54a==2){
            this.t54a='Extracción indicada'
          }
          else if(this.d54a==3){
            this.t54a='Pérdida por caries'
          }
          else if(this.d54a==4){
            this.t54a='Sellante necesario'
          }
          else if(this.d54a==5){
            this.t54a='Sellante realizado'
          }
          else if(this.d54a==6){
            this.t54a='Caries'
          }
          else if(this.d54a==7){
            this.t54a='Obturado'
          }
          else if(this.d54a==8){
            this.t54a='Endodoncia'
          }
          else if(this.d54a==9){
            this.t54a='Pérdida'
          }
          else if(this.d54a==10){
            this.t54a='Protesis total'
          }
          else if(this.d54a==11){
            this.t54a='Protesis fija'
          }
          else if(this.d54a==12){
            this.t54a='Protesis removible'
          }

          if(this.d54b==1){
            this.t54b='Sano'
          }
          else if(this.d54b==2){
            this.t54b='Extracción indicada'
          }
          else if(this.d54b==3){
            this.t54b='Pérdida por caries'
          }
          else if(this.d54b==4){
            this.t54b='Sellante necesario'
          }
          else if(this.d54b==5){
            this.t54b='Sellante realizado'
          }
          else if(this.d54b==6){
            this.t54b='Caries'
          }
          else if(this.d54b==7){
            this.t54b='Obturado'
          }
          else if(this.d54b==8){
            this.t54b='Endodoncia'
          }
          else if(this.d54b==9){
            this.t54b='Pérdida'
          }
          else if(this.d54b==10){
            this.t54b='Protesis total'
          }
          else if(this.d54b==11){
            this.t54b='Protesis fija'
          }
          else if(this.d54b==12){
            this.t54b='Protesis removible'
          }

          if(this.d54c==1){
            this.t54c='Sano'
          }
          else if(this.d54c==2){
            this.t54c='Extracción indicada'
          }
          else if(this.d54c==3){
            this.t54c='Pérdida por caries'
          }
          else if(this.d54c==4){
            this.t54c='Sellante necesario'
          }
          else if(this.d54c==5){
            this.t54c='Sellante realizado'
          }
          else if(this.d54c==6){
            this.t54c='Caries'
          }
          else if(this.d54c==7){
            this.t54c='Obturado'
          }
          else if(this.d54c==8){
            this.t54c='Endodoncia'
          }
          else if(this.d54c==9){
            this.t54c='Pérdida'
          }
          else if(this.d54c==10){
            this.t54c='Protesis total'
          }
          else if(this.d54c==11){
            this.t54c='Protesis fija'
          }
          else if(this.d54c==12){
            this.t54c='Protesis removible'
          }

          if(this.d54d==1){
            this.t54d='Sano'
          }
          else if(this.d54d==2){
            this.t54d='Extracción indicada'
          }
          else if(this.d54d==3){
            this.t54d='Pérdida por caries'
          }
          else if(this.d54d==4){
            this.t54d='Sellante necesario'
          }
          else if(this.d54d==5){
            this.t54d='Sellante realizado'
          }
          else if(this.d54d==6){
            this.t54d='Caries'
          }
          else if(this.d54d==7){
            this.t54d='Obturado'
          }
          else if(this.d54d==8){
            this.t54d='Endodoncia'
          }
          else if(this.d54d==9){
            this.t54d='Pérdida'
          }
          else if(this.d54d==10){
            this.t54d='Protesis total'
          }
          else if(this.d54d==11){
            this.t54d='Protesis fija'
          }
          else if(this.d54d==12){
            this.t54d='Protesis removible'
          }

          if(this.d54e==1){
            this.t54e='Sano'
          }
          else if(this.d54e==2){
            this.t54e='Extracción indicada'
          }
          else if(this.d54e==3){
            this.t54e='Pérdida por caries'
          }
          else if(this.d54e==4){
            this.t54e='Sellante necesario'
          }
          else if(this.d54e==5){
            this.t54e='Sellante realizado'
          }
          else if(this.d54e==6){
            this.t54e='Caries'
          }
          else if(this.d54e==7){
            this.t54e='Obturado'
          }
          else if(this.d54e==8){
            this.t54e='Endodoncia'
          }
          else if(this.d54e==9){
            this.t54e='Pérdida'
          }
          else if(this.d54e==10){
            this.t54e='Protesis total'
          }
          else if(this.d54e==11){
            this.t54e='Protesis fija'
          }
          else if(this.d54e==12){
            this.t54e='Protesis removible'
          }

          if(this.d55a==1){
            this.t55a='Sano'
          }
          else if(this.d55a==2){
            this.t55a='Extracción indicada'
          }
          else if(this.d55a==3){
            this.t55a='Pérdida por caries'
          }
          else if(this.d55a==4){
            this.t55a='Sellante necesario'
          }
          else if(this.d55a==5){
            this.t55a='Sellante realizado'
          }
          else if(this.d55a==6){
            this.t55a='Caries'
          }
          else if(this.d55a==7){
            this.t55a='Obturado'
          }
          else if(this.d55a==8){
            this.t55a='Endodoncia'
          }
          else if(this.d55a==9){
            this.t55a='Pérdida'
          }
          else if(this.d55a==10){
            this.t55a='Protesis total'
          }
          else if(this.d55a==11){
            this.t55a='Protesis fija'
          }
          else if(this.d55a==12){
            this.t55a='Protesis removible'
          }

          if(this.d55b==1){
            this.t55b='Sano'
          }
          else if(this.d55b==2){
            this.t55b='Extracción indicada'
          }
          else if(this.d55b==3){
            this.t55b='Pérdida por caries'
          }
          else if(this.d55b==4){
            this.t55b='Sellante necesario'
          }
          else if(this.d55b==5){
            this.t55b='Sellante realizado'
          }
          else if(this.d55b==6){
            this.t55b='Caries'
          }
          else if(this.d55b==7){
            this.t55b='Obturado'
          }
          else if(this.d55b==8){
            this.t55b='Endodoncia'
          }
          else if(this.d55b==9){
            this.t55b='Pérdida'
          }
          else if(this.d55b==10){
            this.t55b='Protesis total'
          }
          else if(this.d55b==11){
            this.t55b='Protesis fija'
          }
          else if(this.d55b==12){
            this.t55b='Protesis removible'
          }

          if(this.d55c==1){
            this.t55c='Sano'
          }
          else if(this.d55c==2){
            this.t55c='Extracción indicada'
          }
          else if(this.d55c==3){
            this.t55c='Pérdida por caries'
          }
          else if(this.d55c==4){
            this.t55c='Sellante necesario'
          }
          else if(this.d55c==5){
            this.t55c='Sellante realizado'
          }
          else if(this.d55c==6){
            this.t55c='Caries'
          }
          else if(this.d55c==7){
            this.t55c='Obturado'
          }
          else if(this.d55c==8){
            this.t55c='Endodoncia'
          }
          else if(this.d55c==9){
            this.t55c='Pérdida'
          }
          else if(this.d55c==10){
            this.t55c='Protesis total'
          }
          else if(this.d55c==11){
            this.t55c='Protesis fija'
          }
          else if(this.d55c==12){
            this.t55c='Protesis removible'
          }

          if(this.d55d==1){
            this.t55d='Sano'
          }
          else if(this.d55d==2){
            this.t55d='Extracción indicada'
          }
          else if(this.d55d==3){
            this.t55d='Pérdida por caries'
          }
          else if(this.d55d==4){
            this.t55d='Sellante necesario'
          }
          else if(this.d55d==5){
            this.t55d='Sellante realizado'
          }
          else if(this.d55d==6){
            this.t55d='Caries'
          }
          else if(this.d55d==7){
            this.t55d='Obturado'
          }
          else if(this.d55d==8){
            this.t55d='Endodoncia'
          }
          else if(this.d55d==9){
            this.t55d='Pérdida'
          }
          else if(this.d55d==10){
            this.t55d='Protesis total'
          }
          else if(this.d55d==11){
            this.t55d='Protesis fija'
          }
          else if(this.d55d==12){
            this.t55d='Protesis removible'
          }

          if(this.d55e==1){
            this.t55e='Sano'
          }
          else if(this.d55e==2){
            this.t55e='Extracción indicada'
          }
          else if(this.d55e==3){
            this.t55e='Pérdida por caries'
          }
          else if(this.d55e==4){
            this.t55e='Sellante necesario'
          }
          else if(this.d55e==5){
            this.t55e='Sellante realizado'
          }
          else if(this.d55e==6){
            this.t55e='Caries'
          }
          else if(this.d55e==7){
            this.t55e='Obturado'
          }
          else if(this.d55e==8){
            this.t55e='Endodoncia'
          }
          else if(this.d55e==9){
            this.t55e='Pérdida'
          }
          else if(this.d55e==10){
            this.t55e='Protesis total'
          }
          else if(this.d55e==11){
            this.t55e='Protesis fija'
          }
          else if(this.d55e==12){
            this.t55e='Protesis removible'
          }
          //CUADRANTE 6

          if(this.d61a==1){
            this.t61a='Sano'
          }
          else if(this.d61a==2){
            this.t61a='Extracción indicada'
          }
          else if(this.d61a==3){
            this.t61a='Pérdida por caries'
          }
          else if(this.d61a==4){
            this.t61a='Sellante necesario'
          }
          else if(this.d61a==5){
            this.t61a='Sellante realizado'
          }
          else if(this.d61a==6){
            this.t61a='Caries'
          }
          else if(this.d61a==7){
            this.t61a='Obturado'
          }
          else if(this.d61a==8){
            this.t61a='Endodoncia'
          }
          else if(this.d61a==9){
            this.t61a='Pérdida'
          }
          else if(this.d61a==10){
            this.t61a='Protesis total'
          }
          else if(this.d61a==11){
            this.t61a='Protesis fija'
          }
          else if(this.d61a==12){
            this.t61a='Protesis removible'
          }

          if(this.d61b==1){
            this.t61b='Sano'
          }
          else if(this.d61b==2){
            this.t61b='Extracción indicada'
          }
          else if(this.d61b==3){
            this.t61b='Pérdida por caries'
          }
          else if(this.d61b==4){
            this.t61b='Sellante necesario'
          }
          else if(this.d61b==5){
            this.t61b='Sellante realizado'
          }
          else if(this.d61b==6){
            this.t61b='Caries'
          }
          else if(this.d61b==7){
            this.t61b='Obturado'
          }
          else if(this.d61b==8){
            this.t61b='Endodoncia'
          }
          else if(this.d61b==9){
            this.t61b='Pérdida'
          }
          else if(this.d61b==10){
            this.t61b='Protesis total'
          }
          else if(this.d61b==11){
            this.t61b='Protesis fija'
          }
          else if(this.d61b==12){
            this.t61b='Protesis removible'
          }

          if(this.d61c==1){
            this.t61c='Sano'
          }
          else if(this.d61c==2){
            this.t61c='Extracción indicada'
          }
          else if(this.d61c==3){
            this.t61c='Pérdida por caries'
          }
          else if(this.d61c==4){
            this.t61c='Sellante necesario'
          }
          else if(this.d61c==5){
            this.t61c='Sellante realizado'
          }
          else if(this.d61c==6){
            this.t61c='Caries'
          }
          else if(this.d61c==7){
            this.t61c='Obturado'
          }
          else if(this.d61c==8){
            this.t61c='Endodoncia'
          }
          else if(this.d61c==9){
            this.t61c='Pérdida'
          }
          else if(this.d61c==10){
            this.t61c='Protesis total'
          }
          else if(this.d61c==11){
            this.t61c='Protesis fija'
          }
          else if(this.d61c==12){
            this.t61c='Protesis removible'
          }

          if(this.d61d==1){
            this.t61d='Sano'
          }
          else if(this.d61d==2){
            this.t61d='Extracción indicada'
          }
          else if(this.d61d==3){
            this.t61d='Pérdida por caries'
          }
          else if(this.d61d==4){
            this.t61d='Sellante necesario'
          }
          else if(this.d61d==5){
            this.t61d='Sellante realizado'
          }
          else if(this.d61d==6){
            this.t61d='Caries'
          }
          else if(this.d61d==7){
            this.t61d='Obturado'
          }
          else if(this.d61d==8){
            this.t61d='Endodoncia'
          }
          else if(this.d61d==9){
            this.t61d='Pérdida'
          }
          else if(this.d61d==10){
            this.t61d='Protesis total'
          }
          else if(this.d61d==11){
            this.t61d='Protesis fija'
          }
          else if(this.d61d==12){
            this.t61d='Protesis removible'
          }

          if(this.d61e==1){
            this.t61e='Sano'
          }
          else if(this.d61e==2){
            this.t61e='Extracción indicada'
          }
          else if(this.d61e==3){
            this.t61e='Pérdida por caries'
          }
          else if(this.d61e==4){
            this.t61e='Sellante necesario'
          }
          else if(this.d61e==5){
            this.t61e='Sellante realizado'
          }
          else if(this.d61e==6){
            this.t61e='Caries'
          }
          else if(this.d61e==7){
            this.t61e='Obturado'
          }
          else if(this.d61e==8){
            this.t61e='Endodoncia'
          }
          else if(this.d61e==9){
            this.t61e='Pérdida'
          }
          else if(this.d61e==10){
            this.t61e='Protesis total'
          }
          else if(this.d61e==11){
            this.t61e='Protesis fija'
          }
          else if(this.d61e==12){
            this.t61e='Protesis removible'
          }

          if(this.d62a==1){
            this.t62a='Sano'
          }
          else if(this.d62a==2){
            this.t62a='Extracción indicada'
          }
          else if(this.d62a==3){
            this.t62a='Pérdida por caries'
          }
          else if(this.d62a==4){
            this.t62a='Sellante necesario'
          }
          else if(this.d62a==5){
            this.t62a='Sellante realizado'
          }
          else if(this.d62a==6){
            this.t62a='Caries'
          }
          else if(this.d62a==7){
            this.t62a='Obturado'
          }
          else if(this.d62a==8){
            this.t62a='Endodoncia'
          }
          else if(this.d62a==9){
            this.t62a='Pérdida'
          }
          else if(this.d62a==10){
            this.t62a='Protesis total'
          }
          else if(this.d62a==11){
            this.t62a='Protesis fija'
          }
          else if(this.d62a==12){
            this.t62a='Protesis removible'
          }

          if(this.d62b==1){
            this.t62b='Sano'
          }
          else if(this.d62b==2){
            this.t62b='Extracción indicada'
          }
          else if(this.d62b==3){
            this.t62b='Pérdida por caries'
          }
          else if(this.d62b==4){
            this.t62b='Sellante necesario'
          }
          else if(this.d62b==5){
            this.t62b='Sellante realizado'
          }
          else if(this.d62b==6){
            this.t62b='Caries'
          }
          else if(this.d62b==7){
            this.t62b='Obturado'
          }
          else if(this.d62b==8){
            this.t62b='Endodoncia'
          }
          else if(this.d62b==9){
            this.t62b='Pérdida'
          }
          else if(this.d62b==10){
            this.t62b='Protesis total'
          }
          else if(this.d62b==11){
            this.t62b='Protesis fija'
          }
          else if(this.d62b==12){
            this.t62b='Protesis removible'
          }

          if(this.d62c==1){
            this.t62c='Sano'
          }
          else if(this.d62c==2){
            this.t62c='Extracción indicada'
          }
          else if(this.d62c==3){
            this.t62c='Pérdida por caries'
          }
          else if(this.d62c==4){
            this.t62c='Sellante necesario'
          }
          else if(this.d62c==5){
            this.t62c='Sellante realizado'
          }
          else if(this.d62c==6){
            this.t62c='Caries'
          }
          else if(this.d62c==7){
            this.t62c='Obturado'
          }
          else if(this.d62c==8){
            this.t62c='Endodoncia'
          }
          else if(this.d62c==9){
            this.t62c='Pérdida'
          }
          else if(this.d62c==10){
            this.t62c='Protesis total'
          }
          else if(this.d62c==11){
            this.t62c='Protesis fija'
          }
          else if(this.d62c==12){
            this.t62c='Protesis removible'
          }

          if(this.d62d==1){
            this.t62d='Sano'
          }
          else if(this.d62d==2){
            this.t62d='Extracción indicada'
          }
          else if(this.d62d==3){
            this.t62d='Pérdida por caries'
          }
          else if(this.d62d==4){
            this.t62d='Sellante necesario'
          }
          else if(this.d62d==5){
            this.t62d='Sellante realizado'
          }
          else if(this.d62d==6){
            this.t62d='Caries'
          }
          else if(this.d62d==7){
            this.t62d='Obturado'
          }
          else if(this.d62d==8){
            this.t62d='Endodoncia'
          }
          else if(this.d62d==9){
            this.t62d='Pérdida'
          }
          else if(this.d62d==10){
            this.t62d='Protesis total'
          }
          else if(this.d62d==11){
            this.t62d='Protesis fija'
          }
          else if(this.d62d==12){
            this.t62d='Protesis removible'
          }

          if(this.d62e==1){
            this.t62e='Sano'
          }
          else if(this.d62e==2){
            this.t62e='Extracción indicada'
          }
          else if(this.d62e==3){
            this.t62e='Pérdida por caries'
          }
          else if(this.d62e==4){
            this.t62e='Sellante necesario'
          }
          else if(this.d62e==5){
            this.t62e='Sellante realizado'
          }
          else if(this.d62e==6){
            this.t62e='Caries'
          }
          else if(this.d62e==7){
            this.t62e='Obturado'
          }
          else if(this.d62e==8){
            this.t62e='Endodoncia'
          }
          else if(this.d62e==9){
            this.t62e='Pérdida'
          }
          else if(this.d62e==10){
            this.t62e='Protesis total'
          }
          else if(this.d62e==11){
            this.t62e='Protesis fija'
          }
          else if(this.d62e==12){
            this.t62e='Protesis removible'
          }

          if(this.d63a==1){
            this.t63a='Sano'
          }
          else if(this.d63a==2){
            this.t63a='Extracción indicada'
          }
          else if(this.d63a==3){
            this.t63a='Pérdida por caries'
          }
          else if(this.d63a==4){
            this.t63a='Sellante necesario'
          }
          else if(this.d63a==5){
            this.t63a='Sellante realizado'
          }
          else if(this.d63a==6){
            this.t63a='Caries'
          }
          else if(this.d63a==7){
            this.t63a='Obturado'
          }
          else if(this.d63a==8){
            this.t63a='Endodoncia'
          }
          else if(this.d63a==9){
            this.t63a='Pérdida'
          }
          else if(this.d63a==10){
            this.t63a='Protesis total'
          }
          else if(this.d63a==11){
            this.t63a='Protesis fija'
          }
          else if(this.d63a==12){
            this.t63a='Protesis removible'
          }

          if(this.d63b==1){
            this.t63b='Sano'
          }
          else if(this.d63b==2){
            this.t63b='Extracción indicada'
          }
          else if(this.d63b==3){
            this.t63b='Pérdida por caries'
          }
          else if(this.d63b==4){
            this.t63b='Sellante necesario'
          }
          else if(this.d63b==5){
            this.t63b='Sellante realizado'
          }
          else if(this.d63b==6){
            this.t63b='Caries'
          }
          else if(this.d63b==7){
            this.t63b='Obturado'
          }
          else if(this.d63b==8){
            this.t63b='Endodoncia'
          }
          else if(this.d63b==9){
            this.t63b='Pérdida'
          }
          else if(this.d63b==10){
            this.t63b='Protesis total'
          }
          else if(this.d63b==11){
            this.t63b='Protesis fija'
          }
          else if(this.d63b==12){
            this.t63b='Protesis removible'
          }

          if(this.d63c==1){
            this.t63c='Sano'
          }
          else if(this.d63c==2){
            this.t63c='Extracción indicada'
          }
          else if(this.d63c==3){
            this.t63c='Pérdida por caries'
          }
          else if(this.d63c==4){
            this.t63c='Sellante necesario'
          }
          else if(this.d63c==5){
            this.t63c='Sellante realizado'
          }
          else if(this.d63c==6){
            this.t63c='Caries'
          }
          else if(this.d63c==7){
            this.t63c='Obturado'
          }
          else if(this.d63c==8){
            this.t63c='Endodoncia'
          }
          else if(this.d63c==9){
            this.t63c='Pérdida'
          }
          else if(this.d63c==10){
            this.t63c='Protesis total'
          }
          else if(this.d63c==11){
            this.t63c='Protesis fija'
          }
          else if(this.d63c==12){
            this.t63c='Protesis removible'
          }

          if(this.d63d==1){
            this.t63d='Sano'
          }
          else if(this.d63d==2){
            this.t63d='Extracción indicada'
          }
          else if(this.d63d==3){
            this.t63d='Pérdida por caries'
          }
          else if(this.d63d==4){
            this.t63d='Sellante necesario'
          }
          else if(this.d63d==5){
            this.t63d='Sellante realizado'
          }
          else if(this.d63d==6){
            this.t63d='Caries'
          }
          else if(this.d63d==7){
            this.t63d='Obturado'
          }
          else if(this.d63d==8){
            this.t63d='Endodoncia'
          }
          else if(this.d63d==9){
            this.t63d='Pérdida'
          }
          else if(this.d63d==10){
            this.t63d='Protesis total'
          }
          else if(this.d63d==11){
            this.t63d='Protesis fija'
          }
          else if(this.d63d==12){
            this.t63d='Protesis removible'
          }

          if(this.d63e==1){
            this.t63e='Sano'
          }
          else if(this.d63e==2){
            this.t63e='Extracción indicada'
          }
          else if(this.d63e==3){
            this.t63e='Pérdida por caries'
          }
          else if(this.d63e==4){
            this.t63e='Sellante necesario'
          }
          else if(this.d63e==5){
            this.t63e='Sellante realizado'
          }
          else if(this.d63e==6){
            this.t63e='Caries'
          }
          else if(this.d63e==7){
            this.t63e='Obturado'
          }
          else if(this.d63e==8){
            this.t63e='Endodoncia'
          }
          else if(this.d63e==9){
            this.t63e='Pérdida'
          }
          else if(this.d63e==10){
            this.t63e='Protesis total'
          }
          else if(this.d63e==11){
            this.t63e='Protesis fija'
          }
          else if(this.d63e==12){
            this.t63e='Protesis removible'
          }

          if(this.d64a==1){
            this.t64a='Sano'
          }
          else if(this.d64a==2){
            this.t64a='Extracción indicada'
          }
          else if(this.d64a==3){
            this.t64a='Pérdida por caries'
          }
          else if(this.d64a==4){
            this.t64a='Sellante necesario'
          }
          else if(this.d64a==5){
            this.t64a='Sellante realizado'
          }
          else if(this.d64a==6){
            this.t64a='Caries'
          }
          else if(this.d64a==7){
            this.t64a='Obturado'
          }
          else if(this.d64a==8){
            this.t64a='Endodoncia'
          }
          else if(this.d64a==9){
            this.t64a='Pérdida'
          }
          else if(this.d64a==10){
            this.t64a='Protesis total'
          }
          else if(this.d64a==11){
            this.t64a='Protesis fija'
          }
          else if(this.d64a==12){
            this.t64a='Protesis removible'
          }

          if(this.d64b==1){
            this.t64b='Sano'
          }
          else if(this.d64b==2){
            this.t64b='Extracción indicada'
          }
          else if(this.d64b==3){
            this.t64b='Pérdida por caries'
          }
          else if(this.d64b==4){
            this.t64b='Sellante necesario'
          }
          else if(this.d64b==5){
            this.t64b='Sellante realizado'
          }
          else if(this.d64b==6){
            this.t64b='Caries'
          }
          else if(this.d64b==7){
            this.t64b='Obturado'
          }
          else if(this.d64b==8){
            this.t64b='Endodoncia'
          }
          else if(this.d64b==9){
            this.t64b='Pérdida'
          }
          else if(this.d64b==10){
            this.t64b='Protesis total'
          }
          else if(this.d64b==11){
            this.t64b='Protesis fija'
          }
          else if(this.d64b==12){
            this.t64b='Protesis removible'
          }

          if(this.d64c==1){
            this.t64c='Sano'
          }
          else if(this.d64c==2){
            this.t64c='Extracción indicada'
          }
          else if(this.d64c==3){
            this.t64c='Pérdida por caries'
          }
          else if(this.d64c==4){
            this.t64c='Sellante necesario'
          }
          else if(this.d64c==5){
            this.t64c='Sellante realizado'
          }
          else if(this.d64c==6){
            this.t64c='Caries'
          }
          else if(this.d64c==7){
            this.t64c='Obturado'
          }
          else if(this.d64c==8){
            this.t64c='Endodoncia'
          }
          else if(this.d64c==9){
            this.t64c='Pérdida'
          }
          else if(this.d64c==10){
            this.t64c='Protesis total'
          }
          else if(this.d64c==11){
            this.t64c='Protesis fija'
          }
          else if(this.d64c==12){
            this.t64c='Protesis removible'
          }

          if(this.d64d==1){
            this.t64d='Sano'
          }
          else if(this.d64d==2){
            this.t64d='Extracción indicada'
          }
          else if(this.d64d==3){
            this.t64d='Pérdida por caries'
          }
          else if(this.d64d==4){
            this.t64d='Sellante necesario'
          }
          else if(this.d64d==5){
            this.t64d='Sellante realizado'
          }
          else if(this.d64d==6){
            this.t64d='Caries'
          }
          else if(this.d64d==7){
            this.t64d='Obturado'
          }
          else if(this.d64d==8){
            this.t64d='Endodoncia'
          }
          else if(this.d64d==9){
            this.t64d='Pérdida'
          }
          else if(this.d64d==10){
            this.t64d='Protesis total'
          }
          else if(this.d64d==11){
            this.t64d='Protesis fija'
          }
          else if(this.d64d==12){
            this.t64d='Protesis removible'
          }

          if(this.d64e==1){
            this.t64e='Sano'
          }
          else if(this.d64e==2){
            this.t64e='Extracción indicada'
          }
          else if(this.d64e==3){
            this.t64e='Pérdida por caries'
          }
          else if(this.d64e==4){
            this.t64e='Sellante necesario'
          }
          else if(this.d64e==5){
            this.t64e='Sellante realizado'
          }
          else if(this.d64e==6){
            this.t64e='Caries'
          }
          else if(this.d64e==7){
            this.t64e='Obturado'
          }
          else if(this.d64e==8){
            this.t64e='Endodoncia'
          }
          else if(this.d64e==9){
            this.t64e='Pérdida'
          }
          else if(this.d64e==10){
            this.t64e='Protesis total'
          }
          else if(this.d64e==11){
            this.t64e='Protesis fija'
          }
          else if(this.d64e==12){
            this.t64e='Protesis removible'
          }

          if(this.d65a==1){
            this.t65a='Sano'
          }
          else if(this.d65a==2){
            this.t65a='Extracción indicada'
          }
          else if(this.d65a==3){
            this.t65a='Pérdida por caries'
          }
          else if(this.d65a==4){
            this.t65a='Sellante necesario'
          }
          else if(this.d65a==5){
            this.t65a='Sellante realizado'
          }
          else if(this.d65a==6){
            this.t65a='Caries'
          }
          else if(this.d65a==7){
            this.t65a='Obturado'
          }
          else if(this.d65a==8){
            this.t65a='Endodoncia'
          }
          else if(this.d65a==9){
            this.t65a='Pérdida'
          }
          else if(this.d65a==10){
            this.t65a='Protesis total'
          }
          else if(this.d65a==11){
            this.t65a='Protesis fija'
          }
          else if(this.d65a==12){
            this.t65a='Protesis removible'
          }

          if(this.d65b==1){
            this.t65b='Sano'
          }
          else if(this.d65b==2){
            this.t65b='Extracción indicada'
          }
          else if(this.d65b==3){
            this.t65b='Pérdida por caries'
          }
          else if(this.d65b==4){
            this.t65b='Sellante necesario'
          }
          else if(this.d65b==5){
            this.t65b='Sellante realizado'
          }
          else if(this.d65b==6){
            this.t65b='Caries'
          }
          else if(this.d65b==7){
            this.t65b='Obturado'
          }
          else if(this.d65b==8){
            this.t65b='Endodoncia'
          }
          else if(this.d65b==9){
            this.t65b='Pérdida'
          }
          else if(this.d65b==10){
            this.t65b='Protesis total'
          }
          else if(this.d65b==11){
            this.t65b='Protesis fija'
          }
          else if(this.d65b==12){
            this.t65b='Protesis removible'
          }

          if(this.d65c==1){
            this.t65c='Sano'
          }
          else if(this.d65c==2){
            this.t65c='Extracción indicada'
          }
          else if(this.d65c==3){
            this.t65c='Pérdida por caries'
          }
          else if(this.d65c==4){
            this.t65c='Sellante necesario'
          }
          else if(this.d65c==5){
            this.t65c='Sellante realizado'
          }
          else if(this.d65c==6){
            this.t65c='Caries'
          }
          else if(this.d65c==7){
            this.t65c='Obturado'
          }
          else if(this.d65c==8){
            this.t65c='Endodoncia'
          }
          else if(this.d65c==9){
            this.t65c='Pérdida'
          }
          else if(this.d65c==10){
            this.t65c='Protesis total'
          }
          else if(this.d65c==11){
            this.t65c='Protesis fija'
          }
          else if(this.d65c==12){
            this.t65c='Protesis removible'
          }

          if(this.d65d==1){
            this.t65d='Sano'
          }
          else if(this.d65d==2){
            this.t65d='Extracción indicada'
          }
          else if(this.d65d==3){
            this.t65d='Pérdida por caries'
          }
          else if(this.d65d==4){
            this.t65d='Sellante necesario'
          }
          else if(this.d65d==5){
            this.t65d='Sellante realizado'
          }
          else if(this.d65d==6){
            this.t65d='Caries'
          }
          else if(this.d65d==7){
            this.t65d='Obturado'
          }
          else if(this.d65d==8){
            this.t65d='Endodoncia'
          }
          else if(this.d65d==9){
            this.t65d='Pérdida'
          }
          else if(this.d65d==10){
            this.t65d='Protesis total'
          }
          else if(this.d65d==11){
            this.t65d='Protesis fija'
          }
          else if(this.d65d==12){
            this.t65d='Protesis removible'
          }

          if(this.d65e==1){
            this.t65e='Sano'
          }
          else if(this.d65e==2){
            this.t65e='Extracción indicada'
          }
          else if(this.d65e==3){
            this.t65e='Pérdida por caries'
          }
          else if(this.d65e==4){
            this.t65e='Sellante necesario'
          }
          else if(this.d65e==5){
            this.t65e='Sellante realizado'
          }
          else if(this.d65e==6){
            this.t65e='Caries'
          }
          else if(this.d65e==7){
            this.t65e='Obturado'
          }
          else if(this.d65e==8){
            this.t65e='Endodoncia'
          }
          else if(this.d65e==9){
            this.t65e='Pérdida'
          }
          else if(this.d65e==10){
            this.t65e='Protesis total'
          }
          else if(this.d65e==11){
            this.t65e='Protesis fija'
          }
          else if(this.d65e==12){
            this.t65e='Protesis removible'
          }

          //CUADRANTE 7
          if(this.d71a==1){
            this.t71a='Sano'
          }
          else if(this.d71a==2){
            this.t71a='Extracción indicada'
          }
          else if(this.d71a==3){
            this.t71a='Pérdida por caries'
          }
          else if(this.d71a==4){
            this.t71a='Sellante necesario'
          }
          else if(this.d71a==5){
            this.t71a='Sellante realizado'
          }
          else if(this.d71a==6){
            this.t71a='Caries'
          }
          else if(this.d71a==7){
            this.t71a='Obturado'
          }
          else if(this.d71a==8){
            this.t71a='Endodoncia'
          }
          else if(this.d71a==9){
            this.t71a='Pérdida'
          }
          else if(this.d71a==10){
            this.t71a='Protesis total'
          }
          else if(this.d71a==11){
            this.t71a='Protesis fija'
          }
          else if(this.d71a==12){
            this.t71a='Protesis removible'
          }

          if(this.d71b==1){
            this.t71b='Sano'
          }
          else if(this.d71b==2){
            this.t71b='Extracción indicada'
          }
          else if(this.d71b==3){
            this.t71b='Pérdida por caries'
          }
          else if(this.d71b==4){
            this.t71b='Sellante necesario'
          }
          else if(this.d71b==5){
            this.t71b='Sellante realizado'
          }
          else if(this.d71b==6){
            this.t71b='Caries'
          }
          else if(this.d71b==7){
            this.t71b='Obturado'
          }
          else if(this.d71b==8){
            this.t71b='Endodoncia'
          }
          else if(this.d71b==9){
            this.t71b='Pérdida'
          }
          else if(this.d71b==10){
            this.t71b='Protesis total'
          }
          else if(this.d71b==11){
            this.t71b='Protesis fija'
          }
          else if(this.d71b==12){
            this.t71b='Protesis removible'
          }

          if(this.d71c==1){
            this.t71c='Sano'
          }
          else if(this.d71c==2){
            this.t71c='Extracción indicada'
          }
          else if(this.d71c==3){
            this.t71c='Pérdida por caries'
          }
          else if(this.d71c==4){
            this.t71c='Sellante necesario'
          }
          else if(this.d71c==5){
            this.t71c='Sellante realizado'
          }
          else if(this.d71c==6){
            this.t71c='Caries'
          }
          else if(this.d71c==7){
            this.t71c='Obturado'
          }
          else if(this.d71c==8){
            this.t71c='Endodoncia'
          }
          else if(this.d71c==9){
            this.t71c='Pérdida'
          }
          else if(this.d71c==10){
            this.t71c='Protesis total'
          }
          else if(this.d71c==11){
            this.t71c='Protesis fija'
          }
          else if(this.d71c==12){
            this.t71c='Protesis removible'
          }

          if(this.d71d==1){
            this.t71d='Sano'
          }
          else if(this.d71d==2){
            this.t71d='Extracción indicada'
          }
          else if(this.d71d==3){
            this.t71d='Pérdida por caries'
          }
          else if(this.d71d==4){
            this.t71d='Sellante necesario'
          }
          else if(this.d71d==5){
            this.t71d='Sellante realizado'
          }
          else if(this.d71d==6){
            this.t71d='Caries'
          }
          else if(this.d71d==7){
            this.t71d='Obturado'
          }
          else if(this.d71d==8){
            this.t71d='Endodoncia'
          }
          else if(this.d71d==9){
            this.t71d='Pérdida'
          }
          else if(this.d71d==10){
            this.t71d='Protesis total'
          }
          else if(this.d71d==11){
            this.t71d='Protesis fija'
          }
          else if(this.d71d==12){
            this.t71d='Protesis removible'
          }

          if(this.d71e==1){
            this.t71e='Sano'
          }
          else if(this.d71e==2){
            this.t71e='Extracción indicada'
          }
          else if(this.d71e==3){
            this.t71e='Pérdida por caries'
          }
          else if(this.d71e==4){
            this.t71e='Sellante necesario'
          }
          else if(this.d71e==5){
            this.t71e='Sellante realizado'
          }
          else if(this.d71e==6){
            this.t71e='Caries'
          }
          else if(this.d71e==7){
            this.t71e='Obturado'
          }
          else if(this.d71e==8){
            this.t71e='Endodoncia'
          }
          else if(this.d71e==9){
            this.t71e='Pérdida'
          }
          else if(this.d71e==10){
            this.t71e='Protesis total'
          }
          else if(this.d71e==11){
            this.t71e='Protesis fija'
          }
          else if(this.d71e==12){
            this.t71e='Protesis removible'
          }

          if(this.d72a==1){
            this.t72a='Sano'
          }
          else if(this.d72a==2){
            this.t72a='Extracción indicada'
          }
          else if(this.d72a==3){
            this.t72a='Pérdida por caries'
          }
          else if(this.d72a==4){
            this.t72a='Sellante necesario'
          }
          else if(this.d72a==5){
            this.t72a='Sellante realizado'
          }
          else if(this.d72a==6){
            this.t72a='Caries'
          }
          else if(this.d72a==7){
            this.t72a='Obturado'
          }
          else if(this.d72a==8){
            this.t72a='Endodoncia'
          }
          else if(this.d72a==9){
            this.t72a='Pérdida'
          }
          else if(this.d72a==10){
            this.t72a='Protesis total'
          }
          else if(this.d72a==11){
            this.t72a='Protesis fija'
          }
          else if(this.d72a==12){
            this.t72a='Protesis removible'
          }

          if(this.d72b==1){
            this.t72b='Sano'
          }
          else if(this.d72b==2){
            this.t72b='Extracción indicada'
          }
          else if(this.d72b==3){
            this.t72b='Pérdida por caries'
          }
          else if(this.d72b==4){
            this.t72b='Sellante necesario'
          }
          else if(this.d72b==5){
            this.t72b='Sellante realizado'
          }
          else if(this.d72b==6){
            this.t72b='Caries'
          }
          else if(this.d72b==7){
            this.t72b='Obturado'
          }
          else if(this.d72b==8){
            this.t72b='Endodoncia'
          }
          else if(this.d72b==9){
            this.t72b='Pérdida'
          }
          else if(this.d72b==10){
            this.t72b='Protesis total'
          }
          else if(this.d72b==11){
            this.t72b='Protesis fija'
          }
          else if(this.d72b==12){
            this.t72b='Protesis removible'
          }

          if(this.d72c==1){
            this.t72c='Sano'
          }
          else if(this.d72c==2){
            this.t72c='Extracción indicada'
          }
          else if(this.d72c==3){
            this.t72c='Pérdida por caries'
          }
          else if(this.d72c==4){
            this.t72c='Sellante necesario'
          }
          else if(this.d72c==5){
            this.t72c='Sellante realizado'
          }
          else if(this.d72c==6){
            this.t72c='Caries'
          }
          else if(this.d72c==7){
            this.t72c='Obturado'
          }
          else if(this.d72c==8){
            this.t72c='Endodoncia'
          }
          else if(this.d72c==9){
            this.t72c='Pérdida'
          }
          else if(this.d72c==10){
            this.t72c='Protesis total'
          }
          else if(this.d72c==11){
            this.t72c='Protesis fija'
          }
          else if(this.d72c==12){
            this.t72c='Protesis removible'
          }

          if(this.d72d==1){
            this.t72d='Sano'
          }
          else if(this.d72d==2){
            this.t72d='Extracción indicada'
          }
          else if(this.d72d==3){
            this.t72d='Pérdida por caries'
          }
          else if(this.d72d==4){
            this.t72d='Sellante necesario'
          }
          else if(this.d72d==5){
            this.t72d='Sellante realizado'
          }
          else if(this.d72d==6){
            this.t72d='Caries'
          }
          else if(this.d72d==7){
            this.t72d='Obturado'
          }
          else if(this.d72d==8){
            this.t72d='Endodoncia'
          }
          else if(this.d72d==9){
            this.t72d='Pérdida'
          }
          else if(this.d72d==10){
            this.t72d='Protesis total'
          }
          else if(this.d72d==11){
            this.t72d='Protesis fija'
          }
          else if(this.d72d==12){
            this.t72d='Protesis removible'
          }

          if(this.d72e==1){
            this.t72e='Sano'
          }
          else if(this.d72e==2){
            this.t72e='Extracción indicada'
          }
          else if(this.d72e==3){
            this.t72e='Pérdida por caries'
          }
          else if(this.d72e==4){
            this.t72e='Sellante necesario'
          }
          else if(this.d72e==5){
            this.t72e='Sellante realizado'
          }
          else if(this.d72e==6){
            this.t72e='Caries'
          }
          else if(this.d72e==7){
            this.t72e='Obturado'
          }
          else if(this.d72e==8){
            this.t72e='Endodoncia'
          }
          else if(this.d72e==9){
            this.t72e='Pérdida'
          }
          else if(this.d72e==10){
            this.t72e='Protesis total'
          }
          else if(this.d72e==11){
            this.t72e='Protesis fija'
          }
          else if(this.d72e==12){
            this.t72e='Protesis removible'
          }

          if(this.d73a==1){
            this.t73a='Sano'
          }
          else if(this.d73a==2){
            this.t73a='Extracción indicada'
          }
          else if(this.d73a==3){
            this.t73a='Pérdida por caries'
          }
          else if(this.d73a==4){
            this.t73a='Sellante necesario'
          }
          else if(this.d73a==5){
            this.t73a='Sellante realizado'
          }
          else if(this.d73a==6){
            this.t73a='Caries'
          }
          else if(this.d73a==7){
            this.t73a='Obturado'
          }
          else if(this.d73a==8){
            this.t73a='Endodoncia'
          }
          else if(this.d73a==9){
            this.t73a='Pérdida'
          }
          else if(this.d73a==10){
            this.t73a='Protesis total'
          }
          else if(this.d73a==11){
            this.t73a='Protesis fija'
          }
          else if(this.d73a==12){
            this.t73a='Protesis removible'
          }

          if(this.d73b==1){
            this.t73b='Sano'
          }
          else if(this.d73b==2){
            this.t73b='Extracción indicada'
          }
          else if(this.d73b==3){
            this.t73b='Pérdida por caries'
          }
          else if(this.d73b==4){
            this.t73b='Sellante necesario'
          }
          else if(this.d73b==5){
            this.t73b='Sellante realizado'
          }
          else if(this.d73b==6){
            this.t73b='Caries'
          }
          else if(this.d73b==7){
            this.t73b='Obturado'
          }
          else if(this.d73b==8){
            this.t73b='Endodoncia'
          }
          else if(this.d73b==9){
            this.t73b='Pérdida'
          }
          else if(this.d73b==10){
            this.t73b='Protesis total'
          }
          else if(this.d73b==11){
            this.t73b='Protesis fija'
          }
          else if(this.d73b==12){
            this.t73b='Protesis removible'
          }

          if(this.d73c==1){
            this.t73c='Sano'
          }
          else if(this.d73c==2){
            this.t73c='Extracción indicada'
          }
          else if(this.d73c==3){
            this.t73c='Pérdida por caries'
          }
          else if(this.d73c==4){
            this.t73c='Sellante necesario'
          }
          else if(this.d73c==5){
            this.t73c='Sellante realizado'
          }
          else if(this.d73c==6){
            this.t73c='Caries'
          }
          else if(this.d73c==7){
            this.t73c='Obturado'
          }
          else if(this.d73c==8){
            this.t73c='Endodoncia'
          }
          else if(this.d73c==9){
            this.t73c='Pérdida'
          }
          else if(this.d73c==10){
            this.t73c='Protesis total'
          }
          else if(this.d73c==11){
            this.t73c='Protesis fija'
          }
          else if(this.d73c==12){
            this.t73c='Protesis removible'
          }

          if(this.d73d==1){
            this.t73d='Sano'
          }
          else if(this.d73d==2){
            this.t73d='Extracción indicada'
          }
          else if(this.d73d==3){
            this.t73d='Pérdida por caries'
          }
          else if(this.d73d==4){
            this.t73d='Sellante necesario'
          }
          else if(this.d73d==5){
            this.t73d='Sellante realizado'
          }
          else if(this.d73d==6){
            this.t73d='Caries'
          }
          else if(this.d73d==7){
            this.t73d='Obturado'
          }
          else if(this.d73d==8){
            this.t73d='Endodoncia'
          }
          else if(this.d73d==9){
            this.t73d='Pérdida'
          }
          else if(this.d73d==10){
            this.t73d='Protesis total'
          }
          else if(this.d73d==11){
            this.t73d='Protesis fija'
          }
          else if(this.d73d==12){
            this.t73d='Protesis removible'
          }

          if(this.d73e==1){
            this.t73e='Sano'
          }
          else if(this.d73e==2){
            this.t73e='Extracción indicada'
          }
          else if(this.d73e==3){
            this.t73e='Pérdida por caries'
          }
          else if(this.d73e==4){
            this.t73e='Sellante necesario'
          }
          else if(this.d73e==5){
            this.t73e='Sellante realizado'
          }
          else if(this.d73e==6){
            this.t73e='Caries'
          }
          else if(this.d73e==7){
            this.t73e='Obturado'
          }
          else if(this.d73e==8){
            this.t73e='Endodoncia'
          }
          else if(this.d73e==9){
            this.t73e='Pérdida'
          }
          else if(this.d73e==10){
            this.t73e='Protesis total'
          }
          else if(this.d73e==11){
            this.t73e='Protesis fija'
          }
          else if(this.d73e==12){
            this.t73e='Protesis removible'
          }

          if(this.d74a==1){
            this.t74a='Sano'
          }
          else if(this.d74a==2){
            this.t74a='Extracción indicada'
          }
          else if(this.d74a==3){
            this.t74a='Pérdida por caries'
          }
          else if(this.d74a==4){
            this.t74a='Sellante necesario'
          }
          else if(this.d74a==5){
            this.t74a='Sellante realizado'
          }
          else if(this.d74a==6){
            this.t74a='Caries'
          }
          else if(this.d74a==7){
            this.t74a='Obturado'
          }
          else if(this.d74a==8){
            this.t74a='Endodoncia'
          }
          else if(this.d74a==9){
            this.t74a='Pérdida'
          }
          else if(this.d74a==10){
            this.t74a='Protesis total'
          }
          else if(this.d74a==11){
            this.t74a='Protesis fija'
          }
          else if(this.d74a==12){
            this.t74a='Protesis removible'
          }

          if(this.d74b==1){
            this.t74b='Sano'
          }
          else if(this.d74b==2){
            this.t74b='Extracción indicada'
          }
          else if(this.d74b==3){
            this.t74b='Pérdida por caries'
          }
          else if(this.d74b==4){
            this.t74b='Sellante necesario'
          }
          else if(this.d74b==5){
            this.t74b='Sellante realizado'
          }
          else if(this.d74b==6){
            this.t74b='Caries'
          }
          else if(this.d74b==7){
            this.t74b='Obturado'
          }
          else if(this.d74b==8){
            this.t74b='Endodoncia'
          }
          else if(this.d74b==9){
            this.t74b='Pérdida'
          }
          else if(this.d74b==10){
            this.t74b='Protesis total'
          }
          else if(this.d74b==11){
            this.t74b='Protesis fija'
          }
          else if(this.d74b==12){
            this.t74b='Protesis removible'
          }

          if(this.d74c==1){
            this.t74c='Sano'
          }
          else if(this.d74c==2){
            this.t74c='Extracción indicada'
          }
          else if(this.d74c==3){
            this.t74c='Pérdida por caries'
          }
          else if(this.d74c==4){
            this.t74c='Sellante necesario'
          }
          else if(this.d74c==5){
            this.t74c='Sellante realizado'
          }
          else if(this.d74c==6){
            this.t74c='Caries'
          }
          else if(this.d74c==7){
            this.t74c='Obturado'
          }
          else if(this.d74c==8){
            this.t74c='Endodoncia'
          }
          else if(this.d74c==9){
            this.t74c='Pérdida'
          }
          else if(this.d74c==10){
            this.t74c='Protesis total'
          }
          else if(this.d74c==11){
            this.t74c='Protesis fija'
          }
          else if(this.d74c==12){
            this.t74c='Protesis removible'
          }

          if(this.d74d==1){
            this.t74d='Sano'
          }
          else if(this.d74d==2){
            this.t74d='Extracción indicada'
          }
          else if(this.d74d==3){
            this.t74d='Pérdida por caries'
          }
          else if(this.d74d==4){
            this.t74d='Sellante necesario'
          }
          else if(this.d74d==5){
            this.t74d='Sellante realizado'
          }
          else if(this.d74d==6){
            this.t74d='Caries'
          }
          else if(this.d74d==7){
            this.t74d='Obturado'
          }
          else if(this.d74d==8){
            this.t74d='Endodoncia'
          }
          else if(this.d74d==9){
            this.t74d='Pérdida'
          }
          else if(this.d74d==10){
            this.t74d='Protesis total'
          }
          else if(this.d74d==11){
            this.t74d='Protesis fija'
          }
          else if(this.d74d==12){
            this.t74d='Protesis removible'
          }

          if(this.d74e==1){
            this.t74e='Sano'
          }
          else if(this.d74e==2){
            this.t74e='Extracción indicada'
          }
          else if(this.d74e==3){
            this.t74e='Pérdida por caries'
          }
          else if(this.d74e==4){
            this.t74e='Sellante necesario'
          }
          else if(this.d74e==5){
            this.t74e='Sellante realizado'
          }
          else if(this.d74e==6){
            this.t74e='Caries'
          }
          else if(this.d74e==7){
            this.t74e='Obturado'
          }
          else if(this.d74e==8){
            this.t74e='Endodoncia'
          }
          else if(this.d74e==9){
            this.t74e='Pérdida'
          }
          else if(this.d74e==10){
            this.t74e='Protesis total'
          }
          else if(this.d74e==11){
            this.t74e='Protesis fija'
          }
          else if(this.d74e==12){
            this.t74e='Protesis removible'
          }

          if(this.d75a==1){
            this.t75a='Sano'
          }
          else if(this.d75a==2){
            this.t75a='Extracción indicada'
          }
          else if(this.d75a==3){
            this.t75a='Pérdida por caries'
          }
          else if(this.d75a==4){
            this.t75a='Sellante necesario'
          }
          else if(this.d75a==5){
            this.t75a='Sellante realizado'
          }
          else if(this.d75a==6){
            this.t75a='Caries'
          }
          else if(this.d75a==7){
            this.t75a='Obturado'
          }
          else if(this.d75a==8){
            this.t75a='Endodoncia'
          }
          else if(this.d75a==9){
            this.t75a='Pérdida'
          }
          else if(this.d75a==10){
            this.t75a='Protesis total'
          }
          else if(this.d75a==11){
            this.t75a='Protesis fija'
          }
          else if(this.d75a==12){
            this.t75a='Protesis removible'
          }

          if(this.d75b==1){
            this.t75b='Sano'
          }
          else if(this.d75b==2){
            this.t75b='Extracción indicada'
          }
          else if(this.d75b==3){
            this.t75b='Pérdida por caries'
          }
          else if(this.d75b==4){
            this.t75b='Sellante necesario'
          }
          else if(this.d75b==5){
            this.t75b='Sellante realizado'
          }
          else if(this.d75b==6){
            this.t75b='Caries'
          }
          else if(this.d75b==7){
            this.t75b='Obturado'
          }
          else if(this.d75b==8){
            this.t75b='Endodoncia'
          }
          else if(this.d75b==9){
            this.t75b='Pérdida'
          }
          else if(this.d75b==10){
            this.t75b='Protesis total'
          }
          else if(this.d75b==11){
            this.t75b='Protesis fija'
          }
          else if(this.d75b==12){
            this.t75b='Protesis removible'
          }

          if(this.d75c==1){
            this.t75c='Sano'
          }
          else if(this.d75c==2){
            this.t75c='Extracción indicada'
          }
          else if(this.d75c==3){
            this.t75c='Pérdida por caries'
          }
          else if(this.d75c==4){
            this.t75c='Sellante necesario'
          }
          else if(this.d75c==5){
            this.t75c='Sellante realizado'
          }
          else if(this.d75c==6){
            this.t75c='Caries'
          }
          else if(this.d75c==7){
            this.t75c='Obturado'
          }
          else if(this.d75c==8){
            this.t75c='Endodoncia'
          }
          else if(this.d75c==9){
            this.t75c='Pérdida'
          }
          else if(this.d75c==10){
            this.t75c='Protesis total'
          }
          else if(this.d75c==11){
            this.t75c='Protesis fija'
          }
          else if(this.d75c==12){
            this.t75c='Protesis removible'
          }

          if(this.d75d==1){
            this.t75d='Sano'
          }
          else if(this.d75d==2){
            this.t75d='Extracción indicada'
          }
          else if(this.d75d==3){
            this.t75d='Pérdida por caries'
          }
          else if(this.d75d==4){
            this.t75d='Sellante necesario'
          }
          else if(this.d75d==5){
            this.t75d='Sellante realizado'
          }
          else if(this.d75d==6){
            this.t75d='Caries'
          }
          else if(this.d75d==7){
            this.t75d='Obturado'
          }
          else if(this.d75d==8){
            this.t75d='Endodoncia'
          }
          else if(this.d75d==9){
            this.t75d='Pérdida'
          }
          else if(this.d75d==10){
            this.t75d='Protesis total'
          }
          else if(this.d75d==11){
            this.t75d='Protesis fija'
          }
          else if(this.d75d==12){
            this.t75d='Protesis removible'
          }

          if(this.d75e==1){
            this.t75e='Sano'
          }
          else if(this.d75e==2){
            this.t75e='Extracción indicada'
          }
          else if(this.d75e==3){
            this.t75e='Pérdida por caries'
          }
          else if(this.d75e==4){
            this.t75e='Sellante necesario'
          }
          else if(this.d75e==5){
            this.t75e='Sellante realizado'
          }
          else if(this.d75e==6){
            this.t75e='Caries'
          }
          else if(this.d75e==7){
            this.t75e='Obturado'
          }
          else if(this.d75e==8){
            this.t75e='Endodoncia'
          }
          else if(this.d75e==9){
            this.t75e='Pérdida'
          }
          else if(this.d75e==10){
            this.t75e='Protesis total'
          }
          else if(this.d75e==11){
            this.t75e='Protesis fija'
          }
          else if(this.d75e==12){
            this.t75e='Protesis removible'
          }

          //CUADRANTE 8

          if(this.d81a==1){
            this.t81a='Sano'
          }
          else if(this.d81a==2){
            this.t81a='Extracción indicada'
          }
          else if(this.d81a==3){
            this.t81a='Pérdida por caries'
          }
          else if(this.d81a==4){
            this.t81a='Sellante necesario'
          }
          else if(this.d81a==5){
            this.t81a='Sellante realizado'
          }
          else if(this.d81a==6){
            this.t81a='Caries'
          }
          else if(this.d81a==7){
            this.t81a='Obturado'
          }
          else if(this.d81a==8){
            this.t81a='Endodoncia'
          }
          else if(this.d81a==9){
            this.t81a='Pérdida'
          }
          else if(this.d81a==10){
            this.t81a='Protesis total'
          }
          else if(this.d81a==11){
            this.t81a='Protesis fija'
          }
          else if(this.d81a==12){
            this.t81a='Protesis removible'
          }

          if(this.d81b==1){
            this.t81b='Sano'
          }
          else if(this.d81b==2){
            this.t81b='Extracción indicada'
          }
          else if(this.d81b==3){
            this.t81b='Pérdida por caries'
          }
          else if(this.d81b==4){
            this.t81b='Sellante necesario'
          }
          else if(this.d81b==5){
            this.t81b='Sellante realizado'
          }
          else if(this.d81b==6){
            this.t81b='Caries'
          }
          else if(this.d81b==7){
            this.t81b='Obturado'
          }
          else if(this.d81b==8){
            this.t81b='Endodoncia'
          }
          else if(this.d81b==9){
            this.t81b='Pérdida'
          }
          else if(this.d81b==10){
            this.t81b='Protesis total'
          }
          else if(this.d81b==11){
            this.t81b='Protesis fija'
          }
          else if(this.d81b==12){
            this.t81b='Protesis removible'
          }

          if(this.d81c==1){
            this.t81c='Sano'
          }
          else if(this.d81c==2){
            this.t81c='Extracción indicada'
          }
          else if(this.d81c==3){
            this.t81c='Pérdida por caries'
          }
          else if(this.d81c==4){
            this.t81c='Sellante necesario'
          }
          else if(this.d81c==5){
            this.t81c='Sellante realizado'
          }
          else if(this.d81c==6){
            this.t81c='Caries'
          }
          else if(this.d81c==7){
            this.t81c='Obturado'
          }
          else if(this.d81c==8){
            this.t81c='Endodoncia'
          }
          else if(this.d81c==9){
            this.t81c='Pérdida'
          }
          else if(this.d81c==10){
            this.t81c='Protesis total'
          }
          else if(this.d81c==11){
            this.t81c='Protesis fija'
          }
          else if(this.d81c==12){
            this.t81c='Protesis removible'
          }

          if(this.d81d==1){
            this.t81d='Sano'
          }
          else if(this.d81d==2){
            this.t81d='Extracción indicada'
          }
          else if(this.d81d==3){
            this.t81d='Pérdida por caries'
          }
          else if(this.d81d==4){
            this.t81d='Sellante necesario'
          }
          else if(this.d81d==5){
            this.t81d='Sellante realizado'
          }
          else if(this.d81d==6){
            this.t81d='Caries'
          }
          else if(this.d81d==7){
            this.t81d='Obturado'
          }
          else if(this.d81d==8){
            this.t81d='Endodoncia'
          }
          else if(this.d81d==9){
            this.t81d='Pérdida'
          }
          else if(this.d81d==10){
            this.t81d='Protesis total'
          }
          else if(this.d81d==11){
            this.t81d='Protesis fija'
          }
          else if(this.d81d==12){
            this.t81d='Protesis removible'
          }

          if(this.d81e==1){
            this.t81e='Sano'
          }
          else if(this.d81e==2){
            this.t81e='Extracción indicada'
          }
          else if(this.d81e==3){
            this.t81e='Pérdida por caries'
          }
          else if(this.d81e==4){
            this.t81e='Sellante necesario'
          }
          else if(this.d81e==5){
            this.t81e='Sellante realizado'
          }
          else if(this.d81e==6){
            this.t81e='Caries'
          }
          else if(this.d81e==7){
            this.t81e='Obturado'
          }
          else if(this.d81e==8){
            this.t81e='Endodoncia'
          }
          else if(this.d81e==9){
            this.t81e='Pérdida'
          }
          else if(this.d81e==10){
            this.t81e='Protesis total'
          }
          else if(this.d81e==11){
            this.t81e='Protesis fija'
          }
          else if(this.d81e==12){
            this.t81e='Protesis removible'
          }

          if(this.d82a==1){
            this.t82a='Sano'
          }
          else if(this.d82a==2){
            this.t82a='Extracción indicada'
          }
          else if(this.d82a==3){
            this.t82a='Pérdida por caries'
          }
          else if(this.d82a==4){
            this.t82a='Sellante necesario'
          }
          else if(this.d82a==5){
            this.t82a='Sellante realizado'
          }
          else if(this.d82a==6){
            this.t82a='Caries'
          }
          else if(this.d82a==7){
            this.t82a='Obturado'
          }
          else if(this.d82a==8){
            this.t82a='Endodoncia'
          }
          else if(this.d82a==9){
            this.t82a='Pérdida'
          }
          else if(this.d82a==10){
            this.t82a='Protesis total'
          }
          else if(this.d82a==11){
            this.t82a='Protesis fija'
          }
          else if(this.d82a==12){
            this.t82a='Protesis removible'
          }

          if(this.d82b==1){
            this.t82b='Sano'
          }
          else if(this.d82b==2){
            this.t82b='Extracción indicada'
          }
          else if(this.d82b==3){
            this.t82b='Pérdida por caries'
          }
          else if(this.d82b==4){
            this.t82b='Sellante necesario'
          }
          else if(this.d82b==5){
            this.t82b='Sellante realizado'
          }
          else if(this.d82b==6){
            this.t82b='Caries'
          }
          else if(this.d82b==7){
            this.t82b='Obturado'
          }
          else if(this.d82b==8){
            this.t82b='Endodoncia'
          }
          else if(this.d82b==9){
            this.t82b='Pérdida'
          }
          else if(this.d82b==10){
            this.t82b='Protesis total'
          }
          else if(this.d82b==11){
            this.t82b='Protesis fija'
          }
          else if(this.d82b==12){
            this.t82b='Protesis removible'
          }

          if(this.d82c==1){
            this.t82c='Sano'
          }
          else if(this.d82c==2){
            this.t82c='Extracción indicada'
          }
          else if(this.d82c==3){
            this.t82c='Pérdida por caries'
          }
          else if(this.d82c==4){
            this.t82c='Sellante necesario'
          }
          else if(this.d82c==5){
            this.t82c='Sellante realizado'
          }
          else if(this.d82c==6){
            this.t82c='Caries'
          }
          else if(this.d82c==7){
            this.t82c='Obturado'
          }
          else if(this.d82c==8){
            this.t82c='Endodoncia'
          }
          else if(this.d82c==9){
            this.t82c='Pérdida'
          }
          else if(this.d82c==10){
            this.t82c='Protesis total'
          }
          else if(this.d82c==11){
            this.t82c='Protesis fija'
          }
          else if(this.d82c==12){
            this.t82c='Protesis removible'
          }

          if(this.d82d==1){
            this.t82d='Sano'
          }
          else if(this.d82d==2){
            this.t82d='Extracción indicada'
          }
          else if(this.d82d==3){
            this.t82d='Pérdida por caries'
          }
          else if(this.d82d==4){
            this.t82d='Sellante necesario'
          }
          else if(this.d82d==5){
            this.t82d='Sellante realizado'
          }
          else if(this.d82d==6){
            this.t82d='Caries'
          }
          else if(this.d82d==7){
            this.t82d='Obturado'
          }
          else if(this.d82d==8){
            this.t82d='Endodoncia'
          }
          else if(this.d82d==9){
            this.t82d='Pérdida'
          }
          else if(this.d82d==10){
            this.t82d='Protesis total'
          }
          else if(this.d82d==11){
            this.t82d='Protesis fija'
          }
          else if(this.d82d==12){
            this.t82d='Protesis removible'
          }

          if(this.d82e==1){
            this.t82e='Sano'
          }
          else if(this.d82e==2){
            this.t82e='Extracción indicada'
          }
          else if(this.d82e==3){
            this.t82e='Pérdida por caries'
          }
          else if(this.d82e==4){
            this.t82e='Sellante necesario'
          }
          else if(this.d82e==5){
            this.t82e='Sellante realizado'
          }
          else if(this.d82e==6){
            this.t82e='Caries'
          }
          else if(this.d82e==7){
            this.t82e='Obturado'
          }
          else if(this.d82e==8){
            this.t82e='Endodoncia'
          }
          else if(this.d82e==9){
            this.t82e='Pérdida'
          }
          else if(this.d82e==10){
            this.t82e='Protesis total'
          }
          else if(this.d82e==11){
            this.t82e='Protesis fija'
          }
          else if(this.d82e==12){
            this.t82e='Protesis removible'
          }

          if(this.d83a==1){
            this.t83a='Sano'
          }
          else if(this.d83a==2){
            this.t83a='Extracción indicada'
          }
          else if(this.d83a==3){
            this.t83a='Pérdida por caries'
          }
          else if(this.d83a==4){
            this.t83a='Sellante necesario'
          }
          else if(this.d83a==5){
            this.t83a='Sellante realizado'
          }
          else if(this.d83a==6){
            this.t83a='Caries'
          }
          else if(this.d83a==7){
            this.t83a='Obturado'
          }
          else if(this.d83a==8){
            this.t83a='Endodoncia'
          }
          else if(this.d83a==9){
            this.t83a='Pérdida'
          }
          else if(this.d83a==10){
            this.t83a='Protesis total'
          }
          else if(this.d83a==11){
            this.t83a='Protesis fija'
          }
          else if(this.d83a==12){
            this.t83a='Protesis removible'
          }

          if(this.d83b==1){
            this.t83b='Sano'
          }
          else if(this.d83b==2){
            this.t83b='Extracción indicada'
          }
          else if(this.d83b==3){
            this.t83b='Pérdida por caries'
          }
          else if(this.d83b==4){
            this.t83b='Sellante necesario'
          }
          else if(this.d83b==5){
            this.t83b='Sellante realizado'
          }
          else if(this.d83b==6){
            this.t83b='Caries'
          }
          else if(this.d83b==7){
            this.t83b='Obturado'
          }
          else if(this.d83b==8){
            this.t83b='Endodoncia'
          }
          else if(this.d83b==9){
            this.t83b='Pérdida'
          }
          else if(this.d83b==10){
            this.t83b='Protesis total'
          }
          else if(this.d83b==11){
            this.t83b='Protesis fija'
          }
          else if(this.d83b==12){
            this.t83b='Protesis removible'
          }

          if(this.d83c==1){
            this.t83c='Sano'
          }
          else if(this.d83c==2){
            this.t83c='Extracción indicada'
          }
          else if(this.d83c==3){
            this.t83c='Pérdida por caries'
          }
          else if(this.d83c==4){
            this.t83c='Sellante necesario'
          }
          else if(this.d83c==5){
            this.t83c='Sellante realizado'
          }
          else if(this.d83c==6){
            this.t83c='Caries'
          }
          else if(this.d83c==7){
            this.t83c='Obturado'
          }
          else if(this.d83c==8){
            this.t83c='Endodoncia'
          }
          else if(this.d83c==9){
            this.t83c='Pérdida'
          }
          else if(this.d83c==10){
            this.t83c='Protesis total'
          }
          else if(this.d83c==11){
            this.t83c='Protesis fija'
          }
          else if(this.d83c==12){
            this.t83c='Protesis removible'
          }

          if(this.d83d==1){
            this.t83d='Sano'
          }
          else if(this.d83d==2){
            this.t83d='Extracción indicada'
          }
          else if(this.d83d==3){
            this.t83d='Pérdida por caries'
          }
          else if(this.d83d==4){
            this.t83d='Sellante necesario'
          }
          else if(this.d83d==5){
            this.t83d='Sellante realizado'
          }
          else if(this.d83d==6){
            this.t83d='Caries'
          }
          else if(this.d83d==7){
            this.t83d='Obturado'
          }
          else if(this.d83d==8){
            this.t83d='Endodoncia'
          }
          else if(this.d83d==9){
            this.t83d='Pérdida'
          }
          else if(this.d83d==10){
            this.t83d='Protesis total'
          }
          else if(this.d83d==11){
            this.t83d='Protesis fija'
          }
          else if(this.d83d==12){
            this.t83d='Protesis removible'
          }

          if(this.d83e==1){
            this.t83e='Sano'
          }
          else if(this.d83e==2){
            this.t83e='Extracción indicada'
          }
          else if(this.d83e==3){
            this.t83e='Pérdida por caries'
          }
          else if(this.d83e==4){
            this.t83e='Sellante necesario'
          }
          else if(this.d83e==5){
            this.t83e='Sellante realizado'
          }
          else if(this.d83e==6){
            this.t83e='Caries'
          }
          else if(this.d83e==7){
            this.t83e='Obturado'
          }
          else if(this.d83e==8){
            this.t83e='Endodoncia'
          }
          else if(this.d83e==9){
            this.t83e='Pérdida'
          }
          else if(this.d83e==10){
            this.t83e='Protesis total'
          }
          else if(this.d83e==11){
            this.t83e='Protesis fija'
          }
          else if(this.d83e==12){
            this.t83e='Protesis removible'
          }

          if(this.d84a==1){
            this.t84a='Sano'
          }
          else if(this.d84a==2){
            this.t84a='Extracción indicada'
          }
          else if(this.d84a==3){
            this.t84a='Pérdida por caries'
          }
          else if(this.d84a==4){
            this.t84a='Sellante necesario'
          }
          else if(this.d84a==5){
            this.t84a='Sellante realizado'
          }
          else if(this.d84a==6){
            this.t84a='Caries'
          }
          else if(this.d84a==7){
            this.t84a='Obturado'
          }
          else if(this.d84a==8){
            this.t84a='Endodoncia'
          }
          else if(this.d84a==9){
            this.t84a='Pérdida'
          }
          else if(this.d84a==10){
            this.t84a='Protesis total'
          }
          else if(this.d84a==11){
            this.t84a='Protesis fija'
          }
          else if(this.d84a==12){
            this.t84a='Protesis removible'
          }

          if(this.d84b==1){
            this.t84b='Sano'
          }
          else if(this.d84b==2){
            this.t84b='Extracción indicada'
          }
          else if(this.d84b==3){
            this.t84b='Pérdida por caries'
          }
          else if(this.d84b==4){
            this.t84b='Sellante necesario'
          }
          else if(this.d84b==5){
            this.t84b='Sellante realizado'
          }
          else if(this.d84b==6){
            this.t84b='Caries'
          }
          else if(this.d84b==7){
            this.t84b='Obturado'
          }
          else if(this.d84b==8){
            this.t84b='Endodoncia'
          }
          else if(this.d84b==9){
            this.t84b='Pérdida'
          }
          else if(this.d84b==10){
            this.t84b='Protesis total'
          }
          else if(this.d84b==11){
            this.t84b='Protesis fija'
          }
          else if(this.d84b==12){
            this.t84b='Protesis removible'
          }

          if(this.d84c==1){
            this.t84c='Sano'
          }
          else if(this.d84c==2){
            this.t84c='Extracción indicada'
          }
          else if(this.d84c==3){
            this.t84c='Pérdida por caries'
          }
          else if(this.d84c==4){
            this.t84c='Sellante necesario'
          }
          else if(this.d84c==5){
            this.t84c='Sellante realizado'
          }
          else if(this.d84c==6){
            this.t84c='Caries'
          }
          else if(this.d84c==7){
            this.t84c='Obturado'
          }
          else if(this.d84c==8){
            this.t84c='Endodoncia'
          }
          else if(this.d84c==9){
            this.t84c='Pérdida'
          }
          else if(this.d84c==10){
            this.t84c='Protesis total'
          }
          else if(this.d84c==11){
            this.t84c='Protesis fija'
          }
          else if(this.d84c==12){
            this.t84c='Protesis removible'
          }

          if(this.d84d==1){
            this.t84d='Sano'
          }
          else if(this.d84d==2){
            this.t84d='Extracción indicada'
          }
          else if(this.d84d==3){
            this.t84d='Pérdida por caries'
          }
          else if(this.d84d==4){
            this.t84d='Sellante necesario'
          }
          else if(this.d84d==5){
            this.t84d='Sellante realizado'
          }
          else if(this.d84d==6){
            this.t84d='Caries'
          }
          else if(this.d84d==7){
            this.t84d='Obturado'
          }
          else if(this.d84d==8){
            this.t84d='Endodoncia'
          }
          else if(this.d84d==9){
            this.t84d='Pérdida'
          }
          else if(this.d84d==10){
            this.t84d='Protesis total'
          }
          else if(this.d84d==11){
            this.t84d='Protesis fija'
          }
          else if(this.d84d==12){
            this.t84d='Protesis removible'
          }

          if(this.d84e==1){
            this.t84e='Sano'
          }
          else if(this.d84e==2){
            this.t84e='Extracción indicada'
          }
          else if(this.d84e==3){
            this.t84e='Pérdida por caries'
          }
          else if(this.d84e==4){
            this.t84e='Sellante necesario'
          }
          else if(this.d84e==5){
            this.t84e='Sellante realizado'
          }
          else if(this.d84e==6){
            this.t84e='Caries'
          }
          else if(this.d84e==7){
            this.t84e='Obturado'
          }
          else if(this.d84e==8){
            this.t84e='Endodoncia'
          }
          else if(this.d84e==9){
            this.t84e='Pérdida'
          }
          else if(this.d84e==10){
            this.t84e='Protesis total'
          }
          else if(this.d84e==11){
            this.t84e='Protesis fija'
          }
          else if(this.d84e==12){
            this.t84e='Protesis removible'
          }

          if(this.d85a==1){
            this.t85a='Sano'
          }
          else if(this.d85a==2){
            this.t85a='Extracción indicada'
          }
          else if(this.d85a==3){
            this.t85a='Pérdida por caries'
          }
          else if(this.d85a==4){
            this.t85a='Sellante necesario'
          }
          else if(this.d85a==5){
            this.t85a='Sellante realizado'
          }
          else if(this.d85a==6){
            this.t85a='Caries'
          }
          else if(this.d85a==7){
            this.t85a='Obturado'
          }
          else if(this.d85a==8){
            this.t85a='Endodoncia'
          }
          else if(this.d85a==9){
            this.t85a='Pérdida'
          }
          else if(this.d85a==10){
            this.t85a='Protesis total'
          }
          else if(this.d85a==11){
            this.t85a='Protesis fija'
          }
          else if(this.d85a==12){
            this.t85a='Protesis removible'
          }

          if(this.d85b==1){
            this.t85b='Sano'
          }
          else if(this.d85b==2){
            this.t85b='Extracción indicada'
          }
          else if(this.d85b==3){
            this.t85b='Pérdida por caries'
          }
          else if(this.d85b==4){
            this.t85b='Sellante necesario'
          }
          else if(this.d85b==5){
            this.t85b='Sellante realizado'
          }
          else if(this.d85b==6){
            this.t85b='Caries'
          }
          else if(this.d85b==7){
            this.t85b='Obturado'
          }
          else if(this.d85b==8){
            this.t85b='Endodoncia'
          }
          else if(this.d85b==9){
            this.t85b='Pérdida'
          }
          else if(this.d85b==10){
            this.t85b='Protesis total'
          }
          else if(this.d85b==11){
            this.t85b='Protesis fija'
          }
          else if(this.d85b==12){
            this.t85b='Protesis removible'
          }

          if(this.d85c==1){
            this.t85c='Sano'
          }
          else if(this.d85c==2){
            this.t85c='Extracción indicada'
          }
          else if(this.d85c==3){
            this.t85c='Pérdida por caries'
          }
          else if(this.d85c==4){
            this.t85c='Sellante necesario'
          }
          else if(this.d85c==5){
            this.t85c='Sellante realizado'
          }
          else if(this.d85c==6){
            this.t85c='Caries'
          }
          else if(this.d85c==7){
            this.t85c='Obturado'
          }
          else if(this.d85c==8){
            this.t85c='Endodoncia'
          }
          else if(this.d85c==9){
            this.t85c='Pérdida'
          }
          else if(this.d85c==10){
            this.t85c='Protesis total'
          }
          else if(this.d85c==11){
            this.t85c='Protesis fija'
          }
          else if(this.d85c==12){
            this.t85c='Protesis removible'
          }

          if(this.d85d==1){
            this.t85d='Sano'
          }
          else if(this.d85d==2){
            this.t85d='Extracción indicada'
          }
          else if(this.d85d==3){
            this.t85d='Pérdida por caries'
          }
          else if(this.d85d==4){
            this.t85d='Sellante necesario'
          }
          else if(this.d85d==5){
            this.t85d='Sellante realizado'
          }
          else if(this.d85d==6){
            this.t85d='Caries'
          }
          else if(this.d85d==7){
            this.t85d='Obturado'
          }
          else if(this.d85d==8){
            this.t85d='Endodoncia'
          }
          else if(this.d85d==9){
            this.t85d='Pérdida'
          }
          else if(this.d85d==10){
            this.t85d='Protesis total'
          }
          else if(this.d85d==11){
            this.t85d='Protesis fija'
          }
          else if(this.d85d==12){
            this.t85d='Protesis removible'
          }

          if(this.d85e==1){
            this.t85e='Sano'
          }
          else if(this.d85e==2){
            this.t85e='Extracción indicada'
          }
          else if(this.d85e==3){
            this.t85e='Pérdida por caries'
          }
          else if(this.d85e==4){
            this.t85e='Sellante necesario'
          }
          else if(this.d85e==5){
            this.t85e='Sellante realizado'
          }
          else if(this.d85e==6){
            this.t85e='Caries'
          }
          else if(this.d85e==7){
            this.t85e='Obturado'
          }
          else if(this.d85e==8){
            this.t85e='Endodoncia'
          }
          else if(this.d85e==9){
            this.t85e='Pérdida'
          }
          else if(this.d85e==10){
            this.t85e='Protesis total'
          }
          else if(this.d85e==11){
            this.t85e='Protesis fija'
          }
          else if(this.d85e==12){
            this.t85e='Protesis removible'
          }


          this.id_d11a=dientes[0].id_detalle_odontograma
          this.id_d11b=dientes[1].id_detalle_odontograma
          this.id_d11c=dientes[2].id_detalle_odontograma
          this.id_d11d=dientes[3].id_detalle_odontograma
          this.id_d11e=dientes[4].id_detalle_odontograma

          this.id_d12a=dientes[5].id_detalle_odontograma
          this.id_d12b=dientes[6].id_detalle_odontograma
          this.id_d12c=dientes[7].id_detalle_odontograma
          this.id_d12d=dientes[8].id_detalle_odontograma
          this.id_d12e=dientes[9].id_detalle_odontograma

          this.id_d13a=dientes[10].id_detalle_odontograma
          this.id_d13b=dientes[11].id_detalle_odontograma
          this.id_d13c=dientes[12].id_detalle_odontograma
          this.id_d13d=dientes[13].id_detalle_odontograma
          this.id_d13e=dientes[14].id_detalle_odontograma

          this.id_d14a=dientes[15].id_detalle_odontograma
          this.id_d14b=dientes[16].id_detalle_odontograma
          this.id_d14c=dientes[17].id_detalle_odontograma
          this.id_d14d=dientes[18].id_detalle_odontograma
          this.id_d14e=dientes[19].id_detalle_odontograma

          this.id_d15a=dientes[20].id_detalle_odontograma
          this.id_d15b=dientes[21].id_detalle_odontograma
          this.id_d15c=dientes[22].id_detalle_odontograma
          this.id_d15d=dientes[23].id_detalle_odontograma
          this.id_d15e=dientes[24].id_detalle_odontograma

          this.id_d16a=dientes[25].id_detalle_odontograma
          this.id_d16b=dientes[26].id_detalle_odontograma
          this.id_d16c=dientes[27].id_detalle_odontograma
          this.id_d16d=dientes[28].id_detalle_odontograma
          this.id_d16e=dientes[29].id_detalle_odontograma

          this.id_d17a=dientes[30].id_detalle_odontograma
          this.id_d17b=dientes[31].id_detalle_odontograma
          this.id_d17c=dientes[32].id_detalle_odontograma
          this.id_d17d=dientes[33].id_detalle_odontograma
          this.id_d17e=dientes[34].id_detalle_odontograma

          this.id_d18a=dientes[35].id_detalle_odontograma
          this.id_d18b=dientes[36].id_detalle_odontograma
          this.id_d18c=dientes[37].id_detalle_odontograma
          this.id_d18d=dientes[38].id_detalle_odontograma
          this.id_d18e=dientes[39].id_detalle_odontograma
            // CUADRANTE  DIENTES 2

          this.id_d21a=dientes[40].id_detalle_odontograma
          this.id_d21b=dientes[41].id_detalle_odontograma
          this.id_d21c=dientes[42].id_detalle_odontograma
          this.id_d21d=dientes[43].id_detalle_odontograma
          this.id_d21e=dientes[44].id_detalle_odontograma

          this.id_d22a=dientes[45].id_detalle_odontograma
          this.id_d22b=dientes[46].id_detalle_odontograma
          this.id_d22c=dientes[47].id_detalle_odontograma
          this.id_d22d=dientes[48].id_detalle_odontograma
          this.id_d22e=dientes[49].id_detalle_odontograma

          this.id_d23a=dientes[50].id_detalle_odontograma
          this.id_d23b=dientes[51].id_detalle_odontograma
          this.id_d23c=dientes[52].id_detalle_odontograma
          this.id_d23d=dientes[53].id_detalle_odontograma
          this.id_d23e=dientes[54].id_detalle_odontograma

          this.id_d24a=dientes[55].id_detalle_odontograma
          this.id_d24b=dientes[56].id_detalle_odontograma
          this.id_d24c=dientes[57].id_detalle_odontograma
          this.id_d24d=dientes[58].id_detalle_odontograma
          this.id_d24e=dientes[59].id_detalle_odontograma

          this.id_d25a=dientes[60].id_detalle_odontograma
          this.id_d25b=dientes[61].id_detalle_odontograma
          this.id_d25c=dientes[62].id_detalle_odontograma
          this.id_d25d=dientes[63].id_detalle_odontograma
          this.id_d25e=dientes[64].id_detalle_odontograma

          this.id_d26a=dientes[65].id_detalle_odontograma
          this.id_d26b=dientes[66].id_detalle_odontograma
          this.id_d26c=dientes[67].id_detalle_odontograma
          this.id_d26d=dientes[68].id_detalle_odontograma
          this.id_d26e=dientes[69].id_detalle_odontograma

          this.id_d27a=dientes[70].id_detalle_odontograma
          this.id_d27b=dientes[71].id_detalle_odontograma
          this.id_d27c=dientes[72].id_detalle_odontograma
          this.id_d27d=dientes[73].id_detalle_odontograma
          this.id_d27e=dientes[74].id_detalle_odontograma

          this.id_d28a=dientes[75].id_detalle_odontograma
          this.id_d28b=dientes[76].id_detalle_odontograma
          this.id_d28c=dientes[77].id_detalle_odontograma
          this.id_d28d=dientes[78].id_detalle_odontograma
          this.id_d28e=dientes[79].id_detalle_odontograma
            // CUADRANTE  DIENTES 3

          this.id_d31a=dientes[80].id_detalle_odontograma
          this.id_d31b=dientes[81].id_detalle_odontograma
          this.id_d31c=dientes[82].id_detalle_odontograma
          this.id_d31d=dientes[83].id_detalle_odontograma
          this.id_d31e=dientes[84].id_detalle_odontograma

          this.id_d32a=dientes[85].id_detalle_odontograma
          this.id_d32b=dientes[86].id_detalle_odontograma
          this.id_d32c=dientes[87].id_detalle_odontograma
          this.id_d32d=dientes[88].id_detalle_odontograma
          this.id_d32e=dientes[89].id_detalle_odontograma

          this.id_d33a=dientes[90].id_detalle_odontograma
          this.id_d33b=dientes[91].id_detalle_odontograma
          this.id_d33c=dientes[92].id_detalle_odontograma
          this.id_d33d=dientes[93].id_detalle_odontograma
          this.id_d33e=dientes[94].id_detalle_odontograma

          this.id_d34a=dientes[95].id_detalle_odontograma
          this.id_d34b=dientes[96].id_detalle_odontograma
          this.id_d34c=dientes[97].id_detalle_odontograma
          this.id_d34d=dientes[98].id_detalle_odontograma
          this.id_d34e=dientes[99].id_detalle_odontograma

          this.id_d35a=dientes[100].id_detalle_odontograma
          this.id_d35b=dientes[101].id_detalle_odontograma
          this.id_d35c=dientes[102].id_detalle_odontograma
          this.id_d35d=dientes[103].id_detalle_odontograma
          this.id_d35e=dientes[104].id_detalle_odontograma

          this.id_d36a=dientes[105].id_detalle_odontograma
          this.id_d36b=dientes[106].id_detalle_odontograma
          this.id_d36c=dientes[107].id_detalle_odontograma
          this.id_d36d=dientes[108].id_detalle_odontograma
          this.id_d36e=dientes[109].id_detalle_odontograma

          this.id_d37a=dientes[110].id_detalle_odontograma
          this.id_d37b=dientes[111].id_detalle_odontograma
          this.id_d37c=dientes[112].id_detalle_odontograma
          this.id_d37d=dientes[113].id_detalle_odontograma
          this.id_d37e=dientes[114].id_detalle_odontograma

          this.id_d38a=dientes[115].id_detalle_odontograma
          this.id_d38b=dientes[116].id_detalle_odontograma
          this.id_d38c=dientes[117].id_detalle_odontograma
          this.id_d38d=dientes[118].id_detalle_odontograma
          this.id_d38e=dientes[119].id_detalle_odontograma
            // CUADRANTE  DIENTES 4

          this.id_d41a=dientes[120].id_detalle_odontograma
          this.id_d41b=dientes[121].id_detalle_odontograma
          this.id_d41c=dientes[122].id_detalle_odontograma
          this.id_d41d=dientes[123].id_detalle_odontograma
          this.id_d41e=dientes[124].id_detalle_odontograma

          this.id_d42a=dientes[125].id_detalle_odontograma
          this.id_d42b=dientes[126].id_detalle_odontograma
          this.id_d42c=dientes[127].id_detalle_odontograma
          this.id_d42d=dientes[128].id_detalle_odontograma
          this.id_d42e=dientes[129].id_detalle_odontograma

          this.id_d43a=dientes[130].id_detalle_odontograma
          this.id_d43b=dientes[131].id_detalle_odontograma
          this.id_d43c=dientes[132].id_detalle_odontograma
          this.id_d43d=dientes[133].id_detalle_odontograma
          this.id_d43e=dientes[134].id_detalle_odontograma

          this.id_d44a=dientes[135].id_detalle_odontograma
          this.id_d44b=dientes[136].id_detalle_odontograma
          this.id_d44c=dientes[137].id_detalle_odontograma
          this.id_d44d=dientes[138].id_detalle_odontograma
          this.id_d44e=dientes[139].id_detalle_odontograma

          this.id_d45a=dientes[140].id_detalle_odontograma
          this.id_d45b=dientes[141].id_detalle_odontograma
          this.id_d45c=dientes[142].id_detalle_odontograma
          this.id_d45d=dientes[143].id_detalle_odontograma
          this.id_d45e=dientes[144].id_detalle_odontograma

          this.id_d46a=dientes[145].id_detalle_odontograma
          this.id_d46b=dientes[146].id_detalle_odontograma
          this.id_d46c=dientes[147].id_detalle_odontograma
          this.id_d46d=dientes[148].id_detalle_odontograma
          this.id_d46e=dientes[149].id_detalle_odontograma

          this.id_d47a=dientes[150].id_detalle_odontograma
          this.id_d47b=dientes[151].id_detalle_odontograma
          this.id_d47c=dientes[152].id_detalle_odontograma
          this.id_d47d=dientes[153].id_detalle_odontograma
          this.id_d47e=dientes[154].id_detalle_odontograma

          this.id_d48a=dientes[155].id_detalle_odontograma
          this.id_d48b=dientes[156].id_detalle_odontograma
          this.id_d48c=dientes[157].id_detalle_odontograma
          this.id_d48d=dientes[158].id_detalle_odontograma
          this.id_d48e=dientes[159].id_detalle_odontograma
            // CUADRANTE  DIENTES 5

          this.id_d51a=dientes[160].id_detalle_odontograma
          this.id_d51b=dientes[161].id_detalle_odontograma
          this.id_d51c=dientes[162].id_detalle_odontograma
          this.id_d51d=dientes[163].id_detalle_odontograma
          this.id_d51e=dientes[164].id_detalle_odontograma

          this.id_d52a=dientes[165].id_detalle_odontograma
          this.id_d52b=dientes[166].id_detalle_odontograma
          this.id_d52c=dientes[167].id_detalle_odontograma
          this.id_d52d=dientes[168].id_detalle_odontograma
          this.id_d52e=dientes[169].id_detalle_odontograma

          this.id_d53a=dientes[170].id_detalle_odontograma
          this.id_d53b=dientes[171].id_detalle_odontograma
          this.id_d53c=dientes[172].id_detalle_odontograma
          this.id_d53d=dientes[173].id_detalle_odontograma
          this.id_d53e=dientes[174].id_detalle_odontograma

          this.id_d54a=dientes[175].id_detalle_odontograma
          this.id_d54b=dientes[176].id_detalle_odontograma
          this.id_d54c=dientes[177].id_detalle_odontograma
          this.id_d54d=dientes[178].id_detalle_odontograma
          this.id_d54e=dientes[179].id_detalle_odontograma

          this.id_d55a=dientes[180].id_detalle_odontograma
          this.id_d55b=dientes[181].id_detalle_odontograma
          this.id_d55c=dientes[182].id_detalle_odontograma
          this.id_d55d=dientes[183].id_detalle_odontograma
          this.id_d55e=dientes[184].id_detalle_odontograma
            // CUADRANTE  DIENTES 6

          this.id_d61a=dientes[185].id_detalle_odontograma
          this.id_d61b=dientes[186].id_detalle_odontograma
          this.id_d61c=dientes[187].id_detalle_odontograma
          this.id_d61d=dientes[188].id_detalle_odontograma
          this.id_d61e=dientes[189].id_detalle_odontograma

          this.id_d62a=dientes[190].id_detalle_odontograma
          this.id_d62b=dientes[191].id_detalle_odontograma
          this.id_d62c=dientes[192].id_detalle_odontograma
          this.id_d62d=dientes[193].id_detalle_odontograma
          this.id_d62e=dientes[194].id_detalle_odontograma

          this.id_d63a=dientes[195].id_detalle_odontograma
          this.id_d63b=dientes[196].id_detalle_odontograma
          this.id_d63c=dientes[197].id_detalle_odontograma
          this.id_d63d=dientes[198].id_detalle_odontograma
          this.id_d63e=dientes[199].id_detalle_odontograma

          this.id_d64a=dientes[200].id_detalle_odontograma
          this.id_d64b=dientes[201].id_detalle_odontograma
          this.id_d64c=dientes[202].id_detalle_odontograma
          this.id_d64d=dientes[203].id_detalle_odontograma
          this.id_d64e=dientes[204].id_detalle_odontograma

          this.id_d65a=dientes[205].id_detalle_odontograma
          this.id_d65b=dientes[206].id_detalle_odontograma
          this.id_d65c=dientes[207].id_detalle_odontograma
          this.id_d65d=dientes[208].id_detalle_odontograma
          this.id_d65e=dientes[209].id_detalle_odontograma
            // CUADRANTE  DIENTES 7

          this.id_d71a=dientes[210].id_detalle_odontograma
          this.id_d71b=dientes[211].id_detalle_odontograma
          this.id_d71c=dientes[212].id_detalle_odontograma
          this.id_d71d=dientes[213].id_detalle_odontograma
          this.id_d71e=dientes[214].id_detalle_odontograma

          this.id_d72a=dientes[215].id_detalle_odontograma
          this.id_d72b=dientes[216].id_detalle_odontograma
          this.id_d72c=dientes[217].id_detalle_odontograma
          this.id_d72d=dientes[218].id_detalle_odontograma
          this.id_d72e=dientes[219].id_detalle_odontograma

          this.id_d73a=dientes[220].id_detalle_odontograma
          this.id_d73b=dientes[221].id_detalle_odontograma
          this.id_d73c=dientes[222].id_detalle_odontograma
          this.id_d73d=dientes[223].id_detalle_odontograma
          this.id_d73e=dientes[224].id_detalle_odontograma

          this.id_d74a=dientes[225].id_detalle_odontograma
          this.id_d74b=dientes[226].id_detalle_odontograma
          this.id_d74c=dientes[227].id_detalle_odontograma
          this.id_d74d=dientes[228].id_detalle_odontograma
          this.id_d74e=dientes[229].id_detalle_odontograma

          this.id_d75a=dientes[230].id_detalle_odontograma
          this.id_d75b=dientes[231].id_detalle_odontograma
          this.id_d75c=dientes[232].id_detalle_odontograma
          this.id_d75d=dientes[233].id_detalle_odontograma
          this.id_d75e=dientes[234].id_detalle_odontograma
            // CUADRANTE  DIENTES 8

          this.id_d81a=dientes[235].id_detalle_odontograma
          this.id_d81b=dientes[236].id_detalle_odontograma
          this.id_d81c=dientes[237].id_detalle_odontograma
          this.id_d81d=dientes[238].id_detalle_odontograma
          this.id_d81e=dientes[239].id_detalle_odontograma

          this.id_d82a=dientes[240].id_detalle_odontograma
          this.id_d82b=dientes[241].id_detalle_odontograma
          this.id_d82c=dientes[242].id_detalle_odontograma
          this.id_d82d=dientes[243].id_detalle_odontograma
          this.id_d82e=dientes[244].id_detalle_odontograma

          this.id_d83a=dientes[245].id_detalle_odontograma
          this.id_d83b=dientes[246].id_detalle_odontograma
          this.id_d83c=dientes[247].id_detalle_odontograma
          this.id_d83d=dientes[248].id_detalle_odontograma
          this.id_d83e=dientes[249].id_detalle_odontograma

          this.id_d84a=dientes[250].id_detalle_odontograma
          this.id_d84b=dientes[251].id_detalle_odontograma
          this.id_d84c=dientes[252].id_detalle_odontograma
          this.id_d84d=dientes[253].id_detalle_odontograma
          this.id_d84e=dientes[254].id_detalle_odontograma

          this.id_d85a=dientes[255].id_detalle_odontograma
          this.id_d85b=dientes[256].id_detalle_odontograma
          this.id_d85c=dientes[257].id_detalle_odontograma
          this.id_d85d=dientes[258].id_detalle_odontograma
          this.id_d85e=dientes[259].id_detalle_odontograma
          this.comprobar_odontograma()
        }else{
          this.comprobar_odontograma()
        }
      });
    });
  }
  comprobar_odontograma(){
    if(this.d11a==undefined){
      this.diente_11()
      this.diente_12()
      this.diente_13()
      this.diente_14()
      this.diente_15()
      this.diente_16()
      this.diente_17()
      this.diente_18()

      this.diente_21()
      this.diente_22()
      this.diente_23()
      this.diente_24()
      this.diente_25()
      this.diente_26()
      this.diente_27()
      this.diente_28()

      this.diente_31()
      this.diente_32()
      this.diente_33()
      this.diente_34()
      this.diente_35()
      this.diente_36()
      this.diente_37()
      this.diente_38()

      this.diente_41()
      this.diente_42()
      this.diente_43()
      this.diente_44()
      this.diente_45()
      this.diente_46()
      this.diente_47()
      this.diente_48()

      this.diente_51()
      this.diente_52()
      this.diente_53()
      this.diente_54()
      this.diente_55()

      this.diente_61()
      this.diente_62()
      this.diente_63()
      this.diente_64()
      this.diente_65()

      this.diente_71()
      this.diente_72()
      this.diente_73()
      this.diente_74()
      this.diente_75()

      this.diente_81()
      this.diente_82()
      this.diente_83()
      this.diente_84()
      this.diente_85()
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
            this.consulta_odontograma()
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
  diente_11(){
    for(let i=11, a=1; i<=11; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_12(){
    for(let i=12, a=2; i<=12; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_13(){
    for(let i=13, a=3; i<=13; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_14(){
    for(let i=14, a=4; i<=14; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_15(){
    for(let i=15, a=5; i<=15; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=15){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_16(){
    for(let i=16, a=6; i<=16; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_17(){
    for(let i=17, a=7; i<=17; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_18(){
    for(let i=18, a=8; i<=18; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_21(){
    for(let i=21, a=9; i<=21; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_22(){
    for(let i=22, a=10; i<=22; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_23(){
    for(let i=23, a=11; i<=23; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_24(){
    for(let i=24, a=12; i<=24; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_25(){
    for(let i=25, a=13; i<=25; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_26(){
    for(let i=26, a=14; i<=26; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_27(){
    for(let i=27, a=15; i<=27; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_28(){
    for(let i=28, a=16; i<=28; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_31(){
    for(let i=31, a=17; i<=31; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_32(){
    for(let i=32, a=18; i<=32; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_33(){
    for(let i=33, a=19; i<=33; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_34(){
    for(let i=34, a=20; i<=34; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_35(){
    for(let i=35, a=21; i<=35; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_36(){
    for(let i=36, a=22; i<=36; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_37(){
    for(let i=37, a=23; i<=37; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_38(){
    for(let i=38, a=24; i<=38; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_41(){
    for(let i=41, a=25; i<=41; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
   diente_42(){
    for(let i=42, a=26; i<=42; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_43(){
    for(let i=43, a=27; i<=43; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_44(){
    for(let i=44, a=28; i<=44; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_45(){
    for(let i=45, a=29; i<=45; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_46(){
    for(let i=46, a=30; i<=46; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_47(){
    for(let i=47, a=31; i<=47; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_48(){
    for(let i=48, a=32; i<=48; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_55(){
    for(let i=55, a=33; i<=55; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_54(){
    for(let i=54, a=34; i<=54; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_53(){
    for(let i=53, a=35; i<=53; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_52(){
    for(let i=52, a=36; i<=52; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
   diente_51(){
    for(let i=51, a=37; i<=51; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_61(){
    for(let i=61, a=38; i<=61; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_62(){
    for(let i=62, a=39; i<=62; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_63(){
    for(let i=63, a=40; i<=63; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_64(){
    for(let i=64, a=41; i<=64; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_65(){
    for(let i=65, a=42; i<=65; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_71(){
    for(let i=71, a=43; i<=71; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_72(){
    for(let i=72, a=44; i<=72; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_73(){
    for(let i=73, a=45; i<=73; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_74(){
    for(let i=74, a=46; i<=74; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_75(){
    for(let i=75, a=47; i<=75; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_81(){
    for(let i=81, a=48; i<=81; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_82(){
    for(let i=82, a=49; i<=82; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_83(){
    for(let i=83, a=50; i<=83; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_84(){
    for(let i=84, a=51; i<=84; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}
  diente_85(){
    for(let i=85, a=52; i<=85; i++){
      if(i!=9 && i!=10 && i!=19 && i!=20 && i!=29 && i!=30 && i!=39 && i!=40 && i!=49 && i!=50 && i!=56 && i!=57 && i!=58
        && i!=59 && i!=60 && i!=66 && i!=67 && i!=68 && i!=69 && i!=70 && i!=76 && i!=77 && i!=78 && i!=79  && i!=80 && i!=86
        && i!=87 && i!=88 && i!=89){
          let body={
            'accion': 'llenar_odontograma',
            'estados': "d"+i+"a",
            'detalle' : "1",
            'dientes_id_diente' : a,
            'id_historia' : this.id_historia
          }
          return new Promise(resolve=>{
            this.servicio.postData(body).subscribe((res:any)=>{
              if(res.estado){ this.consulta_odontograma()
                let body={
                  'accion': 'llenar_odontograma',
                  'estados': "d"+i+"b",
                  'detalle' : "1",
                  'dientes_id_diente' : a,
                  'id_historia' : this.id_historia
                }
                return new Promise(resolve=>{
                  this.servicio.postData(body).subscribe((res:any)=>{
                    if(res.estado){ this.consulta_odontograma()
                      let body={
                        'accion': 'llenar_odontograma',
                        'estados': "d"+i+"c",
                        'detalle' : "1",
                        'dientes_id_diente' : a,
                        'id_historia' : this.id_historia
                      }
                      return new Promise(resolve=>{
                        this.servicio.postData(body).subscribe((res:any)=>{
                          if(res.estado){ this.consulta_odontograma()
                            let body={
                              'accion': 'llenar_odontograma',
                              'estados': "d"+i+"d",
                              'detalle' : "1",
                              'dientes_id_diente' : a,
                              'id_historia' : this.id_historia
                            }
                            return new Promise(resolve=>{
                              this.servicio.postData(body).subscribe((res:any)=>{
                                if(res.estado){ this.consulta_odontograma()
                                  let body={
                                    'accion': 'llenar_odontograma',
                                    'estados': "d"+i+"e",
                                    'detalle' : "1",
                                    'dientes_id_diente' : a,
                                    'id_historia' : this.id_historia
                                  }
                                  return new Promise(resolve=>{
                                    this.servicio.postData(body).subscribe((res:any)=>{
                                      if(res.estado){ this.consulta_odontograma()
                                        if(a<=52){
                                          a=a*1+1
                                        }
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
      }
    }
}

  cambio_edad1(){
    if(this.edad1>1){
      this.edad1=1
    }else{
      this.edad1=this.edad1+1
      if(this.edad1==2){
        this.edad2=1
        this.edad3=1
        this.edad4=1
        this.edad5=1
        this.edad6=1
        this.edad7=1
        this.edad8=1
        this.datos_años=1
      }
    }
  }
  cambio_edad2(){
    if(this.edad2>1){
      this.edad2=1
    }else{
      this.edad2=this.edad2+1
      if(this.edad2==2){
        this.edad1=1
        this.edad3=1
        this.edad4=1
        this.edad5=1
        this.edad6=1
        this.edad7=1
        this.edad8=1
        this.datos_años=2
      }
    }
  }
  cambio_edad3(){
    if(this.edad3>1){
      this.edad3=1
    }else{
      this.edad3=this.edad3+1
      if(this.edad3==2){
        this.edad1=1
        this.edad2=1
        this.edad4=1
        this.edad5=1
        this.edad6=1
        this.edad7=1
        this.edad8=1
        this.datos_años=3
      }
    }
  }
  cambio_edad4(){
    if(this.edad4>1){
      this.edad4=1
    }else{
      this.edad4=this.edad4+1
      if(this.edad4==2){
        this.edad1=1
        this.edad3=1
        this.edad2=1
        this.edad5=1
        this.edad6=1
        this.edad7=1
        this.edad8=1
        this.datos_años=4
      }
    }
  }
  cambio_edad5(){
    if(this.edad5>1){
      this.edad5=1
    }else{
      this.edad5=this.edad5+1
      if(this.edad5==2){
        this.edad1=1
        this.edad3=1
        this.edad4=1
        this.edad2=1
        this.edad6=1
        this.edad7=1
        this.edad8=1
        this.datos_años=5
      }
    }
  }
  cambio_edad6(){
    if(this.edad6>1){
      this.edad6=1
    }else{
      this.edad6=this.edad6+1
      if(this.edad6==2){
        this.edad1=1
        this.edad3=1
        this.edad4=1
        this.edad5=1
        this.edad2=1
        this.edad7=1
        this.edad8=1
        this.datos_años=6
      }
    }
  }
  cambio_edad7(){
    if(this.edad7>1){
      this.edad7=1
    }else{
      this.edad7=this.edad7+1
      if(this.edad7==2){
        this.edad1=1
        this.edad3=1
        this.edad4=1
        this.edad5=1
        this.edad6=1
        this.edad2=1
        this.edad8=1
        this.datos_años=7
      }
    }
  }
  cambio_edad8(){
    if(this.edad8>1){
      this.edad8=1
    }else{
      this.edad8=this.edad8+1
      if(this.edad8==2){
        this.edad1=1
        this.edad3=1
        this.edad4=1
        this.edad5=1
        this.edad6=1
        this.edad7=1
        this.edad2=1
        this.datos_años=8
      }
    }
  }
  cambio_antecedentes1(){
    this.antecedentes1=this.antecedentes1*1
    if(this.antecedentes1>1){
      this.antecedentes1=1
    }else{
      this.antecedentes1=this.antecedentes1+1
      if(this.antecedentes1==2){

      }
    }
  }
  cambio_antecedentes2(){
    this.antecedentes2=this.antecedentes2*1
    if(this.antecedentes2>1){
      this.antecedentes2=1
    }else{
      this.antecedentes2=this.antecedentes2+1
      if(this.antecedentes2==2){

      }
    }
  }
  cambio_antecedentes3(){
    this.antecedentes3=this.antecedentes3*1
    if(this.antecedentes3>1){
      this.antecedentes3=1
    }else{
      this.antecedentes3=this.antecedentes3+1
      if(this.antecedentes3==2){

      }
    }
  }
  cambio_antecedentes4(){
    this.antecedentes4=this.antecedentes4*1
    if(this.antecedentes4>1){
      this.antecedentes4=1
    }else{
      this.antecedentes4=this.antecedentes4+1
      if(this.antecedentes4==2){

      }
    }
  }
  cambio_antecedentes5(){
    this.antecedentes5=this.antecedentes5*1
    if(this.antecedentes5>1){
      this.antecedentes5=1
    }else{
      this.antecedentes5=this.antecedentes5+1
      if(this.antecedentes5==2){

      }
    }
  }
  cambio_antecedentes6(){
    this.antecedentes6=this.antecedentes6*1
    if(this.antecedentes6>1){
      this.antecedentes6=1
    }else{
      this.antecedentes6=this.antecedentes6+1
      if(this.antecedentes6==2){

      }
    }
  }
  cambio_antecedentes7(){
    this.antecedentes7=this.antecedentes7*1
    if(this.antecedentes7>1){
      this.antecedentes7=1
    }else{
      this.antecedentes7=this.antecedentes7+1
      if(this.antecedentes7==2){

      }
    }
  }
  cambio_antecedentes8(){
    this.antecedentes8=this.antecedentes8*1
    if(this.antecedentes8>1){
      this.antecedentes8=1
    }else{
      this.antecedentes8=this.antecedentes8+1
      if(this.antecedentes8==2){

      }
    }
  }
  cambio_antecedentes9(){
    this.antecedentes9=this.antecedentes9*1
    if(this.antecedentes9>1){
      this.antecedentes9=1
    }else{
      this.antecedentes9=this.antecedentes9+1
      if(this.antecedentes9==2){

      }
    }
  }
  cambio_p_diagnostico1(){
    this.p_diagnostico1=this.p_diagnostico1*1
    if(this.p_diagnostico1>1){
      this.p_diagnostico1=1
    }else{
      this.p_diagnostico1=this.p_diagnostico1+1
      if(this.p_diagnostico1==2){

      }
    }
  }
  cambio_p_diagnostico2(){
    this.p_diagnostico2=this.p_diagnostico2*1
    if(this.p_diagnostico2>1){
      this.p_diagnostico2=1
    }else{
      this.p_diagnostico2=this.p_diagnostico2+1
      if(this.p_diagnostico2==2){

      }
    }
  }
  cambio_p_diagnostico3(){
    this.p_diagnostico3=this.p_diagnostico3*1
    if(this.p_diagnostico3>1){
      this.p_diagnostico3=1
    }else{
      this.p_diagnostico3=this.p_diagnostico3+1
      if(this.p_diagnostico3==2){

      }
    }
  }
  cambio_estomatognatico1(){
    this.labios=this.labios*1
    if(this.labios>1){
      this.labios=1
    }else{
      this.labios=this.labios+1
      if(this.labios==2){

      }
    }
  }
  cambio_estomatognatico2(){
    this.mejillas=this.mejillas*1
    if(this.mejillas>1){
      this.mejillas=1
    }else{
      this.mejillas=this.mejillas+1
      if(this.mejillas==2){

      }
    }
  }
  cambio_estomatognatico3(){
    this.max_superior=this.max_superior*1
    if(this.max_superior>1){
      this.max_superior=1
    }else{
      this.max_superior=this.max_superior+1
      if(this.max_superior==2){

      }
    }
  }
  cambio_estomatognatico4(){
    this.max_inferior=this.max_inferior*1
    if(this.max_inferior>1){
      this.max_inferior=1
    }else{
      this.max_inferior=this.max_inferior+1
      if(this.max_inferior==2){

      }
    }
  }
  cambio_estomatognatico5(){
    this.lengua=this.lengua*1
    if(this.lengua>1){
      this.lengua=1
    }else{
      this.lengua=this.lengua+1
      if(this.lengua==2){

      }
    }
  }
  cambio_estomatognatico6(){
    this.paladar=this.paladar*1
    if(this.paladar>1){
      this.paladar=1
    }else{
      this.paladar=this.paladar+1
      if(this.paladar==2){

      }
    }
  }
  cambio_estomatognatico7(){
    this.piso=this.piso*1
    if(this.piso>1){
      this.piso=1
    }else{
      this.piso=this.piso+1
      if(this.piso==2){

      }
    }
  }
  cambio_estomatognatico8(){
    this.carrillos=this.carrillos*1
    if(this.carrillos>1){
      this.carrillos=1
    }else{
      this.carrillos=this.carrillos+1
      if(this.carrillos==2){

      }
    }
  }
  cambio_estomatognatico9(){
    this.glandulas_salivales=this.glandulas_salivales*1
    if(this.glandulas_salivales>1){
      this.glandulas_salivales=1
    }else{
      this.glandulas_salivales=this.glandulas_salivales+1
      if(this.glandulas_salivales==2){

      }
    }
  }
  cambio_estomatognatico10(){
    this.oro_faringe=this.oro_faringe*1
    if(this.oro_faringe>1){
      this.oro_faringe=1
    }else{
      this.oro_faringe=this.oro_faringe+1
      if(this.oro_faringe==2){

      }
    }
  }
  cambio_estomatognatico11(){
    this.atm=this.atm*1
    if(this.atm>1){
      this.atm=1
    }else{
      this.atm=this.atm+1
      if(this.atm==2){

      }
    }
  }
  cambio_estomatognatico12(){
    this.ganglios=this.ganglios*1
    if(this.ganglios>1){
      this.ganglios=1
    }else{
      this.ganglios=this.ganglios+1
      if(this.ganglios==2){

      }
    }
  }
  cambio_adultos(){
    if(this.adultos>1){
      this.adultos=1
    }else{
      this.adultos=this.adultos+1
      if(this.adultos==2){
        this.ninos=1
        document.getElementById('niños').style.display = 'none';
        document.getElementById('adulto').style.display = 'block';
      }
    }
  }
  cambio_ninos(){
    if(this.ninos>1){
      this.ninos=1
    }else{
      this.ninos=this.ninos+1
      if(this.ninos==2){
        this.adultos=1
        document.getElementById('adulto').style.display = 'none';
        document.getElementById('niños').style.display = 'block';
      }
    }
  }
  cambio_diagnostico1(){
    this.pre=this.pre*1
    if(this.pre>1){
      this.pre=1
    }else{
      this.pre=this.pre+1
      if(this.pre==2){
        this.dif=1

      }
    }
  }
  cambio_diagnostico2(){
    this.dif=this.dif*1
    if(this.dif>1){
      this.dif=1
    }else{
      this.dif=this.dif+1
      if(this.dif==2){
        this.pre=1

      }
    }
  }
  cambio_pieza_dental16(){
    this.p16=this.p16*1
    if(this.p16>1){
      this.p16=1
    }else{
      this.p16=this.p16+1
      if(this.p16==2){

      }
    }
  }
  cambio_pieza_dental17(){
    this.p17=this.p17*1
    if(this.p17>1){
      this.p17=1
    }else{
      this.p17=this.p17+1
      if(this.p17==2){

      }
    }
  }
  cambio_pieza_dental11(){
    this.p11=this.p11*1
    if(this.p11>1){
      this.p11=1
    }else{
      this.p11=this.p11+1
      if(this.p11==2){

      }
    }
  }
  cambio_pieza_dental26(){
    this.p26=this.p26*1
    if(this.p26>1){
      this.p26=1
    }else{
      this.p26=this.p26+1
      if(this.p26==2){

      }
    }
  }
  cambio_pieza_dental36(){
    this.p36=this.p36*1
    if(this.p36>1){
      this.p36=1
    }else{
      this.p36=this.p36+1
      if(this.p36==2){

      }
    }
  }
  cambio_pieza_dental31(){
    this.p31=this.p31*1
    if(this.p31>1){
      this.p31=1
    }else{
      this.p31=this.p31+1
      if(this.p31==2){

      }
    }
  }
  cambio_pieza_dental46(){
    this.p46=this.p46*1
    if(this.p46>1){
      this.p46=1
    }else{
      this.p46=this.p46+1
      if(this.p46==2){

      }
    }
  }
  cambio_pieza_dental21(){
    this.p21=this.p21*1
    if(this.p21>1){
      this.p21=1
    }else{
      this.p21=this.p21+1
      if(this.p21==2){

      }
    }
  }
  cambio_pieza_dental27(){
    this.p27=this.p27*1
    if(this.p27>1){
      this.p27=1
    }else{
      this.p27=this.p27+1
      if(this.p27==2){

      }
    }
  }
  cambio_pieza_dental37(){
    this.p37=this.p37*1
    if(this.p37>1){
      this.p37=1
    }else{
      this.p37=this.p37+1
      if(this.p37==2){

      }
    }
  }
  cambio_pieza_dental41(){
    this.p41=this.p41*1
    if(this.p41>1){
      this.p41=1
    }else{
      this.p41=this.p41+1
      if(this.p41==2){

      }
    }
  }
  cambio_pieza_dental47(){
    this.p47=this.p47*1
    if(this.p47>1){
      this.p47=1
    }else{
      this.p47=this.p47+1
      if(this.p47==2){

      }
    }
  }
  cambio_pieza_dental55(){
    this.p55=this.p55*1
    if(this.p55>1){
      this.p55=1
    }else{
      this.p55=this.p55+1
      if(this.p55==2){

      }
    }
  }
  cambio_pieza_dental51(){
    this.p51=this.p51*1
    if(this.p51>1){
      this.p51=1
    }else{
      this.p51=this.p51+1
      if(this.p51==2){

      }
    }
  }

  cambio_pieza_dental65(){
    this.p65=this.p65*1
    if(this.p65>1){
      this.p65=1
    }else{
      this.p65=this.p65+1
      if(this.p65==2){

      }
    }
  }
  cambio_pieza_dental75(){
    this.p75=this.p75*1
    if(this.p75>1){
      this.p75=1
    }else{
      this.p75=this.p75+1
      if(this.p75==2){

      }
    }
  }
  cambio_pieza_dental71(){
    this.p71=this.p71*1
    if(this.p71>1){
      this.p71=1
    }else{
      this.p71=this.p71+1
      if(this.p71==2){

      }
    }
  }
  cambio_pieza_dental85(){
    this.p85=this.p85*1
    if(this.p85>1){
      this.p85=1
    }else{
      this.p85=this.p85+1
      if(this.p85==2){

      }
    }
  }
  enfermedad_periodontal1(){
    if(this.ep1>1){
      this.ep1=1
    }else{
      this.ep1=this.ep1+1
      if(this.ep1==2){
        this.ep=1
        this.ep2=1
        this.ep3=1
      }
    }
  }
  enfermedad_periodontal2(){
    if(this.ep2>1){
      this.ep2=1
    }else{
      this.ep2=this.ep2+1
      if(this.ep2==2){
        this.ep=2
        this.ep1=1
        this.ep3=1
      }
    }
  }
  enfermedad_periodontal3(){
    if(this.ep3>1){
      this.ep3=1
    }else{
      this.ep3=this.ep3+1
      if(this.ep3==2){
        this.ep=3
        this.ep2=1
        this.ep1=1
      }
    }
  }
  mal_oclusion1(){
    if(this.mo1>1){
      this.mo1=1
    }else{
      this.mo1=this.mo1+1
      if(this.mo1==2){
        this.mo=1
        this.mo2=1
        this.mo3=1
      }
    }
  }
  mal_oclusion2(){
    if(this.mo2>1){
      this.mo2=1
    }else{
      this.mo2=this.mo2+1
      if(this.mo2==2){
        this.mo=2
        this.mo1=1
        this.mo3=1
      }
    }
  }
  mal_oclusion3(){
    if(this.mo3>1){
      this.mo3=1
    }else{
      this.mo3=this.mo3+1
      if(this.mo3==2){
        this.mo=3
        this.mo2=1
        this.mo1=1
      }
    }
  }
  fluorosis1(){
    if(this.fl1>1){
      this.fl1=1
    }else{
      this.fl1=this.fl1+1
      if(this.fl1==2){
        this.fl=1
        this.fl2=1
        this.fl3=1
      }
    }
  }
  fluorosis2(){
    if(this.fl2>1){
      this.fl2=1
    }else{
      this.fl2=this.fl2+1
      if(this.fl2==2){
        this.fl=2
        this.fl1=1
        this.fl3=1
      }
    }
  }
  fluorosis3(){
    if(this.fl3>1){
      this.fl3=1
    }else{
      this.fl3=this.fl3+1
      if(this.fl3==2){
        this.fl=3
        this.fl2=1
        this.fl1=1
      }
    }
  }
  cambiar11a(){
    if(this.d11a>11){
      this.d11a=1
      this.t11a='Sano'
    }else{
      this.d11a=this.d11a*1+1
      if(this.d11a==1){
        this.t11a='Sano'
      }
      else if(this.d11a==2){
        this.t11a='Extracción indicada'
      }
      else if(this.d11a==3){
        this.t11a='Pérdida por caries'
      }
      else if(this.d11a==4){
        this.t11a='Sellante necesario'
      }
      else if(this.d11a==5){
        this.t11a='Sellante realizado'
      }
      else if(this.d11a==6){
        this.t11a='Caries'
      }
      else if(this.d11a==7){
        this.t11a='Obturado'
      }
      else if(this.d11a==8){
        this.t11a='Endodoncia'
      }
      else if(this.d11a==9){
        this.t11a='Pérdida'
      }
      else if(this.d11a==10){
        this.t11a='Protesis total'
      }
      else if(this.d11a==11){
        this.t11a='Protesis fija'
      }
      else if(this.d11a==12){
        this.t11a='Protesis removible'
      }
    }
  }
  cambiar11b(){
    if(this.d11b>11){
      this.d11b=1
      this.t11b='Sano'
    }else{
      this.d11b=this.d11b*1+1
      if(this.d11b==1){
        this.t11b='Sano'
      }
      else if(this.d11b==2){
        this.t11b='Extracción indicada'
      }
      else if(this.d11b==3){
        this.t11b='Pérdida por caries'
      }
      else if(this.d11b==4){
        this.t11b='Sellante necesario'
      }
      else if(this.d11b==5){
        this.t11b='Sellante realizado'
      }
      else if(this.d11b==6){
        this.t11b='Caries'
      }
      else if(this.d11b==7){
        this.t11b='Obturado'
      }
      else if(this.d11b==8){
        this.t11b='Endodoncia'
      }
      else if(this.d11b==9){
        this.t11b='Pérdida'
      }
      else if(this.d11b==10){
        this.t11b='Protesis total'
      }
      else if(this.d11b==11){
        this.t11b='Protesis fija'
      }
      else if(this.d11b==12){
        this.t11b='Protesis removible'
      }
    }
  }
  cambiar11c(){
    if(this.d11c>11){
      this.d11c=1
      this.t11c='Sano'
    }else{
      this.d11c=this.d11c*1+1
      if(this.d11c==1){
        this.t11c='Sano'
      }
      else if(this.d11c==2){
        this.t11c='Extracción indicada'
      }
      else if(this.d11c==3){
        this.t11c='Pérdida por caries'
      }
      else if(this.d11c==4){
        this.t11c='Sellante necesario'
      }
      else if(this.d11c==5){
        this.t11c='Sellante realizado'
      }
      else if(this.d11c==6){
        this.t11c='Caries'
      }
      else if(this.d11c==7){
        this.t11c='Obturado'
      }
      else if(this.d11c==8){
        this.t11c='Endodoncia'
      }
      else if(this.d11c==9){
        this.t11c='Pérdida'
      }
      else if(this.d11c==10){
        this.t11c='Protesis total'
      }
      else if(this.d11c==11){
        this.t11c='Protesis fija'
      }
      else if(this.d11c==12){
        this.t11c='Protesis removible'
      }
    }
  }
  cambiar11d(){
    if(this.d11d>11){
      this.d11d=1
      this.t11d='Sano'
    }else{
      this.d11d=this.d11d*1+1
      if(this.d11d==1){
        this.t11d='Sano'
      }
      else if(this.d11d==2){
        this.t11d='Extracción indicada'
      }
      else if(this.d11d==3){
        this.t11d='Pérdida por caries'
      }
      else if(this.d11d==4){
        this.t11d='Sellante necesario'
      }
      else if(this.d11d==5){
        this.t11d='Sellante realizado'
      }
      else if(this.d11d==6){
        this.t11d='Caries'
      }
      else if(this.d11d==7){
        this.t11d='Obturado'
      }
      else if(this.d11d==8){
        this.t11d='Endodoncia'
      }
      else if(this.d11d==9){
        this.t11d='Pérdida'
      }
      else if(this.d11d==10){
        this.t11d='Protesis total'
      }
      else if(this.d11d==11){
        this.t11d='Protesis fija'
      }
      else if(this.d11d==12){
        this.t11d='Protesis removible'
      }
    }
  }
  cambiar11e(){
    if(this.d11e>11){
      this.d11e=1
      this.t11e='Sano'
    }else{
      this.d11e=this.d11e*1+1
      if(this.d11e==1){
        this.t11e='Sano'
      }
      else if(this.d11e==2){
        this.t11e='Extracción indicada'
      }
      else if(this.d11e==3){
        this.t11e='Pérdida por caries'
      }
      else if(this.d11e==4){
        this.t11e='Sellante necesario'
      }
      else if(this.d11e==5){
        this.t11e='Sellante realizado'
      }
      else if(this.d11e==6){
        this.t11e='Caries'
      }
      else if(this.d11e==7){
        this.t11e='Obturado'
      }
      else if(this.d11e==8){
        this.t11e='Endodoncia'
      }
      else if(this.d11e==9){
        this.t11e='Pérdida'
      }
      else if(this.d11e==10){
        this.t11e='Protesis total'
      }
      else if(this.d11e==11){
        this.t11e='Protesis fija'
      }
      else if(this.d11e==12){
        this.t11e='Protesis removible'
      }
    }
  }
  cambiar12a(){
    if(this.d12a>11){
      this.d12a=1
      this.t12a='Sano'
    }else{
      this.d12a=this.d12a*1+1
      if(this.d12a==1){
        this.t12a='Sano'
      }
      else if(this.d12a==2){
        this.t12a='Extracción indicada'
      }
      else if(this.d12a==3){
        this.t12a='Pérdida por caries'
      }
      else if(this.d12a==4){
        this.t12a='Sellante necesario'
      }
      else if(this.d12a==5){
        this.t12a='Sellante realizado'
      }
      else if(this.d12a==6){
        this.t12a='Caries'
      }
      else if(this.d12a==7){
        this.t12a='Obturado'
      }
      else if(this.d12a==8){
        this.t12a='Endodoncia'
      }
      else if(this.d12a==9){
        this.t12a='Pérdida'
      }
      else if(this.d12a==10){
        this.t12a='Protesis total'
      }
      else if(this.d12a==11){
        this.t12a='Protesis fija'
      }
      else if(this.d12a==12){
        this.t12a='Protesis removible'
      }
    }
  }
  cambiar12b(){
    if(this.d12b>11){
      this.d12b=1
      this.t12b='Sano'
    }else{
      this.d12b=this.d12b*1+1
      if(this.d12b==1){
        this.t12b='Sano'
      }
      else if(this.d12b==2){
        this.t12b='Extracción indicada'
      }
      else if(this.d12b==3){
        this.t12b='Pérdida por caries'
      }
      else if(this.d12b==4){
        this.t12b='Sellante necesario'
      }
      else if(this.d12b==5){
        this.t12b='Sellante realizado'
      }
      else if(this.d12b==6){
        this.t12b='Caries'
      }
      else if(this.d12b==7){
        this.t12b='Obturado'
      }
      else if(this.d12b==8){
        this.t12b='Endodoncia'
      }
      else if(this.d12b==9){
        this.t12b='Pérdida'
      }
      else if(this.d12b==10){
        this.t12b='Protesis total'
      }
      else if(this.d12b==11){
        this.t12b='Protesis fija'
      }
      else if(this.d12b==12){
        this.t12b='Protesis removible'
      }
    }
  }
  cambiar12c(){
    if(this.d12c>11){
      this.d12c=1
      this.t12c='Sano'
    }else{
      this.d12c=this.d12c*1+1
      if(this.d12c==1){
        this.t12c='Sano'
      }
      else if(this.d12c==2){
        this.t12c='Extracción indicada'
      }
      else if(this.d12c==3){
        this.t12c='Pérdida por caries'
      }
      else if(this.d12c==4){
        this.t12c='Sellante necesario'
      }
      else if(this.d12c==5){
        this.t12c='Sellante realizado'
      }
      else if(this.d12c==6){
        this.t12c='Caries'
      }
      else if(this.d12c==7){
        this.t12c='Obturado'
      }
      else if(this.d12c==8){
        this.t12c='Endodoncia'
      }
      else if(this.d12c==9){
        this.t12c='Pérdida'
      }
      else if(this.d12c==10){
        this.t12c='Protesis total'
      }
      else if(this.d12c==11){
        this.t12c='Protesis fija'
      }
      else if(this.d12c==12){
        this.t12c='Protesis removible'
      }
    }
  }
  cambiar12d(){
    if(this.d12d>11){
      this.d12d=1
      this.t12d='Sano'
    }else{
      this.d12d=this.d12d*1+1
      if(this.d12d==1){
        this.t12d='Sano'
      }
      else if(this.d12d==2){
        this.t12d='Extracción indicada'
      }
      else if(this.d12d==3){
        this.t12d='Pérdida por caries'
      }
      else if(this.d12d==4){
        this.t12d='Sellante necesario'
      }
      else if(this.d12d==5){
        this.t12d='Sellante realizado'
      }
      else if(this.d12d==6){
        this.t12d='Caries'
      }
      else if(this.d12d==7){
        this.t12d='Obturado'
      }
      else if(this.d12d==8){
        this.t12d='Endodoncia'
      }
      else if(this.d12d==9){
        this.t12d='Pérdida'
      }
      else if(this.d12d==10){
        this.t12d='Protesis total'
      }
      else if(this.d12d==11){
        this.t12d='Protesis fija'
      }
      else if(this.d12d==12){
        this.t12d='Protesis removible'
      }
    }
  }
  cambiar12e(){
    if(this.d12e>11){
      this.d12e=1
      this.t12e='Sano'
    }else{
      this.d12e=this.d12e*1+1
      if(this.d12e==1){
        this.t12e='Sano'
      }
      else if(this.d12e==2){
        this.t12e='Extracción indicada'
      }
      else if(this.d12e==3){
        this.t12e='Pérdida por caries'
      }
      else if(this.d12e==4){
        this.t12e='Sellante necesario'
      }
      else if(this.d12e==5){
        this.t12e='Sellante realizado'
      }
      else if(this.d12e==6){
        this.t12e='Caries'
      }
      else if(this.d12e==7){
        this.t12e='Obturado'
      }
      else if(this.d12e==8){
        this.t12e='Endodoncia'
      }
      else if(this.d12e==9){
        this.t12e='Pérdida'
      }
      else if(this.d12e==10){
        this.t12e='Protesis total'
      }
      else if(this.d12e==11){
        this.t12e='Protesis fija'
      }
      else if(this.d12e==12){
        this.t12e='Protesis removible'
      }
    }
  }
  cambiar13a(){
    if(this.d13a>11){
      this.d13a=1
      this.t13a='Sano'
    }else{
      this.d13a=this.d13a*1+1
      if(this.d13a==1){
        this.t13a='Sano'
      }
      else if(this.d13a==2){
        this.t13a='Extracción indicada'
      }
      else if(this.d13a==3){
        this.t13a='Pérdida por caries'
      }
      else if(this.d13a==4){
        this.t13a='Sellante necesario'
      }
      else if(this.d13a==5){
        this.t13a='Sellante realizado'
      }
      else if(this.d13a==6){
        this.t13a='Caries'
      }
      else if(this.d13a==7){
        this.t13a='Obturado'
      }
      else if(this.d13a==8){
        this.t13a='Endodoncia'
      }
      else if(this.d13a==9){
        this.t13a='Pérdida'
      }
      else if(this.d13a==10){
        this.t13a='Protesis total'
      }
      else if(this.d13a==11){
        this.t13a='Protesis fija'
      }
      else if(this.d13a==12){
        this.t13a='Protesis removible'
      }
    }
  }
  cambiar13b(){
    if(this.d13b>11){
      this.d13b=1
      this.t13b='Sano'
    }else{
      this.d13b=this.d13b*1+1
      if(this.d13b==1){
        this.t13b='Sano'
      }
      else if(this.d13b==2){
        this.t13b='Extracción indicada'
      }
      else if(this.d13b==3){
        this.t13b='Pérdida por caries'
      }
      else if(this.d13b==4){
        this.t13b='Sellante necesario'
      }
      else if(this.d13b==5){
        this.t13b='Sellante realizado'
      }
      else if(this.d13b==6){
        this.t13b='Caries'
      }
      else if(this.d13b==7){
        this.t13b='Obturado'
      }
      else if(this.d13b==8){
        this.t13b='Endodoncia'
      }
      else if(this.d13b==9){
        this.t13b='Pérdida'
      }
      else if(this.d13b==10){
        this.t13b='Protesis total'
      }
      else if(this.d13b==11){
        this.t13b='Protesis fija'
      }
      else if(this.d13b==12){
        this.t13b='Protesis removible'
      }
    }
  }
  cambiar13c(){
    if(this.d13c>11){
      this.d13c=1
      this.t13c='Sano'
    }else{
      this.d13c=this.d13c*1+1
      if(this.d13c==1){
        this.t13c='Sano'
      }
      else if(this.d13c==2){
        this.t13c='Extracción indicada'
      }
      else if(this.d13c==3){
        this.t13c='Pérdida por caries'
      }
      else if(this.d13c==4){
        this.t13c='Sellante necesario'
      }
      else if(this.d13c==5){
        this.t13c='Sellante realizado'
      }
      else if(this.d13c==6){
        this.t13c='Caries'
      }
      else if(this.d13c==7){
        this.t13c='Obturado'
      }
      else if(this.d13c==8){
        this.t13c='Endodoncia'
      }
      else if(this.d13c==9){
        this.t13c='Pérdida'
      }
      else if(this.d13c==10){
        this.t13c='Protesis total'
      }
      else if(this.d13c==11){
        this.t13c='Protesis fija'
      }
      else if(this.d13c==12){
        this.t13c='Protesis removible'
      }
    }
  }
  cambiar13d(){
    if(this.d13d>11){
      this.d13d=1
      this.t13d='Sano'
    }else{
      this.d13d=this.d13d*1+1
      if(this.d13d==1){
        this.t13d='Sano'
      }
      else if(this.d13d==2){
        this.t13d='Extracción indicada'
      }
      else if(this.d13d==3){
        this.t13d='Pérdida por caries'
      }
      else if(this.d13d==4){
        this.t13d='Sellante necesario'
      }
      else if(this.d13d==5){
        this.t13d='Sellante realizado'
      }
      else if(this.d13d==6){
        this.t13d='Caries'
      }
      else if(this.d13d==7){
        this.t13d='Obturado'
      }
      else if(this.d13d==8){
        this.t13d='Endodoncia'
      }
      else if(this.d13d==9){
        this.t13d='Pérdida'
      }
      else if(this.d13d==10){
        this.t13d='Protesis total'
      }
      else if(this.d13d==11){
        this.t13d='Protesis fija'
      }
      else if(this.d13d==12){
        this.t13d='Protesis removible'
      }
    }
  }
  cambiar13e(){
    if(this.d13e>11){
      this.d13e=1
      this.t13e='Sano'
    }else{
      this.d13e=this.d13e*1+1
      if(this.d13e==1){
        this.t13e='Sano'
      }
      else if(this.d13e==2){
        this.t13e='Extracción indicada'
      }
      else if(this.d13e==3){
        this.t13e='Pérdida por caries'
      }
      else if(this.d13e==4){
        this.t13e='Sellante necesario'
      }
      else if(this.d13e==5){
        this.t13e='Sellante realizado'
      }
      else if(this.d13e==6){
        this.t13e='Caries'
      }
      else if(this.d13e==7){
        this.t13e='Obturado'
      }
      else if(this.d13e==8){
        this.t13e='Endodoncia'
      }
      else if(this.d13e==9){
        this.t13e='Pérdida'
      }
      else if(this.d13e==10){
        this.t13e='Protesis total'
      }
      else if(this.d13e==11){
        this.t13e='Protesis fija'
      }
      else if(this.d13e==12){
        this.t13e='Protesis removible'
      }
    }
  }
  cambiar14a(){
    if(this.d14a>11){
      this.d14a=1
      this.t14a='Sano'
    }else{
      this.d14a=this.d14a*1+1
      if(this.d14a==1){
        this.t14a='Sano'
      }
      else if(this.d14a==2){
        this.t14a='Extracción indicada'
      }
      else if(this.d14a==3){
        this.t14a='Pérdida por caries'
      }
      else if(this.d14a==4){
        this.t14a='Sellante necesario'
      }
      else if(this.d14a==5){
        this.t14a='Sellante realizado'
      }
      else if(this.d14a==6){
        this.t14a='Caries'
      }
      else if(this.d14a==7){
        this.t14a='Obturado'
      }
      else if(this.d14a==8){
        this.t14a='Endodoncia'
      }
      else if(this.d14a==9){
        this.t14a='Pérdida'
      }
      else if(this.d14a==10){
        this.t14a='Protesis total'
      }
      else if(this.d14a==11){
        this.t14a='Protesis fija'
      }
      else if(this.d14a==12){
        this.t14a='Protesis removible'
      }
    }
  }
  cambiar14b(){
    if(this.d14b>11){
      this.d14b=1
      this.t14b='Sano'
    }else{
      this.d14b=this.d14b*1+1
      if(this.d14b==1){
        this.t14b='Sano'
      }
      else if(this.d14b==2){
        this.t14b='Extracción indicada'
      }
      else if(this.d14b==3){
        this.t14b='Pérdida por caries'
      }
      else if(this.d14b==4){
        this.t14b='Sellante necesario'
      }
      else if(this.d14b==5){
        this.t14b='Sellante realizado'
      }
      else if(this.d14b==6){
        this.t14b='Caries'
      }
      else if(this.d14b==7){
        this.t14b='Obturado'
      }
      else if(this.d14b==8){
        this.t14b='Endodoncia'
      }
      else if(this.d14b==9){
        this.t14b='Pérdida'
      }
      else if(this.d14b==10){
        this.t14b='Protesis total'
      }
      else if(this.d14b==11){
        this.t14b='Protesis fija'
      }
      else if(this.d14b==12){
        this.t14b='Protesis removible'
      }
    }
  }
  cambiar14c(){
    if(this.d14c>11){
      this.d14c=1
      this.t14c='Sano'
    }else{
      this.d14c=this.d14c*1+1
      if(this.d14c==1){
        this.t14c='Sano'
      }
      else if(this.d14c==2){
        this.t14c='Extracción indicada'
      }
      else if(this.d14c==3){
        this.t14c='Pérdida por caries'
      }
      else if(this.d14c==4){
        this.t14c='Sellante necesario'
      }
      else if(this.d14c==5){
        this.t14c='Sellante realizado'
      }
      else if(this.d14c==6){
        this.t14c='Caries'
      }
      else if(this.d14c==7){
        this.t14c='Obturado'
      }
      else if(this.d14c==8){
        this.t14c='Endodoncia'
      }
      else if(this.d14c==9){
        this.t14c='Pérdida'
      }
      else if(this.d14c==10){
        this.t14c='Protesis total'
      }
      else if(this.d14c==11){
        this.t14c='Protesis fija'
      }
      else if(this.d14c==12){
        this.t14c='Protesis removible'
      }
    }
  }
  cambiar14d(){
    if(this.d14d>11){
      this.d14d=1
      this.t14d='Sano'
    }else{
      this.d14d=this.d14d*1+1
      if(this.d14d==1){
        this.t14d='Sano'
      }
      else if(this.d14d==2){
        this.t14d='Extracción indicada'
      }
      else if(this.d14d==3){
        this.t14d='Pérdida por caries'
      }
      else if(this.d14d==4){
        this.t14d='Sellante necesario'
      }
      else if(this.d14d==5){
        this.t14d='Sellante realizado'
      }
      else if(this.d14d==6){
        this.t14d='Caries'
      }
      else if(this.d14d==7){
        this.t14d='Obturado'
      }
      else if(this.d14d==8){
        this.t14d='Endodoncia'
      }
      else if(this.d14d==9){
        this.t14d='Pérdida'
      }
      else if(this.d14d==10){
        this.t14d='Protesis total'
      }
      else if(this.d14d==11){
        this.t14d='Protesis fija'
      }
      else if(this.d14d==12){
        this.t14d='Protesis removible'
      }
    }
  }
  cambiar14e(){
    if(this.d14e>11){
      this.d14e=1
      this.t14e='Sano'
    }else{
      this.d14e=this.d14e*1+1
      if(this.d14e==1){
        this.t14e='Sano'
      }
      else if(this.d14e==2){
        this.t14e='Extracción indicada'
      }
      else if(this.d14e==3){
        this.t14e='Pérdida por caries'
      }
      else if(this.d14e==4){
        this.t14e='Sellante necesario'
      }
      else if(this.d14e==5){
        this.t14e='Sellante realizado'
      }
      else if(this.d14e==6){
        this.t14e='Caries'
      }
      else if(this.d14e==7){
        this.t14e='Obturado'
      }
      else if(this.d14e==8){
        this.t14e='Endodoncia'
      }
      else if(this.d14e==9){
        this.t14e='Pérdida'
      }
      else if(this.d14e==10){
        this.t14e='Protesis total'
      }
      else if(this.d14e==11){
        this.t14e='Protesis fija'
      }
      else if(this.d14e==12){
        this.t14e='Protesis removible'
      }
    }
  }
  cambiar15a(){
    if(this.d15a>11){
      this.d15a=1
      this.t15a='Sano'
    }else{
      this.d15a=this.d15a*1+1
      if(this.d15a==1){
        this.t15a='Sano'
      }
      else if(this.d15a==2){
        this.t15a='Extracción indicada'
      }
      else if(this.d15a==3){
        this.t15a='Pérdida por caries'
      }
      else if(this.d15a==4){
        this.t15a='Sellante necesario'
      }
      else if(this.d15a==5){
        this.t15a='Sellante realizado'
      }
      else if(this.d15a==6){
        this.t15a='Caries'
      }
      else if(this.d15a==7){
        this.t15a='Obturado'
      }
      else if(this.d15a==8){
        this.t15a='Endodoncia'
      }
      else if(this.d15a==9){
        this.t15a='Pérdida'
      }
      else if(this.d15a==10){
        this.t15a='Protesis total'
      }
      else if(this.d15a==11){
        this.t15a='Protesis fija'
      }
      else if(this.d15a==12){
        this.t15a='Protesis removible'
      }
    }
  }
  cambiar15b(){
    if(this.d15b>11){
      this.d15b=1
      this.t15b='Sano'
    }else{
      this.d15b=this.d15b*1+1
      if(this.d15b==1){
        this.t15b='Sano'
      }
      else if(this.d15b==2){
        this.t15b='Extracción indicada'
      }
      else if(this.d15b==3){
        this.t15b='Pérdida por caries'
      }
      else if(this.d15b==4){
        this.t15b='Sellante necesario'
      }
      else if(this.d15b==5){
        this.t15b='Sellante realizado'
      }
      else if(this.d15b==6){
        this.t15b='Caries'
      }
      else if(this.d15b==7){
        this.t15b='Obturado'
      }
      else if(this.d15b==8){
        this.t15b='Endodoncia'
      }
      else if(this.d15b==9){
        this.t15b='Pérdida'
      }
      else if(this.d15b==10){
        this.t15b='Protesis total'
      }
      else if(this.d15b==11){
        this.t15b='Protesis fija'
      }
      else if(this.d15b==12){
        this.t15b='Protesis removible'
      }
    }
  }
  cambiar15c(){
    if(this.d15c>11){
      this.d15c=1
      this.t15c='Sano'
    }else{
      this.d15c=this.d15c*1+1
      if(this.d15c==1){
        this.t15c='Sano'
      }
      else if(this.d15c==2){
        this.t15c='Extracción indicada'
      }
      else if(this.d15c==3){
        this.t15c='Pérdida por caries'
      }
      else if(this.d15c==4){
        this.t15c='Sellante necesario'
      }
      else if(this.d15c==5){
        this.t15c='Sellante realizado'
      }
      else if(this.d15c==6){
        this.t15c='Caries'
      }
      else if(this.d15c==7){
        this.t15c='Obturado'
      }
      else if(this.d15c==8){
        this.t15c='Endodoncia'
      }
      else if(this.d15c==9){
        this.t15c='Pérdida'
      }
      else if(this.d15c==10){
        this.t15c='Protesis total'
      }
      else if(this.d15c==11){
        this.t15c='Protesis fija'
      }
      else if(this.d15c==12){
        this.t15c='Protesis removible'
      }
    }
  }
  cambiar15d(){
    if(this.d15d>11){
      this.d15d=1
      this.t15d='Sano'
    }else{
      this.d15d=this.d15d*1+1
      if(this.d15d==1){
        this.t15d='Sano'
      }
      else if(this.d15d==2){
        this.t15d='Extracción indicada'
      }
      else if(this.d15d==3){
        this.t15d='Pérdida por caries'
      }
      else if(this.d15d==4){
        this.t15d='Sellante necesario'
      }
      else if(this.d15d==5){
        this.t15d='Sellante realizado'
      }
      else if(this.d15d==6){
        this.t15d='Caries'
      }
      else if(this.d15d==7){
        this.t15d='Obturado'
      }
      else if(this.d15d==8){
        this.t15d='Endodoncia'
      }
      else if(this.d15d==9){
        this.t15d='Pérdida'
      }
      else if(this.d15d==10){
        this.t15d='Protesis total'
      }
      else if(this.d15d==11){
        this.t15d='Protesis fija'
      }
      else if(this.d15d==12){
        this.t15d='Protesis removible'
      }
    }
  }
  cambiar15e(){
    if(this.d15e>11){
      this.d15e=1
      this.t15e='Sano'
    }else{
      this.d15e=this.d15e*1+1
      if(this.d15e==1){
        this.t15e='Sano'
      }
      else if(this.d15e==2){
        this.t15e='Extracción indicada'
      }
      else if(this.d15e==3){
        this.t15e='Pérdida por caries'
      }
      else if(this.d15e==4){
        this.t15e='Sellante necesario'
      }
      else if(this.d15e==5){
        this.t15e='Sellante realizado'
      }
      else if(this.d15e==6){
        this.t15e='Caries'
      }
      else if(this.d15e==7){
        this.t15e='Obturado'
      }
      else if(this.d15e==8){
        this.t15e='Endodoncia'
      }
      else if(this.d15e==9){
        this.t15e='Pérdida'
      }
      else if(this.d15e==10){
        this.t15e='Protesis total'
      }
      else if(this.d15e==11){
        this.t15e='Protesis fija'
      }
      else if(this.d15e==12){
        this.t15e='Protesis removible'
      }
    }
  }
  cambiar16a(){
    if(this.d16a>11){
      this.d16a=1
      this.t16a='Sano'
    }else{
      this.d16a=this.d16a*1+1
      if(this.d16a==1){
        this.t16a='Sano'
      }
      else if(this.d16a==2){
        this.t16a='Extracción indicada'
      }
      else if(this.d16a==3){
        this.t16a='Pérdida por caries'
      }
      else if(this.d16a==4){
        this.t16a='Sellante necesario'
      }
      else if(this.d16a==5){
        this.t16a='Sellante realizado'
      }
      else if(this.d16a==6){
        this.t16a='Caries'
      }
      else if(this.d16a==7){
        this.t16a='Obturado'
      }
      else if(this.d16a==8){
        this.t16a='Endodoncia'
      }
      else if(this.d16a==9){
        this.t16a='Pérdida'
      }
      else if(this.d16a==10){
        this.t16a='Protesis total'
      }
      else if(this.d16a==11){
        this.t16a='Protesis fija'
      }
      else if(this.d16a==12){
        this.t16a='Protesis removible'
      }
    }
  }
  cambiar16b(){
    if(this.d16b>11){
      this.d16b=1
      this.t16b='Sano'
    }else{
      this.d16b=this.d16b*1+1
      if(this.d16b==1){
        this.t16b='Sano'
      }
      else if(this.d16b==2){
        this.t16b='Extracción indicada'
      }
      else if(this.d16b==3){
        this.t16b='Pérdida por caries'
      }
      else if(this.d16b==4){
        this.t16b='Sellante necesario'
      }
      else if(this.d16b==5){
        this.t16b='Sellante realizado'
      }
      else if(this.d16b==6){
        this.t16b='Caries'
      }
      else if(this.d16b==7){
        this.t16b='Obturado'
      }
      else if(this.d16b==8){
        this.t16b='Endodoncia'
      }
      else if(this.d16b==9){
        this.t16b='Pérdida'
      }
      else if(this.d16b==10){
        this.t16b='Protesis total'
      }
      else if(this.d16b==11){
        this.t16b='Protesis fija'
      }
      else if(this.d16b==12){
        this.t16b='Protesis removible'
      }
    }
  }
  cambiar16c(){
    if(this.d16c>11){
      this.d16c=1
      this.t16c='Sano'
    }else{
      this.d16c=this.d16c*1+1
      if(this.d16c==1){
        this.t16c='Sano'
      }
      else if(this.d16c==2){
        this.t16c='Extracción indicada'
      }
      else if(this.d16c==3){
        this.t16c='Pérdida por caries'
      }
      else if(this.d16c==4){
        this.t16c='Sellante necesario'
      }
      else if(this.d16c==5){
        this.t16c='Sellante realizado'
      }
      else if(this.d16c==6){
        this.t16c='Caries'
      }
      else if(this.d16c==7){
        this.t16c='Obturado'
      }
      else if(this.d16c==8){
        this.t16c='Endodoncia'
      }
      else if(this.d16c==9){
        this.t16c='Pérdida'
      }
      else if(this.d16c==10){
        this.t16c='Protesis total'
      }
      else if(this.d16c==11){
        this.t16c='Protesis fija'
      }
      else if(this.d16c==12){
        this.t16c='Protesis removible'
      }
    }
  }
  cambiar16d(){
    if(this.d16d>11){
      this.d16d=1
      this.t16d='Sano'
    }else{
      this.d16d=this.d16d*1+1
      if(this.d16d==1){
        this.t16d='Sano'
      }
      else if(this.d16d==2){
        this.t16d='Extracción indicada'
      }
      else if(this.d16d==3){
        this.t16d='Pérdida por caries'
      }
      else if(this.d16d==4){
        this.t16d='Sellante necesario'
      }
      else if(this.d16d==5){
        this.t16d='Sellante realizado'
      }
      else if(this.d16d==6){
        this.t16d='Caries'
      }
      else if(this.d16d==7){
        this.t16d='Obturado'
      }
      else if(this.d16d==8){
        this.t16d='Endodoncia'
      }
      else if(this.d16d==9){
        this.t16d='Pérdida'
      }
      else if(this.d16d==10){
        this.t16d='Protesis total'
      }
      else if(this.d16d==11){
        this.t16d='Protesis fija'
      }
      else if(this.d16d==12){
        this.t16d='Protesis removible'
      }
    }
  }
  cambiar16e(){
    if(this.d16e>11){
      this.d16e=1
      this.t16e='Sano'
    }else{
      this.d16e=this.d16e*1+1
      if(this.d16e==1){
        this.t16e='Sano'
      }
      else if(this.d16e==2){
        this.t16e='Extracción indicada'
      }
      else if(this.d16e==3){
        this.t16e='Pérdida por caries'
      }
      else if(this.d16e==4){
        this.t16e='Sellante necesario'
      }
      else if(this.d16e==5){
        this.t16e='Sellante realizado'
      }
      else if(this.d16e==6){
        this.t16e='Caries'
      }
      else if(this.d16e==7){
        this.t16e='Obturado'
      }
      else if(this.d16e==8){
        this.t16e='Endodoncia'
      }
      else if(this.d16e==9){
        this.t16e='Pérdida'
      }
      else if(this.d16e==10){
        this.t16e='Protesis total'
      }
      else if(this.d16e==11){
        this.t16e='Protesis fija'
      }
      else if(this.d16e==12){
        this.t16e='Protesis removible'
      }
    }
  }
  cambiar17a(){
    if(this.d17a>11){
      this.d17a=1
      this.t17a='Sano'
    }else{
      this.d17a=this.d17a*1+1
      if(this.d17a==1){
        this.t17a='Sano'
      }
      else if(this.d17a==2){
        this.t17a='Extracción indicada'
      }
      else if(this.d17a==3){
        this.t17a='Pérdida por caries'
      }
      else if(this.d17a==4){
        this.t17a='Sellante necesario'
      }
      else if(this.d17a==5){
        this.t17a='Sellante realizado'
      }
      else if(this.d17a==6){
        this.t17a='Caries'
      }
      else if(this.d17a==7){
        this.t17a='Obturado'
      }
      else if(this.d17a==8){
        this.t17a='Endodoncia'
      }
      else if(this.d17a==9){
        this.t17a='Pérdida'
      }
      else if(this.d17a==10){
        this.t17a='Protesis total'
      }
      else if(this.d17a==11){
        this.t17a='Protesis fija'
      }
      else if(this.d17a==12){
        this.t17a='Protesis removible'
      }
    }
  }
  cambiar17b(){
    if(this.d17b>11){
      this.d17b=1
      this.t17b='Sano'
    }else{
      this.d17b=this.d17b*1+1
      if(this.d17b==1){
        this.t17b='Sano'
      }
      else if(this.d17b==2){
        this.t17b='Extracción indicada'
      }
      else if(this.d17b==3){
        this.t17b='Pérdida por caries'
      }
      else if(this.d17b==4){
        this.t17b='Sellante necesario'
      }
      else if(this.d17b==5){
        this.t17b='Sellante realizado'
      }
      else if(this.d17b==6){
        this.t17b='Caries'
      }
      else if(this.d17b==7){
        this.t17b='Obturado'
      }
      else if(this.d17b==8){
        this.t17b='Endodoncia'
      }
      else if(this.d17b==9){
        this.t17b='Pérdida'
      }
      else if(this.d17b==10){
        this.t17b='Protesis total'
      }
      else if(this.d17b==11){
        this.t17b='Protesis fija'
      }
      else if(this.d17b==12){
        this.t17b='Protesis removible'
      }
    }
  }
  cambiar17c(){
    if(this.d17c>11){
      this.d17c=1
      this.t17c='Sano'
    }else{
      this.d17c=this.d17c*1+1
      if(this.d17c==1){
        this.t17c='Sano'
      }
      else if(this.d17c==2){
        this.t17c='Extracción indicada'
      }
      else if(this.d17c==3){
        this.t17c='Pérdida por caries'
      }
      else if(this.d17c==4){
        this.t17c='Sellante necesario'
      }
      else if(this.d17c==5){
        this.t17c='Sellante realizado'
      }
      else if(this.d17c==6){
        this.t17c='Caries'
      }
      else if(this.d17c==7){
        this.t17c='Obturado'
      }
      else if(this.d17c==8){
        this.t17c='Endodoncia'
      }
      else if(this.d17c==9){
        this.t17c='Pérdida'
      }
      else if(this.d17c==10){
        this.t17c='Protesis total'
      }
      else if(this.d17c==11){
        this.t17c='Protesis fija'
      }
      else if(this.d17c==12){
        this.t17c='Protesis removible'
      }
    }
  }
  cambiar17d(){
    if(this.d17d>11){
      this.d17d=1
      this.t17d='Sano'
    }else{
      this.d17d=this.d17d*1+1
      if(this.d17d==1){
        this.t17d='Sano'
      }
      else if(this.d17d==2){
        this.t17d='Extracción indicada'
      }
      else if(this.d17d==3){
        this.t17d='Pérdida por caries'
      }
      else if(this.d17d==4){
        this.t17d='Sellante necesario'
      }
      else if(this.d17d==5){
        this.t17d='Sellante realizado'
      }
      else if(this.d17d==6){
        this.t17d='Caries'
      }
      else if(this.d17d==7){
        this.t17d='Obturado'
      }
      else if(this.d17d==8){
        this.t17d='Endodoncia'
      }
      else if(this.d17d==9){
        this.t17d='Pérdida'
      }
      else if(this.d17d==10){
        this.t17d='Protesis total'
      }
      else if(this.d17d==11){
        this.t17d='Protesis fija'
      }
      else if(this.d17d==12){
        this.t17d='Protesis removible'
      }
    }
  }
  cambiar17e(){
    if(this.d17e>11){
      this.d17e=1
      this.t17e='Sano'
    }else{
      this.d17e=this.d17e*1+1
      if(this.d17e==1){
        this.t17e='Sano'
      }
      else if(this.d17e==2){
        this.t17e='Extracción indicada'
      }
      else if(this.d17e==3){
        this.t17e='Pérdida por caries'
      }
      else if(this.d17e==4){
        this.t17e='Sellante necesario'
      }
      else if(this.d17e==5){
        this.t17e='Sellante realizado'
      }
      else if(this.d17e==6){
        this.t17e='Caries'
      }
      else if(this.d17e==7){
        this.t17e='Obturado'
      }
      else if(this.d17e==8){
        this.t17e='Endodoncia'
      }
      else if(this.d17e==9){
        this.t17e='Pérdida'
      }
      else if(this.d17e==10){
        this.t17e='Protesis total'
      }
      else if(this.d17e==11){
        this.t17e='Protesis fija'
      }
      else if(this.d17e==12){
        this.t17e='Protesis removible'
      }
    }
  }
  cambiar18a(){
    if(this.d18a>11){
      this.d18a=1
      this.t18a='Sano'
    }else{
      this.d18a=this.d18a*1+1
      if(this.d18a==1){
        this.t18a='Sano'
      }
      else if(this.d18a==2){
        this.t18a='Extracción indicada'
      }
      else if(this.d18a==3){
        this.t18a='Pérdida por caries'
      }
      else if(this.d18a==4){
        this.t18a='Sellante necesario'
      }
      else if(this.d18a==5){
        this.t18a='Sellante realizado'
      }
      else if(this.d18a==6){
        this.t18a='Caries'
      }
      else if(this.d18a==7){
        this.t18a='Obturado'
      }
      else if(this.d18a==8){
        this.t18a='Endodoncia'
      }
      else if(this.d18a==9){
        this.t18a='Pérdida'
      }
      else if(this.d18a==10){
        this.t18a='Protesis total'
      }
      else if(this.d18a==11){
        this.t18a='Protesis fija'
      }
      else if(this.d18a==12){
        this.t18a='Protesis removible'
      }
    }
  }
  cambiar18b(){
    if(this.d18b>11){
      this.d18b=1
      this.t18b='Sano'
    }else{
      this.d18b=this.d18b*1+1
      if(this.d18b==1){
        this.t18b='Sano'
      }
      else if(this.d18b==2){
        this.t18b='Extracción indicada'
      }
      else if(this.d18b==3){
        this.t18b='Pérdida por caries'
      }
      else if(this.d18b==4){
        this.t18b='Sellante necesario'
      }
      else if(this.d18b==5){
        this.t18b='Sellante realizado'
      }
      else if(this.d18b==6){
        this.t18b='Caries'
      }
      else if(this.d18b==7){
        this.t18b='Obturado'
      }
      else if(this.d18b==8){
        this.t18b='Endodoncia'
      }
      else if(this.d18b==9){
        this.t18b='Pérdida'
      }
      else if(this.d18b==10){
        this.t18b='Protesis total'
      }
      else if(this.d18b==11){
        this.t18b='Protesis fija'
      }
      else if(this.d18b==12){
        this.t18b='Protesis removible'
      }
    }
  }
  cambiar18c(){
    if(this.d18c>11){
      this.d18c=1
      this.t18c='Sano'
    }else{
      this.d18c=this.d18c*1+1
      if(this.d18c==1){
        this.t18c='Sano'
      }
      else if(this.d18c==2){
        this.t18c='Extracción indicada'
      }
      else if(this.d18c==3){
        this.t18c='Pérdida por caries'
      }
      else if(this.d18c==4){
        this.t18c='Sellante necesario'
      }
      else if(this.d18c==5){
        this.t18c='Sellante realizado'
      }
      else if(this.d18c==6){
        this.t18c='Caries'
      }
      else if(this.d18c==7){
        this.t18c='Obturado'
      }
      else if(this.d18c==8){
        this.t18c='Endodoncia'
      }
      else if(this.d18c==9){
        this.t18c='Pérdida'
      }
      else if(this.d18c==10){
        this.t18c='Protesis total'
      }
      else if(this.d18c==11){
        this.t18c='Protesis fija'
      }
      else if(this.d18c==12){
        this.t18c='Protesis removible'
      }
    }
  }
  cambiar18d(){
    if(this.d18d>11){
      this.d18d=1
      this.t18d='Sano'
    }else{
      this.d18d=this.d18d*1+1
      if(this.d18d==1){
        this.t18d='Sano'
      }
      else if(this.d18d==2){
        this.t18d='Extracción indicada'
      }
      else if(this.d18d==3){
        this.t18d='Pérdida por caries'
      }
      else if(this.d18d==4){
        this.t18d='Sellante necesario'
      }
      else if(this.d18d==5){
        this.t18d='Sellante realizado'
      }
      else if(this.d18d==6){
        this.t18d='Caries'
      }
      else if(this.d18d==7){
        this.t18d='Obturado'
      }
      else if(this.d18d==8){
        this.t18d='Endodoncia'
      }
      else if(this.d18d==9){
        this.t18d='Pérdida'
      }
      else if(this.d18d==10){
        this.t18d='Protesis total'
      }
      else if(this.d18d==11){
        this.t18d='Protesis fija'
      }
      else if(this.d18d==12){
        this.t18d='Protesis removible'
      }
    }
  }
  cambiar18e(){
    if(this.d18e>11){
      this.d18e=1
      this.t18e='Sano'
    }else{
      this.d18e=this.d18e*1+1
      if(this.d18e==1){
        this.t18e='Sano'
      }
      else if(this.d18e==2){
        this.t18e='Extracción indicada'
      }
      else if(this.d18e==3){
        this.t18e='Pérdida por caries'
      }
      else if(this.d18e==4){
        this.t18e='Sellante necesario'
      }
      else if(this.d18e==5){
        this.t18e='Sellante realizado'
      }
      else if(this.d18e==6){
        this.t18e='Caries'
      }
      else if(this.d18e==7){
        this.t18e='Obturado'
      }
      else if(this.d18e==8){
        this.t18e='Endodoncia'
      }
      else if(this.d18e==9){
        this.t18e='Pérdida'
      }
      else if(this.d18e==10){
        this.t18e='Protesis total'
      }
      else if(this.d18e==11){
        this.t18e='Protesis fija'
      }
      else if(this.d18e==12){
        this.t18e='Protesis removible'
      }
    }
  }
  //cuadrante 2
  cambiar21a(){
    if(this.d21a>11){
      this.d21a=1
      this.t21a='Sano'
    }else{
      this.d21a=this.d21a*1+1
      if(this.d21a==1){
        this.t21a='Sano'
      }
      else if(this.d21a==2){
        this.t21a='Extracción indicada'
      }
      else if(this.d21a==3){
        this.t21a='Pérdida por caries'
      }
      else if(this.d21a==4){
        this.t21a='Sellante necesario'
      }
      else if(this.d21a==5){
        this.t21a='Sellante realizado'
      }
      else if(this.d21a==6){
        this.t21a='Caries'
      }
      else if(this.d21a==7){
        this.t21a='Obturado'
      }
      else if(this.d21a==8){
        this.t21a='Endodoncia'
      }
      else if(this.d21a==9){
        this.t21a='Pérdida'
      }
      else if(this.d21a==10){
        this.t21a='Protesis total'
      }
      else if(this.d21a==11){
        this.t21a='Protesis fija'
      }
      else if(this.d21a==12){
        this.t21a='Protesis removible'
      }
    }
  }
  cambiar21b(){
    if(this.d21b>11){
      this.d21b=1
      this.t21b='Sano'
    }else{
      this.d21b=this.d21b*1+1
      if(this.d21b==1){
        this.t21b='Sano'
      }
      else if(this.d21b==2){
        this.t21b='Extracción indicada'
      }
      else if(this.d21b==3){
        this.t21b='Pérdida por caries'
      }
      else if(this.d21b==4){
        this.t21b='Sellante necesario'
      }
      else if(this.d21b==5){
        this.t21b='Sellante realizado'
      }
      else if(this.d21b==6){
        this.t21b='Caries'
      }
      else if(this.d21b==7){
        this.t21b='Obturado'
      }
      else if(this.d21b==8){
        this.t21b='Endodoncia'
      }
      else if(this.d21b==9){
        this.t21b='Pérdida'
      }
      else if(this.d21b==10){
        this.t21b='Protesis total'
      }
      else if(this.d21b==11){
        this.t21b='Protesis fija'
      }
      else if(this.d21b==12){
        this.t21b='Protesis removible'
      }
    }
  }
  cambiar21c(){
    if(this.d21c>11){
      this.d21c=1
      this.t21c='Sano'
    }else{
      this.d21c=this.d21c*1+1
      if(this.d21c==1){
        this.t21c='Sano'
      }
      else if(this.d21c==2){
        this.t21c='Extracción indicada'
      }
      else if(this.d21c==3){
        this.t21c='Pérdida por caries'
      }
      else if(this.d21c==4){
        this.t21c='Sellante necesario'
      }
      else if(this.d21c==5){
        this.t21c='Sellante realizado'
      }
      else if(this.d21c==6){
        this.t21c='Caries'
      }
      else if(this.d21c==7){
        this.t21c='Obturado'
      }
      else if(this.d21c==8){
        this.t21c='Endodoncia'
      }
      else if(this.d21c==9){
        this.t21c='Pérdida'
      }
      else if(this.d21c==10){
        this.t21c='Protesis total'
      }
      else if(this.d21c==11){
        this.t21c='Protesis fija'
      }
      else if(this.d21c==12){
        this.t21c='Protesis removible'
      }
    }
  }
  cambiar21d(){
    if(this.d21d>11){
      this.d21d=1
      this.t21d='Sano'
    }else{
      this.d21d=this.d21d*1+1
      if(this.d21d==1){
        this.t21d='Sano'
      }
      else if(this.d21d==2){
        this.t21d='Extracción indicada'
      }
      else if(this.d21d==3){
        this.t21d='Pérdida por caries'
      }
      else if(this.d21d==4){
        this.t21d='Sellante necesario'
      }
      else if(this.d21d==5){
        this.t21d='Sellante realizado'
      }
      else if(this.d21d==6){
        this.t21d='Caries'
      }
      else if(this.d21d==7){
        this.t21d='Obturado'
      }
      else if(this.d21d==8){
        this.t21d='Endodoncia'
      }
      else if(this.d21d==9){
        this.t21d='Pérdida'
      }
      else if(this.d21d==10){
        this.t21d='Protesis total'
      }
      else if(this.d21d==11){
        this.t21d='Protesis fija'
      }
      else if(this.d21d==12){
        this.t21d='Protesis removible'
      }
    }
  }
  cambiar21e(){
    if(this.d21e>11){
      this.d21e=1
      this.t21e='Sano'
    }else{
      this.d21e=this.d21e*1+1
      if(this.d21e==1){
        this.t21e='Sano'
      }
      else if(this.d21e==2){
        this.t21e='Extracción indicada'
      }
      else if(this.d21e==3){
        this.t21e='Pérdida por caries'
      }
      else if(this.d21e==4){
        this.t21e='Sellante necesario'
      }
      else if(this.d21e==5){
        this.t21e='Sellante realizado'
      }
      else if(this.d21e==6){
        this.t21e='Caries'
      }
      else if(this.d21e==7){
        this.t21e='Obturado'
      }
      else if(this.d21e==8){
        this.t21e='Endodoncia'
      }
      else if(this.d21e==9){
        this.t21e='Pérdida'
      }
      else if(this.d21e==10){
        this.t21e='Protesis total'
      }
      else if(this.d21e==11){
        this.t21e='Protesis fija'
      }
      else if(this.d21e==12){
        this.t21e='Protesis removible'
      }
    }
  }
  cambiar22a(){
    if(this.d22a>11){
      this.d22a=1
      this.t22a='Sano'
    }else{
      this.d22a=this.d22a*1+1
      if(this.d22a==1){
        this.t22a='Sano'
      }
      else if(this.d22a==2){
        this.t22a='Extracción indicada'
      }
      else if(this.d22a==3){
        this.t22a='Pérdida por caries'
      }
      else if(this.d22a==4){
        this.t22a='Sellante necesario'
      }
      else if(this.d22a==5){
        this.t22a='Sellante realizado'
      }
      else if(this.d22a==6){
        this.t22a='Caries'
      }
      else if(this.d22a==7){
        this.t22a='Obturado'
      }
      else if(this.d22a==8){
        this.t22a='Endodoncia'
      }
      else if(this.d22a==9){
        this.t22a='Pérdida'
      }
      else if(this.d22a==10){
        this.t22a='Protesis total'
      }
      else if(this.d22a==11){
        this.t22a='Protesis fija'
      }
      else if(this.d22a==12){
        this.t22a='Protesis removible'
      }
    }
  }
  cambiar22b(){
    if(this.d22b>11){
      this.d22b=1
      this.t22b='Sano'
    }else{
      this.d22b=this.d22b*1+1
      if(this.d22b==1){
        this.t22b='Sano'
      }
      else if(this.d22b==2){
        this.t22b='Extracción indicada'
      }
      else if(this.d22b==3){
        this.t22b='Pérdida por caries'
      }
      else if(this.d22b==4){
        this.t22b='Sellante necesario'
      }
      else if(this.d22b==5){
        this.t22b='Sellante realizado'
      }
      else if(this.d22b==6){
        this.t22b='Caries'
      }
      else if(this.d22b==7){
        this.t22b='Obturado'
      }
      else if(this.d22b==8){
        this.t22b='Endodoncia'
      }
      else if(this.d22b==9){
        this.t22b='Pérdida'
      }
      else if(this.d22b==10){
        this.t22b='Protesis total'
      }
      else if(this.d22b==11){
        this.t22b='Protesis fija'
      }
      else if(this.d22b==12){
        this.t22b='Protesis removible'
      }
    }
  }
  cambiar22c(){
    if(this.d22c>11){
      this.d22c=1
      this.t22c='Sano'
    }else{
      this.d22c=this.d22c*1+1
      if(this.d22c==1){
        this.t22c='Sano'
      }
      else if(this.d22c==2){
        this.t22c='Extracción indicada'
      }
      else if(this.d22c==3){
        this.t22c='Pérdida por caries'
      }
      else if(this.d22c==4){
        this.t22c='Sellante necesario'
      }
      else if(this.d22c==5){
        this.t22c='Sellante realizado'
      }
      else if(this.d22c==6){
        this.t22c='Caries'
      }
      else if(this.d22c==7){
        this.t22c='Obturado'
      }
      else if(this.d22c==8){
        this.t22c='Endodoncia'
      }
      else if(this.d22c==9){
        this.t22c='Pérdida'
      }
      else if(this.d22c==10){
        this.t22c='Protesis total'
      }
      else if(this.d22c==11){
        this.t22c='Protesis fija'
      }
      else if(this.d22c==12){
        this.t22c='Protesis removible'
      }
    }
  }
  cambiar22d(){
    if(this.d22d>11){
      this.d22d=1
      this.t22d='Sano'
    }else{
      this.d22d=this.d22d*1+1
      if(this.d22d==1){
        this.t22d='Sano'
      }
      else if(this.d22d==2){
        this.t22d='Extracción indicada'
      }
      else if(this.d22d==3){
        this.t22d='Pérdida por caries'
      }
      else if(this.d22d==4){
        this.t22d='Sellante necesario'
      }
      else if(this.d22d==5){
        this.t22d='Sellante realizado'
      }
      else if(this.d22d==6){
        this.t22d='Caries'
      }
      else if(this.d22d==7){
        this.t22d='Obturado'
      }
      else if(this.d22d==8){
        this.t22d='Endodoncia'
      }
      else if(this.d22d==9){
        this.t22d='Pérdida'
      }
      else if(this.d22d==10){
        this.t22d='Protesis total'
      }
      else if(this.d22d==11){
        this.t22d='Protesis fija'
      }
      else if(this.d22d==12){
        this.t22d='Protesis removible'
      }
    }
  }
  cambiar22e(){
    if(this.d22e>11){
      this.d22e=1
      this.t22e='Sano'
    }else{
      this.d22e=this.d22e*1+1
      if(this.d22e==1){
        this.t22e='Sano'
      }
      else if(this.d22e==2){
        this.t22e='Extracción indicada'
      }
      else if(this.d22e==3){
        this.t22e='Pérdida por caries'
      }
      else if(this.d22e==4){
        this.t22e='Sellante necesario'
      }
      else if(this.d22e==5){
        this.t22e='Sellante realizado'
      }
      else if(this.d22e==6){
        this.t22e='Caries'
      }
      else if(this.d22e==7){
        this.t22e='Obturado'
      }
      else if(this.d22e==8){
        this.t22e='Endodoncia'
      }
      else if(this.d22e==9){
        this.t22e='Pérdida'
      }
      else if(this.d22e==10){
        this.t22e='Protesis total'
      }
      else if(this.d22e==11){
        this.t22e='Protesis fija'
      }
      else if(this.d22e==12){
        this.t22e='Protesis removible'
      }
    }
  }
  cambiar23a(){
    if(this.d23a>11){
      this.d23a=1
      this.t23a='Sano'
    }else{
      this.d23a=this.d23a*1+1
      if(this.d23a==1){
        this.t23a='Sano'
      }
      else if(this.d23a==2){
        this.t23a='Extracción indicada'
      }
      else if(this.d23a==3){
        this.t23a='Pérdida por caries'
      }
      else if(this.d23a==4){
        this.t23a='Sellante necesario'
      }
      else if(this.d23a==5){
        this.t23a='Sellante realizado'
      }
      else if(this.d23a==6){
        this.t23a='Caries'
      }
      else if(this.d23a==7){
        this.t23a='Obturado'
      }
      else if(this.d23a==8){
        this.t23a='Endodoncia'
      }
      else if(this.d23a==9){
        this.t23a='Pérdida'
      }
      else if(this.d23a==10){
        this.t23a='Protesis total'
      }
      else if(this.d23a==11){
        this.t23a='Protesis fija'
      }
      else if(this.d23a==12){
        this.t23a='Protesis removible'
      }
    }
  }
  cambiar23b(){
    if(this.d23b>11){
      this.d23b=1
      this.t23b='Sano'
    }else{
      this.d23b=this.d23b*1+1
      if(this.d23b==1){
        this.t23b='Sano'
      }
      else if(this.d23b==2){
        this.t23b='Extracción indicada'
      }
      else if(this.d23b==3){
        this.t23b='Pérdida por caries'
      }
      else if(this.d23b==4){
        this.t23b='Sellante necesario'
      }
      else if(this.d23b==5){
        this.t23b='Sellante realizado'
      }
      else if(this.d23b==6){
        this.t23b='Caries'
      }
      else if(this.d23b==7){
        this.t23b='Obturado'
      }
      else if(this.d23b==8){
        this.t23b='Endodoncia'
      }
      else if(this.d23b==9){
        this.t23b='Pérdida'
      }
      else if(this.d23b==10){
        this.t23b='Protesis total'
      }
      else if(this.d23b==11){
        this.t23b='Protesis fija'
      }
      else if(this.d23b==12){
        this.t23b='Protesis removible'
      }
    }
  }
  cambiar23c(){
    if(this.d23c>11){
      this.d23c=1
      this.t23c='Sano'
    }else{
      this.d23c=this.d23c*1+1
      if(this.d23c==1){
        this.t23c='Sano'
      }
      else if(this.d23c==2){
        this.t23c='Extracción indicada'
      }
      else if(this.d23c==3){
        this.t23c='Pérdida por caries'
      }
      else if(this.d23c==4){
        this.t23c='Sellante necesario'
      }
      else if(this.d23c==5){
        this.t23c='Sellante realizado'
      }
      else if(this.d23c==6){
        this.t23c='Caries'
      }
      else if(this.d23c==7){
        this.t23c='Obturado'
      }
      else if(this.d23c==8){
        this.t23c='Endodoncia'
      }
      else if(this.d23c==9){
        this.t23c='Pérdida'
      }
      else if(this.d23c==10){
        this.t23c='Protesis total'
      }
      else if(this.d23c==11){
        this.t23c='Protesis fija'
      }
      else if(this.d23c==12){
        this.t23c='Protesis removible'
      }
    }
  }
  cambiar23d(){
    if(this.d23d>11){
      this.d23d=1
      this.t23d='Sano'
    }else{
      this.d23d=this.d23d*1+1
      if(this.d23d==1){
        this.t23d='Sano'
      }
      else if(this.d23d==2){
        this.t23d='Extracción indicada'
      }
      else if(this.d23d==3){
        this.t23d='Pérdida por caries'
      }
      else if(this.d23d==4){
        this.t23d='Sellante necesario'
      }
      else if(this.d23d==5){
        this.t23d='Sellante realizado'
      }
      else if(this.d23d==6){
        this.t23d='Caries'
      }
      else if(this.d23d==7){
        this.t23d='Obturado'
      }
      else if(this.d23d==8){
        this.t23d='Endodoncia'
      }
      else if(this.d23d==9){
        this.t23d='Pérdida'
      }
      else if(this.d23d==10){
        this.t23d='Protesis total'
      }
      else if(this.d23d==11){
        this.t23d='Protesis fija'
      }
      else if(this.d23d==12){
        this.t23d='Protesis removible'
      }
    }
  }
  cambiar23e(){
    if(this.d23e>11){
      this.d23e=1
      this.t23e='Sano'
    }else{
      this.d23e=this.d23e*1+1
      if(this.d23e==1){
        this.t23e='Sano'
      }
      else if(this.d23e==2){
        this.t23e='Extracción indicada'
      }
      else if(this.d23e==3){
        this.t23e='Pérdida por caries'
      }
      else if(this.d23e==4){
        this.t23e='Sellante necesario'
      }
      else if(this.d23e==5){
        this.t23e='Sellante realizado'
      }
      else if(this.d23e==6){
        this.t23e='Caries'
      }
      else if(this.d23e==7){
        this.t23e='Obturado'
      }
      else if(this.d23e==8){
        this.t23e='Endodoncia'
      }
      else if(this.d23e==9){
        this.t23e='Pérdida'
      }
      else if(this.d23e==10){
        this.t23e='Protesis total'
      }
      else if(this.d23e==11){
        this.t23e='Protesis fija'
      }
      else if(this.d23e==12){
        this.t23e='Protesis removible'
      }
    }
  }
  cambiar24a(){
    if(this.d24a>11){
      this.d24a=1
      this.t24a='Sano'
    }else{
      this.d24a=this.d24a*1+1
      if(this.d24a==1){
        this.t24a='Sano'
      }
      else if(this.d24a==2){
        this.t24a='Extracción indicada'
      }
      else if(this.d24a==3){
        this.t24a='Pérdida por caries'
      }
      else if(this.d24a==4){
        this.t24a='Sellante necesario'
      }
      else if(this.d24a==5){
        this.t24a='Sellante realizado'
      }
      else if(this.d24a==6){
        this.t24a='Caries'
      }
      else if(this.d24a==7){
        this.t24a='Obturado'
      }
      else if(this.d24a==8){
        this.t24a='Endodoncia'
      }
      else if(this.d24a==9){
        this.t24a='Pérdida'
      }
      else if(this.d24a==10){
        this.t24a='Protesis total'
      }
      else if(this.d24a==11){
        this.t24a='Protesis fija'
      }
      else if(this.d24a==12){
        this.t24a='Protesis removible'
      }
    }
  }
  cambiar24b(){
    if(this.d24b>11){
      this.d24b=1
      this.t24b='Sano'
    }else{
      this.d24b=this.d24b*1+1
      if(this.d24b==1){
        this.t24b='Sano'
      }
      else if(this.d24b==2){
        this.t24b='Extracción indicada'
      }
      else if(this.d24b==3){
        this.t24b='Pérdida por caries'
      }
      else if(this.d24b==4){
        this.t24b='Sellante necesario'
      }
      else if(this.d24b==5){
        this.t24b='Sellante realizado'
      }
      else if(this.d24b==6){
        this.t24b='Caries'
      }
      else if(this.d24b==7){
        this.t24b='Obturado'
      }
      else if(this.d24b==8){
        this.t24b='Endodoncia'
      }
      else if(this.d24b==9){
        this.t24b='Pérdida'
      }
      else if(this.d24b==10){
        this.t24b='Protesis total'
      }
      else if(this.d24b==11){
        this.t24b='Protesis fija'
      }
      else if(this.d24b==12){
        this.t24b='Protesis removible'
      }
    }
  }
  cambiar24c(){
    if(this.d24c>11){
      this.d24c=1
      this.t24c='Sano'
    }else{
      this.d24c=this.d24c*1+1
      if(this.d24c==1){
        this.t24c='Sano'
      }
      else if(this.d24c==2){
        this.t24c='Extracción indicada'
      }
      else if(this.d24c==3){
        this.t24c='Pérdida por caries'
      }
      else if(this.d24c==4){
        this.t24c='Sellante necesario'
      }
      else if(this.d24c==5){
        this.t24c='Sellante realizado'
      }
      else if(this.d24c==6){
        this.t24c='Caries'
      }
      else if(this.d24c==7){
        this.t24c='Obturado'
      }
      else if(this.d24c==8){
        this.t24c='Endodoncia'
      }
      else if(this.d24c==9){
        this.t24c='Pérdida'
      }
      else if(this.d24c==10){
        this.t24c='Protesis total'
      }
      else if(this.d24c==11){
        this.t24c='Protesis fija'
      }
      else if(this.d24c==12){
        this.t24c='Protesis removible'
      }
    }
  }
  cambiar24d(){
    if(this.d24d>11){
      this.d24d=1
      this.t24d='Sano'
    }else{
      this.d24d=this.d24d*1+1
      if(this.d24d==1){
        this.t24d='Sano'
      }
      else if(this.d24d==2){
        this.t24d='Extracción indicada'
      }
      else if(this.d24d==3){
        this.t24d='Pérdida por caries'
      }
      else if(this.d24d==4){
        this.t24d='Sellante necesario'
      }
      else if(this.d24d==5){
        this.t24d='Sellante realizado'
      }
      else if(this.d24d==6){
        this.t24d='Caries'
      }
      else if(this.d24d==7){
        this.t24d='Obturado'
      }
      else if(this.d24d==8){
        this.t24d='Endodoncia'
      }
      else if(this.d24d==9){
        this.t24d='Pérdida'
      }
      else if(this.d24d==10){
        this.t24d='Protesis total'
      }
      else if(this.d24d==11){
        this.t24d='Protesis fija'
      }
      else if(this.d24d==12){
        this.t24d='Protesis removible'
      }
    }
  }
  cambiar24e(){
    if(this.d24e>11){
      this.d24e=1
      this.t24e='Sano'
    }else{
      this.d24e=this.d24e*1+1
      if(this.d24e==1){
        this.t24e='Sano'
      }
      else if(this.d24e==2){
        this.t24e='Extracción indicada'
      }
      else if(this.d24e==3){
        this.t24e='Pérdida por caries'
      }
      else if(this.d24e==4){
        this.t24e='Sellante necesario'
      }
      else if(this.d24e==5){
        this.t24e='Sellante realizado'
      }
      else if(this.d24e==6){
        this.t24e='Caries'
      }
      else if(this.d24e==7){
        this.t24e='Obturado'
      }
      else if(this.d24e==8){
        this.t24e='Endodoncia'
      }
      else if(this.d24e==9){
        this.t24e='Pérdida'
      }
      else if(this.d24e==10){
        this.t24e='Protesis total'
      }
      else if(this.d24e==11){
        this.t24e='Protesis fija'
      }
      else if(this.d24e==12){
        this.t24e='Protesis removible'
      }
    }
  }
  cambiar25a(){
    if(this.d25a>11){
      this.d25a=1
      this.t25a='Sano'
    }else{
      this.d25a=this.d25a*1+1
      if(this.d25a==1){
        this.t25a='Sano'
      }
      else if(this.d25a==2){
        this.t25a='Extracción indicada'
      }
      else if(this.d25a==3){
        this.t25a='Pérdida por caries'
      }
      else if(this.d25a==4){
        this.t25a='Sellante necesario'
      }
      else if(this.d25a==5){
        this.t25a='Sellante realizado'
      }
      else if(this.d25a==6){
        this.t25a='Caries'
      }
      else if(this.d25a==7){
        this.t25a='Obturado'
      }
      else if(this.d25a==8){
        this.t25a='Endodoncia'
      }
      else if(this.d25a==9){
        this.t25a='Pérdida'
      }
      else if(this.d25a==10){
        this.t25a='Protesis total'
      }
      else if(this.d25a==11){
        this.t25a='Protesis fija'
      }
      else if(this.d25a==12){
        this.t25a='Protesis removible'
      }
    }
  }
  cambiar25b(){
    if(this.d25b>11){
      this.d25b=1
      this.t25b='Sano'
    }else{
      this.d25b=this.d25b*1+1
      if(this.d25b==1){
        this.t25b='Sano'
      }
      else if(this.d25b==2){
        this.t25b='Extracción indicada'
      }
      else if(this.d25b==3){
        this.t25b='Pérdida por caries'
      }
      else if(this.d25b==4){
        this.t25b='Sellante necesario'
      }
      else if(this.d25b==5){
        this.t25b='Sellante realizado'
      }
      else if(this.d25b==6){
        this.t25b='Caries'
      }
      else if(this.d25b==7){
        this.t25b='Obturado'
      }
      else if(this.d25b==8){
        this.t25b='Endodoncia'
      }
      else if(this.d25b==9){
        this.t25b='Pérdida'
      }
      else if(this.d25b==10){
        this.t25b='Protesis total'
      }
      else if(this.d25b==11){
        this.t25b='Protesis fija'
      }
      else if(this.d25b==12){
        this.t25b='Protesis removible'
      }
    }
  }
  cambiar25c(){
    if(this.d25c>11){
      this.d25c=1
      this.t25c='Sano'
    }else{
      this.d25c=this.d25c*1+1
      if(this.d25c==1){
        this.t25c='Sano'
      }
      else if(this.d25c==2){
        this.t25c='Extracción indicada'
      }
      else if(this.d25c==3){
        this.t25c='Pérdida por caries'
      }
      else if(this.d25c==4){
        this.t25c='Sellante necesario'
      }
      else if(this.d25c==5){
        this.t25c='Sellante realizado'
      }
      else if(this.d25c==6){
        this.t25c='Caries'
      }
      else if(this.d25c==7){
        this.t25c='Obturado'
      }
      else if(this.d25c==8){
        this.t25c='Endodoncia'
      }
      else if(this.d25c==9){
        this.t25c='Pérdida'
      }
      else if(this.d25c==10){
        this.t25c='Protesis total'
      }
      else if(this.d25c==11){
        this.t25c='Protesis fija'
      }
      else if(this.d25c==12){
        this.t25c='Protesis removible'
      }
    }
  }
  cambiar25d(){
    if(this.d25d>11){
      this.d25d=1
      this.t25d='Sano'
    }else{
      this.d25d=this.d25d*1+1
      if(this.d25d==1){
        this.t25d='Sano'
      }
      else if(this.d25d==2){
        this.t25d='Extracción indicada'
      }
      else if(this.d25d==3){
        this.t25d='Pérdida por caries'
      }
      else if(this.d25d==4){
        this.t25d='Sellante necesario'
      }
      else if(this.d25d==5){
        this.t25d='Sellante realizado'
      }
      else if(this.d25d==6){
        this.t25d='Caries'
      }
      else if(this.d25d==7){
        this.t25d='Obturado'
      }
      else if(this.d25d==8){
        this.t25d='Endodoncia'
      }
      else if(this.d25d==9){
        this.t25d='Pérdida'
      }
      else if(this.d25d==10){
        this.t25d='Protesis total'
      }
      else if(this.d25d==11){
        this.t25d='Protesis fija'
      }
      else if(this.d25d==12){
        this.t25d='Protesis removible'
      }
    }
  }
  cambiar25e(){
    if(this.d25e>11){
      this.d25e=1
      this.t25e='Sano'
    }else{
      this.d25e=this.d25e*1+1
      if(this.d25e==1){
        this.t25e='Sano'
      }
      else if(this.d25e==2){
        this.t25e='Extracción indicada'
      }
      else if(this.d25e==3){
        this.t25e='Pérdida por caries'
      }
      else if(this.d25e==4){
        this.t25e='Sellante necesario'
      }
      else if(this.d25e==5){
        this.t25e='Sellante realizado'
      }
      else if(this.d25e==6){
        this.t25e='Caries'
      }
      else if(this.d25e==7){
        this.t25e='Obturado'
      }
      else if(this.d25e==8){
        this.t25e='Endodoncia'
      }
      else if(this.d25e==9){
        this.t25e='Pérdida'
      }
      else if(this.d25e==10){
        this.t25e='Protesis total'
      }
      else if(this.d25e==11){
        this.t25e='Protesis fija'
      }
      else if(this.d25e==12){
        this.t25e='Protesis removible'
      }
    }
  }
  cambiar26a(){
    if(this.d26a>11){
      this.d26a=1
      this.t26a='Sano'
    }else{
      this.d26a=this.d26a*1+1
      if(this.d26a==1){
        this.t26a='Sano'
      }
      else if(this.d26a==2){
        this.t26a='Extracción indicada'
      }
      else if(this.d26a==3){
        this.t26a='Pérdida por caries'
      }
      else if(this.d26a==4){
        this.t26a='Sellante necesario'
      }
      else if(this.d26a==5){
        this.t26a='Sellante realizado'
      }
      else if(this.d26a==6){
        this.t26a='Caries'
      }
      else if(this.d26a==7){
        this.t26a='Obturado'
      }
      else if(this.d26a==8){
        this.t26a='Endodoncia'
      }
      else if(this.d26a==9){
        this.t26a='Pérdida'
      }
      else if(this.d26a==10){
        this.t26a='Protesis total'
      }
      else if(this.d26a==11){
        this.t26a='Protesis fija'
      }
      else if(this.d26a==12){
        this.t26a='Protesis removible'
      }
    }
  }
  cambiar26b(){
    if(this.d26b>11){
      this.d26b=1
      this.t26b='Sano'
    }else{
      this.d26b=this.d26b*1+1
      if(this.d26b==1){
        this.t26b='Sano'
      }
      else if(this.d26b==2){
        this.t26b='Extracción indicada'
      }
      else if(this.d26b==3){
        this.t26b='Pérdida por caries'
      }
      else if(this.d26b==4){
        this.t26b='Sellante necesario'
      }
      else if(this.d26b==5){
        this.t26b='Sellante realizado'
      }
      else if(this.d26b==6){
        this.t26b='Caries'
      }
      else if(this.d26b==7){
        this.t26b='Obturado'
      }
      else if(this.d26b==8){
        this.t26b='Endodoncia'
      }
      else if(this.d26b==9){
        this.t26b='Pérdida'
      }
      else if(this.d26b==10){
        this.t26b='Protesis total'
      }
      else if(this.d26b==11){
        this.t26b='Protesis fija'
      }
      else if(this.d26b==12){
        this.t26b='Protesis removible'
      }
    }
  }
  cambiar26c(){
    if(this.d26c>11){
      this.d26c=1
      this.t26c='Sano'
    }else{
      this.d26c=this.d26c*1+1
      if(this.d26c==1){
        this.t26c='Sano'
      }
      else if(this.d26c==2){
        this.t26c='Extracción indicada'
      }
      else if(this.d26c==3){
        this.t26c='Pérdida por caries'
      }
      else if(this.d26c==4){
        this.t26c='Sellante necesario'
      }
      else if(this.d26c==5){
        this.t26c='Sellante realizado'
      }
      else if(this.d26c==6){
        this.t26c='Caries'
      }
      else if(this.d26c==7){
        this.t26c='Obturado'
      }
      else if(this.d26c==8){
        this.t26c='Endodoncia'
      }
      else if(this.d26c==9){
        this.t26c='Pérdida'
      }
      else if(this.d26c==10){
        this.t26c='Protesis total'
      }
      else if(this.d26c==11){
        this.t26c='Protesis fija'
      }
      else if(this.d26c==12){
        this.t26c='Protesis removible'
      }
    }
  }
  cambiar26d(){
    if(this.d26d>11){
      this.d26d=1
      this.t26d='Sano'
    }else{
      this.d26d=this.d26d*1+1
      if(this.d26d==1){
        this.t26d='Sano'
      }
      else if(this.d26d==2){
        this.t26d='Extracción indicada'
      }
      else if(this.d26d==3){
        this.t26d='Pérdida por caries'
      }
      else if(this.d26d==4){
        this.t26d='Sellante necesario'
      }
      else if(this.d26d==5){
        this.t26d='Sellante realizado'
      }
      else if(this.d26d==6){
        this.t26d='Caries'
      }
      else if(this.d26d==7){
        this.t26d='Obturado'
      }
      else if(this.d26d==8){
        this.t26d='Endodoncia'
      }
      else if(this.d26d==9){
        this.t26d='Pérdida'
      }
      else if(this.d26d==10){
        this.t26d='Protesis total'
      }
      else if(this.d26d==11){
        this.t26d='Protesis fija'
      }
      else if(this.d26d==12){
        this.t26d='Protesis removible'
      }
    }
  }
  cambiar26e(){
    if(this.d26e>11){
      this.d26e=1
      this.t26e='Sano'
    }else{
      this.d26e=this.d26e*1+1
      if(this.d26e==1){
        this.t26e='Sano'
      }
      else if(this.d26e==2){
        this.t26e='Extracción indicada'
      }
      else if(this.d26e==3){
        this.t26e='Pérdida por caries'
      }
      else if(this.d26e==4){
        this.t26e='Sellante necesario'
      }
      else if(this.d26e==5){
        this.t26e='Sellante realizado'
      }
      else if(this.d26e==6){
        this.t26e='Caries'
      }
      else if(this.d26e==7){
        this.t26e='Obturado'
      }
      else if(this.d26e==8){
        this.t26e='Endodoncia'
      }
      else if(this.d26e==9){
        this.t26e='Pérdida'
      }
      else if(this.d26e==10){
        this.t26e='Protesis total'
      }
      else if(this.d26e==11){
        this.t26e='Protesis fija'
      }
      else if(this.d26e==12){
        this.t26e='Protesis removible'
      }
    }
  }
  cambiar27a(){
    if(this.d27a>11){
      this.d27a=1
      this.t27a='Sano'
    }else{
      this.d27a=this.d27a*1+1
      if(this.d27a==1){
        this.t27a='Sano'
      }
      else if(this.d27a==2){
        this.t27a='Extracción indicada'
      }
      else if(this.d27a==3){
        this.t27a='Pérdida por caries'
      }
      else if(this.d27a==4){
        this.t27a='Sellante necesario'
      }
      else if(this.d27a==5){
        this.t27a='Sellante realizado'
      }
      else if(this.d27a==6){
        this.t27a='Caries'
      }
      else if(this.d27a==7){
        this.t27a='Obturado'
      }
      else if(this.d27a==8){
        this.t27a='Endodoncia'
      }
      else if(this.d27a==9){
        this.t27a='Pérdida'
      }
      else if(this.d27a==10){
        this.t27a='Protesis total'
      }
      else if(this.d27a==11){
        this.t27a='Protesis fija'
      }
      else if(this.d27a==12){
        this.t27a='Protesis removible'
      }
    }
  }
  cambiar27b(){
    if(this.d27b>11){
      this.d27b=1
      this.t27b='Sano'
    }else{
      this.d27b=this.d27b*1+1
      if(this.d27b==1){
        this.t27b='Sano'
      }
      else if(this.d27b==2){
        this.t27b='Extracción indicada'
      }
      else if(this.d27b==3){
        this.t27b='Pérdida por caries'
      }
      else if(this.d27b==4){
        this.t27b='Sellante necesario'
      }
      else if(this.d27b==5){
        this.t27b='Sellante realizado'
      }
      else if(this.d27b==6){
        this.t27b='Caries'
      }
      else if(this.d27b==7){
        this.t27b='Obturado'
      }
      else if(this.d27b==8){
        this.t27b='Endodoncia'
      }
      else if(this.d27b==9){
        this.t27b='Pérdida'
      }
      else if(this.d27b==10){
        this.t27b='Protesis total'
      }
      else if(this.d27b==11){
        this.t27b='Protesis fija'
      }
      else if(this.d27b==12){
        this.t27b='Protesis removible'
      }
    }
  }
  cambiar27c(){
    if(this.d27c>11){
      this.d27c=1
      this.t27c='Sano'
    }else{
      this.d27c=this.d27c*1+1
      if(this.d27c==1){
        this.t27c='Sano'
      }
      else if(this.d27c==2){
        this.t27c='Extracción indicada'
      }
      else if(this.d27c==3){
        this.t27c='Pérdida por caries'
      }
      else if(this.d27c==4){
        this.t27c='Sellante necesario'
      }
      else if(this.d27c==5){
        this.t27c='Sellante realizado'
      }
      else if(this.d27c==6){
        this.t27c='Caries'
      }
      else if(this.d27c==7){
        this.t27c='Obturado'
      }
      else if(this.d27c==8){
        this.t27c='Endodoncia'
      }
      else if(this.d27c==9){
        this.t27c='Pérdida'
      }
      else if(this.d27c==10){
        this.t27c='Protesis total'
      }
      else if(this.d27c==11){
        this.t27c='Protesis fija'
      }
      else if(this.d27c==12){
        this.t27c='Protesis removible'
      }
    }
  }
  cambiar27d(){
    if(this.d27d>11){
      this.d27d=1
      this.t27d='Sano'
    }else{
      this.d27d=this.d27d*1+1
      if(this.d27d==1){
        this.t27d='Sano'
      }
      else if(this.d27d==2){
        this.t27d='Extracción indicada'
      }
      else if(this.d27d==3){
        this.t27d='Pérdida por caries'
      }
      else if(this.d27d==4){
        this.t27d='Sellante necesario'
      }
      else if(this.d27d==5){
        this.t27d='Sellante realizado'
      }
      else if(this.d27d==6){
        this.t27d='Caries'
      }
      else if(this.d27d==7){
        this.t27d='Obturado'
      }
      else if(this.d27d==8){
        this.t27d='Endodoncia'
      }
      else if(this.d27d==9){
        this.t27d='Pérdida'
      }
      else if(this.d27d==10){
        this.t27d='Protesis total'
      }
      else if(this.d27d==11){
        this.t27d='Protesis fija'
      }
      else if(this.d27d==12){
        this.t27d='Protesis removible'
      }
    }
  }
  cambiar27e(){
    if(this.d27e>11){
      this.d27e=1
      this.t27e='Sano'
    }else{
      this.d27e=this.d27e*1+1
      if(this.d27e==1){
        this.t27e='Sano'
      }
      else if(this.d27e==2){
        this.t27e='Extracción indicada'
      }
      else if(this.d27e==3){
        this.t27e='Pérdida por caries'
      }
      else if(this.d27e==4){
        this.t27e='Sellante necesario'
      }
      else if(this.d27e==5){
        this.t27e='Sellante realizado'
      }
      else if(this.d27e==6){
        this.t27e='Caries'
      }
      else if(this.d27e==7){
        this.t27e='Obturado'
      }
      else if(this.d27e==8){
        this.t27e='Endodoncia'
      }
      else if(this.d27e==9){
        this.t27e='Pérdida'
      }
      else if(this.d27e==10){
        this.t27e='Protesis total'
      }
      else if(this.d27e==11){
        this.t27e='Protesis fija'
      }
      else if(this.d27e==12){
        this.t27e='Protesis removible'
      }
    }
  }
  cambiar28a(){
    if(this.d28a>11){
      this.d28a=1
      this.t28a='Sano'
    }else{
      this.d28a=this.d28a*1+1
      if(this.d28a==1){
        this.t28a='Sano'
      }
      else if(this.d28a==2){
        this.t28a='Extracción indicada'
      }
      else if(this.d28a==3){
        this.t28a='Pérdida por caries'
      }
      else if(this.d28a==4){
        this.t28a='Sellante necesario'
      }
      else if(this.d28a==5){
        this.t28a='Sellante realizado'
      }
      else if(this.d28a==6){
        this.t28a='Caries'
      }
      else if(this.d28a==7){
        this.t28a='Obturado'
      }
      else if(this.d28a==8){
        this.t28a='Endodoncia'
      }
      else if(this.d28a==9){
        this.t28a='Pérdida'
      }
      else if(this.d28a==10){
        this.t28a='Protesis total'
      }
      else if(this.d28a==11){
        this.t28a='Protesis fija'
      }
      else if(this.d28a==12){
        this.t28a='Protesis removible'
      }
    }
  }
  cambiar28b(){
    if(this.d28b>11){
      this.d28b=1
      this.t28b='Sano'
    }else{
      this.d28b=this.d28b*1+1
      if(this.d28b==1){
        this.t28b='Sano'
      }
      else if(this.d28b==2){
        this.t28b='Extracción indicada'
      }
      else if(this.d28b==3){
        this.t28b='Pérdida por caries'
      }
      else if(this.d28b==4){
        this.t28b='Sellante necesario'
      }
      else if(this.d28b==5){
        this.t28b='Sellante realizado'
      }
      else if(this.d28b==6){
        this.t28b='Caries'
      }
      else if(this.d28b==7){
        this.t28b='Obturado'
      }
      else if(this.d28b==8){
        this.t28b='Endodoncia'
      }
      else if(this.d28b==9){
        this.t28b='Pérdida'
      }
      else if(this.d28b==10){
        this.t28b='Protesis total'
      }
      else if(this.d28b==11){
        this.t28b='Protesis fija'
      }
      else if(this.d28b==12){
        this.t28b='Protesis removible'
      }
    }
  }
  cambiar28c(){
    if(this.d28c>11){
      this.d28c=1
      this.t28c='Sano'
    }else{
      this.d28c=this.d28c*1+1
      if(this.d28c==1){
        this.t28c='Sano'
      }
      else if(this.d28c==2){
        this.t28c='Extracción indicada'
      }
      else if(this.d28c==3){
        this.t28c='Pérdida por caries'
      }
      else if(this.d28c==4){
        this.t28c='Sellante necesario'
      }
      else if(this.d28c==5){
        this.t28c='Sellante realizado'
      }
      else if(this.d28c==6){
        this.t28c='Caries'
      }
      else if(this.d28c==7){
        this.t28c='Obturado'
      }
      else if(this.d28c==8){
        this.t28c='Endodoncia'
      }
      else if(this.d28c==9){
        this.t28c='Pérdida'
      }
      else if(this.d28c==10){
        this.t28c='Protesis total'
      }
      else if(this.d28c==11){
        this.t28c='Protesis fija'
      }
      else if(this.d28c==12){
        this.t28c='Protesis removible'
      }
    }
  }
  cambiar28d(){
    if(this.d28d>11){
      this.d28d=1
      this.t28d='Sano'
    }else{
      this.d28d=this.d28d*1+1
      if(this.d28d==1){
        this.t28d='Sano'
      }
      else if(this.d28d==2){
        this.t28d='Extracción indicada'
      }
      else if(this.d28d==3){
        this.t28d='Pérdida por caries'
      }
      else if(this.d28d==4){
        this.t28d='Sellante necesario'
      }
      else if(this.d28d==5){
        this.t28d='Sellante realizado'
      }
      else if(this.d28d==6){
        this.t28d='Caries'
      }
      else if(this.d28d==7){
        this.t28d='Obturado'
      }
      else if(this.d28d==8){
        this.t28d='Endodoncia'
      }
      else if(this.d28d==9){
        this.t28d='Pérdida'
      }
      else if(this.d28d==10){
        this.t28d='Protesis total'
      }
      else if(this.d28d==11){
        this.t28d='Protesis fija'
      }
      else if(this.d28d==12){
        this.t28d='Protesis removible'
      }
    }
  }
  cambiar28e(){
    if(this.d28e>11){
      this.d28e=1
      this.t28e='Sano'
    }else{
      this.d28e=this.d28e*1+1
      if(this.d28e==1){
        this.t28e='Sano'
      }
      else if(this.d28e==2){
        this.t28e='Extracción indicada'
      }
      else if(this.d28e==3){
        this.t28e='Pérdida por caries'
      }
      else if(this.d28e==4){
        this.t28e='Sellante necesario'
      }
      else if(this.d28e==5){
        this.t28e='Sellante realizado'
      }
      else if(this.d28e==6){
        this.t28e='Caries'
      }
      else if(this.d28e==7){
        this.t28e='Obturado'
      }
      else if(this.d28e==8){
        this.t28e='Endodoncia'
      }
      else if(this.d28e==9){
        this.t28e='Pérdida'
      }
      else if(this.d28e==10){
        this.t28e='Protesis total'
      }
      else if(this.d28e==11){
        this.t28e='Protesis fija'
      }
      else if(this.d28e==12){
        this.t28e='Protesis removible'
      }
    }
  }
  //cuandrante 3
  cambiar31a(){
    if(this.d31a>11){
      this.d31a=1
      this.t31a='Sano'
    }else{
      this.d31a=this.d31a*1+1
      if(this.d31a==1){
        this.t31a='Sano'
      }
      else if(this.d31a==2){
        this.t31a='Extracción indicada'
      }
      else if(this.d31a==3){
        this.t31a='Pérdida por caries'
      }
      else if(this.d31a==4){
        this.t31a='Sellante necesario'
      }
      else if(this.d31a==5){
        this.t31a='Sellante realizado'
      }
      else if(this.d31a==6){
        this.t31a='Caries'
      }
      else if(this.d31a==7){
        this.t31a='Obturado'
      }
      else if(this.d31a==8){
        this.t31a='Endodoncia'
      }
      else if(this.d31a==9){
        this.t31a='Pérdida'
      }
      else if(this.d31a==10){
        this.t31a='Protesis total'
      }
      else if(this.d31a==11){
        this.t31a='Protesis fija'
      }
      else if(this.d31a==12){
        this.t31a='Protesis removible'
      }
    }
  }
  cambiar31b(){
    if(this.d31b>11){
      this.d31b=1
      this.t31b='Sano'
    }else{
      this.d31b=this.d31b*1+1
      if(this.d31b==1){
        this.t31b='Sano'
      }
      else if(this.d31b==2){
        this.t31b='Extracción indicada'
      }
      else if(this.d31b==3){
        this.t31b='Pérdida por caries'
      }
      else if(this.d31b==4){
        this.t31b='Sellante necesario'
      }
      else if(this.d31b==5){
        this.t31b='Sellante realizado'
      }
      else if(this.d31b==6){
        this.t31b='Caries'
      }
      else if(this.d31b==7){
        this.t31b='Obturado'
      }
      else if(this.d31b==8){
        this.t31b='Endodoncia'
      }
      else if(this.d31b==9){
        this.t31b='Pérdida'
      }
      else if(this.d31b==10){
        this.t31b='Protesis total'
      }
      else if(this.d31b==11){
        this.t31b='Protesis fija'
      }
      else if(this.d31b==12){
        this.t31b='Protesis removible'
      }
    }
  }
  cambiar31c(){
    if(this.d31c>11){
      this.d31c=1
      this.t31c='Sano'
    }else{
      this.d31c=this.d31c*1+1
      if(this.d31c==1){
        this.t31c='Sano'
      }
      else if(this.d31c==2){
        this.t31c='Extracción indicada'
      }
      else if(this.d31c==3){
        this.t31c='Pérdida por caries'
      }
      else if(this.d31c==4){
        this.t31c='Sellante necesario'
      }
      else if(this.d31c==5){
        this.t31c='Sellante realizado'
      }
      else if(this.d31c==6){
        this.t31c='Caries'
      }
      else if(this.d31c==7){
        this.t31c='Obturado'
      }
      else if(this.d31c==8){
        this.t31c='Endodoncia'
      }
      else if(this.d31c==9){
        this.t31c='Pérdida'
      }
      else if(this.d31c==10){
        this.t31c='Protesis total'
      }
      else if(this.d31c==11){
        this.t31c='Protesis fija'
      }
      else if(this.d31c==12){
        this.t31c='Protesis removible'
      }
    }
  }
  cambiar31d(){
    if(this.d31d>11){
      this.d31d=1
      this.t31d='Sano'
    }else{
      this.d31d=this.d31d*1+1
      if(this.d31d==1){
        this.t31d='Sano'
      }
      else if(this.d31d==2){
        this.t31d='Extracción indicada'
      }
      else if(this.d31d==3){
        this.t31d='Pérdida por caries'
      }
      else if(this.d31d==4){
        this.t31d='Sellante necesario'
      }
      else if(this.d31d==5){
        this.t31d='Sellante realizado'
      }
      else if(this.d31d==6){
        this.t31d='Caries'
      }
      else if(this.d31d==7){
        this.t31d='Obturado'
      }
      else if(this.d31d==8){
        this.t31d='Endodoncia'
      }
      else if(this.d31d==9){
        this.t31d='Pérdida'
      }
      else if(this.d31d==10){
        this.t31d='Protesis total'
      }
      else if(this.d31d==11){
        this.t31d='Protesis fija'
      }
      else if(this.d31d==12){
        this.t31d='Protesis removible'
      }
    }
  }
  cambiar31e(){
    if(this.d31e>11){
      this.d31e=1
      this.t31e='Sano'
    }else{
      this.d31e=this.d31e*1+1
      if(this.d31e==1){
        this.t31e='Sano'
      }
      else if(this.d31e==2){
        this.t31e='Extracción indicada'
      }
      else if(this.d31e==3){
        this.t31e='Pérdida por caries'
      }
      else if(this.d31e==4){
        this.t31e='Sellante necesario'
      }
      else if(this.d31e==5){
        this.t31e='Sellante realizado'
      }
      else if(this.d31e==6){
        this.t31e='Caries'
      }
      else if(this.d31e==7){
        this.t31e='Obturado'
      }
      else if(this.d31e==8){
        this.t31e='Endodoncia'
      }
      else if(this.d31e==9){
        this.t31e='Pérdida'
      }
      else if(this.d31e==10){
        this.t31e='Protesis total'
      }
      else if(this.d31e==11){
        this.t31e='Protesis fija'
      }
      else if(this.d31e==12){
        this.t31e='Protesis removible'
      }
    }
  }
  cambiar32a(){
    if(this.d32a>11){
      this.d32a=1
      this.t32a='Sano'
    }else{
      this.d32a=this.d32a*1+1
      if(this.d32a==1){
        this.t32a='Sano'
      }
      else if(this.d32a==2){
        this.t32a='Extracción indicada'
      }
      else if(this.d32a==3){
        this.t32a='Pérdida por caries'
      }
      else if(this.d32a==4){
        this.t32a='Sellante necesario'
      }
      else if(this.d32a==5){
        this.t32a='Sellante realizado'
      }
      else if(this.d32a==6){
        this.t32a='Caries'
      }
      else if(this.d32a==7){
        this.t32a='Obturado'
      }
      else if(this.d32a==8){
        this.t32a='Endodoncia'
      }
      else if(this.d32a==9){
        this.t32a='Pérdida'
      }
      else if(this.d32a==10){
        this.t32a='Protesis total'
      }
      else if(this.d32a==11){
        this.t32a='Protesis fija'
      }
      else if(this.d32a==12){
        this.t32a='Protesis removible'
      }
    }
  }
  cambiar32b(){
    if(this.d32b>11){
      this.d32b=1
      this.t32b='Sano'
    }else{
      this.d32b=this.d32b*1+1
      if(this.d32b==1){
        this.t32b='Sano'
      }
      else if(this.d32b==2){
        this.t32b='Extracción indicada'
      }
      else if(this.d32b==3){
        this.t32b='Pérdida por caries'
      }
      else if(this.d32b==4){
        this.t32b='Sellante necesario'
      }
      else if(this.d32b==5){
        this.t32b='Sellante realizado'
      }
      else if(this.d32b==6){
        this.t32b='Caries'
      }
      else if(this.d32b==7){
        this.t32b='Obturado'
      }
      else if(this.d32b==8){
        this.t32b='Endodoncia'
      }
      else if(this.d32b==9){
        this.t32b='Pérdida'
      }
      else if(this.d32b==10){
        this.t32b='Protesis total'
      }
      else if(this.d32b==11){
        this.t32b='Protesis fija'
      }
      else if(this.d32b==12){
        this.t32b='Protesis removible'
      }
    }
  }
  cambiar32c(){
    if(this.d32c>11){
      this.d32c=1
      this.t32c='Sano'
    }else{
      this.d32c=this.d32c*1+1
      if(this.d32c==1){
        this.t32c='Sano'
      }
      else if(this.d32c==2){
        this.t32c='Extracción indicada'
      }
      else if(this.d32c==3){
        this.t32c='Pérdida por caries'
      }
      else if(this.d32c==4){
        this.t32c='Sellante necesario'
      }
      else if(this.d32c==5){
        this.t32c='Sellante realizado'
      }
      else if(this.d32c==6){
        this.t32c='Caries'
      }
      else if(this.d32c==7){
        this.t32c='Obturado'
      }
      else if(this.d32c==8){
        this.t32c='Endodoncia'
      }
      else if(this.d32c==9){
        this.t32c='Pérdida'
      }
      else if(this.d32c==10){
        this.t32c='Protesis total'
      }
      else if(this.d32c==11){
        this.t32c='Protesis fija'
      }
      else if(this.d32c==12){
        this.t32c='Protesis removible'
      }
    }
  }
  cambiar32d(){
    if(this.d32d>11){
      this.d32d=1
      this.t32d='Sano'
    }else{
      this.d32d=this.d32d*1+1
      if(this.d32d==1){
        this.t32d='Sano'
      }
      else if(this.d32d==2){
        this.t32d='Extracción indicada'
      }
      else if(this.d32d==3){
        this.t32d='Pérdida por caries'
      }
      else if(this.d32d==4){
        this.t32d='Sellante necesario'
      }
      else if(this.d32d==5){
        this.t32d='Sellante realizado'
      }
      else if(this.d32d==6){
        this.t32d='Caries'
      }
      else if(this.d32d==7){
        this.t32d='Obturado'
      }
      else if(this.d32d==8){
        this.t32d='Endodoncia'
      }
      else if(this.d32d==9){
        this.t32d='Pérdida'
      }
      else if(this.d32d==10){
        this.t32d='Protesis total'
      }
      else if(this.d32d==11){
        this.t32d='Protesis fija'
      }
      else if(this.d32d==12){
        this.t32d='Protesis removible'
      }
    }
  }
  cambiar32e(){
    if(this.d32e>11){
      this.d32e=1
      this.t32e='Sano'
    }else{
      this.d32e=this.d32e*1+1
      if(this.d32e==1){
        this.t32e='Sano'
      }
      else if(this.d32e==2){
        this.t32e='Extracción indicada'
      }
      else if(this.d32e==3){
        this.t32e='Pérdida por caries'
      }
      else if(this.d32e==4){
        this.t32e='Sellante necesario'
      }
      else if(this.d32e==5){
        this.t32e='Sellante realizado'
      }
      else if(this.d32e==6){
        this.t32e='Caries'
      }
      else if(this.d32e==7){
        this.t32e='Obturado'
      }
      else if(this.d32e==8){
        this.t32e='Endodoncia'
      }
      else if(this.d32e==9){
        this.t32e='Pérdida'
      }
      else if(this.d32e==10){
        this.t32e='Protesis total'
      }
      else if(this.d32e==11){
        this.t32e='Protesis fija'
      }
      else if(this.d32e==12){
        this.t32e='Protesis removible'
      }
    }
  }
  cambiar33a(){
    if(this.d33a>11){
      this.d33a=1
      this.t33a='Sano'
    }else{
      this.d33a=this.d33a*1+1
      if(this.d33a==1){
        this.t33a='Sano'
      }
      else if(this.d33a==2){
        this.t33a='Extracción indicada'
      }
      else if(this.d33a==3){
        this.t33a='Pérdida por caries'
      }
      else if(this.d33a==4){
        this.t33a='Sellante necesario'
      }
      else if(this.d33a==5){
        this.t33a='Sellante realizado'
      }
      else if(this.d33a==6){
        this.t33a='Caries'
      }
      else if(this.d33a==7){
        this.t33a='Obturado'
      }
      else if(this.d33a==8){
        this.t33a='Endodoncia'
      }
      else if(this.d33a==9){
        this.t33a='Pérdida'
      }
      else if(this.d33a==10){
        this.t33a='Protesis total'
      }
      else if(this.d33a==11){
        this.t33a='Protesis fija'
      }
      else if(this.d33a==12){
        this.t33a='Protesis removible'
      }
    }
  }
  cambiar33b(){
    if(this.d33b>11){
      this.d33b=1
      this.t33b='Sano'
    }else{
      this.d33b=this.d33b*1+1
      if(this.d33b==1){
        this.t33b='Sano'
      }
      else if(this.d33b==2){
        this.t33b='Extracción indicada'
      }
      else if(this.d33b==3){
        this.t33b='Pérdida por caries'
      }
      else if(this.d33b==4){
        this.t33b='Sellante necesario'
      }
      else if(this.d33b==5){
        this.t33b='Sellante realizado'
      }
      else if(this.d33b==6){
        this.t33b='Caries'
      }
      else if(this.d33b==7){
        this.t33b='Obturado'
      }
      else if(this.d33b==8){
        this.t33b='Endodoncia'
      }
      else if(this.d33b==9){
        this.t33b='Pérdida'
      }
      else if(this.d33b==10){
        this.t33b='Protesis total'
      }
      else if(this.d33b==11){
        this.t33b='Protesis fija'
      }
      else if(this.d33b==12){
        this.t33b='Protesis removible'
      }
    }
  }
  cambiar33c(){
    if(this.d33c>11){
      this.d33c=1
      this.t33c='Sano'
    }else{
      this.d33c=this.d33c*1+1
      if(this.d33c==1){
        this.t33c='Sano'
      }
      else if(this.d33c==2){
        this.t33c='Extracción indicada'
      }
      else if(this.d33c==3){
        this.t33c='Pérdida por caries'
      }
      else if(this.d33c==4){
        this.t33c='Sellante necesario'
      }
      else if(this.d33c==5){
        this.t33c='Sellante realizado'
      }
      else if(this.d33c==6){
        this.t33c='Caries'
      }
      else if(this.d33c==7){
        this.t33c='Obturado'
      }
      else if(this.d33c==8){
        this.t33c='Endodoncia'
      }
      else if(this.d33c==9){
        this.t33c='Pérdida'
      }
      else if(this.d33c==10){
        this.t33c='Protesis total'
      }
      else if(this.d33c==11){
        this.t33c='Protesis fija'
      }
      else if(this.d33c==12){
        this.t33c='Protesis removible'
      }
    }
  }
  cambiar33d(){
    if(this.d33d>11){
      this.d33d=1
      this.t33d='Sano'
    }else{
      this.d33d=this.d33d*1+1
      if(this.d33d==1){
        this.t33d='Sano'
      }
      else if(this.d33d==2){
        this.t33d='Extracción indicada'
      }
      else if(this.d33d==3){
        this.t33d='Pérdida por caries'
      }
      else if(this.d33d==4){
        this.t33d='Sellante necesario'
      }
      else if(this.d33d==5){
        this.t33d='Sellante realizado'
      }
      else if(this.d33d==6){
        this.t33d='Caries'
      }
      else if(this.d33d==7){
        this.t33d='Obturado'
      }
      else if(this.d33d==8){
        this.t33d='Endodoncia'
      }
      else if(this.d33d==9){
        this.t33d='Pérdida'
      }
      else if(this.d33d==10){
        this.t33d='Protesis total'
      }
      else if(this.d33d==11){
        this.t33d='Protesis fija'
      }
      else if(this.d33d==12){
        this.t33d='Protesis removible'
      }
    }
  }
  cambiar33e(){
    if(this.d33e>11){
      this.d33e=1
      this.t33e='Sano'
    }else{
      this.d33e=this.d33e*1+1
      if(this.d33e==1){
        this.t33e='Sano'
      }
      else if(this.d33e==2){
        this.t33e='Extracción indicada'
      }
      else if(this.d33e==3){
        this.t33e='Pérdida por caries'
      }
      else if(this.d33e==4){
        this.t33e='Sellante necesario'
      }
      else if(this.d33e==5){
        this.t33e='Sellante realizado'
      }
      else if(this.d33e==6){
        this.t33e='Caries'
      }
      else if(this.d33e==7){
        this.t33e='Obturado'
      }
      else if(this.d33e==8){
        this.t33e='Endodoncia'
      }
      else if(this.d33e==9){
        this.t33e='Pérdida'
      }
      else if(this.d33e==10){
        this.t33e='Protesis total'
      }
      else if(this.d33e==11){
        this.t33e='Protesis fija'
      }
      else if(this.d33e==12){
        this.t33e='Protesis removible'
      }
    }
  }
  cambiar34a(){
    if(this.d34a>11){
      this.d34a=1
      this.t34a='Sano'
    }else{
      this.d34a=this.d34a*1+1
      if(this.d34a==1){
        this.t34a='Sano'
      }
      else if(this.d34a==2){
        this.t34a='Extracción indicada'
      }
      else if(this.d34a==3){
        this.t34a='Pérdida por caries'
      }
      else if(this.d34a==4){
        this.t34a='Sellante necesario'
      }
      else if(this.d34a==5){
        this.t34a='Sellante realizado'
      }
      else if(this.d34a==6){
        this.t34a='Caries'
      }
      else if(this.d34a==7){
        this.t34a='Obturado'
      }
      else if(this.d34a==8){
        this.t34a='Endodoncia'
      }
      else if(this.d34a==9){
        this.t34a='Pérdida'
      }
      else if(this.d34a==10){
        this.t34a='Protesis total'
      }
      else if(this.d34a==11){
        this.t34a='Protesis fija'
      }
      else if(this.d34a==12){
        this.t34a='Protesis removible'
      }
    }
  }
  cambiar34b(){
    if(this.d34b>11){
      this.d34b=1
      this.t34b='Sano'
    }else{
      this.d34b=this.d34b*1+1
      if(this.d34b==1){
        this.t34b='Sano'
      }
      else if(this.d34b==2){
        this.t34b='Extracción indicada'
      }
      else if(this.d34b==3){
        this.t34b='Pérdida por caries'
      }
      else if(this.d34b==4){
        this.t34b='Sellante necesario'
      }
      else if(this.d34b==5){
        this.t34b='Sellante realizado'
      }
      else if(this.d34b==6){
        this.t34b='Caries'
      }
      else if(this.d34b==7){
        this.t34b='Obturado'
      }
      else if(this.d34b==8){
        this.t34b='Endodoncia'
      }
      else if(this.d34b==9){
        this.t34b='Pérdida'
      }
      else if(this.d34b==10){
        this.t34b='Protesis total'
      }
      else if(this.d34b==11){
        this.t34b='Protesis fija'
      }
      else if(this.d34b==12){
        this.t34b='Protesis removible'
      }
    }
  }
  cambiar34c(){
    if(this.d34c>11){
      this.d34c=1
      this.t34c='Sano'
    }else{
      this.d34c=this.d34c*1+1
      if(this.d34c==1){
        this.t34c='Sano'
      }
      else if(this.d34c==2){
        this.t34c='Extracción indicada'
      }
      else if(this.d34c==3){
        this.t34c='Pérdida por caries'
      }
      else if(this.d34c==4){
        this.t34c='Sellante necesario'
      }
      else if(this.d34c==5){
        this.t34c='Sellante realizado'
      }
      else if(this.d34c==6){
        this.t34c='Caries'
      }
      else if(this.d34c==7){
        this.t34c='Obturado'
      }
      else if(this.d34c==8){
        this.t34c='Endodoncia'
      }
      else if(this.d34c==9){
        this.t34c='Pérdida'
      }
      else if(this.d34c==10){
        this.t34c='Protesis total'
      }
      else if(this.d34c==11){
        this.t34c='Protesis fija'
      }
      else if(this.d34c==12){
        this.t34c='Protesis removible'
      }
    }
  }
  cambiar34d(){
    if(this.d34d>11){
      this.d34d=1
      this.t34d='Sano'
    }else{
      this.d34d=this.d34d*1+1
      if(this.d34d==1){
        this.t34d='Sano'
      }
      else if(this.d34d==2){
        this.t34d='Extracción indicada'
      }
      else if(this.d34d==3){
        this.t34d='Pérdida por caries'
      }
      else if(this.d34d==4){
        this.t34d='Sellante necesario'
      }
      else if(this.d34d==5){
        this.t34d='Sellante realizado'
      }
      else if(this.d34d==6){
        this.t34d='Caries'
      }
      else if(this.d34d==7){
        this.t34d='Obturado'
      }
      else if(this.d34d==8){
        this.t34d='Endodoncia'
      }
      else if(this.d34d==9){
        this.t34d='Pérdida'
      }
      else if(this.d34d==10){
        this.t34d='Protesis total'
      }
      else if(this.d34d==11){
        this.t34d='Protesis fija'
      }
      else if(this.d34d==12){
        this.t34d='Protesis removible'
      }
    }
  }
  cambiar34e(){
    if(this.d34e>11){
      this.d34e=1
      this.t34e='Sano'
    }else{
      this.d34e=this.d34e*1+1
      if(this.d34e==1){
        this.t34e='Sano'
      }
      else if(this.d34e==2){
        this.t34e='Extracción indicada'
      }
      else if(this.d34e==3){
        this.t34e='Pérdida por caries'
      }
      else if(this.d34e==4){
        this.t34e='Sellante necesario'
      }
      else if(this.d34e==5){
        this.t34e='Sellante realizado'
      }
      else if(this.d34e==6){
        this.t34e='Caries'
      }
      else if(this.d34e==7){
        this.t34e='Obturado'
      }
      else if(this.d34e==8){
        this.t34e='Endodoncia'
      }
      else if(this.d34e==9){
        this.t34e='Pérdida'
      }
      else if(this.d34e==10){
        this.t34e='Protesis total'
      }
      else if(this.d34e==11){
        this.t34e='Protesis fija'
      }
      else if(this.d34e==12){
        this.t34e='Protesis removible'
      }
    }
  }
  cambiar35a(){
    if(this.d35a>11){
      this.d35a=1
      this.t35a='Sano'
    }else{
      this.d35a=this.d35a*1+1
      if(this.d35a==1){
        this.t35a='Sano'
      }
      else if(this.d35a==2){
        this.t35a='Extracción indicada'
      }
      else if(this.d35a==3){
        this.t35a='Pérdida por caries'
      }
      else if(this.d35a==4){
        this.t35a='Sellante necesario'
      }
      else if(this.d35a==5){
        this.t35a='Sellante realizado'
      }
      else if(this.d35a==6){
        this.t35a='Caries'
      }
      else if(this.d35a==7){
        this.t35a='Obturado'
      }
      else if(this.d35a==8){
        this.t35a='Endodoncia'
      }
      else if(this.d35a==9){
        this.t35a='Pérdida'
      }
      else if(this.d35a==10){
        this.t35a='Protesis total'
      }
      else if(this.d35a==11){
        this.t35a='Protesis fija'
      }
      else if(this.d35a==12){
        this.t35a='Protesis removible'
      }
    }
  }
  cambiar35b(){
    if(this.d35b>11){
      this.d35b=1
      this.t35b='Sano'
    }else{
      this.d35b=this.d35b*1+1
      if(this.d35b==1){
        this.t35b='Sano'
      }
      else if(this.d35b==2){
        this.t35b='Extracción indicada'
      }
      else if(this.d35b==3){
        this.t35b='Pérdida por caries'
      }
      else if(this.d35b==4){
        this.t35b='Sellante necesario'
      }
      else if(this.d35b==5){
        this.t35b='Sellante realizado'
      }
      else if(this.d35b==6){
        this.t35b='Caries'
      }
      else if(this.d35b==7){
        this.t35b='Obturado'
      }
      else if(this.d35b==8){
        this.t35b='Endodoncia'
      }
      else if(this.d35b==9){
        this.t35b='Pérdida'
      }
      else if(this.d35b==10){
        this.t35b='Protesis total'
      }
      else if(this.d35b==11){
        this.t35b='Protesis fija'
      }
      else if(this.d35b==12){
        this.t35b='Protesis removible'
      }
    }
  }
  cambiar35c(){
    if(this.d35c>11){
      this.d35c=1
      this.t35c='Sano'
    }else{
      this.d35c=this.d35c*1+1
      if(this.d35c==1){
        this.t35c='Sano'
      }
      else if(this.d35c==2){
        this.t35c='Extracción indicada'
      }
      else if(this.d35c==3){
        this.t35c='Pérdida por caries'
      }
      else if(this.d35c==4){
        this.t35c='Sellante necesario'
      }
      else if(this.d35c==5){
        this.t35c='Sellante realizado'
      }
      else if(this.d35c==6){
        this.t35c='Caries'
      }
      else if(this.d35c==7){
        this.t35c='Obturado'
      }
      else if(this.d35c==8){
        this.t35c='Endodoncia'
      }
      else if(this.d35c==9){
        this.t35c='Pérdida'
      }
      else if(this.d35c==10){
        this.t35c='Protesis total'
      }
      else if(this.d35c==11){
        this.t35c='Protesis fija'
      }
      else if(this.d35c==12){
        this.t35c='Protesis removible'
      }
    }
  }
  cambiar35d(){
    if(this.d35d>11){
      this.d35d=1
      this.t35d='Sano'
    }else{
      this.d35d=this.d35d*1+1
      if(this.d35d==1){
        this.t35d='Sano'
      }
      else if(this.d35d==2){
        this.t35d='Extracción indicada'
      }
      else if(this.d35d==3){
        this.t35d='Pérdida por caries'
      }
      else if(this.d35d==4){
        this.t35d='Sellante necesario'
      }
      else if(this.d35d==5){
        this.t35d='Sellante realizado'
      }
      else if(this.d35d==6){
        this.t35d='Caries'
      }
      else if(this.d35d==7){
        this.t35d='Obturado'
      }
      else if(this.d35d==8){
        this.t35d='Endodoncia'
      }
      else if(this.d35d==9){
        this.t35d='Pérdida'
      }
      else if(this.d35d==10){
        this.t35d='Protesis total'
      }
      else if(this.d35d==11){
        this.t35d='Protesis fija'
      }
      else if(this.d35d==12){
        this.t35d='Protesis removible'
      }
    }
  }
  cambiar35e(){
    if(this.d35e>11){
      this.d35e=1
      this.t35e='Sano'
    }else{
      this.d35e=this.d35e*1+1
      if(this.d35e==1){
        this.t35e='Sano'
      }
      else if(this.d35e==2){
        this.t35e='Extracción indicada'
      }
      else if(this.d35e==3){
        this.t35e='Pérdida por caries'
      }
      else if(this.d35e==4){
        this.t35e='Sellante necesario'
      }
      else if(this.d35e==5){
        this.t35e='Sellante realizado'
      }
      else if(this.d35e==6){
        this.t35e='Caries'
      }
      else if(this.d35e==7){
        this.t35e='Obturado'
      }
      else if(this.d35e==8){
        this.t35e='Endodoncia'
      }
      else if(this.d35e==9){
        this.t35e='Pérdida'
      }
      else if(this.d35e==10){
        this.t35e='Protesis total'
      }
      else if(this.d35e==11){
        this.t35e='Protesis fija'
      }
      else if(this.d35e==12){
        this.t35e='Protesis removible'
      }
    }
  }
  cambiar36a(){
    if(this.d36a>11){
      this.d36a=1
      this.t36a='Sano'
    }else{
      this.d36a=this.d36a*1+1
      if(this.d36a==1){
        this.t36a='Sano'
      }
      else if(this.d36a==2){
        this.t36a='Extracción indicada'
      }
      else if(this.d36a==3){
        this.t36a='Pérdida por caries'
      }
      else if(this.d36a==4){
        this.t36a='Sellante necesario'
      }
      else if(this.d36a==5){
        this.t36a='Sellante realizado'
      }
      else if(this.d36a==6){
        this.t36a='Caries'
      }
      else if(this.d36a==7){
        this.t36a='Obturado'
      }
      else if(this.d36a==8){
        this.t36a='Endodoncia'
      }
      else if(this.d36a==9){
        this.t36a='Pérdida'
      }
      else if(this.d36a==10){
        this.t36a='Protesis total'
      }
      else if(this.d36a==11){
        this.t36a='Protesis fija'
      }
      else if(this.d36a==12){
        this.t36a='Protesis removible'
      }
    }
  }
  cambiar36b(){
    if(this.d36b>11){
      this.d36b=1
      this.t36b='Sano'
    }else{
      this.d36b=this.d36b*1+1
      if(this.d36b==1){
        this.t36b='Sano'
      }
      else if(this.d36b==2){
        this.t36b='Extracción indicada'
      }
      else if(this.d36b==3){
        this.t36b='Pérdida por caries'
      }
      else if(this.d36b==4){
        this.t36b='Sellante necesario'
      }
      else if(this.d36b==5){
        this.t36b='Sellante realizado'
      }
      else if(this.d36b==6){
        this.t36b='Caries'
      }
      else if(this.d36b==7){
        this.t36b='Obturado'
      }
      else if(this.d36b==8){
        this.t36b='Endodoncia'
      }
      else if(this.d36b==9){
        this.t36b='Pérdida'
      }
      else if(this.d36b==10){
        this.t36b='Protesis total'
      }
      else if(this.d36b==11){
        this.t36b='Protesis fija'
      }
      else if(this.d36b==12){
        this.t36b='Protesis removible'
      }
    }
  }
  cambiar36c(){
    if(this.d36c>11){
      this.d36c=1
      this.t36c='Sano'
    }else{
      this.d36c=this.d36c*1+1
      if(this.d36c==1){
        this.t36c='Sano'
      }
      else if(this.d36c==2){
        this.t36c='Extracción indicada'
      }
      else if(this.d36c==3){
        this.t36c='Pérdida por caries'
      }
      else if(this.d36c==4){
        this.t36c='Sellante necesario'
      }
      else if(this.d36c==5){
        this.t36c='Sellante realizado'
      }
      else if(this.d36c==6){
        this.t36c='Caries'
      }
      else if(this.d36c==7){
        this.t36c='Obturado'
      }
      else if(this.d36c==8){
        this.t36c='Endodoncia'
      }
      else if(this.d36c==9){
        this.t36c='Pérdida'
      }
      else if(this.d36c==10){
        this.t36c='Protesis total'
      }
      else if(this.d36c==11){
        this.t36c='Protesis fija'
      }
      else if(this.d36c==12){
        this.t36c='Protesis removible'
      }
    }
  }
  cambiar36d(){
    if(this.d36d>11){
      this.d36d=1
      this.t36d='Sano'
    }else{
      this.d36d=this.d36d*1+1
      if(this.d36d==1){
        this.t36d='Sano'
      }
      else if(this.d36d==2){
        this.t36d='Extracción indicada'
      }
      else if(this.d36d==3){
        this.t36d='Pérdida por caries'
      }
      else if(this.d36d==4){
        this.t36d='Sellante necesario'
      }
      else if(this.d36d==5){
        this.t36d='Sellante realizado'
      }
      else if(this.d36d==6){
        this.t36d='Caries'
      }
      else if(this.d36d==7){
        this.t36d='Obturado'
      }
      else if(this.d36d==8){
        this.t36d='Endodoncia'
      }
      else if(this.d36d==9){
        this.t36d='Pérdida'
      }
      else if(this.d36d==10){
        this.t36d='Protesis total'
      }
      else if(this.d36d==11){
        this.t36d='Protesis fija'
      }
      else if(this.d36d==12){
        this.t36d='Protesis removible'
      }
    }
  }
  cambiar36e(){
    if(this.d36e>11){
      this.d36e=1
      this.t36e='Sano'
    }else{
      this.d36e=this.d36e*1+1
      if(this.d36e==1){
        this.t36e='Sano'
      }
      else if(this.d36e==2){
        this.t36e='Extracción indicada'
      }
      else if(this.d36e==3){
        this.t36e='Pérdida por caries'
      }
      else if(this.d36e==4){
        this.t36e='Sellante necesario'
      }
      else if(this.d36e==5){
        this.t36e='Sellante realizado'
      }
      else if(this.d36e==6){
        this.t36e='Caries'
      }
      else if(this.d36e==7){
        this.t36e='Obturado'
      }
      else if(this.d36e==8){
        this.t36e='Endodoncia'
      }
      else if(this.d36e==9){
        this.t36e='Pérdida'
      }
      else if(this.d36e==10){
        this.t36e='Protesis total'
      }
      else if(this.d36e==11){
        this.t36e='Protesis fija'
      }
      else if(this.d36e==12){
        this.t36e='Protesis removible'
      }
    }
  }
  cambiar37a(){
    if(this.d37a>11){
      this.d37a=1
      this.t37a='Sano'
    }else{
      this.d37a=this.d37a*1+1
      if(this.d37a==1){
        this.t37a='Sano'
      }
      else if(this.d37a==2){
        this.t37a='Extracción indicada'
      }
      else if(this.d37a==3){
        this.t37a='Pérdida por caries'
      }
      else if(this.d37a==4){
        this.t37a='Sellante necesario'
      }
      else if(this.d37a==5){
        this.t37a='Sellante realizado'
      }
      else if(this.d37a==6){
        this.t37a='Caries'
      }
      else if(this.d37a==7){
        this.t37a='Obturado'
      }
      else if(this.d37a==8){
        this.t37a='Endodoncia'
      }
      else if(this.d37a==9){
        this.t37a='Pérdida'
      }
      else if(this.d37a==10){
        this.t37a='Protesis total'
      }
      else if(this.d37a==11){
        this.t37a='Protesis fija'
      }
      else if(this.d37a==12){
        this.t37a='Protesis removible'
      }
    }
  }
  cambiar37b(){
    if(this.d37b>11){
      this.d37b=1
      this.t37b='Sano'
    }else{
      this.d37b=this.d37b*1+1
      if(this.d37b==1){
        this.t37b='Sano'
      }
      else if(this.d37b==2){
        this.t37b='Extracción indicada'
      }
      else if(this.d37b==3){
        this.t37b='Pérdida por caries'
      }
      else if(this.d37b==4){
        this.t37b='Sellante necesario'
      }
      else if(this.d37b==5){
        this.t37b='Sellante realizado'
      }
      else if(this.d37b==6){
        this.t37b='Caries'
      }
      else if(this.d37b==7){
        this.t37b='Obturado'
      }
      else if(this.d37b==8){
        this.t37b='Endodoncia'
      }
      else if(this.d37b==9){
        this.t37b='Pérdida'
      }
      else if(this.d37b==10){
        this.t37b='Protesis total'
      }
      else if(this.d37b==11){
        this.t37b='Protesis fija'
      }
      else if(this.d37b==12){
        this.t37b='Protesis removible'
      }
    }
  }
  cambiar37c(){
    if(this.d37c>11){
      this.d37c=1
      this.t37c='Sano'
    }else{
      this.d37c=this.d37c*1+1
      if(this.d37c==1){
        this.t37c='Sano'
      }
      else if(this.d37c==2){
        this.t37c='Extracción indicada'
      }
      else if(this.d37c==3){
        this.t37c='Pérdida por caries'
      }
      else if(this.d37c==4){
        this.t37c='Sellante necesario'
      }
      else if(this.d37c==5){
        this.t37c='Sellante realizado'
      }
      else if(this.d37c==6){
        this.t37c='Caries'
      }
      else if(this.d37c==7){
        this.t37c='Obturado'
      }
      else if(this.d37c==8){
        this.t37c='Endodoncia'
      }
      else if(this.d37c==9){
        this.t37c='Pérdida'
      }
      else if(this.d37c==10){
        this.t37c='Protesis total'
      }
      else if(this.d37c==11){
        this.t37c='Protesis fija'
      }
      else if(this.d37c==12){
        this.t37c='Protesis removible'
      }
    }
  }
  cambiar37d(){
    if(this.d37d>11){
      this.d37d=1
      this.t37d='Sano'
    }else{
      this.d37d=this.d37d*1+1
      if(this.d37d==1){
        this.t37d='Sano'
      }
      else if(this.d37d==2){
        this.t37d='Extracción indicada'
      }
      else if(this.d37d==3){
        this.t37d='Pérdida por caries'
      }
      else if(this.d37d==4){
        this.t37d='Sellante necesario'
      }
      else if(this.d37d==5){
        this.t37d='Sellante realizado'
      }
      else if(this.d37d==6){
        this.t37d='Caries'
      }
      else if(this.d37d==7){
        this.t37d='Obturado'
      }
      else if(this.d37d==8){
        this.t37d='Endodoncia'
      }
      else if(this.d37d==9){
        this.t37d='Pérdida'
      }
      else if(this.d37d==10){
        this.t37d='Protesis total'
      }
      else if(this.d37d==11){
        this.t37d='Protesis fija'
      }
      else if(this.d37d==12){
        this.t37d='Protesis removible'
      }
    }
  }
  cambiar37e(){
    if(this.d37e>11){
      this.d37e=1
      this.t37e='Sano'
    }else{
      this.d37e=this.d37e*1+1
      if(this.d37e==1){
        this.t37e='Sano'
      }
      else if(this.d37e==2){
        this.t37e='Extracción indicada'
      }
      else if(this.d37e==3){
        this.t37e='Pérdida por caries'
      }
      else if(this.d37e==4){
        this.t37e='Sellante necesario'
      }
      else if(this.d37e==5){
        this.t37e='Sellante realizado'
      }
      else if(this.d37e==6){
        this.t37e='Caries'
      }
      else if(this.d37e==7){
        this.t37e='Obturado'
      }
      else if(this.d37e==8){
        this.t37e='Endodoncia'
      }
      else if(this.d37e==9){
        this.t37e='Pérdida'
      }
      else if(this.d37e==10){
        this.t37e='Protesis total'
      }
      else if(this.d37e==11){
        this.t37e='Protesis fija'
      }
      else if(this.d37e==12){
        this.t37e='Protesis removible'
      }
    }
  }
  cambiar38a(){
    if(this.d38a>11){
      this.d38a=1
      this.t38a='Sano'
    }else{
      this.d38a=this.d38a*1+1
      if(this.d38a==1){
        this.t38a='Sano'
      }
      else if(this.d38a==2){
        this.t38a='Extracción indicada'
      }
      else if(this.d38a==3){
        this.t38a='Pérdida por caries'
      }
      else if(this.d38a==4){
        this.t38a='Sellante necesario'
      }
      else if(this.d38a==5){
        this.t38a='Sellante realizado'
      }
      else if(this.d38a==6){
        this.t38a='Caries'
      }
      else if(this.d38a==7){
        this.t38a='Obturado'
      }
      else if(this.d38a==8){
        this.t38a='Endodoncia'
      }
      else if(this.d38a==9){
        this.t38a='Pérdida'
      }
      else if(this.d38a==10){
        this.t38a='Protesis total'
      }
      else if(this.d38a==11){
        this.t38a='Protesis fija'
      }
      else if(this.d38a==12){
        this.t38a='Protesis removible'
      }
    }
  }
  cambiar38b(){
    if(this.d38b>11){
      this.d38b=1
      this.t38b='Sano'
    }else{
      this.d38b=this.d38b*1+1
      if(this.d38b==1){
        this.t38b='Sano'
      }
      else if(this.d38b==2){
        this.t38b='Extracción indicada'
      }
      else if(this.d38b==3){
        this.t38b='Pérdida por caries'
      }
      else if(this.d38b==4){
        this.t38b='Sellante necesario'
      }
      else if(this.d38b==5){
        this.t38b='Sellante realizado'
      }
      else if(this.d38b==6){
        this.t38b='Caries'
      }
      else if(this.d38b==7){
        this.t38b='Obturado'
      }
      else if(this.d38b==8){
        this.t38b='Endodoncia'
      }
      else if(this.d38b==9){
        this.t38b='Pérdida'
      }
      else if(this.d38b==10){
        this.t38b='Protesis total'
      }
      else if(this.d38b==11){
        this.t38b='Protesis fija'
      }
      else if(this.d38b==12){
        this.t38b='Protesis removible'
      }
    }
  }
  cambiar38c(){
    if(this.d38c>11){
      this.d38c=1
      this.t38c='Sano'
    }else{
      this.d38c=this.d38c*1+1
      if(this.d38c==1){
        this.t38c='Sano'
      }
      else if(this.d38c==2){
        this.t38c='Extracción indicada'
      }
      else if(this.d38c==3){
        this.t38c='Pérdida por caries'
      }
      else if(this.d38c==4){
        this.t38c='Sellante necesario'
      }
      else if(this.d38c==5){
        this.t38c='Sellante realizado'
      }
      else if(this.d38c==6){
        this.t38c='Caries'
      }
      else if(this.d38c==7){
        this.t38c='Obturado'
      }
      else if(this.d38c==8){
        this.t38c='Endodoncia'
      }
      else if(this.d38c==9){
        this.t38c='Pérdida'
      }
      else if(this.d38c==10){
        this.t38c='Protesis total'
      }
      else if(this.d38c==11){
        this.t38c='Protesis fija'
      }
      else if(this.d38c==12){
        this.t38c='Protesis removible'
      }
    }
  }
  cambiar38d(){
    if(this.d38d>11){
      this.d38d=1
      this.t38d='Sano'
    }else{
      this.d38d=this.d38d*1+1
      if(this.d38d==1){
        this.t38d='Sano'
      }
      else if(this.d38d==2){
        this.t38d='Extracción indicada'
      }
      else if(this.d38d==3){
        this.t38d='Pérdida por caries'
      }
      else if(this.d38d==4){
        this.t38d='Sellante necesario'
      }
      else if(this.d38d==5){
        this.t38d='Sellante realizado'
      }
      else if(this.d38d==6){
        this.t38d='Caries'
      }
      else if(this.d38d==7){
        this.t38d='Obturado'
      }
      else if(this.d38d==8){
        this.t38d='Endodoncia'
      }
      else if(this.d38d==9){
        this.t38d='Pérdida'
      }
      else if(this.d38d==10){
        this.t38d='Protesis total'
      }
      else if(this.d38d==11){
        this.t38d='Protesis fija'
      }
      else if(this.d38d==12){
        this.t38d='Protesis removible'
      }
    }
  }
  cambiar38e(){
    if(this.d38e>11){
      this.d38e=1
      this.t38e='Sano'
    }else{
      this.d38e=this.d38e*1+1
      if(this.d38e==1){
        this.t38e='Sano'
      }
      else if(this.d38e==2){
        this.t38e='Extracción indicada'
      }
      else if(this.d38e==3){
        this.t38e='Pérdida por caries'
      }
      else if(this.d38e==4){
        this.t38e='Sellante necesario'
      }
      else if(this.d38e==5){
        this.t38e='Sellante realizado'
      }
      else if(this.d38e==6){
        this.t38e='Caries'
      }
      else if(this.d38e==7){
        this.t38e='Obturado'
      }
      else if(this.d38e==8){
        this.t38e='Endodoncia'
      }
      else if(this.d38e==9){
        this.t38e='Pérdida'
      }
      else if(this.d38e==10){
        this.t38e='Protesis total'
      }
      else if(this.d38e==11){
        this.t38e='Protesis fija'
      }
      else if(this.d38e==12){
        this.t38e='Protesis removible'
      }
    }
  }
  //cuadrante 4
  cambiar41a(){
    if(this.d41a>11){
      this.d41a=1
      this.t41a='Sano'
    }else{
      this.d41a=this.d41a*1+1
      if(this.d41a==1){
        this.t41a='Sano'
      }
      else if(this.d41a==2){
        this.t41a='Extracción indicada'
      }
      else if(this.d41a==3){
        this.t41a='Pérdida por caries'
      }
      else if(this.d41a==4){
        this.t41a='Sellante necesario'
      }
      else if(this.d41a==5){
        this.t41a='Sellante realizado'
      }
      else if(this.d41a==6){
        this.t41a='Caries'
      }
      else if(this.d41a==7){
        this.t41a='Obturado'
      }
      else if(this.d41a==8){
        this.t41a='Endodoncia'
      }
      else if(this.d41a==9){
        this.t41a='Pérdida'
      }
      else if(this.d41a==10){
        this.t41a='Protesis total'
      }
      else if(this.d41a==11){
        this.t41a='Protesis fija'
      }
      else if(this.d41a==12){
        this.t41a='Protesis removible'
      }
    }
  }
  cambiar41b(){
    if(this.d41b>11){
      this.d41b=1
      this.t41b='Sano'
    }else{
      this.d41b=this.d41b*1+1
      if(this.d41b==1){
        this.t41b='Sano'
      }
      else if(this.d41b==2){
        this.t41b='Extracción indicada'
      }
      else if(this.d41b==3){
        this.t41b='Pérdida por caries'
      }
      else if(this.d41b==4){
        this.t41b='Sellante necesario'
      }
      else if(this.d41b==5){
        this.t41b='Sellante realizado'
      }
      else if(this.d41b==6){
        this.t41b='Caries'
      }
      else if(this.d41b==7){
        this.t41b='Obturado'
      }
      else if(this.d41b==8){
        this.t41b='Endodoncia'
      }
      else if(this.d41b==9){
        this.t41b='Pérdida'
      }
      else if(this.d41b==10){
        this.t41b='Protesis total'
      }
      else if(this.d41b==11){
        this.t41b='Protesis fija'
      }
      else if(this.d41b==12){
        this.t41b='Protesis removible'
      }
    }
  }
  cambiar41c(){
    if(this.d41c>11){
      this.d41c=1
      this.t41c='Sano'
    }else{
      this.d41c=this.d41c*1+1
      if(this.d41c==1){
        this.t41c='Sano'
      }
      else if(this.d41c==2){
        this.t41c='Extracción indicada'
      }
      else if(this.d41c==3){
        this.t41c='Pérdida por caries'
      }
      else if(this.d41c==4){
        this.t41c='Sellante necesario'
      }
      else if(this.d41c==5){
        this.t41c='Sellante realizado'
      }
      else if(this.d41c==6){
        this.t41c='Caries'
      }
      else if(this.d41c==7){
        this.t41c='Obturado'
      }
      else if(this.d41c==8){
        this.t41c='Endodoncia'
      }
      else if(this.d41c==9){
        this.t41c='Pérdida'
      }
      else if(this.d41c==10){
        this.t41c='Protesis total'
      }
      else if(this.d41c==11){
        this.t41c='Protesis fija'
      }
      else if(this.d41c==12){
        this.t41c='Protesis removible'
      }
    }
  }
  cambiar41d(){
    if(this.d41d>11){
      this.d41d=1
      this.t41d='Sano'
    }else{
      this.d41d=this.d41d*1+1
      if(this.d41d==1){
        this.t41d='Sano'
      }
      else if(this.d41d==2){
        this.t41d='Extracción indicada'
      }
      else if(this.d41d==3){
        this.t41d='Pérdida por caries'
      }
      else if(this.d41d==4){
        this.t41d='Sellante necesario'
      }
      else if(this.d41d==5){
        this.t41d='Sellante realizado'
      }
      else if(this.d41d==6){
        this.t41d='Caries'
      }
      else if(this.d41d==7){
        this.t41d='Obturado'
      }
      else if(this.d41d==8){
        this.t41d='Endodoncia'
      }
      else if(this.d41d==9){
        this.t41d='Pérdida'
      }
      else if(this.d41d==10){
        this.t41d='Protesis total'
      }
      else if(this.d41d==11){
        this.t41d='Protesis fija'
      }
      else if(this.d41d==12){
        this.t41d='Protesis removible'
      }
    }
  }
  cambiar41e(){
    if(this.d41e>11){
      this.d41e=1
      this.t41e='Sano'
    }else{
      this.d41e=this.d41e*1+1
      if(this.d41e==1){
        this.t41e='Sano'
      }
      else if(this.d41e==2){
        this.t41e='Extracción indicada'
      }
      else if(this.d41e==3){
        this.t41e='Pérdida por caries'
      }
      else if(this.d41e==4){
        this.t41e='Sellante necesario'
      }
      else if(this.d41e==5){
        this.t41e='Sellante realizado'
      }
      else if(this.d41e==6){
        this.t41e='Caries'
      }
      else if(this.d41e==7){
        this.t41e='Obturado'
      }
      else if(this.d41e==8){
        this.t41e='Endodoncia'
      }
      else if(this.d41e==9){
        this.t41e='Pérdida'
      }
      else if(this.d41e==10){
        this.t41e='Protesis total'
      }
      else if(this.d41e==11){
        this.t41e='Protesis fija'
      }
      else if(this.d41e==12){
        this.t41e='Protesis removible'
      }
    }
  }
  cambiar42a(){
    if(this.d42a>11){
      this.d42a=1
      this.t42a='Sano'
    }else{
      this.d42a=this.d42a*1+1
      if(this.d42a==1){
        this.t42a='Sano'
      }
      else if(this.d42a==2){
        this.t42a='Extracción indicada'
      }
      else if(this.d42a==3){
        this.t42a='Pérdida por caries'
      }
      else if(this.d42a==4){
        this.t42a='Sellante necesario'
      }
      else if(this.d42a==5){
        this.t42a='Sellante realizado'
      }
      else if(this.d42a==6){
        this.t42a='Caries'
      }
      else if(this.d42a==7){
        this.t42a='Obturado'
      }
      else if(this.d42a==8){
        this.t42a='Endodoncia'
      }
      else if(this.d42a==9){
        this.t42a='Pérdida'
      }
      else if(this.d42a==10){
        this.t42a='Protesis total'
      }
      else if(this.d42a==11){
        this.t42a='Protesis fija'
      }
      else if(this.d42a==12){
        this.t42a='Protesis removible'
      }
    }
  }
  cambiar42b(){
    if(this.d42b>11){
      this.d42b=1
      this.t42b='Sano'
    }else{
      this.d42b=this.d42b*1+1
      if(this.d42b==1){
        this.t42b='Sano'
      }
      else if(this.d42b==2){
        this.t42b='Extracción indicada'
      }
      else if(this.d42b==3){
        this.t42b='Pérdida por caries'
      }
      else if(this.d42b==4){
        this.t42b='Sellante necesario'
      }
      else if(this.d42b==5){
        this.t42b='Sellante realizado'
      }
      else if(this.d42b==6){
        this.t42b='Caries'
      }
      else if(this.d42b==7){
        this.t42b='Obturado'
      }
      else if(this.d42b==8){
        this.t42b='Endodoncia'
      }
      else if(this.d42b==9){
        this.t42b='Pérdida'
      }
      else if(this.d42b==10){
        this.t42b='Protesis total'
      }
      else if(this.d42b==11){
        this.t42b='Protesis fija'
      }
      else if(this.d42b==12){
        this.t42b='Protesis removible'
      }
    }
  }
  cambiar42c(){
    if(this.d42c>11){
      this.d42c=1
      this.t42c='Sano'
    }else{
      this.d42c=this.d42c*1+1
      if(this.d42c==1){
        this.t42c='Sano'
      }
      else if(this.d42c==2){
        this.t42c='Extracción indicada'
      }
      else if(this.d42c==3){
        this.t42c='Pérdida por caries'
      }
      else if(this.d42c==4){
        this.t42c='Sellante necesario'
      }
      else if(this.d42c==5){
        this.t42c='Sellante realizado'
      }
      else if(this.d42c==6){
        this.t42c='Caries'
      }
      else if(this.d42c==7){
        this.t42c='Obturado'
      }
      else if(this.d42c==8){
        this.t42c='Endodoncia'
      }
      else if(this.d42c==9){
        this.t42c='Pérdida'
      }
      else if(this.d42c==10){
        this.t42c='Protesis total'
      }
      else if(this.d42c==11){
        this.t42c='Protesis fija'
      }
      else if(this.d42c==12){
        this.t42c='Protesis removible'
      }
    }
  }
  cambiar42d(){
    if(this.d42d>11){
      this.d42d=1
      this.t42d='Sano'
    }else{
      this.d42d=this.d42d*1+1
      if(this.d42d==1){
        this.t42d='Sano'
      }
      else if(this.d42d==2){
        this.t42d='Extracción indicada'
      }
      else if(this.d42d==3){
        this.t42d='Pérdida por caries'
      }
      else if(this.d42d==4){
        this.t42d='Sellante necesario'
      }
      else if(this.d42d==5){
        this.t42d='Sellante realizado'
      }
      else if(this.d42d==6){
        this.t42d='Caries'
      }
      else if(this.d42d==7){
        this.t42d='Obturado'
      }
      else if(this.d42d==8){
        this.t42d='Endodoncia'
      }
      else if(this.d42d==9){
        this.t42d='Pérdida'
      }
      else if(this.d42d==10){
        this.t42d='Protesis total'
      }
      else if(this.d42d==11){
        this.t42d='Protesis fija'
      }
      else if(this.d42d==12){
        this.t42d='Protesis removible'
      }
    }
  }
  cambiar42e(){
    if(this.d42e>11){
      this.d42e=1
      this.t42e='Sano'
    }else{
      this.d42e=this.d42e*1+1
      if(this.d42e==1){
        this.t42e='Sano'
      }
      else if(this.d42e==2){
        this.t42e='Extracción indicada'
      }
      else if(this.d42e==3){
        this.t42e='Pérdida por caries'
      }
      else if(this.d42e==4){
        this.t42e='Sellante necesario'
      }
      else if(this.d42e==5){
        this.t42e='Sellante realizado'
      }
      else if(this.d42e==6){
        this.t42e='Caries'
      }
      else if(this.d42e==7){
        this.t42e='Obturado'
      }
      else if(this.d42e==8){
        this.t42e='Endodoncia'
      }
      else if(this.d42e==9){
        this.t42e='Pérdida'
      }
      else if(this.d42e==10){
        this.t42e='Protesis total'
      }
      else if(this.d42e==11){
        this.t42e='Protesis fija'
      }
      else if(this.d42e==12){
        this.t42e='Protesis removible'
      }
    }
  }
  cambiar43a(){
    if(this.d43a>11){
      this.d43a=1
      this.t43a='Sano'
    }else{
      this.d43a=this.d43a*1+1
      if(this.d43a==1){
        this.t43a='Sano'
      }
      else if(this.d43a==2){
        this.t43a='Extracción indicada'
      }
      else if(this.d43a==3){
        this.t43a='Pérdida por caries'
      }
      else if(this.d43a==4){
        this.t43a='Sellante necesario'
      }
      else if(this.d43a==5){
        this.t43a='Sellante realizado'
      }
      else if(this.d43a==6){
        this.t43a='Caries'
      }
      else if(this.d43a==7){
        this.t43a='Obturado'
      }
      else if(this.d43a==8){
        this.t43a='Endodoncia'
      }
      else if(this.d43a==9){
        this.t43a='Pérdida'
      }
      else if(this.d43a==10){
        this.t43a='Protesis total'
      }
      else if(this.d43a==11){
        this.t43a='Protesis fija'
      }
      else if(this.d43a==12){
        this.t43a='Protesis removible'
      }
    }
  }
  cambiar43b(){
    if(this.d43b>11){
      this.d43b=1
      this.t43b='Sano'
    }else{
      this.d43b=this.d43b*1+1
      if(this.d43b==1){
        this.t43b='Sano'
      }
      else if(this.d43b==2){
        this.t43b='Extracción indicada'
      }
      else if(this.d43b==3){
        this.t43b='Pérdida por caries'
      }
      else if(this.d43b==4){
        this.t43b='Sellante necesario'
      }
      else if(this.d43b==5){
        this.t43b='Sellante realizado'
      }
      else if(this.d43b==6){
        this.t43b='Caries'
      }
      else if(this.d43b==7){
        this.t43b='Obturado'
      }
      else if(this.d43b==8){
        this.t43b='Endodoncia'
      }
      else if(this.d43b==9){
        this.t43b='Pérdida'
      }
      else if(this.d43b==10){
        this.t43b='Protesis total'
      }
      else if(this.d43b==11){
        this.t43b='Protesis fija'
      }
      else if(this.d43b==12){
        this.t43b='Protesis removible'
      }
    }
  }
  cambiar43c(){
    if(this.d43c>11){
      this.d43c=1
      this.t43c='Sano'
    }else{
      this.d43c=this.d43c*1+1
      if(this.d43c==1){
        this.t43c='Sano'
      }
      else if(this.d43c==2){
        this.t43c='Extracción indicada'
      }
      else if(this.d43c==3){
        this.t43c='Pérdida por caries'
      }
      else if(this.d43c==4){
        this.t43c='Sellante necesario'
      }
      else if(this.d43c==5){
        this.t43c='Sellante realizado'
      }
      else if(this.d43c==6){
        this.t43c='Caries'
      }
      else if(this.d43c==7){
        this.t43c='Obturado'
      }
      else if(this.d43c==8){
        this.t43c='Endodoncia'
      }
      else if(this.d43c==9){
        this.t43c='Pérdida'
      }
      else if(this.d43c==10){
        this.t43c='Protesis total'
      }
      else if(this.d43c==11){
        this.t43c='Protesis fija'
      }
      else if(this.d43c==12){
        this.t43c='Protesis removible'
      }
    }
  }
  cambiar43d(){
    if(this.d43d>11){
      this.d43d=1
      this.t43d='Sano'
    }else{
      this.d43d=this.d43d*1+1
      if(this.d43d==1){
        this.t43d='Sano'
      }
      else if(this.d43d==2){
        this.t43d='Extracción indicada'
      }
      else if(this.d43d==3){
        this.t43d='Pérdida por caries'
      }
      else if(this.d43d==4){
        this.t43d='Sellante necesario'
      }
      else if(this.d43d==5){
        this.t43d='Sellante realizado'
      }
      else if(this.d43d==6){
        this.t43d='Caries'
      }
      else if(this.d43d==7){
        this.t43d='Obturado'
      }
      else if(this.d43d==8){
        this.t43d='Endodoncia'
      }
      else if(this.d43d==9){
        this.t43d='Pérdida'
      }
      else if(this.d43d==10){
        this.t43d='Protesis total'
      }
      else if(this.d43d==11){
        this.t43d='Protesis fija'
      }
      else if(this.d43d==12){
        this.t43d='Protesis removible'
      }
    }
  }
  cambiar43e(){
    if(this.d43e>11){
      this.d43e=1
      this.t43e='Sano'
    }else{
      this.d43e=this.d43e*1+1
      if(this.d43e==1){
        this.t43e='Sano'
      }
      else if(this.d43e==2){
        this.t43e='Extracción indicada'
      }
      else if(this.d43e==3){
        this.t43e='Pérdida por caries'
      }
      else if(this.d43e==4){
        this.t43e='Sellante necesario'
      }
      else if(this.d43e==5){
        this.t43e='Sellante realizado'
      }
      else if(this.d43e==6){
        this.t43e='Caries'
      }
      else if(this.d43e==7){
        this.t43e='Obturado'
      }
      else if(this.d43e==8){
        this.t43e='Endodoncia'
      }
      else if(this.d43e==9){
        this.t43e='Pérdida'
      }
      else if(this.d43e==10){
        this.t43e='Protesis total'
      }
      else if(this.d43e==11){
        this.t43e='Protesis fija'
      }
      else if(this.d43e==12){
        this.t43e='Protesis removible'
      }
    }
  }
  cambiar44a(){
    if(this.d44a>11){
      this.d44a=1
      this.t44a='Sano'
    }else{
      this.d44a=this.d44a*1+1
      if(this.d44a==1){
        this.t44a='Sano'
      }
      else if(this.d44a==2){
        this.t44a='Extracción indicada'
      }
      else if(this.d44a==3){
        this.t44a='Pérdida por caries'
      }
      else if(this.d44a==4){
        this.t44a='Sellante necesario'
      }
      else if(this.d44a==5){
        this.t44a='Sellante realizado'
      }
      else if(this.d44a==6){
        this.t44a='Caries'
      }
      else if(this.d44a==7){
        this.t44a='Obturado'
      }
      else if(this.d44a==8){
        this.t44a='Endodoncia'
      }
      else if(this.d44a==9){
        this.t44a='Pérdida'
      }
      else if(this.d44a==10){
        this.t44a='Protesis total'
      }
      else if(this.d44a==11){
        this.t44a='Protesis fija'
      }
      else if(this.d44a==12){
        this.t44a='Protesis removible'
      }
    }
  }
  cambiar44b(){
    if(this.d44b>11){
      this.d44b=1
      this.t44b='Sano'
    }else{
      this.d44b=this.d44b*1+1
      if(this.d44b==1){
        this.t44b='Sano'
      }
      else if(this.d44b==2){
        this.t44b='Extracción indicada'
      }
      else if(this.d44b==3){
        this.t44b='Pérdida por caries'
      }
      else if(this.d44b==4){
        this.t44b='Sellante necesario'
      }
      else if(this.d44b==5){
        this.t44b='Sellante realizado'
      }
      else if(this.d44b==6){
        this.t44b='Caries'
      }
      else if(this.d44b==7){
        this.t44b='Obturado'
      }
      else if(this.d44b==8){
        this.t44b='Endodoncia'
      }
      else if(this.d44b==9){
        this.t44b='Pérdida'
      }
      else if(this.d44b==10){
        this.t44b='Protesis total'
      }
      else if(this.d44b==11){
        this.t44b='Protesis fija'
      }
      else if(this.d44b==12){
        this.t44b='Protesis removible'
      }
    }
  }
  cambiar44c(){
    if(this.d44c>11){
      this.d44c=1
      this.t44c='Sano'
    }else{
      this.d44c=this.d44c*1+1
      if(this.d44c==1){
        this.t44c='Sano'
      }
      else if(this.d44c==2){
        this.t44c='Extracción indicada'
      }
      else if(this.d44c==3){
        this.t44c='Pérdida por caries'
      }
      else if(this.d44c==4){
        this.t44c='Sellante necesario'
      }
      else if(this.d44c==5){
        this.t44c='Sellante realizado'
      }
      else if(this.d44c==6){
        this.t44c='Caries'
      }
      else if(this.d44c==7){
        this.t44c='Obturado'
      }
      else if(this.d44c==8){
        this.t44c='Endodoncia'
      }
      else if(this.d44c==9){
        this.t44c='Pérdida'
      }
      else if(this.d44c==10){
        this.t44c='Protesis total'
      }
      else if(this.d44c==11){
        this.t44c='Protesis fija'
      }
      else if(this.d44c==12){
        this.t44c='Protesis removible'
      }
    }
  }
  cambiar44d(){
    if(this.d44d>11){
      this.d44d=1
      this.t44d='Sano'
    }else{
      this.d44d=this.d44d*1+1
      if(this.d44d==1){
        this.t44d='Sano'
      }
      else if(this.d44d==2){
        this.t44d='Extracción indicada'
      }
      else if(this.d44d==3){
        this.t44d='Pérdida por caries'
      }
      else if(this.d44d==4){
        this.t44d='Sellante necesario'
      }
      else if(this.d44d==5){
        this.t44d='Sellante realizado'
      }
      else if(this.d44d==6){
        this.t44d='Caries'
      }
      else if(this.d44d==7){
        this.t44d='Obturado'
      }
      else if(this.d44d==8){
        this.t44d='Endodoncia'
      }
      else if(this.d44d==9){
        this.t44d='Pérdida'
      }
      else if(this.d44d==10){
        this.t44d='Protesis total'
      }
      else if(this.d44d==11){
        this.t44d='Protesis fija'
      }
      else if(this.d44d==12){
        this.t44d='Protesis removible'
      }
    }
  }
  cambiar44e(){
    if(this.d44e>11){
      this.d44e=1
      this.t44e='Sano'
    }else{
      this.d44e=this.d44e*1+1
      if(this.d44e==1){
        this.t44e='Sano'
      }
      else if(this.d44e==2){
        this.t44e='Extracción indicada'
      }
      else if(this.d44e==3){
        this.t44e='Pérdida por caries'
      }
      else if(this.d44e==4){
        this.t44e='Sellante necesario'
      }
      else if(this.d44e==5){
        this.t44e='Sellante realizado'
      }
      else if(this.d44e==6){
        this.t44e='Caries'
      }
      else if(this.d44e==7){
        this.t44e='Obturado'
      }
      else if(this.d44e==8){
        this.t44e='Endodoncia'
      }
      else if(this.d44e==9){
        this.t44e='Pérdida'
      }
      else if(this.d44e==10){
        this.t44e='Protesis total'
      }
      else if(this.d44e==11){
        this.t44e='Protesis fija'
      }
      else if(this.d44e==12){
        this.t44e='Protesis removible'
      }
    }
  }
  cambiar45a(){
    if(this.d45a>11){
      this.d45a=1
      this.t45a='Sano'
    }else{
      this.d45a=this.d45a*1+1
      if(this.d45a==1){
        this.t45a='Sano'
      }
      else if(this.d45a==2){
        this.t45a='Extracción indicada'
      }
      else if(this.d45a==3){
        this.t45a='Pérdida por caries'
      }
      else if(this.d45a==4){
        this.t45a='Sellante necesario'
      }
      else if(this.d45a==5){
        this.t45a='Sellante realizado'
      }
      else if(this.d45a==6){
        this.t45a='Caries'
      }
      else if(this.d45a==7){
        this.t45a='Obturado'
      }
      else if(this.d45a==8){
        this.t45a='Endodoncia'
      }
      else if(this.d45a==9){
        this.t45a='Pérdida'
      }
      else if(this.d45a==10){
        this.t45a='Protesis total'
      }
      else if(this.d45a==11){
        this.t45a='Protesis fija'
      }
      else if(this.d45a==12){
        this.t45a='Protesis removible'
      }
    }
  }
  cambiar45b(){
    if(this.d45b>11){
      this.d45b=1
      this.t45b='Sano'
    }else{
      this.d45b=this.d45b*1+1
      if(this.d45b==1){
        this.t45b='Sano'
      }
      else if(this.d45b==2){
        this.t45b='Extracción indicada'
      }
      else if(this.d45b==3){
        this.t45b='Pérdida por caries'
      }
      else if(this.d45b==4){
        this.t45b='Sellante necesario'
      }
      else if(this.d45b==5){
        this.t45b='Sellante realizado'
      }
      else if(this.d45b==6){
        this.t45b='Caries'
      }
      else if(this.d45b==7){
        this.t45b='Obturado'
      }
      else if(this.d45b==8){
        this.t45b='Endodoncia'
      }
      else if(this.d45b==9){
        this.t45b='Pérdida'
      }
      else if(this.d45b==10){
        this.t45b='Protesis total'
      }
      else if(this.d45b==11){
        this.t45b='Protesis fija'
      }
      else if(this.d45b==12){
        this.t45b='Protesis removible'
      }
    }
  }
  cambiar45c(){
    if(this.d45c>11){
      this.d45c=1
      this.t45c='Sano'
    }else{
      this.d45c=this.d45c*1+1
      if(this.d45c==1){
        this.t45c='Sano'
      }
      else if(this.d45c==2){
        this.t45c='Extracción indicada'
      }
      else if(this.d45c==3){
        this.t45c='Pérdida por caries'
      }
      else if(this.d45c==4){
        this.t45c='Sellante necesario'
      }
      else if(this.d45c==5){
        this.t45c='Sellante realizado'
      }
      else if(this.d45c==6){
        this.t45c='Caries'
      }
      else if(this.d45c==7){
        this.t45c='Obturado'
      }
      else if(this.d45c==8){
        this.t45c='Endodoncia'
      }
      else if(this.d45c==9){
        this.t45c='Pérdida'
      }
      else if(this.d45c==10){
        this.t45c='Protesis total'
      }
      else if(this.d45c==11){
        this.t45c='Protesis fija'
      }
      else if(this.d45c==12){
        this.t45c='Protesis removible'
      }
    }
  }
  cambiar45d(){
    if(this.d45d>11){
      this.d45d=1
      this.t45d='Sano'
    }else{
      this.d45d=this.d45d*1+1
      if(this.d45d==1){
        this.t45d='Sano'
      }
      else if(this.d45d==2){
        this.t45d='Extracción indicada'
      }
      else if(this.d45d==3){
        this.t45d='Pérdida por caries'
      }
      else if(this.d45d==4){
        this.t45d='Sellante necesario'
      }
      else if(this.d45d==5){
        this.t45d='Sellante realizado'
      }
      else if(this.d45d==6){
        this.t45d='Caries'
      }
      else if(this.d45d==7){
        this.t45d='Obturado'
      }
      else if(this.d45d==8){
        this.t45d='Endodoncia'
      }
      else if(this.d45d==9){
        this.t45d='Pérdida'
      }
      else if(this.d45d==10){
        this.t45d='Protesis total'
      }
      else if(this.d45d==11){
        this.t45d='Protesis fija'
      }
      else if(this.d45d==12){
        this.t45d='Protesis removible'
      }
    }
  }
  cambiar45e(){
    if(this.d45e>11){
      this.d45e=1
      this.t45e='Sano'
    }else{
      this.d45e=this.d45e*1+1
      if(this.d45e==1){
        this.t45e='Sano'
      }
      else if(this.d45e==2){
        this.t45e='Extracción indicada'
      }
      else if(this.d45e==3){
        this.t45e='Pérdida por caries'
      }
      else if(this.d45e==4){
        this.t45e='Sellante necesario'
      }
      else if(this.d45e==5){
        this.t45e='Sellante realizado'
      }
      else if(this.d45e==6){
        this.t45e='Caries'
      }
      else if(this.d45e==7){
        this.t45e='Obturado'
      }
      else if(this.d45e==8){
        this.t45e='Endodoncia'
      }
      else if(this.d45e==9){
        this.t45e='Pérdida'
      }
      else if(this.d45e==10){
        this.t45e='Protesis total'
      }
      else if(this.d45e==11){
        this.t45e='Protesis fija'
      }
      else if(this.d45e==12){
        this.t45e='Protesis removible'
      }
    }
  }
  cambiar46a(){
    if(this.d46a>11){
      this.d46a=1
      this.t46a='Sano'
    }else{
      this.d46a=this.d46a*1+1
      if(this.d46a==1){
        this.t46a='Sano'
      }
      else if(this.d46a==2){
        this.t46a='Extracción indicada'
      }
      else if(this.d46a==3){
        this.t46a='Pérdida por caries'
      }
      else if(this.d46a==4){
        this.t46a='Sellante necesario'
      }
      else if(this.d46a==5){
        this.t46a='Sellante realizado'
      }
      else if(this.d46a==6){
        this.t46a='Caries'
      }
      else if(this.d46a==7){
        this.t46a='Obturado'
      }
      else if(this.d46a==8){
        this.t46a='Endodoncia'
      }
      else if(this.d46a==9){
        this.t46a='Pérdida'
      }
      else if(this.d46a==10){
        this.t46a='Protesis total'
      }
      else if(this.d46a==11){
        this.t46a='Protesis fija'
      }
      else if(this.d46a==12){
        this.t46a='Protesis removible'
      }
    }
  }
  cambiar46b(){
    if(this.d46b>11){
      this.d46b=1
      this.t46b='Sano'
    }else{
      this.d46b=this.d46b*1+1
      if(this.d46b==1){
        this.t46b='Sano'
      }
      else if(this.d46b==2){
        this.t46b='Extracción indicada'
      }
      else if(this.d46b==3){
        this.t46b='Pérdida por caries'
      }
      else if(this.d46b==4){
        this.t46b='Sellante necesario'
      }
      else if(this.d46b==5){
        this.t46b='Sellante realizado'
      }
      else if(this.d46b==6){
        this.t46b='Caries'
      }
      else if(this.d46b==7){
        this.t46b='Obturado'
      }
      else if(this.d46b==8){
        this.t46b='Endodoncia'
      }
      else if(this.d46b==9){
        this.t46b='Pérdida'
      }
      else if(this.d46b==10){
        this.t46b='Protesis total'
      }
      else if(this.d46b==11){
        this.t46b='Protesis fija'
      }
      else if(this.d46b==12){
        this.t46b='Protesis removible'
      }
    }
  }
  cambiar46c(){
    if(this.d46c>11){
      this.d46c=1
      this.t46c='Sano'
    }else{
      this.d46c=this.d46c*1+1
      if(this.d46c==1){
        this.t46c='Sano'
      }
      else if(this.d46c==2){
        this.t46c='Extracción indicada'
      }
      else if(this.d46c==3){
        this.t46c='Pérdida por caries'
      }
      else if(this.d46c==4){
        this.t46c='Sellante necesario'
      }
      else if(this.d46c==5){
        this.t46c='Sellante realizado'
      }
      else if(this.d46c==6){
        this.t46c='Caries'
      }
      else if(this.d46c==7){
        this.t46c='Obturado'
      }
      else if(this.d46c==8){
        this.t46c='Endodoncia'
      }
      else if(this.d46c==9){
        this.t46c='Pérdida'
      }
      else if(this.d46c==10){
        this.t46c='Protesis total'
      }
      else if(this.d46c==11){
        this.t46c='Protesis fija'
      }
      else if(this.d46c==12){
        this.t46c='Protesis removible'
      }
    }
  }
  cambiar46d(){
    if(this.d46d>11){
      this.d46d=1
      this.t46d='Sano'
    }else{
      this.d46d=this.d46d*1+1
      if(this.d46d==1){
        this.t46d='Sano'
      }
      else if(this.d46d==2){
        this.t46d='Extracción indicada'
      }
      else if(this.d46d==3){
        this.t46d='Pérdida por caries'
      }
      else if(this.d46d==4){
        this.t46d='Sellante necesario'
      }
      else if(this.d46d==5){
        this.t46d='Sellante realizado'
      }
      else if(this.d46d==6){
        this.t46d='Caries'
      }
      else if(this.d46d==7){
        this.t46d='Obturado'
      }
      else if(this.d46d==8){
        this.t46d='Endodoncia'
      }
      else if(this.d46d==9){
        this.t46d='Pérdida'
      }
      else if(this.d46d==10){
        this.t46d='Protesis total'
      }
      else if(this.d46d==11){
        this.t46d='Protesis fija'
      }
      else if(this.d46d==12){
        this.t46d='Protesis removible'
      }
    }
  }
  cambiar46e(){
    if(this.d46e>11){
      this.d46e=1
      this.t46e='Sano'
    }else{
      this.d46e=this.d46e*1+1
      if(this.d46e==1){
        this.t46e='Sano'
      }
      else if(this.d46e==2){
        this.t46e='Extracción indicada'
      }
      else if(this.d46e==3){
        this.t46e='Pérdida por caries'
      }
      else if(this.d46e==4){
        this.t46e='Sellante necesario'
      }
      else if(this.d46e==5){
        this.t46e='Sellante realizado'
      }
      else if(this.d46e==6){
        this.t46e='Caries'
      }
      else if(this.d46e==7){
        this.t46e='Obturado'
      }
      else if(this.d46e==8){
        this.t46e='Endodoncia'
      }
      else if(this.d46e==9){
        this.t46e='Pérdida'
      }
      else if(this.d46e==10){
        this.t46e='Protesis total'
      }
      else if(this.d46e==11){
        this.t46e='Protesis fija'
      }
      else if(this.d46e==12){
        this.t46e='Protesis removible'
      }
    }
  }
  cambiar47a(){
    if(this.d47a>11){
      this.d47a=1
      this.t47a='Sano'
    }else{
      this.d47a=this.d47a*1+1
      if(this.d47a==1){
        this.t47a='Sano'
      }
      else if(this.d47a==2){
        this.t47a='Extracción indicada'
      }
      else if(this.d47a==3){
        this.t47a='Pérdida por caries'
      }
      else if(this.d47a==4){
        this.t47a='Sellante necesario'
      }
      else if(this.d47a==5){
        this.t47a='Sellante realizado'
      }
      else if(this.d47a==6){
        this.t47a='Caries'
      }
      else if(this.d47a==7){
        this.t47a='Obturado'
      }
      else if(this.d47a==8){
        this.t47a='Endodoncia'
      }
      else if(this.d47a==9){
        this.t47a='Pérdida'
      }
      else if(this.d47a==10){
        this.t47a='Protesis total'
      }
      else if(this.d47a==11){
        this.t47a='Protesis fija'
      }
      else if(this.d47a==12){
        this.t47a='Protesis removible'
      }
    }
  }
  cambiar47b(){
    if(this.d47b>11){
      this.d47b=1
      this.t47b='Sano'
    }else{
      this.d47b=this.d47b*1+1
      if(this.d47b==1){
        this.t47b='Sano'
      }
      else if(this.d47b==2){
        this.t47b='Extracción indicada'
      }
      else if(this.d47b==3){
        this.t47b='Pérdida por caries'
      }
      else if(this.d47b==4){
        this.t47b='Sellante necesario'
      }
      else if(this.d47b==5){
        this.t47b='Sellante realizado'
      }
      else if(this.d47b==6){
        this.t47b='Caries'
      }
      else if(this.d47b==7){
        this.t47b='Obturado'
      }
      else if(this.d47b==8){
        this.t47b='Endodoncia'
      }
      else if(this.d47b==9){
        this.t47b='Pérdida'
      }
      else if(this.d47b==10){
        this.t47b='Protesis total'
      }
      else if(this.d47b==11){
        this.t47b='Protesis fija'
      }
      else if(this.d47b==12){
        this.t47b='Protesis removible'
      }
    }
  }
  cambiar47c(){
    if(this.d47c>11){
      this.d47c=1
      this.t47c='Sano'
    }else{
      this.d47c=this.d47c*1+1
      if(this.d47c==1){
        this.t47c='Sano'
      }
      else if(this.d47c==2){
        this.t47c='Extracción indicada'
      }
      else if(this.d47c==3){
        this.t47c='Pérdida por caries'
      }
      else if(this.d47c==4){
        this.t47c='Sellante necesario'
      }
      else if(this.d47c==5){
        this.t47c='Sellante realizado'
      }
      else if(this.d47c==6){
        this.t47c='Caries'
      }
      else if(this.d47c==7){
        this.t47c='Obturado'
      }
      else if(this.d47c==8){
        this.t47c='Endodoncia'
      }
      else if(this.d47c==9){
        this.t47c='Pérdida'
      }
      else if(this.d47c==10){
        this.t47c='Protesis total'
      }
      else if(this.d47c==11){
        this.t47c='Protesis fija'
      }
      else if(this.d47c==12){
        this.t47c='Protesis removible'
      }
    }
  }
  cambiar47d(){
    if(this.d47d>11){
      this.d47d=1
      this.t47d='Sano'
    }else{
      this.d47d=this.d47d*1+1
      if(this.d47d==1){
        this.t47d='Sano'
      }
      else if(this.d47d==2){
        this.t47d='Extracción indicada'
      }
      else if(this.d47d==3){
        this.t47d='Pérdida por caries'
      }
      else if(this.d47d==4){
        this.t47d='Sellante necesario'
      }
      else if(this.d47d==5){
        this.t47d='Sellante realizado'
      }
      else if(this.d47d==6){
        this.t47d='Caries'
      }
      else if(this.d47d==7){
        this.t47d='Obturado'
      }
      else if(this.d47d==8){
        this.t47d='Endodoncia'
      }
      else if(this.d47d==9){
        this.t47d='Pérdida'
      }
      else if(this.d47d==10){
        this.t47d='Protesis total'
      }
      else if(this.d47d==11){
        this.t47d='Protesis fija'
      }
      else if(this.d47d==12){
        this.t47d='Protesis removible'
      }
    }
  }
  cambiar47e(){
    if(this.d47e>11){
      this.d47e=1
      this.t47e='Sano'
    }else{
      this.d47e=this.d47e*1+1
      if(this.d47e==1){
        this.t47e='Sano'
      }
      else if(this.d47e==2){
        this.t47e='Extracción indicada'
      }
      else if(this.d47e==3){
        this.t47e='Pérdida por caries'
      }
      else if(this.d47e==4){
        this.t47e='Sellante necesario'
      }
      else if(this.d47e==5){
        this.t47e='Sellante realizado'
      }
      else if(this.d47e==6){
        this.t47e='Caries'
      }
      else if(this.d47e==7){
        this.t47e='Obturado'
      }
      else if(this.d47e==8){
        this.t47e='Endodoncia'
      }
      else if(this.d47e==9){
        this.t47e='Pérdida'
      }
      else if(this.d47e==10){
        this.t47e='Protesis total'
      }
      else if(this.d47e==11){
        this.t47e='Protesis fija'
      }
      else if(this.d47e==12){
        this.t47e='Protesis removible'
      }
    }
  }
  cambiar48a(){
    if(this.d48a>11){
      this.d48a=1
      this.t48a='Sano'
    }else{
      this.d48a=this.d48a*1+1
      if(this.d48a==1){
        this.t48a='Sano'
      }
      else if(this.d48a==2){
        this.t48a='Extracción indicada'
      }
      else if(this.d48a==3){
        this.t48a='Pérdida por caries'
      }
      else if(this.d48a==4){
        this.t48a='Sellante necesario'
      }
      else if(this.d48a==5){
        this.t48a='Sellante realizado'
      }
      else if(this.d48a==6){
        this.t48a='Caries'
      }
      else if(this.d48a==7){
        this.t48a='Obturado'
      }
      else if(this.d48a==8){
        this.t48a='Endodoncia'
      }
      else if(this.d48a==9){
        this.t48a='Pérdida'
      }
      else if(this.d48a==10){
        this.t48a='Protesis total'
      }
      else if(this.d48a==11){
        this.t48a='Protesis fija'
      }
      else if(this.d48a==12){
        this.t48a='Protesis removible'
      }
    }
  }
  cambiar48b(){
    if(this.d48b>11){
      this.d48b=1
      this.t48b='Sano'
    }else{
      this.d48b=this.d48b*1+1
      if(this.d48b==1){
        this.t48b='Sano'
      }
      else if(this.d48b==2){
        this.t48b='Extracción indicada'
      }
      else if(this.d48b==3){
        this.t48b='Pérdida por caries'
      }
      else if(this.d48b==4){
        this.t48b='Sellante necesario'
      }
      else if(this.d48b==5){
        this.t48b='Sellante realizado'
      }
      else if(this.d48b==6){
        this.t48b='Caries'
      }
      else if(this.d48b==7){
        this.t48b='Obturado'
      }
      else if(this.d48b==8){
        this.t48b='Endodoncia'
      }
      else if(this.d48b==9){
        this.t48b='Pérdida'
      }
      else if(this.d48b==10){
        this.t48b='Protesis total'
      }
      else if(this.d48b==11){
        this.t48b='Protesis fija'
      }
      else if(this.d48b==12){
        this.t48b='Protesis removible'
      }
    }
  }
  cambiar48c(){
    if(this.d48c>11){
      this.d48c=1
      this.t48c='Sano'
    }else{
      this.d48c=this.d48c*1+1
      if(this.d48c==1){
        this.t48c='Sano'
      }
      else if(this.d48c==2){
        this.t48c='Extracción indicada'
      }
      else if(this.d48c==3){
        this.t48c='Pérdida por caries'
      }
      else if(this.d48c==4){
        this.t48c='Sellante necesario'
      }
      else if(this.d48c==5){
        this.t48c='Sellante realizado'
      }
      else if(this.d48c==6){
        this.t48c='Caries'
      }
      else if(this.d48c==7){
        this.t48c='Obturado'
      }
      else if(this.d48c==8){
        this.t48c='Endodoncia'
      }
      else if(this.d48c==9){
        this.t48c='Pérdida'
      }
      else if(this.d48c==10){
        this.t48c='Protesis total'
      }
      else if(this.d48c==11){
        this.t48c='Protesis fija'
      }
      else if(this.d48c==12){
        this.t48c='Protesis removible'
      }
    }
  }
  cambiar48d(){
    if(this.d48d>11){
      this.d48d=1
      this.t48d='Sano'
    }else{
      this.d48d=this.d48d*1+1
      if(this.d48d==1){
        this.t48d='Sano'
      }
      else if(this.d48d==2){
        this.t48d='Extracción indicada'
      }
      else if(this.d48d==3){
        this.t48d='Pérdida por caries'
      }
      else if(this.d48d==4){
        this.t48d='Sellante necesario'
      }
      else if(this.d48d==5){
        this.t48d='Sellante realizado'
      }
      else if(this.d48d==6){
        this.t48d='Caries'
      }
      else if(this.d48d==7){
        this.t48d='Obturado'
      }
      else if(this.d48d==8){
        this.t48d='Endodoncia'
      }
      else if(this.d48d==9){
        this.t48d='Pérdida'
      }
      else if(this.d48d==10){
        this.t48d='Protesis total'
      }
      else if(this.d48d==11){
        this.t48d='Protesis fija'
      }
      else if(this.d48d==12){
        this.t48d='Protesis removible'
      }
    }
  }
  cambiar48e(){
    if(this.d48e>11){
      this.d48e=1
      this.t48e='Sano'
    }else{
      this.d48e=this.d48e*1+1
      if(this.d48e==1){
        this.t48e='Sano'
      }
      else if(this.d48e==2){
        this.t48e='Extracción indicada'
      }
      else if(this.d48e==3){
        this.t48e='Pérdida por caries'
      }
      else if(this.d48e==4){
        this.t48e='Sellante necesario'
      }
      else if(this.d48e==5){
        this.t48e='Sellante realizado'
      }
      else if(this.d48e==6){
        this.t48e='Caries'
      }
      else if(this.d48e==7){
        this.t48e='Obturado'
      }
      else if(this.d48e==8){
        this.t48e='Endodoncia'
      }
      else if(this.d48e==9){
        this.t48e='Pérdida'
      }
      else if(this.d48e==10){
        this.t48e='Protesis total'
      }
      else if(this.d48e==11){
        this.t48e='Protesis fija'
      }
      else if(this.d48e==12){
        this.t48e='Protesis removible'
      }
    }
  }
  //cuandrante 5
  cambiar51a(){
    if(this.d51a>11){
      this.d51a=1
      this.t51a='Sano'
    }else{
      this.d51a=this.d51a*1+1
      if(this.d51a==1){
        this.t51a='Sano'
      }
      else if(this.d51a==2){
        this.t51a='Extracción indicada'
      }
      else if(this.d51a==3){
        this.t51a='Pérdida por caries'
      }
      else if(this.d51a==4){
        this.t51a='Sellante necesario'
      }
      else if(this.d51a==5){
        this.t51a='Sellante realizado'
      }
      else if(this.d51a==6){
        this.t51a='Caries'
      }
      else if(this.d51a==7){
        this.t51a='Obturado'
      }
      else if(this.d51a==8){
        this.t51a='Endodoncia'
      }
      else if(this.d51a==9){
        this.t51a='Pérdida'
      }
      else if(this.d51a==10){
        this.t51a='Protesis total'
      }
      else if(this.d51a==11){
        this.t51a='Protesis fija'
      }
      else if(this.d51a==12){
        this.t51a='Protesis removible'
      }
    }
  }
  cambiar51b(){
    if(this.d51b>11){
      this.d51b=1
      this.t51b='Sano'
    }else{
      this.d51b=this.d51b*1+1
      if(this.d51b==1){
        this.t51b='Sano'
      }
      else if(this.d51b==2){
        this.t51b='Extracción indicada'
      }
      else if(this.d51b==3){
        this.t51b='Pérdida por caries'
      }
      else if(this.d51b==4){
        this.t51b='Sellante necesario'
      }
      else if(this.d51b==5){
        this.t51b='Sellante realizado'
      }
      else if(this.d51b==6){
        this.t51b='Caries'
      }
      else if(this.d51b==7){
        this.t51b='Obturado'
      }
      else if(this.d51b==8){
        this.t51b='Endodoncia'
      }
      else if(this.d51b==9){
        this.t51b='Pérdida'
      }
      else if(this.d51b==10){
        this.t51b='Protesis total'
      }
      else if(this.d51b==11){
        this.t51b='Protesis fija'
      }
      else if(this.d51b==12){
        this.t51b='Protesis removible'
      }
    }
  }
  cambiar51c(){
    if(this.d51c>11){
      this.d51c=1
      this.t51c='Sano'
    }else{
      this.d51c=this.d51c*1+1
      if(this.d51c==1){
        this.t51c='Sano'
      }
      else if(this.d51c==2){
        this.t51c='Extracción indicada'
      }
      else if(this.d51c==3){
        this.t51c='Pérdida por caries'
      }
      else if(this.d51c==4){
        this.t51c='Sellante necesario'
      }
      else if(this.d51c==5){
        this.t51c='Sellante realizado'
      }
      else if(this.d51c==6){
        this.t51c='Caries'
      }
      else if(this.d51c==7){
        this.t51c='Obturado'
      }
      else if(this.d51c==8){
        this.t51c='Endodoncia'
      }
      else if(this.d51c==9){
        this.t51c='Pérdida'
      }
      else if(this.d51c==10){
        this.t51c='Protesis total'
      }
      else if(this.d51c==11){
        this.t51c='Protesis fija'
      }
      else if(this.d51c==12){
        this.t51c='Protesis removible'
      }
    }
  }
  cambiar51d(){
    if(this.d51d>11){
      this.d51d=1
      this.t51d='Sano'
    }else{
      this.d51d=this.d51d*1+1
      if(this.d51d==1){
        this.t51d='Sano'
      }
      else if(this.d51d==2){
        this.t51d='Extracción indicada'
      }
      else if(this.d51d==3){
        this.t51d='Pérdida por caries'
      }
      else if(this.d51d==4){
        this.t51d='Sellante necesario'
      }
      else if(this.d51d==5){
        this.t51d='Sellante realizado'
      }
      else if(this.d51d==6){
        this.t51d='Caries'
      }
      else if(this.d51d==7){
        this.t51d='Obturado'
      }
      else if(this.d51d==8){
        this.t51d='Endodoncia'
      }
      else if(this.d51d==9){
        this.t51d='Pérdida'
      }
      else if(this.d51d==10){
        this.t51d='Protesis total'
      }
      else if(this.d51d==11){
        this.t51d='Protesis fija'
      }
      else if(this.d51d==12){
        this.t51d='Protesis removible'
      }
    }
  }
  cambiar51e(){
    if(this.d51e>11){
      this.d51e=1
      this.t51e='Sano'
    }else{
      this.d51e=this.d51e*1+1
      if(this.d51e==1){
        this.t51e='Sano'
      }
      else if(this.d51e==2){
        this.t51e='Extracción indicada'
      }
      else if(this.d51e==3){
        this.t51e='Pérdida por caries'
      }
      else if(this.d51e==4){
        this.t51e='Sellante necesario'
      }
      else if(this.d51e==5){
        this.t51e='Sellante realizado'
      }
      else if(this.d51e==6){
        this.t51e='Caries'
      }
      else if(this.d51e==7){
        this.t51e='Obturado'
      }
      else if(this.d51e==8){
        this.t51e='Endodoncia'
      }
      else if(this.d51e==9){
        this.t51e='Pérdida'
      }
      else if(this.d51e==10){
        this.t51e='Protesis total'
      }
      else if(this.d51e==11){
        this.t51e='Protesis fija'
      }
      else if(this.d51e==12){
        this.t51e='Protesis removible'
      }
    }
  }
  cambiar52a(){
    if(this.d52a>11){
      this.d52a=1
      this.t52a='Sano'
    }else{
      this.d52a=this.d52a*1+1
      if(this.d52a==1){
        this.t52a='Sano'
      }
      else if(this.d52a==2){
        this.t52a='Extracción indicada'
      }
      else if(this.d52a==3){
        this.t52a='Pérdida por caries'
      }
      else if(this.d52a==4){
        this.t52a='Sellante necesario'
      }
      else if(this.d52a==5){
        this.t52a='Sellante realizado'
      }
      else if(this.d52a==6){
        this.t52a='Caries'
      }
      else if(this.d52a==7){
        this.t52a='Obturado'
      }
      else if(this.d52a==8){
        this.t52a='Endodoncia'
      }
      else if(this.d52a==9){
        this.t52a='Pérdida'
      }
      else if(this.d52a==10){
        this.t52a='Protesis total'
      }
      else if(this.d52a==11){
        this.t52a='Protesis fija'
      }
      else if(this.d52a==12){
        this.t52a='Protesis removible'
      }
    }
  }
  cambiar52b(){
    if(this.d52b>11){
      this.d52b=1
      this.t52b='Sano'
    }else{
      this.d52b=this.d52b*1+1
      if(this.d52b==1){
        this.t52b='Sano'
      }
      else if(this.d52b==2){
        this.t52b='Extracción indicada'
      }
      else if(this.d52b==3){
        this.t52b='Pérdida por caries'
      }
      else if(this.d52b==4){
        this.t52b='Sellante necesario'
      }
      else if(this.d52b==5){
        this.t52b='Sellante realizado'
      }
      else if(this.d52b==6){
        this.t52b='Caries'
      }
      else if(this.d52b==7){
        this.t52b='Obturado'
      }
      else if(this.d52b==8){
        this.t52b='Endodoncia'
      }
      else if(this.d52b==9){
        this.t52b='Pérdida'
      }
      else if(this.d52b==10){
        this.t52b='Protesis total'
      }
      else if(this.d52b==11){
        this.t52b='Protesis fija'
      }
      else if(this.d52b==12){
        this.t52b='Protesis removible'
      }
    }
  }
  cambiar52c(){
    if(this.d52c>11){
      this.d52c=1
      this.t52c='Sano'
    }else{
      this.d52c=this.d52c*1+1
      if(this.d52c==1){
        this.t52c='Sano'
      }
      else if(this.d52c==2){
        this.t52c='Extracción indicada'
      }
      else if(this.d52c==3){
        this.t52c='Pérdida por caries'
      }
      else if(this.d52c==4){
        this.t52c='Sellante necesario'
      }
      else if(this.d52c==5){
        this.t52c='Sellante realizado'
      }
      else if(this.d52c==6){
        this.t52c='Caries'
      }
      else if(this.d52c==7){
        this.t52c='Obturado'
      }
      else if(this.d52c==8){
        this.t52c='Endodoncia'
      }
      else if(this.d52c==9){
        this.t52c='Pérdida'
      }
      else if(this.d52c==10){
        this.t52c='Protesis total'
      }
      else if(this.d52c==11){
        this.t52c='Protesis fija'
      }
      else if(this.d52c==12){
        this.t52c='Protesis removible'
      }
    }
  }
  cambiar52d(){
    if(this.d52d>11){
      this.d52d=1
      this.t52d='Sano'
    }else{
      this.d52d=this.d52d*1+1
      if(this.d52d==1){
        this.t52d='Sano'
      }
      else if(this.d52d==2){
        this.t52d='Extracción indicada'
      }
      else if(this.d52d==3){
        this.t52d='Pérdida por caries'
      }
      else if(this.d52d==4){
        this.t52d='Sellante necesario'
      }
      else if(this.d52d==5){
        this.t52d='Sellante realizado'
      }
      else if(this.d52d==6){
        this.t52d='Caries'
      }
      else if(this.d52d==7){
        this.t52d='Obturado'
      }
      else if(this.d52d==8){
        this.t52d='Endodoncia'
      }
      else if(this.d52d==9){
        this.t52d='Pérdida'
      }
      else if(this.d52d==10){
        this.t52d='Protesis total'
      }
      else if(this.d52d==11){
        this.t52d='Protesis fija'
      }
      else if(this.d52d==12){
        this.t52d='Protesis removible'
      }
    }
  }
  cambiar52e(){
    if(this.d52e>11){
      this.d52e=1
      this.t52e='Sano'
    }else{
      this.d52e=this.d52e*1+1
      if(this.d52e==1){
        this.t52e='Sano'
      }
      else if(this.d52e==2){
        this.t52e='Extracción indicada'
      }
      else if(this.d52e==3){
        this.t52e='Pérdida por caries'
      }
      else if(this.d52e==4){
        this.t52e='Sellante necesario'
      }
      else if(this.d52e==5){
        this.t52e='Sellante realizado'
      }
      else if(this.d52e==6){
        this.t52e='Caries'
      }
      else if(this.d52e==7){
        this.t52e='Obturado'
      }
      else if(this.d52e==8){
        this.t52e='Endodoncia'
      }
      else if(this.d52e==9){
        this.t52e='Pérdida'
      }
      else if(this.d52e==10){
        this.t52e='Protesis total'
      }
      else if(this.d52e==11){
        this.t52e='Protesis fija'
      }
      else if(this.d52e==12){
        this.t52e='Protesis removible'
      }
    }
  }
  cambiar53a(){
    if(this.d53a>11){
      this.d53a=1
      this.t53a='Sano'
    }else{
      this.d53a=this.d53a*1+1
      if(this.d53a==1){
        this.t53a='Sano'
      }
      else if(this.d53a==2){
        this.t53a='Extracción indicada'
      }
      else if(this.d53a==3){
        this.t53a='Pérdida por caries'
      }
      else if(this.d53a==4){
        this.t53a='Sellante necesario'
      }
      else if(this.d53a==5){
        this.t53a='Sellante realizado'
      }
      else if(this.d53a==6){
        this.t53a='Caries'
      }
      else if(this.d53a==7){
        this.t53a='Obturado'
      }
      else if(this.d53a==8){
        this.t53a='Endodoncia'
      }
      else if(this.d53a==9){
        this.t53a='Pérdida'
      }
      else if(this.d53a==10){
        this.t53a='Protesis total'
      }
      else if(this.d53a==11){
        this.t53a='Protesis fija'
      }
      else if(this.d53a==12){
        this.t53a='Protesis removible'
      }
    }
  }
  cambiar53b(){
    if(this.d53b>11){
      this.d53b=1
      this.t53b='Sano'
    }else{
      this.d53b=this.d53b*1+1
      if(this.d53b==1){
        this.t53b='Sano'
      }
      else if(this.d53b==2){
        this.t53b='Extracción indicada'
      }
      else if(this.d53b==3){
        this.t53b='Pérdida por caries'
      }
      else if(this.d53b==4){
        this.t53b='Sellante necesario'
      }
      else if(this.d53b==5){
        this.t53b='Sellante realizado'
      }
      else if(this.d53b==6){
        this.t53b='Caries'
      }
      else if(this.d53b==7){
        this.t53b='Obturado'
      }
      else if(this.d53b==8){
        this.t53b='Endodoncia'
      }
      else if(this.d53b==9){
        this.t53b='Pérdida'
      }
      else if(this.d53b==10){
        this.t53b='Protesis total'
      }
      else if(this.d53b==11){
        this.t53b='Protesis fija'
      }
      else if(this.d53b==12){
        this.t53b='Protesis removible'
      }
    }
  }
  cambiar53c(){
    if(this.d53c>11){
      this.d53c=1
      this.t53c='Sano'
    }else{
      this.d53c=this.d53c*1+1
      if(this.d53c==1){
        this.t53c='Sano'
      }
      else if(this.d53c==2){
        this.t53c='Extracción indicada'
      }
      else if(this.d53c==3){
        this.t53c='Pérdida por caries'
      }
      else if(this.d53c==4){
        this.t53c='Sellante necesario'
      }
      else if(this.d53c==5){
        this.t53c='Sellante realizado'
      }
      else if(this.d53c==6){
        this.t53c='Caries'
      }
      else if(this.d53c==7){
        this.t53c='Obturado'
      }
      else if(this.d53c==8){
        this.t53c='Endodoncia'
      }
      else if(this.d53c==9){
        this.t53c='Pérdida'
      }
      else if(this.d53c==10){
        this.t53c='Protesis total'
      }
      else if(this.d53c==11){
        this.t53c='Protesis fija'
      }
      else if(this.d53c==12){
        this.t53c='Protesis removible'
      }
    }
  }
  cambiar53d(){
    if(this.d53d>11){
      this.d53d=1
      this.t53d='Sano'
    }else{
      this.d53d=this.d53d*1+1
      if(this.d53d==1){
        this.t53d='Sano'
      }
      else if(this.d53d==2){
        this.t53d='Extracción indicada'
      }
      else if(this.d53d==3){
        this.t53d='Pérdida por caries'
      }
      else if(this.d53d==4){
        this.t53d='Sellante necesario'
      }
      else if(this.d53d==5){
        this.t53d='Sellante realizado'
      }
      else if(this.d53d==6){
        this.t53d='Caries'
      }
      else if(this.d53d==7){
        this.t53d='Obturado'
      }
      else if(this.d53d==8){
        this.t53d='Endodoncia'
      }
      else if(this.d53d==9){
        this.t53d='Pérdida'
      }
      else if(this.d53d==10){
        this.t53d='Protesis total'
      }
      else if(this.d53d==11){
        this.t53d='Protesis fija'
      }
      else if(this.d53d==12){
        this.t53d='Protesis removible'
      }
    }
  }
  cambiar53e(){
    if(this.d53e>11){
      this.d53e=1
      this.t53e='Sano'
    }else{
      this.d53e=this.d53e*1+1
      if(this.d53e==1){
        this.t53e='Sano'
      }
      else if(this.d53e==2){
        this.t53e='Extracción indicada'
      }
      else if(this.d53e==3){
        this.t53e='Pérdida por caries'
      }
      else if(this.d53e==4){
        this.t53e='Sellante necesario'
      }
      else if(this.d53e==5){
        this.t53e='Sellante realizado'
      }
      else if(this.d53e==6){
        this.t53e='Caries'
      }
      else if(this.d53e==7){
        this.t53e='Obturado'
      }
      else if(this.d53e==8){
        this.t53e='Endodoncia'
      }
      else if(this.d53e==9){
        this.t53e='Pérdida'
      }
      else if(this.d53e==10){
        this.t53e='Protesis total'
      }
      else if(this.d53e==11){
        this.t53e='Protesis fija'
      }
      else if(this.d53e==12){
        this.t53e='Protesis removible'
      }
    }
  }
  cambiar54a(){
    if(this.d54a>11){
      this.d54a=1
      this.t54a='Sano'
    }else{
      this.d54a=this.d54a*1+1
      if(this.d54a==1){
        this.t54a='Sano'
      }
      else if(this.d54a==2){
        this.t54a='Extracción indicada'
      }
      else if(this.d54a==3){
        this.t54a='Pérdida por caries'
      }
      else if(this.d54a==4){
        this.t54a='Sellante necesario'
      }
      else if(this.d54a==5){
        this.t54a='Sellante realizado'
      }
      else if(this.d54a==6){
        this.t54a='Caries'
      }
      else if(this.d54a==7){
        this.t54a='Obturado'
      }
      else if(this.d54a==8){
        this.t54a='Endodoncia'
      }
      else if(this.d54a==9){
        this.t54a='Pérdida'
      }
      else if(this.d54a==10){
        this.t54a='Protesis total'
      }
      else if(this.d54a==11){
        this.t54a='Protesis fija'
      }
      else if(this.d54a==12){
        this.t54a='Protesis removible'
      }
    }
  }
  cambiar54b(){
    if(this.d54b>11){
      this.d54b=1
      this.t54b='Sano'
    }else{
      this.d54b=this.d54b*1+1
      if(this.d54b==1){
        this.t54b='Sano'
      }
      else if(this.d54b==2){
        this.t54b='Extracción indicada'
      }
      else if(this.d54b==3){
        this.t54b='Pérdida por caries'
      }
      else if(this.d54b==4){
        this.t54b='Sellante necesario'
      }
      else if(this.d54b==5){
        this.t54b='Sellante realizado'
      }
      else if(this.d54b==6){
        this.t54b='Caries'
      }
      else if(this.d54b==7){
        this.t54b='Obturado'
      }
      else if(this.d54b==8){
        this.t54b='Endodoncia'
      }
      else if(this.d54b==9){
        this.t54b='Pérdida'
      }
      else if(this.d54b==10){
        this.t54b='Protesis total'
      }
      else if(this.d54b==11){
        this.t54b='Protesis fija'
      }
      else if(this.d54b==12){
        this.t54b='Protesis removible'
      }
    }
  }
  cambiar54c(){
    if(this.d54c>11){
      this.d54c=1
      this.t54c='Sano'
    }else{
      this.d54c=this.d54c*1+1
      if(this.d54c==1){
        this.t54c='Sano'
      }
      else if(this.d54c==2){
        this.t54c='Extracción indicada'
      }
      else if(this.d54c==3){
        this.t54c='Pérdida por caries'
      }
      else if(this.d54c==4){
        this.t54c='Sellante necesario'
      }
      else if(this.d54c==5){
        this.t54c='Sellante realizado'
      }
      else if(this.d54c==6){
        this.t54c='Caries'
      }
      else if(this.d54c==7){
        this.t54c='Obturado'
      }
      else if(this.d54c==8){
        this.t54c='Endodoncia'
      }
      else if(this.d54c==9){
        this.t54c='Pérdida'
      }
      else if(this.d54c==10){
        this.t54c='Protesis total'
      }
      else if(this.d54c==11){
        this.t54c='Protesis fija'
      }
      else if(this.d54c==12){
        this.t54c='Protesis removible'
      }
    }
  }
  cambiar54d(){
    if(this.d54d>11){
      this.d54d=1
      this.t54d='Sano'
    }else{
      this.d54d=this.d54d*1+1
      if(this.d54d==1){
        this.t54d='Sano'
      }
      else if(this.d54d==2){
        this.t54d='Extracción indicada'
      }
      else if(this.d54d==3){
        this.t54d='Pérdida por caries'
      }
      else if(this.d54d==4){
        this.t54d='Sellante necesario'
      }
      else if(this.d54d==5){
        this.t54d='Sellante realizado'
      }
      else if(this.d54d==6){
        this.t54d='Caries'
      }
      else if(this.d54d==7){
        this.t54d='Obturado'
      }
      else if(this.d54d==8){
        this.t54d='Endodoncia'
      }
      else if(this.d54d==9){
        this.t54d='Pérdida'
      }
      else if(this.d54d==10){
        this.t54d='Protesis total'
      }
      else if(this.d54d==11){
        this.t54d='Protesis fija'
      }
      else if(this.d54d==12){
        this.t54d='Protesis removible'
      }
    }
  }
  cambiar54e(){
    if(this.d54e>11){
      this.d54e=1
      this.t54e='Sano'
    }else{
      this.d54e=this.d54e*1+1
      if(this.d54e==1){
        this.t54e='Sano'
      }
      else if(this.d54e==2){
        this.t54e='Extracción indicada'
      }
      else if(this.d54e==3){
        this.t54e='Pérdida por caries'
      }
      else if(this.d54e==4){
        this.t54e='Sellante necesario'
      }
      else if(this.d54e==5){
        this.t54e='Sellante realizado'
      }
      else if(this.d54e==6){
        this.t54e='Caries'
      }
      else if(this.d54e==7){
        this.t54e='Obturado'
      }
      else if(this.d54e==8){
        this.t54e='Endodoncia'
      }
      else if(this.d54e==9){
        this.t54e='Pérdida'
      }
      else if(this.d54e==10){
        this.t54e='Protesis total'
      }
      else if(this.d54e==11){
        this.t54e='Protesis fija'
      }
      else if(this.d54e==12){
        this.t54e='Protesis removible'
      }
    }
  }
  cambiar55a(){
    if(this.d55a>11){
      this.d55a=1
      this.t55a='Sano'
    }else{
      this.d55a=this.d55a*1+1
      if(this.d55a==1){
        this.t55a='Sano'
      }
      else if(this.d55a==2){
        this.t55a='Extracción indicada'
      }
      else if(this.d55a==3){
        this.t55a='Pérdida por caries'
      }
      else if(this.d55a==4){
        this.t55a='Sellante necesario'
      }
      else if(this.d55a==5){
        this.t55a='Sellante realizado'
      }
      else if(this.d55a==6){
        this.t55a='Caries'
      }
      else if(this.d55a==7){
        this.t55a='Obturado'
      }
      else if(this.d55a==8){
        this.t55a='Endodoncia'
      }
      else if(this.d55a==9){
        this.t55a='Pérdida'
      }
      else if(this.d55a==10){
        this.t55a='Protesis total'
      }
      else if(this.d55a==11){
        this.t55a='Protesis fija'
      }
      else if(this.d55a==12){
        this.t55a='Protesis removible'
      }
    }
  }
  cambiar55b(){
    if(this.d55b>11){
      this.d55b=1
      this.t55b='Sano'
    }else{
      this.d55b=this.d55b*1+1
      if(this.d55b==1){
        this.t55b='Sano'
      }
      else if(this.d55b==2){
        this.t55b='Extracción indicada'
      }
      else if(this.d55b==3){
        this.t55b='Pérdida por caries'
      }
      else if(this.d55b==4){
        this.t55b='Sellante necesario'
      }
      else if(this.d55b==5){
        this.t55b='Sellante realizado'
      }
      else if(this.d55b==6){
        this.t55b='Caries'
      }
      else if(this.d55b==7){
        this.t55b='Obturado'
      }
      else if(this.d55b==8){
        this.t55b='Endodoncia'
      }
      else if(this.d55b==9){
        this.t55b='Pérdida'
      }
      else if(this.d55b==10){
        this.t55b='Protesis total'
      }
      else if(this.d55b==11){
        this.t55b='Protesis fija'
      }
      else if(this.d55b==12){
        this.t55b='Protesis removible'
      }
    }
  }
  cambiar55c(){
    if(this.d55c>11){
      this.d55c=1
      this.t55c='Sano'
    }else{
      this.d55c=this.d55c*1+1
      if(this.d55c==1){
        this.t55c='Sano'
      }
      else if(this.d55c==2){
        this.t55c='Extracción indicada'
      }
      else if(this.d55c==3){
        this.t55c='Pérdida por caries'
      }
      else if(this.d55c==4){
        this.t55c='Sellante necesario'
      }
      else if(this.d55c==5){
        this.t55c='Sellante realizado'
      }
      else if(this.d55c==6){
        this.t55c='Caries'
      }
      else if(this.d55c==7){
        this.t55c='Obturado'
      }
      else if(this.d55c==8){
        this.t55c='Endodoncia'
      }
      else if(this.d55c==9){
        this.t55c='Pérdida'
      }
      else if(this.d55c==10){
        this.t55c='Protesis total'
      }
      else if(this.d55c==11){
        this.t55c='Protesis fija'
      }
      else if(this.d55c==12){
        this.t55c='Protesis removible'
      }
    }
  }
  cambiar55d(){
    if(this.d55d>11){
      this.d55d=1
      this.t55d='Sano'
    }else{
      this.d55d=this.d55d*1+1
      if(this.d55d==1){
        this.t55d='Sano'
      }
      else if(this.d55d==2){
        this.t55d='Extracción indicada'
      }
      else if(this.d55d==3){
        this.t55d='Pérdida por caries'
      }
      else if(this.d55d==4){
        this.t55d='Sellante necesario'
      }
      else if(this.d55d==5){
        this.t55d='Sellante realizado'
      }
      else if(this.d55d==6){
        this.t55d='Caries'
      }
      else if(this.d55d==7){
        this.t55d='Obturado'
      }
      else if(this.d55d==8){
        this.t55d='Endodoncia'
      }
      else if(this.d55d==9){
        this.t55d='Pérdida'
      }
      else if(this.d55d==10){
        this.t55d='Protesis total'
      }
      else if(this.d55d==11){
        this.t55d='Protesis fija'
      }
      else if(this.d55d==12){
        this.t55d='Protesis removible'
      }
    }
  }
  cambiar55e(){
    if(this.d55e>11){
      this.d55e=1
      this.t55e='Sano'
    }else{
      this.d55e=this.d55e*1+1
      if(this.d55e==1){
        this.t55e='Sano'
      }
      else if(this.d55e==2){
        this.t55e='Extracción indicada'
      }
      else if(this.d55e==3){
        this.t55e='Pérdida por caries'
      }
      else if(this.d55e==4){
        this.t55e='Sellante necesario'
      }
      else if(this.d55e==5){
        this.t55e='Sellante realizado'
      }
      else if(this.d55e==6){
        this.t55e='Caries'
      }
      else if(this.d55e==7){
        this.t55e='Obturado'
      }
      else if(this.d55e==8){
        this.t55e='Endodoncia'
      }
      else if(this.d55e==9){
        this.t55e='Pérdida'
      }
      else if(this.d55e==10){
        this.t55e='Protesis total'
      }
      else if(this.d55e==11){
        this.t55e='Protesis fija'
      }
      else if(this.d55e==12){
        this.t55e='Protesis removible'
      }
    }
  }
  //cuadrante 6
  cambiar61a(){
    if(this.d61a>11){
      this.d61a=1
      this.t61a='Sano'
    }else{
      this.d61a=this.d61a*1+1
      if(this.d61a==1){
        this.t61a='Sano'
      }
      else if(this.d61a==2){
        this.t61a='Extracción indicada'
      }
      else if(this.d61a==3){
        this.t61a='Pérdida por caries'
      }
      else if(this.d61a==4){
        this.t61a='Sellante necesario'
      }
      else if(this.d61a==5){
        this.t61a='Sellante realizado'
      }
      else if(this.d61a==6){
        this.t61a='Caries'
      }
      else if(this.d61a==7){
        this.t61a='Obturado'
      }
      else if(this.d61a==8){
        this.t61a='Endodoncia'
      }
      else if(this.d61a==9){
        this.t61a='Pérdida'
      }
      else if(this.d61a==10){
        this.t61a='Protesis total'
      }
      else if(this.d61a==11){
        this.t61a='Protesis fija'
      }
      else if(this.d61a==12){
        this.t61a='Protesis removible'
      }
    }
  }
  cambiar61b(){
    if(this.d61b>11){
      this.d61b=1
      this.t61b='Sano'
    }else{
      this.d61b=this.d61b*1+1
      if(this.d61b==1){
        this.t61b='Sano'
      }
      else if(this.d61b==2){
        this.t61b='Extracción indicada'
      }
      else if(this.d61b==3){
        this.t61b='Pérdida por caries'
      }
      else if(this.d61b==4){
        this.t61b='Sellante necesario'
      }
      else if(this.d61b==5){
        this.t61b='Sellante realizado'
      }
      else if(this.d61b==6){
        this.t61b='Caries'
      }
      else if(this.d61b==7){
        this.t61b='Obturado'
      }
      else if(this.d61b==8){
        this.t61b='Endodoncia'
      }
      else if(this.d61b==9){
        this.t61b='Pérdida'
      }
      else if(this.d61b==10){
        this.t61b='Protesis total'
      }
      else if(this.d61b==11){
        this.t61b='Protesis fija'
      }
      else if(this.d61b==12){
        this.t61b='Protesis removible'
      }
    }
  }
  cambiar61c(){
    if(this.d61c>11){
      this.d61c=1
      this.t61c='Sano'
    }else{
      this.d61c=this.d61c*1+1
      if(this.d61c==1){
        this.t61c='Sano'
      }
      else if(this.d61c==2){
        this.t61c='Extracción indicada'
      }
      else if(this.d61c==3){
        this.t61c='Pérdida por caries'
      }
      else if(this.d61c==4){
        this.t61c='Sellante necesario'
      }
      else if(this.d61c==5){
        this.t61c='Sellante realizado'
      }
      else if(this.d61c==6){
        this.t61c='Caries'
      }
      else if(this.d61c==7){
        this.t61c='Obturado'
      }
      else if(this.d61c==8){
        this.t61c='Endodoncia'
      }
      else if(this.d61c==9){
        this.t61c='Pérdida'
      }
      else if(this.d61c==10){
        this.t61c='Protesis total'
      }
      else if(this.d61c==11){
        this.t61c='Protesis fija'
      }
      else if(this.d61c==12){
        this.t61c='Protesis removible'
      }
    }
  }
  cambiar61d(){
    if(this.d61d>11){
      this.d61d=1
      this.t61d='Sano'
    }else{
      this.d61d=this.d61d*1+1
      if(this.d61d==1){
        this.t61d='Sano'
      }
      else if(this.d61d==2){
        this.t61d='Extracción indicada'
      }
      else if(this.d61d==3){
        this.t61d='Pérdida por caries'
      }
      else if(this.d61d==4){
        this.t61d='Sellante necesario'
      }
      else if(this.d61d==5){
        this.t61d='Sellante realizado'
      }
      else if(this.d61d==6){
        this.t61d='Caries'
      }
      else if(this.d61d==7){
        this.t61d='Obturado'
      }
      else if(this.d61d==8){
        this.t61d='Endodoncia'
      }
      else if(this.d61d==9){
        this.t61d='Pérdida'
      }
      else if(this.d61d==10){
        this.t61d='Protesis total'
      }
      else if(this.d61d==11){
        this.t61d='Protesis fija'
      }
      else if(this.d61d==12){
        this.t61d='Protesis removible'
      }
    }
  }
  cambiar61e(){
    if(this.d61e>11){
      this.d61e=1
      this.t61e='Sano'
    }else{
      this.d61e=this.d61e*1+1
      if(this.d61e==1){
        this.t61e='Sano'
      }
      else if(this.d61e==2){
        this.t61e='Extracción indicada'
      }
      else if(this.d61e==3){
        this.t61e='Pérdida por caries'
      }
      else if(this.d61e==4){
        this.t61e='Sellante necesario'
      }
      else if(this.d61e==5){
        this.t61e='Sellante realizado'
      }
      else if(this.d61e==6){
        this.t61e='Caries'
      }
      else if(this.d61e==7){
        this.t61e='Obturado'
      }
      else if(this.d61e==8){
        this.t61e='Endodoncia'
      }
      else if(this.d61e==9){
        this.t61e='Pérdida'
      }
      else if(this.d61e==10){
        this.t61e='Protesis total'
      }
      else if(this.d61e==11){
        this.t61e='Protesis fija'
      }
      else if(this.d61e==12){
        this.t61e='Protesis removible'
      }
    }
  }
  cambiar62a(){
    if(this.d62a>11){
      this.d62a=1
      this.t62a='Sano'
    }else{
      this.d62a=this.d62a*1+1
      if(this.d62a==1){
        this.t62a='Sano'
      }
      else if(this.d62a==2){
        this.t62a='Extracción indicada'
      }
      else if(this.d62a==3){
        this.t62a='Pérdida por caries'
      }
      else if(this.d62a==4){
        this.t62a='Sellante necesario'
      }
      else if(this.d62a==5){
        this.t62a='Sellante realizado'
      }
      else if(this.d62a==6){
        this.t62a='Caries'
      }
      else if(this.d62a==7){
        this.t62a='Obturado'
      }
      else if(this.d62a==8){
        this.t62a='Endodoncia'
      }
      else if(this.d62a==9){
        this.t62a='Pérdida'
      }
      else if(this.d62a==10){
        this.t62a='Protesis total'
      }
      else if(this.d62a==11){
        this.t62a='Protesis fija'
      }
      else if(this.d62a==12){
        this.t62a='Protesis removible'
      }
    }
  }
  cambiar62b(){
    if(this.d62b>11){
      this.d62b=1
      this.t62b='Sano'
    }else{
      this.d62b=this.d62b*1+1
      if(this.d62b==1){
        this.t62b='Sano'
      }
      else if(this.d62b==2){
        this.t62b='Extracción indicada'
      }
      else if(this.d62b==3){
        this.t62b='Pérdida por caries'
      }
      else if(this.d62b==4){
        this.t62b='Sellante necesario'
      }
      else if(this.d62b==5){
        this.t62b='Sellante realizado'
      }
      else if(this.d62b==6){
        this.t62b='Caries'
      }
      else if(this.d62b==7){
        this.t62b='Obturado'
      }
      else if(this.d62b==8){
        this.t62b='Endodoncia'
      }
      else if(this.d62b==9){
        this.t62b='Pérdida'
      }
      else if(this.d62b==10){
        this.t62b='Protesis total'
      }
      else if(this.d62b==11){
        this.t62b='Protesis fija'
      }
      else if(this.d62b==12){
        this.t62b='Protesis removible'
      }
    }
  }
  cambiar62c(){
    if(this.d62c>11){
      this.d62c=1
      this.t62c='Sano'
    }else{
      this.d62c=this.d62c*1+1
      if(this.d62c==1){
        this.t62c='Sano'
      }
      else if(this.d62c==2){
        this.t62c='Extracción indicada'
      }
      else if(this.d62c==3){
        this.t62c='Pérdida por caries'
      }
      else if(this.d62c==4){
        this.t62c='Sellante necesario'
      }
      else if(this.d62c==5){
        this.t62c='Sellante realizado'
      }
      else if(this.d62c==6){
        this.t62c='Caries'
      }
      else if(this.d62c==7){
        this.t62c='Obturado'
      }
      else if(this.d62c==8){
        this.t62c='Endodoncia'
      }
      else if(this.d62c==9){
        this.t62c='Pérdida'
      }
      else if(this.d62c==10){
        this.t62c='Protesis total'
      }
      else if(this.d62c==11){
        this.t62c='Protesis fija'
      }
      else if(this.d62c==12){
        this.t62c='Protesis removible'
      }
    }
  }
  cambiar62d(){
    if(this.d62d>11){
      this.d62d=1
      this.t62d='Sano'
    }else{
      this.d62d=this.d62d*1+1
      if(this.d62d==1){
        this.t62d='Sano'
      }
      else if(this.d62d==2){
        this.t62d='Extracción indicada'
      }
      else if(this.d62d==3){
        this.t62d='Pérdida por caries'
      }
      else if(this.d62d==4){
        this.t62d='Sellante necesario'
      }
      else if(this.d62d==5){
        this.t62d='Sellante realizado'
      }
      else if(this.d62d==6){
        this.t62d='Caries'
      }
      else if(this.d62d==7){
        this.t62d='Obturado'
      }
      else if(this.d62d==8){
        this.t62d='Endodoncia'
      }
      else if(this.d62d==9){
        this.t62d='Pérdida'
      }
      else if(this.d62d==10){
        this.t62d='Protesis total'
      }
      else if(this.d62d==11){
        this.t62d='Protesis fija'
      }
      else if(this.d62d==12){
        this.t62d='Protesis removible'
      }
    }
  }
  cambiar62e(){
    if(this.d62e>11){
      this.d62e=1
      this.t62e='Sano'
    }else{
      this.d62e=this.d62e*1+1
      if(this.d62e==1){
        this.t62e='Sano'
      }
      else if(this.d62e==2){
        this.t62e='Extracción indicada'
      }
      else if(this.d62e==3){
        this.t62e='Pérdida por caries'
      }
      else if(this.d62e==4){
        this.t62e='Sellante necesario'
      }
      else if(this.d62e==5){
        this.t62e='Sellante realizado'
      }
      else if(this.d62e==6){
        this.t62e='Caries'
      }
      else if(this.d62e==7){
        this.t62e='Obturado'
      }
      else if(this.d62e==8){
        this.t62e='Endodoncia'
      }
      else if(this.d62e==9){
        this.t62e='Pérdida'
      }
      else if(this.d62e==10){
        this.t62e='Protesis total'
      }
      else if(this.d62e==11){
        this.t62e='Protesis fija'
      }
      else if(this.d62e==12){
        this.t62e='Protesis removible'
      }
    }
  }
  cambiar63a(){
    if(this.d63a>11){
      this.d63a=1
      this.t63a='Sano'
    }else{
      this.d63a=this.d63a*1+1
      if(this.d63a==1){
        this.t63a='Sano'
      }
      else if(this.d63a==2){
        this.t63a='Extracción indicada'
      }
      else if(this.d63a==3){
        this.t63a='Pérdida por caries'
      }
      else if(this.d63a==4){
        this.t63a='Sellante necesario'
      }
      else if(this.d63a==5){
        this.t63a='Sellante realizado'
      }
      else if(this.d63a==6){
        this.t63a='Caries'
      }
      else if(this.d63a==7){
        this.t63a='Obturado'
      }
      else if(this.d63a==8){
        this.t63a='Endodoncia'
      }
      else if(this.d63a==9){
        this.t63a='Pérdida'
      }
      else if(this.d63a==10){
        this.t63a='Protesis total'
      }
      else if(this.d63a==11){
        this.t63a='Protesis fija'
      }
      else if(this.d63a==12){
        this.t63a='Protesis removible'
      }
    }
  }
  cambiar63b(){
    if(this.d63b>11){
      this.d63b=1
      this.t63b='Sano'
    }else{
      this.d63b=this.d63b*1+1
      if(this.d63b==1){
        this.t63b='Sano'
      }
      else if(this.d63b==2){
        this.t63b='Extracción indicada'
      }
      else if(this.d63b==3){
        this.t63b='Pérdida por caries'
      }
      else if(this.d63b==4){
        this.t63b='Sellante necesario'
      }
      else if(this.d63b==5){
        this.t63b='Sellante realizado'
      }
      else if(this.d63b==6){
        this.t63b='Caries'
      }
      else if(this.d63b==7){
        this.t63b='Obturado'
      }
      else if(this.d63b==8){
        this.t63b='Endodoncia'
      }
      else if(this.d63b==9){
        this.t63b='Pérdida'
      }
      else if(this.d63b==10){
        this.t63b='Protesis total'
      }
      else if(this.d63b==11){
        this.t63b='Protesis fija'
      }
      else if(this.d63b==12){
        this.t63b='Protesis removible'
      }
    }
  }
  cambiar63c(){
    if(this.d63c>11){
      this.d63c=1
      this.t63c='Sano'
    }else{
      this.d63c=this.d63c*1+1
      if(this.d63c==1){
        this.t63c='Sano'
      }
      else if(this.d63c==2){
        this.t63c='Extracción indicada'
      }
      else if(this.d63c==3){
        this.t63c='Pérdida por caries'
      }
      else if(this.d63c==4){
        this.t63c='Sellante necesario'
      }
      else if(this.d63c==5){
        this.t63c='Sellante realizado'
      }
      else if(this.d63c==6){
        this.t63c='Caries'
      }
      else if(this.d63c==7){
        this.t63c='Obturado'
      }
      else if(this.d63c==8){
        this.t63c='Endodoncia'
      }
      else if(this.d63c==9){
        this.t63c='Pérdida'
      }
      else if(this.d63c==10){
        this.t63c='Protesis total'
      }
      else if(this.d63c==11){
        this.t63c='Protesis fija'
      }
      else if(this.d63c==12){
        this.t63c='Protesis removible'
      }
    }
  }
  cambiar63d(){
    if(this.d63d>11){
      this.d63d=1
      this.t63d='Sano'
    }else{
      this.d63d=this.d63d*1+1
      if(this.d63d==1){
        this.t63d='Sano'
      }
      else if(this.d63d==2){
        this.t63d='Extracción indicada'
      }
      else if(this.d63d==3){
        this.t63d='Pérdida por caries'
      }
      else if(this.d63d==4){
        this.t63d='Sellante necesario'
      }
      else if(this.d63d==5){
        this.t63d='Sellante realizado'
      }
      else if(this.d63d==6){
        this.t63d='Caries'
      }
      else if(this.d63d==7){
        this.t63d='Obturado'
      }
      else if(this.d63d==8){
        this.t63d='Endodoncia'
      }
      else if(this.d63d==9){
        this.t63d='Pérdida'
      }
      else if(this.d63d==10){
        this.t63d='Protesis total'
      }
      else if(this.d63d==11){
        this.t63d='Protesis fija'
      }
      else if(this.d63d==12){
        this.t63d='Protesis removible'
      }
    }
  }
  cambiar63e(){
    if(this.d63e>11){
      this.d63e=1
      this.t63e='Sano'
    }else{
      this.d63e=this.d63e*1+1
      if(this.d63e==1){
        this.t63e='Sano'
      }
      else if(this.d63e==2){
        this.t63e='Extracción indicada'
      }
      else if(this.d63e==3){
        this.t63e='Pérdida por caries'
      }
      else if(this.d63e==4){
        this.t63e='Sellante necesario'
      }
      else if(this.d63e==5){
        this.t63e='Sellante realizado'
      }
      else if(this.d63e==6){
        this.t63e='Caries'
      }
      else if(this.d63e==7){
        this.t63e='Obturado'
      }
      else if(this.d63e==8){
        this.t63e='Endodoncia'
      }
      else if(this.d63e==9){
        this.t63e='Pérdida'
      }
      else if(this.d63e==10){
        this.t63e='Protesis total'
      }
      else if(this.d63e==11){
        this.t63e='Protesis fija'
      }
      else if(this.d63e==12){
        this.t63e='Protesis removible'
      }
    }
  }
  cambiar64a(){
    if(this.d64a>11){
      this.d64a=1
      this.t64a='Sano'
    }else{
      this.d64a=this.d64a*1+1
      if(this.d64a==1){
        this.t64a='Sano'
      }
      else if(this.d64a==2){
        this.t64a='Extracción indicada'
      }
      else if(this.d64a==3){
        this.t64a='Pérdida por caries'
      }
      else if(this.d64a==4){
        this.t64a='Sellante necesario'
      }
      else if(this.d64a==5){
        this.t64a='Sellante realizado'
      }
      else if(this.d64a==6){
        this.t64a='Caries'
      }
      else if(this.d64a==7){
        this.t64a='Obturado'
      }
      else if(this.d64a==8){
        this.t64a='Endodoncia'
      }
      else if(this.d64a==9){
        this.t64a='Pérdida'
      }
      else if(this.d64a==10){
        this.t64a='Protesis total'
      }
      else if(this.d64a==11){
        this.t64a='Protesis fija'
      }
      else if(this.d64a==12){
        this.t64a='Protesis removible'
      }
    }
  }
  cambiar64b(){
    if(this.d64b>11){
      this.d64b=1
      this.t64b='Sano'
    }else{
      this.d64b=this.d64b*1+1
      if(this.d64b==1){
        this.t64b='Sano'
      }
      else if(this.d64b==2){
        this.t64b='Extracción indicada'
      }
      else if(this.d64b==3){
        this.t64b='Pérdida por caries'
      }
      else if(this.d64b==4){
        this.t64b='Sellante necesario'
      }
      else if(this.d64b==5){
        this.t64b='Sellante realizado'
      }
      else if(this.d64b==6){
        this.t64b='Caries'
      }
      else if(this.d64b==7){
        this.t64b='Obturado'
      }
      else if(this.d64b==8){
        this.t64b='Endodoncia'
      }
      else if(this.d64b==9){
        this.t64b='Pérdida'
      }
      else if(this.d64b==10){
        this.t64b='Protesis total'
      }
      else if(this.d64b==11){
        this.t64b='Protesis fija'
      }
      else if(this.d64b==12){
        this.t64b='Protesis removible'
      }
    }
  }
  cambiar64c(){
    if(this.d64c>11){
      this.d64c=1
      this.t64c='Sano'
    }else{
      this.d64c=this.d64c*1+1
      if(this.d64c==1){
        this.t64c='Sano'
      }
      else if(this.d64c==2){
        this.t64c='Extracción indicada'
      }
      else if(this.d64c==3){
        this.t64c='Pérdida por caries'
      }
      else if(this.d64c==4){
        this.t64c='Sellante necesario'
      }
      else if(this.d64c==5){
        this.t64c='Sellante realizado'
      }
      else if(this.d64c==6){
        this.t64c='Caries'
      }
      else if(this.d64c==7){
        this.t64c='Obturado'
      }
      else if(this.d64c==8){
        this.t64c='Endodoncia'
      }
      else if(this.d64c==9){
        this.t64c='Pérdida'
      }
      else if(this.d64c==10){
        this.t64c='Protesis total'
      }
      else if(this.d64c==11){
        this.t64c='Protesis fija'
      }
      else if(this.d64c==12){
        this.t64c='Protesis removible'
      }
    }
  }
  cambiar64d(){
    if(this.d64d>11){
      this.d64d=1
      this.t64d='Sano'
    }else{
      this.d64d=this.d64d*1+1
      if(this.d64d==1){
        this.t64d='Sano'
      }
      else if(this.d64d==2){
        this.t64d='Extracción indicada'
      }
      else if(this.d64d==3){
        this.t64d='Pérdida por caries'
      }
      else if(this.d64d==4){
        this.t64d='Sellante necesario'
      }
      else if(this.d64d==5){
        this.t64d='Sellante realizado'
      }
      else if(this.d64d==6){
        this.t64d='Caries'
      }
      else if(this.d64d==7){
        this.t64d='Obturado'
      }
      else if(this.d64d==8){
        this.t64d='Endodoncia'
      }
      else if(this.d64d==9){
        this.t64d='Pérdida'
      }
      else if(this.d64d==10){
        this.t64d='Protesis total'
      }
      else if(this.d64d==11){
        this.t64d='Protesis fija'
      }
      else if(this.d64d==12){
        this.t64d='Protesis removible'
      }
    }
  }
  cambiar64e(){
    if(this.d64e>11){
      this.d64e=1
      this.t64e='Sano'
    }else{
      this.d64e=this.d64e*1+1
      if(this.d64e==1){
        this.t64e='Sano'
      }
      else if(this.d64e==2){
        this.t64e='Extracción indicada'
      }
      else if(this.d64e==3){
        this.t64e='Pérdida por caries'
      }
      else if(this.d64e==4){
        this.t64e='Sellante necesario'
      }
      else if(this.d64e==5){
        this.t64e='Sellante realizado'
      }
      else if(this.d64e==6){
        this.t64e='Caries'
      }
      else if(this.d64e==7){
        this.t64e='Obturado'
      }
      else if(this.d64e==8){
        this.t64e='Endodoncia'
      }
      else if(this.d64e==9){
        this.t64e='Pérdida'
      }
      else if(this.d64e==10){
        this.t64e='Protesis total'
      }
      else if(this.d64e==11){
        this.t64e='Protesis fija'
      }
      else if(this.d64e==12){
        this.t64e='Protesis removible'
      }
    }
  }
  cambiar65a(){
    if(this.d65a>11){
      this.d65a=1
      this.t65a='Sano'
    }else{
      this.d65a=this.d65a*1+1
      if(this.d65a==1){
        this.t65a='Sano'
      }
      else if(this.d65a==2){
        this.t65a='Extracción indicada'
      }
      else if(this.d65a==3){
        this.t65a='Pérdida por caries'
      }
      else if(this.d65a==4){
        this.t65a='Sellante necesario'
      }
      else if(this.d65a==5){
        this.t65a='Sellante realizado'
      }
      else if(this.d65a==6){
        this.t65a='Caries'
      }
      else if(this.d65a==7){
        this.t65a='Obturado'
      }
      else if(this.d65a==8){
        this.t65a='Endodoncia'
      }
      else if(this.d65a==9){
        this.t65a='Pérdida'
      }
      else if(this.d65a==10){
        this.t65a='Protesis total'
      }
      else if(this.d65a==11){
        this.t65a='Protesis fija'
      }
      else if(this.d65a==12){
        this.t65a='Protesis removible'
      }
    }
  }
  cambiar65b(){
    if(this.d65b>11){
      this.d65b=1
      this.t65b='Sano'
    }else{
      this.d65b=this.d65b*1+1
      if(this.d65b==1){
        this.t65b='Sano'
      }
      else if(this.d65b==2){
        this.t65b='Extracción indicada'
      }
      else if(this.d65b==3){
        this.t65b='Pérdida por caries'
      }
      else if(this.d65b==4){
        this.t65b='Sellante necesario'
      }
      else if(this.d65b==5){
        this.t65b='Sellante realizado'
      }
      else if(this.d65b==6){
        this.t65b='Caries'
      }
      else if(this.d65b==7){
        this.t65b='Obturado'
      }
      else if(this.d65b==8){
        this.t65b='Endodoncia'
      }
      else if(this.d65b==9){
        this.t65b='Pérdida'
      }
      else if(this.d65b==10){
        this.t65b='Protesis total'
      }
      else if(this.d65b==11){
        this.t65b='Protesis fija'
      }
      else if(this.d65b==12){
        this.t65b='Protesis removible'
      }
    }
  }
  cambiar65c(){
    if(this.d65c>11){
      this.d65c=1
      this.t65c='Sano'
    }else{
      this.d65c=this.d65c*1+1
      if(this.d65c==1){
        this.t65c='Sano'
      }
      else if(this.d65c==2){
        this.t65c='Extracción indicada'
      }
      else if(this.d65c==3){
        this.t65c='Pérdida por caries'
      }
      else if(this.d65c==4){
        this.t65c='Sellante necesario'
      }
      else if(this.d65c==5){
        this.t65c='Sellante realizado'
      }
      else if(this.d65c==6){
        this.t65c='Caries'
      }
      else if(this.d65c==7){
        this.t65c='Obturado'
      }
      else if(this.d65c==8){
        this.t65c='Endodoncia'
      }
      else if(this.d65c==9){
        this.t65c='Pérdida'
      }
      else if(this.d65c==10){
        this.t65c='Protesis total'
      }
      else if(this.d65c==11){
        this.t65c='Protesis fija'
      }
      else if(this.d65c==12){
        this.t65c='Protesis removible'
      }
    }
  }
  cambiar65d(){
    if(this.d65d>11){
      this.d65d=1
      this.t65d='Sano'
    }else{
      this.d65d=this.d65d*1+1
      if(this.d65d==1){
        this.t65d='Sano'
      }
      else if(this.d65d==2){
        this.t65d='Extracción indicada'
      }
      else if(this.d65d==3){
        this.t65d='Pérdida por caries'
      }
      else if(this.d65d==4){
        this.t65d='Sellante necesario'
      }
      else if(this.d65d==5){
        this.t65d='Sellante realizado'
      }
      else if(this.d65d==6){
        this.t65d='Caries'
      }
      else if(this.d65d==7){
        this.t65d='Obturado'
      }
      else if(this.d65d==8){
        this.t65d='Endodoncia'
      }
      else if(this.d65d==9){
        this.t65d='Pérdida'
      }
      else if(this.d65d==10){
        this.t65d='Protesis total'
      }
      else if(this.d65d==11){
        this.t65d='Protesis fija'
      }
      else if(this.d65d==12){
        this.t65d='Protesis removible'
      }
    }
  }
  cambiar65e(){
    if(this.d65e>11){
      this.d65e=1
      this.t65e='Sano'
    }else{
      this.d65e=this.d65e*1+1
      if(this.d65e==1){
        this.t65e='Sano'
      }
      else if(this.d65e==2){
        this.t65e='Extracción indicada'
      }
      else if(this.d65e==3){
        this.t65e='Pérdida por caries'
      }
      else if(this.d65e==4){
        this.t65e='Sellante necesario'
      }
      else if(this.d65e==5){
        this.t65e='Sellante realizado'
      }
      else if(this.d65e==6){
        this.t65e='Caries'
      }
      else if(this.d65e==7){
        this.t65e='Obturado'
      }
      else if(this.d65e==8){
        this.t65e='Endodoncia'
      }
      else if(this.d65e==9){
        this.t65e='Pérdida'
      }
      else if(this.d65e==10){
        this.t65e='Protesis total'
      }
      else if(this.d65e==11){
        this.t65e='Protesis fija'
      }
      else if(this.d65e==12){
        this.t65e='Protesis removible'
      }
    }
  }
  //cuandrante 7
  cambiar71a(){
    if(this.d71a>11){
    this.d71a=1
      this.t71a='Sano'
    }else{
    this.d71a=this.d71a*1+1
      if(this.d71a==1){
        this.t71a='Sano'
      }
      else if(this.d71a==2){
        this.t71a='Extracción indicada'
      }
      else if(this.d71a==3){
        this.t71a='Pérdida por caries'
      }
      else if(this.d71a==4){
        this.t71a='Sellante necesario'
      }
      else if(this.d71a==5){
        this.t71a='Sellante realizado'
      }
      else if(this.d71a==6){
        this.t71a='Caries'
      }
      else if(this.d71a==7){
        this.t71a='Obturado'
      }
      else if(this.d71a==8){
        this.t71a='Endodoncia'
      }
      else if(this.d71a==9){
        this.t71a='Pérdida'
      }
      else if(this.d71a==10){
        this.t71a='Protesis total'
      }
      else if(this.d71a==11){
        this.t71a='Protesis fija'
      }
      else if(this.d71a==12){
        this.t71a='Protesis removible'
      }
    }
  }
  cambiar71b(){
    if(this.d71b>11){
    this.d71b=1
      this.t71b='Sano'
    }else{
    this.d71b=this.d71b*1+1
      if(this.d71b==1){
        this.t71b='Sano'
      }
      else if(this.d71b==2){
        this.t71b='Extracción indicada'
      }
      else if(this.d71b==3){
        this.t71b='Pérdida por caries'
      }
      else if(this.d71b==4){
        this.t71b='Sellante necesario'
      }
      else if(this.d71b==5){
        this.t71b='Sellante realizado'
      }
      else if(this.d71b==6){
        this.t71b='Caries'
      }
      else if(this.d71b==7){
        this.t71b='Obturado'
      }
      else if(this.d71b==8){
        this.t71b='Endodoncia'
      }
      else if(this.d71b==9){
        this.t71b='Pérdida'
      }
      else if(this.d71b==10){
        this.t71b='Protesis total'
      }
      else if(this.d71b==11){
        this.t71b='Protesis fija'
      }
      else if(this.d71b==12){
        this.t71b='Protesis removible'
      }
    }
  }
  cambiar71c(){
    if(this.d71c>11){
    this.d71c=1
      this.t71c='Sano'
    }else{
    this.d71c=this.d71c*1+1
      if(this.d71c==1){
        this.t71c='Sano'
      }
      else if(this.d71c==2){
        this.t71c='Extracción indicada'
      }
      else if(this.d71c==3){
        this.t71c='Pérdida por caries'
      }
      else if(this.d71c==4){
        this.t71c='Sellante necesario'
      }
      else if(this.d71c==5){
        this.t71c='Sellante realizado'
      }
      else if(this.d71c==6){
        this.t71c='Caries'
      }
      else if(this.d71c==7){
        this.t71c='Obturado'
      }
      else if(this.d71c==8){
        this.t71c='Endodoncia'
      }
      else if(this.d71c==9){
        this.t71c='Pérdida'
      }
      else if(this.d71c==10){
        this.t71c='Protesis total'
      }
      else if(this.d71c==11){
        this.t71c='Protesis fija'
      }
      else if(this.d71c==12){
        this.t71c='Protesis removible'
      }
    }
  }
  cambiar71d(){
    if(this.d71d>11){
    this.d71d=1
      this.t71d='Sano'
    }else{
    this.d71d=this.d71d*1+1
      if(this.d71d==1){
        this.t71d='Sano'
      }
      else if(this.d71d==2){
        this.t71d='Extracción indicada'
      }
      else if(this.d71d==3){
        this.t71d='Pérdida por caries'
      }
      else if(this.d71d==4){
        this.t71d='Sellante necesario'
      }
      else if(this.d71d==5){
        this.t71d='Sellante realizado'
      }
      else if(this.d71d==6){
        this.t71d='Caries'
      }
      else if(this.d71d==7){
        this.t71d='Obturado'
      }
      else if(this.d71d==8){
        this.t71d='Endodoncia'
      }
      else if(this.d71d==9){
        this.t71d='Pérdida'
      }
      else if(this.d71d==10){
        this.t71d='Protesis total'
      }
      else if(this.d71d==11){
        this.t71d='Protesis fija'
      }
      else if(this.d71d==12){
        this.t71d='Protesis removible'
      }
    }
  }
  cambiar71e(){
    if(this.d71e>11){
    this.d71e=1
      this.t71e='Sano'
    }else{
    this.d71e=this.d71e*1+1
      if(this.d71e==1){
        this.t71e='Sano'
      }
      else if(this.d71e==2){
        this.t71e='Extracción indicada'
      }
      else if(this.d71e==3){
        this.t71e='Pérdida por caries'
      }
      else if(this.d71e==4){
        this.t71e='Sellante necesario'
      }
      else if(this.d71e==5){
        this.t71e='Sellante realizado'
      }
      else if(this.d71e==6){
        this.t71e='Caries'
      }
      else if(this.d71e==7){
        this.t71e='Obturado'
      }
      else if(this.d71e==8){
        this.t71e='Endodoncia'
      }
      else if(this.d71e==9){
        this.t71e='Pérdida'
      }
      else if(this.d71e==10){
        this.t71e='Protesis total'
      }
      else if(this.d71e==11){
        this.t71e='Protesis fija'
      }
      else if(this.d71e==12){
        this.t71e='Protesis removible'
      }
    }
  }
  cambiar72a(){
    if(this.d72a>11){
    this.d72a=1
      this.t72a='Sano'
    }else{
    this.d72a=this.d72a*1+1
      if(this.d72a==1){
        this.t72a='Sano'
      }
      else if(this.d72a==2){
        this.t72a='Extracción indicada'
      }
      else if(this.d72a==3){
        this.t72a='Pérdida por caries'
      }
      else if(this.d72a==4){
        this.t72a='Sellante necesario'
      }
      else if(this.d72a==5){
        this.t72a='Sellante realizado'
      }
      else if(this.d72a==6){
        this.t72a='Caries'
      }
      else if(this.d72a==7){
        this.t72a='Obturado'
      }
      else if(this.d72a==8){
        this.t72a='Endodoncia'
      }
      else if(this.d72a==9){
        this.t72a='Pérdida'
      }
      else if(this.d72a==10){
        this.t72a='Protesis total'
      }
      else if(this.d72a==11){
        this.t72a='Protesis fija'
      }
      else if(this.d72a==12){
        this.t72a='Protesis removible'
      }
    }
  }
  cambiar72b(){
    if(this.d72b>11){
    this.d72b=1
      this.t72b='Sano'
    }else{
    this.d72b=this.d72b*1+1
      if(this.d72b==1){
        this.t72b='Sano'
      }
      else if(this.d72b==2){
        this.t72b='Extracción indicada'
      }
      else if(this.d72b==3){
        this.t72b='Pérdida por caries'
      }
      else if(this.d72b==4){
        this.t72b='Sellante necesario'
      }
      else if(this.d72b==5){
        this.t72b='Sellante realizado'
      }
      else if(this.d72b==6){
        this.t72b='Caries'
      }
      else if(this.d72b==7){
        this.t72b='Obturado'
      }
      else if(this.d72b==8){
        this.t72b='Endodoncia'
      }
      else if(this.d72b==9){
        this.t72b='Pérdida'
      }
      else if(this.d72b==10){
        this.t72b='Protesis total'
      }
      else if(this.d72b==11){
        this.t72b='Protesis fija'
      }
      else if(this.d72b==12){
        this.t72b='Protesis removible'
      }
    }
  }
  cambiar72c(){
    if(this.d72c>11){
    this.d72c=1
      this.t72c='Sano'
    }else{
    this.d72c=this.d72c*1+1
      if(this.d72c==1){
        this.t72c='Sano'
      }
      else if(this.d72c==2){
        this.t72c='Extracción indicada'
      }
      else if(this.d72c==3){
        this.t72c='Pérdida por caries'
      }
      else if(this.d72c==4){
        this.t72c='Sellante necesario'
      }
      else if(this.d72c==5){
        this.t72c='Sellante realizado'
      }
      else if(this.d72c==6){
        this.t72c='Caries'
      }
      else if(this.d72c==7){
        this.t72c='Obturado'
      }
      else if(this.d72c==8){
        this.t72c='Endodoncia'
      }
      else if(this.d72c==9){
        this.t72c='Pérdida'
      }
      else if(this.d72c==10){
        this.t72c='Protesis total'
      }
      else if(this.d72c==11){
        this.t72c='Protesis fija'
      }
      else if(this.d72c==12){
        this.t72c='Protesis removible'
      }
    }
  }
  cambiar72d(){
    if(this.d72d>11){
    this.d72d=1
      this.t72d='Sano'
    }else{
    this.d72d=this.d72d*1+1
      if(this.d72d==1){
        this.t72d='Sano'
      }
      else if(this.d72d==2){
        this.t72d='Extracción indicada'
      }
      else if(this.d72d==3){
        this.t72d='Pérdida por caries'
      }
      else if(this.d72d==4){
        this.t72d='Sellante necesario'
      }
      else if(this.d72d==5){
        this.t72d='Sellante realizado'
      }
      else if(this.d72d==6){
        this.t72d='Caries'
      }
      else if(this.d72d==7){
        this.t72d='Obturado'
      }
      else if(this.d72d==8){
        this.t72d='Endodoncia'
      }
      else if(this.d72d==9){
        this.t72d='Pérdida'
      }
      else if(this.d72d==10){
        this.t72d='Protesis total'
      }
      else if(this.d72d==11){
        this.t72d='Protesis fija'
      }
      else if(this.d72d==12){
        this.t72d='Protesis removible'
      }
    }
  }
  cambiar72e(){
    if(this.d72e>11){
    this.d72e=1
      this.t72e='Sano'
    }else{
    this.d72e=this.d72e*1+1
      if(this.d72e==1){
        this.t72e='Sano'
      }
      else if(this.d72e==2){
        this.t72e='Extracción indicada'
      }
      else if(this.d72e==3){
        this.t72e='Pérdida por caries'
      }
      else if(this.d72e==4){
        this.t72e='Sellante necesario'
      }
      else if(this.d72e==5){
        this.t72e='Sellante realizado'
      }
      else if(this.d72e==6){
        this.t72e='Caries'
      }
      else if(this.d72e==7){
        this.t72e='Obturado'
      }
      else if(this.d72e==8){
        this.t72e='Endodoncia'
      }
      else if(this.d72e==9){
        this.t72e='Pérdida'
      }
      else if(this.d72e==10){
        this.t72e='Protesis total'
      }
      else if(this.d72e==11){
        this.t72e='Protesis fija'
      }
      else if(this.d72e==12){
        this.t72e='Protesis removible'
      }
    }
  }
  cambiar73a(){
    if(this.d73a>11){
    this.d73a=1
      this.t73a='Sano'
    }else{
    this.d73a=this.d73a*1+1
      if(this.d73a==1){
        this.t73a='Sano'
      }
      else if(this.d73a==2){
        this.t73a='Extracción indicada'
      }
      else if(this.d73a==3){
        this.t73a='Pérdida por caries'
      }
      else if(this.d73a==4){
        this.t73a='Sellante necesario'
      }
      else if(this.d73a==5){
        this.t73a='Sellante realizado'
      }
      else if(this.d73a==6){
        this.t73a='Caries'
      }
      else if(this.d73a==7){
        this.t73a='Obturado'
      }
      else if(this.d73a==8){
        this.t73a='Endodoncia'
      }
      else if(this.d73a==9){
        this.t73a='Pérdida'
      }
      else if(this.d73a==10){
        this.t73a='Protesis total'
      }
      else if(this.d73a==11){
        this.t73a='Protesis fija'
      }
      else if(this.d73a==12){
        this.t73a='Protesis removible'
      }
    }
  }
  cambiar73b(){
    if(this.d73b>11){
    this.d73b=1
      this.t73b='Sano'
    }else{
    this.d73b=this.d73b*1+1
      if(this.d73b==1){
        this.t73b='Sano'
      }
      else if(this.d73b==2){
        this.t73b='Extracción indicada'
      }
      else if(this.d73b==3){
        this.t73b='Pérdida por caries'
      }
      else if(this.d73b==4){
        this.t73b='Sellante necesario'
      }
      else if(this.d73b==5){
        this.t73b='Sellante realizado'
      }
      else if(this.d73b==6){
        this.t73b='Caries'
      }
      else if(this.d73b==7){
        this.t73b='Obturado'
      }
      else if(this.d73b==8){
        this.t73b='Endodoncia'
      }
      else if(this.d73b==9){
        this.t73b='Pérdida'
      }
      else if(this.d73b==10){
        this.t73b='Protesis total'
      }
      else if(this.d73b==11){
        this.t73b='Protesis fija'
      }
      else if(this.d73b==12){
        this.t73b='Protesis removible'
      }
    }
  }
  cambiar73c(){
    if(this.d73c>11){
    this.d73c=1
      this.t73c='Sano'
    }else{
    this.d73c=this.d73c*1+1
      if(this.d73c==1){
        this.t73c='Sano'
      }
      else if(this.d73c==2){
        this.t73c='Extracción indicada'
      }
      else if(this.d73c==3){
        this.t73c='Pérdida por caries'
      }
      else if(this.d73c==4){
        this.t73c='Sellante necesario'
      }
      else if(this.d73c==5){
        this.t73c='Sellante realizado'
      }
      else if(this.d73c==6){
        this.t73c='Caries'
      }
      else if(this.d73c==7){
        this.t73c='Obturado'
      }
      else if(this.d73c==8){
        this.t73c='Endodoncia'
      }
      else if(this.d73c==9){
        this.t73c='Pérdida'
      }
      else if(this.d73c==10){
        this.t73c='Protesis total'
      }
      else if(this.d73c==11){
        this.t73c='Protesis fija'
      }
      else if(this.d73c==12){
        this.t73c='Protesis removible'
      }
    }
  }
  cambiar73d(){
    if(this.d73d>11){
    this.d73d=1
      this.t73d='Sano'
    }else{
    this.d73d=this.d73d*1+1
      if(this.d73d==1){
        this.t73d='Sano'
      }
      else if(this.d73d==2){
        this.t73d='Extracción indicada'
      }
      else if(this.d73d==3){
        this.t73d='Pérdida por caries'
      }
      else if(this.d73d==4){
        this.t73d='Sellante necesario'
      }
      else if(this.d73d==5){
        this.t73d='Sellante realizado'
      }
      else if(this.d73d==6){
        this.t73d='Caries'
      }
      else if(this.d73d==7){
        this.t73d='Obturado'
      }
      else if(this.d73d==8){
        this.t73d='Endodoncia'
      }
      else if(this.d73d==9){
        this.t73d='Pérdida'
      }
      else if(this.d73d==10){
        this.t73d='Protesis total'
      }
      else if(this.d73d==11){
        this.t73d='Protesis fija'
      }
      else if(this.d73d==12){
        this.t73d='Protesis removible'
      }
    }
  }
  cambiar73e(){
    if(this.d73e>11){
    this.d73e=1
      this.t73e='Sano'
    }else{
    this.d73e=this.d73e*1+1
      if(this.d73e==1){
        this.t73e='Sano'
      }
      else if(this.d73e==2){
        this.t73e='Extracción indicada'
      }
      else if(this.d73e==3){
        this.t73e='Pérdida por caries'
      }
      else if(this.d73e==4){
        this.t73e='Sellante necesario'
      }
      else if(this.d73e==5){
        this.t73e='Sellante realizado'
      }
      else if(this.d73e==6){
        this.t73e='Caries'
      }
      else if(this.d73e==7){
        this.t73e='Obturado'
      }
      else if(this.d73e==8){
        this.t73e='Endodoncia'
      }
      else if(this.d73e==9){
        this.t73e='Pérdida'
      }
      else if(this.d73e==10){
        this.t73e='Protesis total'
      }
      else if(this.d73e==11){
        this.t73e='Protesis fija'
      }
      else if(this.d73e==12){
        this.t73e='Protesis removible'
      }
    }
  }
  cambiar74a(){
    if(this.d74a>11){
    this.d74a=1
      this.t74a='Sano'
    }else{
    this.d74a=this.d74a*1+1
      if(this.d74a==1){
        this.t74a='Sano'
      }
      else if(this.d74a==2){
        this.t74a='Extracción indicada'
      }
      else if(this.d74a==3){
        this.t74a='Pérdida por caries'
      }
      else if(this.d74a==4){
        this.t74a='Sellante necesario'
      }
      else if(this.d74a==5){
        this.t74a='Sellante realizado'
      }
      else if(this.d74a==6){
        this.t74a='Caries'
      }
      else if(this.d74a==7){
        this.t74a='Obturado'
      }
      else if(this.d74a==8){
        this.t74a='Endodoncia'
      }
      else if(this.d74a==9){
        this.t74a='Pérdida'
      }
      else if(this.d74a==10){
        this.t74a='Protesis total'
      }
      else if(this.d74a==11){
        this.t74a='Protesis fija'
      }
      else if(this.d74a==12){
        this.t74a='Protesis removible'
      }
    }
  }
  cambiar74b(){
    if(this.d74b>11){
    this.d74b=1
      this.t74b='Sano'
    }else{
    this.d74b=this.d74b*1+1
      if(this.d74b==1){
        this.t74b='Sano'
      }
      else if(this.d74b==2){
        this.t74b='Extracción indicada'
      }
      else if(this.d74b==3){
        this.t74b='Pérdida por caries'
      }
      else if(this.d74b==4){
        this.t74b='Sellante necesario'
      }
      else if(this.d74b==5){
        this.t74b='Sellante realizado'
      }
      else if(this.d74b==6){
        this.t74b='Caries'
      }
      else if(this.d74b==7){
        this.t74b='Obturado'
      }
      else if(this.d74b==8){
        this.t74b='Endodoncia'
      }
      else if(this.d74b==9){
        this.t74b='Pérdida'
      }
      else if(this.d74b==10){
        this.t74b='Protesis total'
      }
      else if(this.d74b==11){
        this.t74b='Protesis fija'
      }
      else if(this.d74b==12){
        this.t74b='Protesis removible'
      }
    }
  }
  cambiar74c(){
    if(this.d74c>11){
    this.d74c=1
      this.t74c='Sano'
    }else{
    this.d74c=this.d74c*1+1
      if(this.d74c==1){
        this.t74c='Sano'
      }
      else if(this.d74c==2){
        this.t74c='Extracción indicada'
      }
      else if(this.d74c==3){
        this.t74c='Pérdida por caries'
      }
      else if(this.d74c==4){
        this.t74c='Sellante necesario'
      }
      else if(this.d74c==5){
        this.t74c='Sellante realizado'
      }
      else if(this.d74c==6){
        this.t74c='Caries'
      }
      else if(this.d74c==7){
        this.t74c='Obturado'
      }
      else if(this.d74c==8){
        this.t74c='Endodoncia'
      }
      else if(this.d74c==9){
        this.t74c='Pérdida'
      }
      else if(this.d74c==10){
        this.t74c='Protesis total'
      }
      else if(this.d74c==11){
        this.t74c='Protesis fija'
      }
      else if(this.d74c==12){
        this.t74c='Protesis removible'
      }
    }
  }
  cambiar74d(){
    if(this.d74d>11){
    this.d74d=1
      this.t74d='Sano'
    }else{
    this.d74d=this.d74d*1+1
      if(this.d74d==1){
        this.t74d='Sano'
      }
      else if(this.d74d==2){
        this.t74d='Extracción indicada'
      }
      else if(this.d74d==3){
        this.t74d='Pérdida por caries'
      }
      else if(this.d74d==4){
        this.t74d='Sellante necesario'
      }
      else if(this.d74d==5){
        this.t74d='Sellante realizado'
      }
      else if(this.d74d==6){
        this.t74d='Caries'
      }
      else if(this.d74d==7){
        this.t74d='Obturado'
      }
      else if(this.d74d==8){
        this.t74d='Endodoncia'
      }
      else if(this.d74d==9){
        this.t74d='Pérdida'
      }
      else if(this.d74d==10){
        this.t74d='Protesis total'
      }
      else if(this.d74d==11){
        this.t74d='Protesis fija'
      }
      else if(this.d74d==12){
        this.t74d='Protesis removible'
      }
    }
  }
  cambiar74e(){
    if(this.d74e>11){
    this.d74e=1
      this.t74e='Sano'
    }else{
    this.d74e=this.d74e*1+1
      if(this.d74e==1){
        this.t74e='Sano'
      }
      else if(this.d74e==2){
        this.t74e='Extracción indicada'
      }
      else if(this.d74e==3){
        this.t74e='Pérdida por caries'
      }
      else if(this.d74e==4){
        this.t74e='Sellante necesario'
      }
      else if(this.d74e==5){
        this.t74e='Sellante realizado'
      }
      else if(this.d74e==6){
        this.t74e='Caries'
      }
      else if(this.d74e==7){
        this.t74e='Obturado'
      }
      else if(this.d74e==8){
        this.t74e='Endodoncia'
      }
      else if(this.d74e==9){
        this.t74e='Pérdida'
      }
      else if(this.d74e==10){
        this.t74e='Protesis total'
      }
      else if(this.d74e==11){
        this.t74e='Protesis fija'
      }
      else if(this.d74e==12){
        this.t74e='Protesis removible'
      }
    }
  }
  cambiar75a(){
    if(this.d75a>11){
    this.d75a=1
      this.t75a='Sano'
    }else{
    this.d75a=this.d75a*1+1
      if(this.d75a==1){
        this.t75a='Sano'
      }
      else if(this.d75a==2){
        this.t75a='Extracción indicada'
      }
      else if(this.d75a==3){
        this.t75a='Pérdida por caries'
      }
      else if(this.d75a==4){
        this.t75a='Sellante necesario'
      }
      else if(this.d75a==5){
        this.t75a='Sellante realizado'
      }
      else if(this.d75a==6){
        this.t75a='Caries'
      }
      else if(this.d75a==7){
        this.t75a='Obturado'
      }
      else if(this.d75a==8){
        this.t75a='Endodoncia'
      }
      else if(this.d75a==9){
        this.t75a='Pérdida'
      }
      else if(this.d75a==10){
        this.t75a='Protesis total'
      }
      else if(this.d75a==11){
        this.t75a='Protesis fija'
      }
      else if(this.d75a==12){
        this.t75a='Protesis removible'
      }
    }
  }
  cambiar75b(){
    if(this.d75b>11){
    this.d75b=1
      this.t75b='Sano'
    }else{
    this.d75b=this.d75b*1+1
      if(this.d75b==1){
        this.t75b='Sano'
      }
      else if(this.d75b==2){
        this.t75b='Extracción indicada'
      }
      else if(this.d75b==3){
        this.t75b='Pérdida por caries'
      }
      else if(this.d75b==4){
        this.t75b='Sellante necesario'
      }
      else if(this.d75b==5){
        this.t75b='Sellante realizado'
      }
      else if(this.d75b==6){
        this.t75b='Caries'
      }
      else if(this.d75b==7){
        this.t75b='Obturado'
      }
      else if(this.d75b==8){
        this.t75b='Endodoncia'
      }
      else if(this.d75b==9){
        this.t75b='Pérdida'
      }
      else if(this.d75b==10){
        this.t75b='Protesis total'
      }
      else if(this.d75b==11){
        this.t75b='Protesis fija'
      }
      else if(this.d75b==12){
        this.t75b='Protesis removible'
      }
    }
  }
  cambiar75c(){
    if(this.d75c>11){
    this.d75c=1
      this.t75c='Sano'
    }else{
    this.d75c=this.d75c*1+1
      if(this.d75c==1){
        this.t75c='Sano'
      }
      else if(this.d75c==2){
        this.t75c='Extracción indicada'
      }
      else if(this.d75c==3){
        this.t75c='Pérdida por caries'
      }
      else if(this.d75c==4){
        this.t75c='Sellante necesario'
      }
      else if(this.d75c==5){
        this.t75c='Sellante realizado'
      }
      else if(this.d75c==6){
        this.t75c='Caries'
      }
      else if(this.d75c==7){
        this.t75c='Obturado'
      }
      else if(this.d75c==8){
        this.t75c='Endodoncia'
      }
      else if(this.d75c==9){
        this.t75c='Pérdida'
      }
      else if(this.d75c==10){
        this.t75c='Protesis total'
      }
      else if(this.d75c==11){
        this.t75c='Protesis fija'
      }
      else if(this.d75c==12){
        this.t75c='Protesis removible'
      }
    }
  }
  cambiar75d(){
    if(this.d75d>11){
    this.d75d=1
      this.t75d='Sano'
    }else{
    this.d75d=this.d75d*1+1
      if(this.d75d==1){
        this.t75d='Sano'
      }
      else if(this.d75d==2){
        this.t75d='Extracción indicada'
      }
      else if(this.d75d==3){
        this.t75d='Pérdida por caries'
      }
      else if(this.d75d==4){
        this.t75d='Sellante necesario'
      }
      else if(this.d75d==5){
        this.t75d='Sellante realizado'
      }
      else if(this.d75d==6){
        this.t75d='Caries'
      }
      else if(this.d75d==7){
        this.t75d='Obturado'
      }
      else if(this.d75d==8){
        this.t75d='Endodoncia'
      }
      else if(this.d75d==9){
        this.t75d='Pérdida'
      }
      else if(this.d75d==10){
        this.t75d='Protesis total'
      }
      else if(this.d75d==11){
        this.t75d='Protesis fija'
      }
      else if(this.d75d==12){
        this.t75d='Protesis removible'
      }
    }
  }
  cambiar75e(){
    if(this.d75e>11){
    this.d75e=1
      this.t75e='Sano'
    }else{
    this.d75e=this.d75e*1+1
      if(this.d75e==1){
        this.t75e='Sano'
      }
      else if(this.d75e==2){
        this.t75e='Extracción indicada'
      }
      else if(this.d75e==3){
        this.t75e='Pérdida por caries'
      }
      else if(this.d75e==4){
        this.t75e='Sellante necesario'
      }
      else if(this.d75e==5){
        this.t75e='Sellante realizado'
      }
      else if(this.d75e==6){
        this.t75e='Caries'
      }
      else if(this.d75e==7){
        this.t75e='Obturado'
      }
      else if(this.d75e==8){
        this.t75e='Endodoncia'
      }
      else if(this.d75e==9){
        this.t75e='Pérdida'
      }
      else if(this.d75e==10){
        this.t75e='Protesis total'
      }
      else if(this.d75e==11){
        this.t75e='Protesis fija'
      }
      else if(this.d75e==12){
        this.t75e='Protesis removible'
      }
    }
  }
  //cuadrante 8
  cambiar81a(){
    if(this.d81a>11){
    this.d81a=1
      this.t81a='Sano'
    }else{
    this.d81a=this.d81a*1+1
      if(this.d81a==1){
        this.t81a='Sano'
      }
      else if(this.d81a==2){
        this.t81a='Extracción indicada'
      }
      else if(this.d81a==3){
        this.t81a='Pérdida por caries'
      }
      else if(this.d81a==4){
        this.t81a='Sellante necesario'
      }
      else if(this.d81a==5){
        this.t81a='Sellante realizado'
      }
      else if(this.d81a==6){
        this.t81a='Caries'
      }
      else if(this.d81a==7){
        this.t81a='Obturado'
      }
      else if(this.d81a==8){
        this.t81a='Endodoncia'
      }
      else if(this.d81a==9){
        this.t81a='Pérdida'
      }
      else if(this.d81a==10){
        this.t81a='Protesis total'
      }
      else if(this.d81a==11){
        this.t81a='Protesis fija'
      }
      else if(this.d81a==12){
        this.t81a='Protesis removible'
      }
    }
  }
  cambiar81b(){
    if(this.d81b>11){
    this.d81b=1
      this.t81b='Sano'
    }else{
    this.d81b=this.d81b*1+1
      if(this.d81b==1){
        this.t81b='Sano'
      }
      else if(this.d81b==2){
        this.t81b='Extracción indicada'
      }
      else if(this.d81b==3){
        this.t81b='Pérdida por caries'
      }
      else if(this.d81b==4){
        this.t81b='Sellante necesario'
      }
      else if(this.d81b==5){
        this.t81b='Sellante realizado'
      }
      else if(this.d81b==6){
        this.t81b='Caries'
      }
      else if(this.d81b==7){
        this.t81b='Obturado'
      }
      else if(this.d81b==8){
        this.t81b='Endodoncia'
      }
      else if(this.d81b==9){
        this.t81b='Pérdida'
      }
      else if(this.d81b==10){
        this.t81b='Protesis total'
      }
      else if(this.d81b==11){
        this.t81b='Protesis fija'
      }
      else if(this.d81b==12){
        this.t81b='Protesis removible'
      }
    }
  }
  cambiar81c(){
    if(this.d81c>11){
    this.d81c=1
      this.t81c='Sano'
    }else{
    this.d81c=this.d81c*1+1
      if(this.d81c==1){
        this.t81c='Sano'
      }
      else if(this.d81c==2){
        this.t81c='Extracción indicada'
      }
      else if(this.d81c==3){
        this.t81c='Pérdida por caries'
      }
      else if(this.d81c==4){
        this.t81c='Sellante necesario'
      }
      else if(this.d81c==5){
        this.t81c='Sellante realizado'
      }
      else if(this.d81c==6){
        this.t81c='Caries'
      }
      else if(this.d81c==7){
        this.t81c='Obturado'
      }
      else if(this.d81c==8){
        this.t81c='Endodoncia'
      }
      else if(this.d81c==9){
        this.t81c='Pérdida'
      }
      else if(this.d81c==10){
        this.t81c='Protesis total'
      }
      else if(this.d81c==11){
        this.t81c='Protesis fija'
      }
      else if(this.d81c==12){
        this.t81c='Protesis removible'
      }
    }
  }
  cambiar81d(){
    if(this.d81d>11){
    this.d81d=1
      this.t81d='Sano'
    }else{
    this.d81d=this.d81d*1+1
      if(this.d81d==1){
        this.t81d='Sano'
      }
      else if(this.d81d==2){
        this.t81d='Extracción indicada'
      }
      else if(this.d81d==3){
        this.t81d='Pérdida por caries'
      }
      else if(this.d81d==4){
        this.t81d='Sellante necesario'
      }
      else if(this.d81d==5){
        this.t81d='Sellante realizado'
      }
      else if(this.d81d==6){
        this.t81d='Caries'
      }
      else if(this.d81d==7){
        this.t81d='Obturado'
      }
      else if(this.d81d==8){
        this.t81d='Endodoncia'
      }
      else if(this.d81d==9){
        this.t81d='Pérdida'
      }
      else if(this.d81d==10){
        this.t81d='Protesis total'
      }
      else if(this.d81d==11){
        this.t81d='Protesis fija'
      }
      else if(this.d81d==12){
        this.t81d='Protesis removible'
      }
    }
  }
  cambiar81e(){
    if(this.d81e>11){
    this.d81e=1
      this.t81e='Sano'
    }else{
    this.d81e=this.d81e*1+1
      if(this.d81e==1){
        this.t81e='Sano'
      }
      else if(this.d81e==2){
        this.t81e='Extracción indicada'
      }
      else if(this.d81e==3){
        this.t81e='Pérdida por caries'
      }
      else if(this.d81e==4){
        this.t81e='Sellante necesario'
      }
      else if(this.d81e==5){
        this.t81e='Sellante realizado'
      }
      else if(this.d81e==6){
        this.t81e='Caries'
      }
      else if(this.d81e==7){
        this.t81e='Obturado'
      }
      else if(this.d81e==8){
        this.t81e='Endodoncia'
      }
      else if(this.d81e==9){
        this.t81e='Pérdida'
      }
      else if(this.d81e==10){
        this.t81e='Protesis total'
      }
      else if(this.d81e==11){
        this.t81e='Protesis fija'
      }
      else if(this.d81e==12){
        this.t81e='Protesis removible'
      }
    }
  }
  cambiar82a(){
    if(this.d82a>11){
    this.d82a=1
      this.t82a='Sano'
    }else{
    this.d82a=this.d82a*1+1
      if(this.d82a==1){
        this.t82a='Sano'
      }
      else if(this.d82a==2){
        this.t82a='Extracción indicada'
      }
      else if(this.d82a==3){
        this.t82a='Pérdida por caries'
      }
      else if(this.d82a==4){
        this.t82a='Sellante necesario'
      }
      else if(this.d82a==5){
        this.t82a='Sellante realizado'
      }
      else if(this.d82a==6){
        this.t82a='Caries'
      }
      else if(this.d82a==7){
        this.t82a='Obturado'
      }
      else if(this.d82a==8){
        this.t82a='Endodoncia'
      }
      else if(this.d82a==9){
        this.t82a='Pérdida'
      }
      else if(this.d82a==10){
        this.t82a='Protesis total'
      }
      else if(this.d82a==11){
        this.t82a='Protesis fija'
      }
      else if(this.d82a==12){
        this.t82a='Protesis removible'
      }
    }
  }
  cambiar82b(){
    if(this.d82b>11){
    this.d82b=1
      this.t82b='Sano'
    }else{
    this.d82b=this.d82b*1+1
      if(this.d82b==1){
        this.t82b='Sano'
      }
      else if(this.d82b==2){
        this.t82b='Extracción indicada'
      }
      else if(this.d82b==3){
        this.t82b='Pérdida por caries'
      }
      else if(this.d82b==4){
        this.t82b='Sellante necesario'
      }
      else if(this.d82b==5){
        this.t82b='Sellante realizado'
      }
      else if(this.d82b==6){
        this.t82b='Caries'
      }
      else if(this.d82b==7){
        this.t82b='Obturado'
      }
      else if(this.d82b==8){
        this.t82b='Endodoncia'
      }
      else if(this.d82b==9){
        this.t82b='Pérdida'
      }
      else if(this.d82b==10){
        this.t82b='Protesis total'
      }
      else if(this.d82b==11){
        this.t82b='Protesis fija'
      }
      else if(this.d82b==12){
        this.t82b='Protesis removible'
      }
    }
  }
  cambiar82c(){
    if(this.d82c>11){
    this.d82c=1
      this.t82c='Sano'
    }else{
    this.d82c=this.d82c*1+1
      if(this.d82c==1){
        this.t82c='Sano'
      }
      else if(this.d82c==2){
        this.t82c='Extracción indicada'
      }
      else if(this.d82c==3){
        this.t82c='Pérdida por caries'
      }
      else if(this.d82c==4){
        this.t82c='Sellante necesario'
      }
      else if(this.d82c==5){
        this.t82c='Sellante realizado'
      }
      else if(this.d82c==6){
        this.t82c='Caries'
      }
      else if(this.d82c==7){
        this.t82c='Obturado'
      }
      else if(this.d82c==8){
        this.t82c='Endodoncia'
      }
      else if(this.d82c==9){
        this.t82c='Pérdida'
      }
      else if(this.d82c==10){
        this.t82c='Protesis total'
      }
      else if(this.d82c==11){
        this.t82c='Protesis fija'
      }
      else if(this.d82c==12){
        this.t82c='Protesis removible'
      }
    }
  }
  cambiar82d(){
    if(this.d82d>11){
    this.d82d=1
      this.t82d='Sano'
    }else{
    this.d82d=this.d82d*1+1
      if(this.d82d==1){
        this.t82d='Sano'
      }
      else if(this.d82d==2){
        this.t82d='Extracción indicada'
      }
      else if(this.d82d==3){
        this.t82d='Pérdida por caries'
      }
      else if(this.d82d==4){
        this.t82d='Sellante necesario'
      }
      else if(this.d82d==5){
        this.t82d='Sellante realizado'
      }
      else if(this.d82d==6){
        this.t82d='Caries'
      }
      else if(this.d82d==7){
        this.t82d='Obturado'
      }
      else if(this.d82d==8){
        this.t82d='Endodoncia'
      }
      else if(this.d82d==9){
        this.t82d='Pérdida'
      }
      else if(this.d82d==10){
        this.t82d='Protesis total'
      }
      else if(this.d82d==11){
        this.t82d='Protesis fija'
      }
      else if(this.d82d==12){
        this.t82d='Protesis removible'
      }
    }
  }
  cambiar82e(){
    if(this.d82e>11){
    this.d82e=1
      this.t82e='Sano'
    }else{
    this.d82e=this.d82e*1+1
      if(this.d82e==1){
        this.t82e='Sano'
      }
      else if(this.d82e==2){
        this.t82e='Extracción indicada'
      }
      else if(this.d82e==3){
        this.t82e='Pérdida por caries'
      }
      else if(this.d82e==4){
        this.t82e='Sellante necesario'
      }
      else if(this.d82e==5){
        this.t82e='Sellante realizado'
      }
      else if(this.d82e==6){
        this.t82e='Caries'
      }
      else if(this.d82e==7){
        this.t82e='Obturado'
      }
      else if(this.d82e==8){
        this.t82e='Endodoncia'
      }
      else if(this.d82e==9){
        this.t82e='Pérdida'
      }
      else if(this.d82e==10){
        this.t82e='Protesis total'
      }
      else if(this.d82e==11){
        this.t82e='Protesis fija'
      }
      else if(this.d82e==12){
        this.t82e='Protesis removible'
      }
    }
  }
  cambiar83a(){
    if(this.d83a>11){
    this.d83a=1
      this.t83a='Sano'
    }else{
    this.d83a=this.d83a*1+1
      if(this.d83a==1){
        this.t83a='Sano'
      }
      else if(this.d83a==2){
        this.t83a='Extracción indicada'
      }
      else if(this.d83a==3){
        this.t83a='Pérdida por caries'
      }
      else if(this.d83a==4){
        this.t83a='Sellante necesario'
      }
      else if(this.d83a==5){
        this.t83a='Sellante realizado'
      }
      else if(this.d83a==6){
        this.t83a='Caries'
      }
      else if(this.d83a==7){
        this.t83a='Obturado'
      }
      else if(this.d83a==8){
        this.t83a='Endodoncia'
      }
      else if(this.d83a==9){
        this.t83a='Pérdida'
      }
      else if(this.d83a==10){
        this.t83a='Protesis total'
      }
      else if(this.d83a==11){
        this.t83a='Protesis fija'
      }
      else if(this.d83a==12){
        this.t83a='Protesis removible'
      }
    }
  }
  cambiar83b(){
    if(this.d83b>11){
    this.d83b=1
      this.t83b='Sano'
    }else{
    this.d83b=this.d83b*1+1
      if(this.d83b==1){
        this.t83b='Sano'
      }
      else if(this.d83b==2){
        this.t83b='Extracción indicada'
      }
      else if(this.d83b==3){
        this.t83b='Pérdida por caries'
      }
      else if(this.d83b==4){
        this.t83b='Sellante necesario'
      }
      else if(this.d83b==5){
        this.t83b='Sellante realizado'
      }
      else if(this.d83b==6){
        this.t83b='Caries'
      }
      else if(this.d83b==7){
        this.t83b='Obturado'
      }
      else if(this.d83b==8){
        this.t83b='Endodoncia'
      }
      else if(this.d83b==9){
        this.t83b='Pérdida'
      }
      else if(this.d83b==10){
        this.t83b='Protesis total'
      }
      else if(this.d83b==11){
        this.t83b='Protesis fija'
      }
      else if(this.d83b==12){
        this.t83b='Protesis removible'
      }
    }
  }
  cambiar83c(){
    if(this.d83c>11){
    this.d83c=1
      this.t83c='Sano'
    }else{
    this.d83c=this.d83c*1+1
      if(this.d83c==1){
        this.t83c='Sano'
      }
      else if(this.d83c==2){
        this.t83c='Extracción indicada'
      }
      else if(this.d83c==3){
        this.t83c='Pérdida por caries'
      }
      else if(this.d83c==4){
        this.t83c='Sellante necesario'
      }
      else if(this.d83c==5){
        this.t83c='Sellante realizado'
      }
      else if(this.d83c==6){
        this.t83c='Caries'
      }
      else if(this.d83c==7){
        this.t83c='Obturado'
      }
      else if(this.d83c==8){
        this.t83c='Endodoncia'
      }
      else if(this.d83c==9){
        this.t83c='Pérdida'
      }
      else if(this.d83c==10){
        this.t83c='Protesis total'
      }
      else if(this.d83c==11){
        this.t83c='Protesis fija'
      }
      else if(this.d83c==12){
        this.t83c='Protesis removible'
      }
    }
  }
  cambiar83d(){
    if(this.d83d>11){
    this.d83d=1
      this.t83d='Sano'
    }else{
    this.d83d=this.d83d*1+1
      if(this.d83d==1){
        this.t83d='Sano'
      }
      else if(this.d83d==2){
        this.t83d='Extracción indicada'
      }
      else if(this.d83d==3){
        this.t83d='Pérdida por caries'
      }
      else if(this.d83d==4){
        this.t83d='Sellante necesario'
      }
      else if(this.d83d==5){
        this.t83d='Sellante realizado'
      }
      else if(this.d83d==6){
        this.t83d='Caries'
      }
      else if(this.d83d==7){
        this.t83d='Obturado'
      }
      else if(this.d83d==8){
        this.t83d='Endodoncia'
      }
      else if(this.d83d==9){
        this.t83d='Pérdida'
      }
      else if(this.d83d==10){
        this.t83d='Protesis total'
      }
      else if(this.d83d==11){
        this.t83d='Protesis fija'
      }
      else if(this.d83d==12){
        this.t83d='Protesis removible'
      }
    }
  }
  cambiar83e(){
    if(this.d83e>11){
    this.d83e=1
      this.t83e='Sano'
    }else{
    this.d83e=this.d83e*1+1
      if(this.d83e==1){
        this.t83e='Sano'
      }
      else if(this.d83e==2){
        this.t83e='Extracción indicada'
      }
      else if(this.d83e==3){
        this.t83e='Pérdida por caries'
      }
      else if(this.d83e==4){
        this.t83e='Sellante necesario'
      }
      else if(this.d83e==5){
        this.t83e='Sellante realizado'
      }
      else if(this.d83e==6){
        this.t83e='Caries'
      }
      else if(this.d83e==7){
        this.t83e='Obturado'
      }
      else if(this.d83e==8){
        this.t83e='Endodoncia'
      }
      else if(this.d83e==9){
        this.t83e='Pérdida'
      }
      else if(this.d83e==10){
        this.t83e='Protesis total'
      }
      else if(this.d83e==11){
        this.t83e='Protesis fija'
      }
      else if(this.d83e==12){
        this.t83e='Protesis removible'
      }
    }
  }
  cambiar84a(){
    if(this.d84a>11){
    this.d84a=1
      this.t84a='Sano'
    }else{
    this.d84a=this.d84a*1+1
      if(this.d84a==1){
        this.t84a='Sano'
      }
      else if(this.d84a==2){
        this.t84a='Extracción indicada'
      }
      else if(this.d84a==3){
        this.t84a='Pérdida por caries'
      }
      else if(this.d84a==4){
        this.t84a='Sellante necesario'
      }
      else if(this.d84a==5){
        this.t84a='Sellante realizado'
      }
      else if(this.d84a==6){
        this.t84a='Caries'
      }
      else if(this.d84a==7){
        this.t84a='Obturado'
      }
      else if(this.d84a==8){
        this.t84a='Endodoncia'
      }
      else if(this.d84a==9){
        this.t84a='Pérdida'
      }
      else if(this.d84a==10){
        this.t84a='Protesis total'
      }
      else if(this.d84a==11){
        this.t84a='Protesis fija'
      }
      else if(this.d84a==12){
        this.t84a='Protesis removible'
      }
    }
  }
  cambiar84b(){
    if(this.d84b>11){
    this.d84b=1
      this.t84b='Sano'
    }else{
    this.d84b=this.d84b*1+1
      if(this.d84b==1){
        this.t84b='Sano'
      }
      else if(this.d84b==2){
        this.t84b='Extracción indicada'
      }
      else if(this.d84b==3){
        this.t84b='Pérdida por caries'
      }
      else if(this.d84b==4){
        this.t84b='Sellante necesario'
      }
      else if(this.d84b==5){
        this.t84b='Sellante realizado'
      }
      else if(this.d84b==6){
        this.t84b='Caries'
      }
      else if(this.d84b==7){
        this.t84b='Obturado'
      }
      else if(this.d84b==8){
        this.t84b='Endodoncia'
      }
      else if(this.d84b==9){
        this.t84b='Pérdida'
      }
      else if(this.d84b==10){
        this.t84b='Protesis total'
      }
      else if(this.d84b==11){
        this.t84b='Protesis fija'
      }
      else if(this.d84b==12){
        this.t84b='Protesis removible'
      }
    }
  }
  cambiar84c(){
    if(this.d84c>11){
    this.d84c=1
      this.t84c='Sano'
    }else{
    this.d84c=this.d84c*1+1
      if(this.d84c==1){
        this.t84c='Sano'
      }
      else if(this.d84c==2){
        this.t84c='Extracción indicada'
      }
      else if(this.d84c==3){
        this.t84c='Pérdida por caries'
      }
      else if(this.d84c==4){
        this.t84c='Sellante necesario'
      }
      else if(this.d84c==5){
        this.t84c='Sellante realizado'
      }
      else if(this.d84c==6){
        this.t84c='Caries'
      }
      else if(this.d84c==7){
        this.t84c='Obturado'
      }
      else if(this.d84c==8){
        this.t84c='Endodoncia'
      }
      else if(this.d84c==9){
        this.t84c='Pérdida'
      }
      else if(this.d84c==10){
        this.t84c='Protesis total'
      }
      else if(this.d84c==11){
        this.t84c='Protesis fija'
      }
      else if(this.d84c==12){
        this.t84c='Protesis removible'
      }
    }
  }
  cambiar84d(){
    if(this.d84d>11){
    this.d84d=1
      this.t84d='Sano'
    }else{
    this.d84d=this.d84d*1+1
      if(this.d84d==1){
        this.t84d='Sano'
      }
      else if(this.d84d==2){
        this.t84d='Extracción indicada'
      }
      else if(this.d84d==3){
        this.t84d='Pérdida por caries'
      }
      else if(this.d84d==4){
        this.t84d='Sellante necesario'
      }
      else if(this.d84d==5){
        this.t84d='Sellante realizado'
      }
      else if(this.d84d==6){
        this.t84d='Caries'
      }
      else if(this.d84d==7){
        this.t84d='Obturado'
      }
      else if(this.d84d==8){
        this.t84d='Endodoncia'
      }
      else if(this.d84d==9){
        this.t84d='Pérdida'
      }
      else if(this.d84d==10){
        this.t84d='Protesis total'
      }
      else if(this.d84d==11){
        this.t84d='Protesis fija'
      }
      else if(this.d84d==12){
        this.t84d='Protesis removible'
      }
    }
  }
  cambiar84e(){
    if(this.d84e>11){
    this.d84e=1
      this.t84e='Sano'
    }else{
    this.d84e=this.d84e*1+1
      if(this.d84e==1){
        this.t84e='Sano'
      }
      else if(this.d84e==2){
        this.t84e='Extracción indicada'
      }
      else if(this.d84e==3){
        this.t84e='Pérdida por caries'
      }
      else if(this.d84e==4){
        this.t84e='Sellante necesario'
      }
      else if(this.d84e==5){
        this.t84e='Sellante realizado'
      }
      else if(this.d84e==6){
        this.t84e='Caries'
      }
      else if(this.d84e==7){
        this.t84e='Obturado'
      }
      else if(this.d84e==8){
        this.t84e='Endodoncia'
      }
      else if(this.d84e==9){
        this.t84e='Pérdida'
      }
      else if(this.d84e==10){
        this.t84e='Protesis total'
      }
      else if(this.d84e==11){
        this.t84e='Protesis fija'
      }
      else if(this.d84e==12){
        this.t84e='Protesis removible'
      }
    }
  }
  cambiar85a(){
    if(this.d85a>11){
    this.d85a=1
      this.t85a='Sano'
    }else{
    this.d85a=this.d85a*1+1
      if(this.d85a==1){
        this.t85a='Sano'
      }
      else if(this.d85a==2){
        this.t85a='Extracción indicada'
      }
      else if(this.d85a==3){
        this.t85a='Pérdida por caries'
      }
      else if(this.d85a==4){
        this.t85a='Sellante necesario'
      }
      else if(this.d85a==5){
        this.t85a='Sellante realizado'
      }
      else if(this.d85a==6){
        this.t85a='Caries'
      }
      else if(this.d85a==7){
        this.t85a='Obturado'
      }
      else if(this.d85a==8){
        this.t85a='Endodoncia'
      }
      else if(this.d85a==9){
        this.t85a='Pérdida'
      }
      else if(this.d85a==10){
        this.t85a='Protesis total'
      }
      else if(this.d85a==11){
        this.t85a='Protesis fija'
      }
      else if(this.d85a==12){
        this.t85a='Protesis removible'
      }
    }
  }
  cambiar85b(){
    if(this.d85b>11){
    this.d85b=1
      this.t85b='Sano'
    }else{
    this.d85b=this.d85b*1+1
      if(this.d85b==1){
        this.t85b='Sano'
      }
      else if(this.d85b==2){
        this.t85b='Extracción indicada'
      }
      else if(this.d85b==3){
        this.t85b='Pérdida por caries'
      }
      else if(this.d85b==4){
        this.t85b='Sellante necesario'
      }
      else if(this.d85b==5){
        this.t85b='Sellante realizado'
      }
      else if(this.d85b==6){
        this.t85b='Caries'
      }
      else if(this.d85b==7){
        this.t85b='Obturado'
      }
      else if(this.d85b==8){
        this.t85b='Endodoncia'
      }
      else if(this.d85b==9){
        this.t85b='Pérdida'
      }
      else if(this.d85b==10){
        this.t85b='Protesis total'
      }
      else if(this.d85b==11){
        this.t85b='Protesis fija'
      }
      else if(this.d85b==12){
        this.t85b='Protesis removible'
      }
    }
  }
  cambiar85c(){
    if(this.d85c>11){
    this.d85c=1
      this.t85c='Sano'
    }else{
    this.d85c=this.d85c*1+1
      if(this.d85c==1){
        this.t85c='Sano'
      }
      else if(this.d85c==2){
        this.t85c='Extracción indicada'
      }
      else if(this.d85c==3){
        this.t85c='Pérdida por caries'
      }
      else if(this.d85c==4){
        this.t85c='Sellante necesario'
      }
      else if(this.d85c==5){
        this.t85c='Sellante realizado'
      }
      else if(this.d85c==6){
        this.t85c='Caries'
      }
      else if(this.d85c==7){
        this.t85c='Obturado'
      }
      else if(this.d85c==8){
        this.t85c='Endodoncia'
      }
      else if(this.d85c==9){
        this.t85c='Pérdida'
      }
      else if(this.d85c==10){
        this.t85c='Protesis total'
      }
      else if(this.d85c==11){
        this.t85c='Protesis fija'
      }
      else if(this.d85c==12){
        this.t85c='Protesis removible'
      }
    }
  }
  cambiar85d(){
    if(this.d85d>11){
    this.d85d=1
      this.t85d='Sano'
    }else{
    this.d85d=this.d85d*1+1
      if(this.d85d==1){
        this.t85d='Sano'
      }
      else if(this.d85d==2){
        this.t85d='Extracción indicada'
      }
      else if(this.d85d==3){
        this.t85d='Pérdida por caries'
      }
      else if(this.d85d==4){
        this.t85d='Sellante necesario'
      }
      else if(this.d85d==5){
        this.t85d='Sellante realizado'
      }
      else if(this.d85d==6){
        this.t85d='Caries'
      }
      else if(this.d85d==7){
        this.t85d='Obturado'
      }
      else if(this.d85d==8){
        this.t85d='Endodoncia'
      }
      else if(this.d85d==9){
        this.t85d='Pérdida'
      }
      else if(this.d85d==10){
        this.t85d='Protesis total'
      }
      else if(this.d85d==11){
        this.t85d='Protesis fija'
      }
      else if(this.d85d==12){
        this.t85d='Protesis removible'
      }
    }
  }
  cambiar85e(){
    if(this.d85e>11){
    this.d85e=1
      this.t85e='Sano'
    }else{
    this.d85e=this.d85e*1+1
      if(this.d85e==1){
        this.t85e='Sano'
      }
      else if(this.d85e==2){
        this.t85e='Extracción indicada'
      }
      else if(this.d85e==3){
        this.t85e='Pérdida por caries'
      }
      else if(this.d85e==4){
        this.t85e='Sellante necesario'
      }
      else if(this.d85e==5){
        this.t85e='Sellante realizado'
      }
      else if(this.d85e==6){
        this.t85e='Caries'
      }
      else if(this.d85e==7){
        this.t85e='Obturado'
      }
      else if(this.d85e==8){
        this.t85e='Endodoncia'
      }
      else if(this.d85e==9){
        this.t85e='Pérdida'
      }
      else if(this.d85e==10){
        this.t85e='Protesis total'
      }
      else if(this.d85e==11){
        this.t85e='Protesis fija'
      }
      else if(this.d85e==12){
        this.t85e='Protesis removible'
      }
    }
  }

  pdf(){
    document.getElementById('pdf').style.display = 'block';
    let DATA: any = document.getElementById('pdf');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = canvas.width;
      let fileHeight = canvas.height;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
      let position = 5;
      PDF.addImage(FILEURI, 'JPEG', 5, position, fileWidth, fileHeight);
      PDF.save(this.nombre+'_'+this.apellido+'.pdf');
      console.log(fileHeight+' '+fileWidth)
    });
  }
}

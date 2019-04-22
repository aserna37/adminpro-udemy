import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    
    const url = URL_SERVICIOS + '/img';
    
    if (!img) {
      return url + '/usuario/xxx';
    }

    if (img.indexOf('https') >= 0 ){
      return img;
    }

    switch (tipo){

      case 'usuario':
      return url + '/usuarios/' + img;
      break;
      case 'medico':
      return url + '/medicos/' + img;
      break;
      case 'hospitales':
      return url + '/hospitales/' + img;
      break;
      default:
      console.log('tipo de imagen no existe, usuario, medicos, hospitales');
      return url + '/usuarios/xxx';

    }
    return url;
  }

}

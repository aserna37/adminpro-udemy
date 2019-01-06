import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

subscribicion: Subscription;


  constructor() {

    

    this.subscribicion = this.regresaObservable().subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observable termino!')

    );

    }

   ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se cierra');
    this.subscribicion.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    let contador = 0;

    

    return new Observable((observer: Subscriber<any>) => {
      const intervalo = setInterval(() => {

        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next( salida );
        
        //if ( contador === 2 ) {
          //clearInterval( intervalo );
         //  observer.error('Auxilio!');
        //}
        
       // if ( contador === 3) {
        //clearInterval( intervalo );
        //observer.complete();
       // }


      }, 1000 );
    }).pipe(map(res => res.valor),
       filter( (valor, index ) => {
        if ((valor % 2) === 1 ) {
          //numero impar
          return true;
        } else {
          //par
          return false;
        }  

        
       });
  }
}

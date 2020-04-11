import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;

  constructor() { 

    this.subscripcion = this.regresaObserbable()
    
    .subscribe( 
      //callback next
      numero => console.log( 'Subs', numero ),
      //callback error
      error => console.error( 'obs error', error ),
      //callback cuando termina
      () => console.error( 'obs termino' ) 

     );


  }

  ngOnInit() {
  }

  ngOnDestroy(){
       console.log( 'se cerro mk');
       this.subscripcion.unsubscribe();

  }

  regresaObserbable(): Observable<any> {

    return new Observable( (observer: Subscriber<any> ) => {

      let contador = 0;

      let intervalo = setInterval( () =>{

        contador ++;

        const salida ={
          valor: contador
        };

        observer.next( salida );

        // if ( contador === 3 ) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }

        // if ( contador === 2 ) {
        //   //clearInterval( intervalo );
        //   observer.error('AIUDAAA');
        // }

      }, 1000);

    }).pipe(

      map( resp => resp.valor),
      filter( ( valor, index ) => {
       // console.log( 'Filter', valor, index );

       if ( (valor % 2) === 1 ){

         //impar
         return true;

       } else {

         //par
         return false;
       }
      })
    );

  }

}

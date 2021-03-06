import { Component, OnInit } from '@angular/core';
import { error } from 'util';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    


    this.contarTres().then(
      mensaje => console.log('termino', mensaje),
    )
    .catch( error => console.log('error', error));

   }

  ngOnInit() {
  }

  contarTres(): Promise<boolean>{

      //una promesa siempre devulve resolve o reject
      return new Promise( (resolve, reject) => {

        let contador= 0;
  
       let intervalo = setInterval( () =>{
  
          contador += 1;
          console.log( contador )
  
          if ( contador === 3 ){
            resolve( true );
            clearInterval(intervalo);
          }
  
          //tiempo de dispare de la promesa 1 segundo
        },1000);
  
  
      });

      
  }

}

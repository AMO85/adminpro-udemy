import { Component, OnInit, ElementRef } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema:string, link: any){
    console.log (tema)

    this.aplicarCheck( link );
    this._ajustes.aplicarTema( tema );

  }

  aplicarCheck( link: any ){
    //variable selectores trae todo el arreglo de selector del html  (Vanilla JS)
    let selectores: any = document.getElementsByClassName('selector');

    //for para volver el arreglo de selectores en el seleccionado
    for ( let ref of selectores ) {

      //se elimina de la class="working" que es la que nos muestra el Check en el color en la etiqueta li (Vanilla JS)
      ref.classList.remove('working');
    }
      //se agrega de la class="working" que es la que nos muestra el Check en el color en la etiqueta li  (Vanilla JS)
      link.classList.add('working');

  }

  colocarCheck() {
     //variable selectores trae todo el arreglo de selector del html  (Vanilla JS)
     let selectores: any = document.getElementsByClassName('selector');

     //se crea variable tema
     let tema = this._ajustes.ajustes.tema;

     //for para volver el arreglo de selectores en el seleccionado
    for ( let ref of selectores ) {

      //si la variable tema es igual al atributo data-theme del html de la variable
      if ( ref.getAttribute( 'data-theme' ) === tema ){

          //se agrega de la class="working" que es la que nos muestra el Check en el color en la etiqueta li  (Vanilla JS)
          ref.classList.add('working');
          break;

      }


    }

  }
 
}

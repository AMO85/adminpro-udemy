import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes: Ajustes = {
  temaUrl:'assets/css/colors/default.css',
  tema:'default'
};


  constructor( @Inject(DOCUMENT) private _document, ) { 

    //carga automaticamente este servicio desde app.component.ts donde esta inyectado
    this.cargarAjustes();

   }

  guardarAjustes(){

    //como se guarda en el local storage y este solo guarda strings combertimos el arreglo Ajustes en JSON.stringify
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ))
  }
  

  cargarAjustes(){
    //primero validamos si hay algo guardado en el local storage
    if ( localStorage.getItem('ajustes') ){

      //si esta guardado esta guardado en strig lo parciamos para volver a traer el arreglo de Ajustes
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );

      this.aplicarTema( this.ajustes.tema );

    }else{
      this.aplicarTema( this.ajustes.tema );


    }
  }

  aplicarTema( tema: string ){

     // se trae la url desde index.html y se agrega ${ tema } en el nombre del color
     let url = `assets/css/colors/${ tema }.css`;
     //pone el valor seleccionado
     this._document.getElementById('tema').setAttribute('href', url )
 
     this.ajustes.tema = tema;
     this.ajustes.temaUrl = url;
 
     this.guardarAjustes();
  }

}
interface Ajustes{
  temaUrl: string;
  tema: string;
}

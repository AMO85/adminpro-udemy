import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
//decorador para hacer referencia a algo html 
  @ViewChild('txtprogress') txtprogress: ElementRef;

//como se le da un nombre al decorador 'Imput' -> se debe cambiar en el progress.component.html
@Input('nombre') leyenda: string = 'leyenda';
@Input() progreso: number = 50;

//para poder emitir un numero como evento
@Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {   
    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);

   }

  ngOnInit() {
    // console.log('leyenda', this.leyenda);
    // console.log('progreso', this.progreso);

  }
  onChanges( newValue:number ){
    //campos con refere (vJs) es porque son vanilla Jscript
    //(vJs) let elemHTml: any = document.getElementsByName('progreso') [0];
    //console.log( elemHTml.value )
    
    if ( newValue >= 100 ){
      this.progreso = 100;
    }else if ( newValue <= 0 ){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    //(vJs) elemHTml.value =  this.progreso ;

    this.txtprogress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

    //para dejar el foco del click en donde se da click osea el cursos
    this.txtprogress.nativeElement.focus();



  }

  //se trae el evento number
  cambiarValor( valor: number ){

    if ( this.progreso >= 100){
      return;
    }

    if ( this.progreso <= 0){
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );

  }

}

import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //se inyecta el servicio _ajustes cuando carga la aplicacion
  constructor( public _ajustes: SettingsService ) {}

}

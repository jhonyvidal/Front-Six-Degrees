import { Component, Input } from '@angular/core';
import { ApiService } from './servicios/api.service';
import { Usuario } from "./modelos/Usuario";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Six Degrees';
  datos: Array <Usuario> = []; 
  Busqueda : string = "";
  respuesta : string = "";

  constructor(
    private ApiService: ApiService
  ) {}

  getUsuarios() {
    this.ApiService.getUsuarios()
    .subscribe(task => {
      this.datos = Object.values(task);
    });
  }
  getLibroText(){
    if( this.Busqueda == ""){ this.respuesta = "INGRESAR TEXTO DEL NOMBRE";  return;
    }else{

      this.ApiService.getLibroText(this.Busqueda)
      .subscribe(task => {
        this.datos = Object.values(task);
        if(this.datos.length == 0){
          this.respuesta ="El nombre no está registrado."
        }
      });
    }
  }

}


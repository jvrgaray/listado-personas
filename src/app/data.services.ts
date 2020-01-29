import { LoginService } from './login/login.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient,
    private loginService: LoginService) { }

  // guardar personas
  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://listado-personas-1d4a5.firebaseio.com/datos.json?auth=' + token, personas).subscribe(
      response =>
        console.log('resultado de guardar las personas: ' + response)
      ,
      error => console.log('Error al guardar personas:' + error)
    );
  }

  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-1d4a5.firebaseio.com/datos.json?auth=' + token);
  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-1d4a5.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.put(url, persona).subscribe(
      response => console.log('resultado modificar Persona: ' + response)
      ,
      error => console.log('Error en modificar Persona: ' + error)
    );
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken();
    let url: string;
    url = 'https://listado-personas-1d4a5.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.delete(url).subscribe(
      response => console.log('resultado eliminar Persona: ' + response)
      ,
      error => console.log('Error en eliminar Persona: ' + error)
    );
  }
}

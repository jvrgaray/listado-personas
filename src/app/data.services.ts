import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) { }

  // guardar personas
  guardarPersonas(personas: Persona[]) {
    this.httpClient.put('https://listado-personas-1d4a5.firebaseio.com/datos.json', personas).subscribe(
      response =>
        console.log('resultado de guardar las personas: ' + response)
      ,
      error => console.log('Error al guardar personas:' + error)
    );
  }

  cargarPersonas() {
    return this.httpClient.get('https://listado-personas-1d4a5.firebaseio.com/datos.json');
  }

  modificarPersona(index: number, persona: Persona) {
    let url: string;
    url = 'https://listado-personas-1d4a5.firebaseio.com/datos/' + index + '.json';
    this.httpClient.put(url, persona).subscribe(
      response => console.log('resultado modificar Persona: ' + response)
      ,
      error => console.log('Error en modificar Persona: ' + error)
    );
  }

  eliminarPersona(index: number) {
    let url: string;
    url = 'https://listado-personas-1d4a5.firebaseio.com/datos/' + index + '.json';
    this.httpClient.delete(url).subscribe(
      response => console.log('resultado eliminar Persona: ' + response)
      ,
      error => console.log('Error en eliminar Persona: ' + error)
    );
  }
}

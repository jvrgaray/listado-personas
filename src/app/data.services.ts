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
}

import { DataServices } from './data.services';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasServices {
  personas: Persona[] = [];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService,
              private dataServices: DataServices) { }

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola("agregamos persona: " + persona.nombre);
    if(this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number) {
    return this.personas[index];
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona);
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }

  obtenerPersonas() {
    return this.dataServices.cargarPersonas();
  }

  setPersonas(personas:Persona[]) {
    this.personas = personas;
  }
}

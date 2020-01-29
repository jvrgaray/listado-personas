import { DataServices } from './data.services';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasServices {
  personas: Persona[] = [new Persona('Juan', 'Perez'), new Persona('Javier', 'Garay')];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService,
              private dataServices: DataServices) { }

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola("agregamos persona: " + persona.nombre);
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
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}

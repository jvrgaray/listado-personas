import { PersonasServices } from './personas.service';
import { LoggingService } from './LoggingService.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'listado de personas';
  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,
    private personasServices: PersonasServices) {
  }

  ngOnInit(): void {
    this.personas = this.personasServices.personas;
  }

  onPersonaAgregada(persona: Persona) {
    //this.loggingService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona: "+persona.nombre);
    //this.personas.push(persona);
    this.personasServices.agregarPersona(persona);
  }
}

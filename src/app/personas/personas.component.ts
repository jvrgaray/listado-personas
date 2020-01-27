import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasServices } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,
              private personasServices: PersonasServices,
              private router: Router) {
  }

  ngOnInit(): void {
    this.personas = this.personasServices.personas;
  }

  onPersonaAgregada(persona: Persona) {
    //this.loggingService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona: "+persona.nombre);
    //this.personas.push(persona);
    this.personasServices.agregarPersona(persona);
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}

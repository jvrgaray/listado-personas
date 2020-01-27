import { Router } from '@angular/router';
import { PersonasServices } from '../../personas.service';
import { LoggingService } from '../../LoggingService.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string;
  apellidoInput: string;

  constructor(private loggingService: LoggingService,
              private personasServices: PersonasServices,
              private router: Router) {
    this.personasServices.saludar.subscribe(
      (indice: number) => alert('el indice es: ' + indice)
    );
  }

  ngOnInit() {
  }

  onGuardarPersona() {
    const persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personasServices.agregarPersona(persona1);
    this.router.navigate(['personas']);
  }
}

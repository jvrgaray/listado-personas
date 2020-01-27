import { PersonasServices } from './../personas.service';
import { LoggingService } from './../LoggingService.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona.model';

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
    private personasServices: PersonasServices) {
    this.personasServices.saludar.subscribe(
      (indice: number) => alert("el indice es: " + indice)
    );
  }

  ngOnInit() {
  }

  onAgregaPersona() {
    const persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingService.enviaMensajeAConsola("Enviamos persona " + persona1.nombre + " " + persona1.apellido);
    //this.personas.push(persona1);
    //enviar info a componente padre
    this.personaCreada.emit(persona1);
  }
}

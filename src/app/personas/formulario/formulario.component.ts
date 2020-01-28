import { Router, ActivatedRoute } from '@angular/router';
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
  index: number;

  constructor(private loggingService: LoggingService,
    private personasServices: PersonasServices,
    private router: Router,
    private route: ActivatedRoute) {
    this.personasServices.saludar.subscribe(
      (indice: number) => alert('el indice es: ' + indice)
    );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      let persona: Persona = this.personasServices.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona() {
    const persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if (this.index) {
      this.personasServices.modificarPersona(this.index, persona1);
    } else {
      this.personasServices.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }
}

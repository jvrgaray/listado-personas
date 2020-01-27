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

  ngOnInit(): void {
  }
}

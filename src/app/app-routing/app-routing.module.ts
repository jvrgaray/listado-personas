import { FormularioComponent } from './../personas/formulario/formulario.component';
import { PersonasComponent } from './../personas/personas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  {
    path: 'personas', component: PersonasComponent,
    children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent } // editar
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

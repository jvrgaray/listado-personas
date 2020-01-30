import { LoginGuard } from './../login/login-guard.service';
import { LoginComponent } from './../login/login.component';
import { ErrorComponent } from './../error/error.component';
import { FormularioComponent } from './../personas/formulario/formulario.component';
import { PersonasComponent } from './../personas/personas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  {
    path: 'personas', component: PersonasComponent, canActivate: [LoginGuard],
    children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent } // editar
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }

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

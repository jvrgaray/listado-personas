import { LoginService } from './login/login.service';
import { PersonasServices } from './personas.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'listado de personas';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD2TtTdSo1MxsMaiCbNgBUwNgWEqdQrE7k",
      authDomain: "listado-personas-1d4a5.firebaseapp.com"
    });
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}

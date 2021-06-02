import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from 'src/models/UsuarioLogin';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor() { }

  ngOnInit(): void {
  }

}

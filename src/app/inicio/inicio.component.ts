import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from 'src/models/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor() { }
    private auth: AuthService
    


  ngOnInit(): void {
  }

}

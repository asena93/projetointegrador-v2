import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable {
    return this.http.post('https://marajuda.herokuapp.com/usuarios/entrar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable {
    return this.http.post('https://marajuda.herokuapp.com/usuarios/cadastrar', usuario)
  }
}

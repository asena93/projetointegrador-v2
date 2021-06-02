import { UsuarioLogin } from 'src/models/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from './../../models/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://marajuda.herokuapp.com/usuarios/entrar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://marajuda.herokuapp.com/usuarios/cadastrar', usuario)
  }
}


import { Observable } from 'rxjs';
import { Usuario } from './../../models/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
=======
import { UsuarioLogin } from 'src/models/UsuarioLogin';


>>>>>>> cadastroConsumoRodrigo

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

<<<<<<< HEAD
  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://marajuda.herokuapp.com/usuarios/entrar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
=======
  entrar(usuarioLogin: UsuarioLogin): Observable <UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://marajuda.herokuapp.com/usuarios/entrar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable <Usuario> {
>>>>>>> cadastroConsumoRodrigo
    return this.http.post<Usuario>('https://marajuda.herokuapp.com/usuarios/cadastrar', usuario)
  }
}

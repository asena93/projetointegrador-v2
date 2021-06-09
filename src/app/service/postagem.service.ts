import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http:HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token )
  }

  getByPostagem(id: number){
    return this.http.get<Postagem>(`${environment.server}/postagens/${id}`,this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`${environment.server}/postagens/${id}`,this.token)
  }

}

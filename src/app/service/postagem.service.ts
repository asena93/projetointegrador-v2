import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  putPostagem: any;
  getByIdPostagem(id: number) {
    throw new Error('Method not implemented.');
  }

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

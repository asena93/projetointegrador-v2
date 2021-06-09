import { AuthService } from './../service/auth.service';
import { User } from 'src/app/model/User';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id


  /*tema*/
  listaTema: Tema[]

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert ('Sessão expirou')
      this.router.navigate(['/inicio'])
    }

    this.getAllTemas()
    this.getAllPostagens()

    /*tema*/
    this.findAllTema()

  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })

  }
  /*tema*/


  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTema = resp
    })
  }
  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) =>{
      this.tema = resp
      alert('tema cadastrado com sucesso!')
      this.findAllTema()
      this.tema = new Tema()
    })
  }
}

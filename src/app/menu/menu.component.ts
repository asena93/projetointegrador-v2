import { PostagemService } from './../service/postagem.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   nome = environment.nome
   foto = environment.foto
   id = environment.id
   tituloPost: string

  /* tema */

  listaTema: Tema[]
  tema: Tema = new Tema



  constructor(
    private router : Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(



  ) {


    /*tema */

    this.findAllTema()
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
    environment.foto = ''
  }

  /* tema*/
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


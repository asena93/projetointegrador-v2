import { TemaService } from './../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema : Tema = new Tema()
  listaTema: Tema[]
  constructor(
    private TemaService: TemaService,
    private router : Router
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert ('Sessão expirou')
      this.router.navigate(['/inicio'])
    }
    this.findAllTema()
  }
  findAllTema(){
    this.TemaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTema = resp
    })
  }
  cadastrar(){
    this.TemaService.postTema(this.tema).subscribe((resp: Tema) =>{
      this.tema = resp
      alert('tema cadastrado com sucesso!')
      this.findAllTema()
      this.tema = new Tema
    })
  }

}

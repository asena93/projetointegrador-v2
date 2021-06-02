import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmaSenha: string
  tipoUsuario:string
  Usuario: Usuario;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
    window.scroll(0,0)
   }

   confirmeSenha(event:any){
     this.confirmaSenha = event.target.value
   }
   tipoUser(event:any){
     this.tipoUsuario = event.target.value
   }
   cadastrar(){
     this.usuario.tipo = this.tipoUsuario

     if(this.usuario.senha != this.confirmaSenha){
       alert ('A senhas estão incorretas')
     }else{
       this.authService.cadastrar(this.usuario).subscribe((resp:Usuario) => {
         this.usuario = resp
         this.router.navigate(['/entrar'])
         alert('Usuario cadastrado com sucesso')
       })
     }
   }

}

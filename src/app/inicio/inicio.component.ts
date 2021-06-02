
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from './../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html', 
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
    

  

  ngOnInit() {
  }
  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp:UsuarioLogin)=>{
    this.usuarioLogin = resp

    environment.token = this.usuarioLogin.token
    environment.nomeCompleto = this.usuarioLogin.nomeCompleto
    environment.foto = this.usuarioLogin.foto
    environment.id = this.usuarioLogin.id

  console.log(environment.token)
  console.log(environment.nomeCompleto)
  console.log(environment.foto)
  console.log(environment.id)

    this.router.navigate(['/inicio'])
  }, erro =>{
    if(erro.status == 500){
      alert('Usuario ou senha estão incorretos')
     }
    })
  }

}

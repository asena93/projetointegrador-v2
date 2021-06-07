import { TemaComponent } from './tema/tema.component';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},

  {path:'inicio', component:InicioComponent},
  {path:'rodape', component:RodapeComponent},
  {path:'sobre', component:SobreNosComponent},
  {path:'menu', component:MenuComponent},
  {path:'contato', component:ContatoComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'home', component:HomeComponent},
  {path:'tema',component:TemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

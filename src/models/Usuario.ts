import { Postagem } from './Postagem';
export class Usuarios{
  public id: number
  public nomeCompleto: string
  public email: Usuarios
  public senha: string
  public foto: string
  public tipo: string
  public postagem: Postagem[]
}

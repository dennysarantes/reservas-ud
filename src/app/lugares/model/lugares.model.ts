import { TipoLugaresEnum } from "./tipo-lugares.enum";

export class LugaresModel {
  constructor(
    public id: string,
    public titulo:string,
    public descricao: string,
    public imagemUrl:string,
    public preco:number,
    public tipo: TipoLugaresEnum
  ){}
}

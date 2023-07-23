export class ReservaModel {
  constructor(
    public id:string,
    public lugarId:string,
    public userId:string,
    public lugarTitulo:string,
    public qtdHospedes:number
  ){}
}

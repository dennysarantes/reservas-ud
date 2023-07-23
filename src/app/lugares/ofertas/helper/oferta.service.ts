import { Injectable } from '@angular/core';
import { LugaresModel } from '../../model/lugares.model';
import { HelperOfertas } from './helper-ofertas';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  private _minhasOfertas:LugaresModel[] = []

  constructor() {this._minhasOfertas = HelperOfertas.getOfertasDefault();}

  get ofertas(){
    return [...this._minhasOfertas]
  }

  getOferta(id:string) : LugaresModel{
    return {...this._minhasOfertas.find(o => o.id === id)!}
  }
}

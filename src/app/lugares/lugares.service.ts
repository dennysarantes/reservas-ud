import { Injectable } from '@angular/core';
import { LugaresModel } from './model/lugares.model';
import { HelperLugares } from './model/helper-lugares';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  private _lugares:LugaresModel[] = []

  constructor() {this._lugares = HelperLugares.getLugaresDefault();}

  get lugares(){
    return [...this._lugares]
  }
}

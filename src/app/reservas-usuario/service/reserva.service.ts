import { Injectable } from '@angular/core';
import { ReservaModel } from '../model/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private _reservas:ReservaModel[]=[];

  constructor(){
    this._reservas = [
        new ReservaModel('r1','l1','u1', 'Casa em Pirinópolis', 4),
        new ReservaModel('r2','l3','u1', 'Mansão em Jurerê-SC', 8)
    ]
   }

  get reservas() {
    return [...this._reservas];
  }

}

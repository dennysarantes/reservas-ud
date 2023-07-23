import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LugaresModel } from './model/lugares.model';
import { HelperLugares } from './model/helper-lugares';

@Injectable({
  providedIn: 'root'
})
export class LugaresService implements Resolve<any> {

  private _lugares:LugaresModel[] = []

  constructor(
    private route:Router
  ) {this._lugares = HelperLugares.getLugaresDefault();}


  resolve(route: ActivatedRouteSnapshot) {
    const lugarId =  route?.params['lugarId'];
    return this.detalharLugar(lugarId) ?? this.route.navigateByUrl('/');;
  }

  get lugares(){
    return [...this._lugares]
  }

  detalharLugar(id:string){
    return {...this._lugares.find(l => l.id === id)};
  }
}

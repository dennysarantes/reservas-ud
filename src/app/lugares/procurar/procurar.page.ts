import { Component, OnInit } from '@angular/core';
import { LugaresModel } from '../model/lugares.model';
import { LugaresService } from '../lugares.service';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { TipoLugaresEnum } from '../model/tipo-lugares.enum';
import { HelperProcurar } from './helper-procurar/helper-procurar';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.page.html',
  styleUrls: ['./procurar.page.scss'],
})
export class ProcurarPage implements OnInit {
  lugaresCarregados: LugaresModel[]=[];
  todosLugares = this.lugaresService.lugares;

  constructor(private lugaresService:LugaresService) { }

  ngOnInit() {
    this.lugaresCarregados = this.todosLugares;
  }

  alterarVisao(event:any){
    const tipo = HelperProcurar.getTipo(event.detail.value);
    if(tipo === TipoLugaresEnum.DISPONIVEL){
      this.lugaresCarregados = this.lugaresCarregados.filter((l) => l.tipo === TipoLugaresEnum.DISPONIVEL);
    }else{
      this.lugaresCarregados = this.todosLugares;
    }

  }

}

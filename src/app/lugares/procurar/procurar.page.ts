import { Component, OnInit } from '@angular/core';
import { LugaresModel } from '../model/lugares.model';
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.page.html',
  styleUrls: ['./procurar.page.scss'],
})
export class ProcurarPage implements OnInit {

  lugaresCarregados: LugaresModel[]=[];

  constructor(private lugaresService:LugaresService) { }

  ngOnInit() {
    this.lugaresCarregados = this.lugaresService.lugares;
  }

}

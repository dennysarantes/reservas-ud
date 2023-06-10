import { OfertaService } from './helper/oferta.service';
import { Component, OnInit } from '@angular/core';
import { LugaresModel } from '../model/lugares.model';
import { HelperLugares } from '../model/helper-lugares';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  ofertasCarregadas: LugaresModel[] =[]

  constructor(private ofertaService:OfertaService) { }

  ngOnInit() {
    this.ofertasCarregadas = [...this.ofertaService.ofertas];
  }

}

import { OfertaService } from './helper/oferta.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LugaresModel } from '../model/lugares.model';
import { HelperLugares } from '../model/helper-lugares';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {
  @ViewChild('slidingItem') slidingItem?: IonItemSliding;

  ofertasCarregadas: LugaresModel[] =[]

  constructor(private ofertaService:OfertaService) { }

  ngOnInit() {
    this.ofertasCarregadas = [...this.ofertaService.ofertas];
  }

  editar(slidingItem: IonItemSliding, ofertaId: string){
    slidingItem.open('end');
  }

}

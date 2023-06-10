import { IonicRouteStrategy, NavController } from '@ionic/angular';
import { OfertaService } from './../helper/oferta.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresModel } from '../../model/lugares.model';

@Component({
  selector: 'app-reservas-ofertas',
  templateUrl: './reservas-ofertas.page.html',
  styleUrls: ['./reservas-ofertas.page.scss'],
})
export class ReservasOfertasPage implements OnInit {
  ofertaCarregada: LugaresModel | undefined;

  constructor(
    private actRoute: ActivatedRoute,
    private ofertaService: OfertaService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe((p) => {
      if (p.has('ofertaId')) {
        this.ofertaCarregada = this.ofertaService.getOferta(p.get('ofertaId')!);
      } else {
        this.navCtrl.navigateBack('/lugares/tabs/ofertas');
        return;
      }
    });
  }
}

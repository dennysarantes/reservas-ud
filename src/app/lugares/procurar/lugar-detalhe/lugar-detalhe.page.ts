import { LugaresService } from './../../lugares.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  ActionSheetController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { FazerReservaComponent } from '../modal/fazer-reserva/fazer-reserva.component';
import { LugaresModel } from '../../model/lugares.model';

@Component({
  selector: 'app-lugar-detalhe',
  templateUrl: './lugar-detalhe.page.html',
  styleUrls: ['./lugar-detalhe.page.scss'],
})
export class LugarDetalhePage implements OnInit {
  lugarDetalhes: LugaresModel | null = null;

  constructor(
    private lugaresService: LugaresService,
    private navCtrl: NavController,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private actionSheet: ActionSheetController /* private router:Router, */
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (dados) => (this.lugarDetalhes = dados['lugarDetalhes'])
    );
  }

  reservarLugar = () => {
    //this.router.navigateByUrl('/lugares/tabs/procurar');
    //this.navCtrl.navigateBack('/lugares/tabs/procurar')
    this.actionSheet.create({
      header: 'Escolha uma ação',
      buttons: [
        {
          text: 'Selecione a data',
          handler: () => { this.abrirModalReserva('select') }
        },
        {
          text: 'Data aleatória',
          handler: () => { this.abrirModalReserva('random') }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ],
    }).then((el) => {
      el.present();
    })
    ;
  };

  abrirModalReserva(mode: 'select' | 'random'){
    this.modalController
    .create({
      component: FazerReservaComponent,
      componentProps: { lugarSelecionado: this.lugarDetalhes },
    })
    .then((modal) => {
      modal.present();
      return modal.dismiss();
    })
    .then((lugarReservado) => {
      console.log('lugarReservado: ', lugarReservado);
    });
  }
}

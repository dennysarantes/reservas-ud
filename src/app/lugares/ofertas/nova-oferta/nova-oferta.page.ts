import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nova-oferta',
  templateUrl: './nova-oferta.page.html',
  styleUrls: ['./nova-oferta.page.scss'],
})
export class NovaOfertaPage implements OnInit {

  constructor(private navCtrl: NavController ){}

  public botoesAlerta = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {}
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        this.irParaOfertasPage();
      },
    },
  ];

  ngOnInit() {}

  irParaOfertasPage(){
    this.navCtrl.navigateBack('/lugares/tabs/ofertas');
  }

}

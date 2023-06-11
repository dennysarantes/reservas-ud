import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { LugaresModel } from 'src/app/lugares/model/lugares.model';

@Component({
  selector: 'app-fazer-reserva',
  templateUrl: './fazer-reserva.component.html',
  styleUrls: ['./fazer-reserva.component.scss'],
})
export class FazerReservaComponent  implements OnInit {

  @Input() lugarSelecionado?: LugaresModel

  constructor(private modalController:ModalController) { }

  ngOnInit() {}


  cancelar(){
    this.modalController.dismiss(null, 'cancelado')

  }

  reservarLugar(){
      this.modalController.dismiss({message: 'Lugar reservado com sucesso'}, 'confirmado')
  }

}

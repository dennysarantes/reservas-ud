import { Component, OnInit } from '@angular/core';
import { ReservaService } from './service/reserva.service';
import { ReservaModel } from './model/reserva.model';

@Component({
  selector: 'app-reservas-usuario',
  templateUrl: './reservas-usuario.page.html',
  styleUrls: ['./reservas-usuario.page.scss'],
})
export class ReservasUsuarioPage implements OnInit {

  reservas:ReservaModel[]=[];

  constructor(private reservaService:ReservaService) { }

  ngOnInit() {this.reservas=this.reservaService.reservas;}

  cancelar(reservaId:string){
    console.log('reserva para cancelar', reservaId);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarDetalhePageRoutingModule } from './lugar-detalhe-routing.module';

import { LugarDetalhePage } from './lugar-detalhe.page';
import { FazerReservaComponent } from '../modal/fazer-reserva/fazer-reserva.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarDetalhePageRoutingModule
  ],
  declarations: [LugarDetalhePage, FazerReservaComponent],
})
export class LugarDetalhePageModule {}

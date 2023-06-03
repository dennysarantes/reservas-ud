import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarDetalhePageRoutingModule } from './lugar-detalhe-routing.module';

import { LugarDetalhePage } from './lugar-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarDetalhePageRoutingModule
  ],
  declarations: [LugarDetalhePage]
})
export class LugarDetalhePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasOfertasPageRoutingModule } from './reservas-ofertas-routing.module';

import { ReservasOfertasPage } from './reservas-ofertas.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasOfertasPageRoutingModule,
  ],
  declarations: [ReservasOfertasPage]
})
export class ReservasOfertasPageModule {}

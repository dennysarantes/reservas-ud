import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasOfertasPage } from './reservas-ofertas.page';

const routes: Routes = [
  {
    path:':ofertaId',
    component: ReservasOfertasPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasOfertasPageRoutingModule {}

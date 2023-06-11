import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertasPage } from './ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: OfertasPage
  },
  {
    path: 'nova-oferta',
    loadChildren: () => import('./nova-oferta/nova-oferta.module').then( m => m.NovaOfertaPageModule)
  },
  {
    path: 'editar-oferta',
    loadChildren: () => import('./editar-oferta/editar-oferta.module').then( m => m.EditarOfertaPageModule)
  },
  {
    path: 'reservas-ofertas',
    loadChildren: () => import('./reservas-ofertas/reservas-ofertas.module').then( m => m.ReservasOfertasPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasPageRoutingModule {}

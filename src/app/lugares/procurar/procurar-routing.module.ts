import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcurarPage } from './procurar.page';

const routes: Routes = [
  {
    path: '',
    component: ProcurarPage,
  },
  {
    path: 'lugar-detalhe',
    loadChildren: () => import('./lugar-detalhe/lugar-detalhe.module').then( m => m.LugarDetalhePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcurarPageRoutingModule {}

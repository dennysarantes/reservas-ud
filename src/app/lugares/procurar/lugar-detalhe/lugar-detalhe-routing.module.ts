import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugarDetalhePage } from './lugar-detalhe.page';
import { HelperLugares } from '../../model/helper-lugares';
import { LugaresService } from '../../lugares.service';

const routes: Routes = [
  {
    path: '',
    component: LugarDetalhePage
  },
  {
    path: ':lugarId',
    component:LugarDetalhePage,
    resolve: {
      lugarDetalhes: LugaresService
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugarDetalhePageRoutingModule {}

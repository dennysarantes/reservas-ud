import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugaresPage } from './lugares.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: LugaresPage,
    children: [
      {
        path: 'procurar',
        loadChildren: () => import('./procurar/procurar.module').then( m => m.ProcurarPageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
      },
      {
        path:'',
        redirectTo:'/lugares/tabs/procurar',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/lugares/tabs/procurar',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugaresPageRoutingModule {}

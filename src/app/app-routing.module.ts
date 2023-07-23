import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  /*  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }, */
  {
    path: '',
    redirectTo: 'lugares',
    pathMatch: 'full',
  },

  {
    path: 'lugares',
    loadChildren: () =>
      import('./lugares/lugares.module').then((m) => m.LugaresPageModule),
      canLoad: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'reservas-usuario',
    loadChildren: () =>
      import('./reservas-usuario/reservas-usuario.module').then(
        (m) => m.ReservasUsuarioPageModule
      ),
      canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'lugares',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

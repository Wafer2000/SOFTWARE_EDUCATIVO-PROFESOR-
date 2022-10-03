import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreinscritosPage } from './preinscritos.page';

const routes: Routes = [
  {
    path: '',
    component: PreinscritosPage,
    children: [
      {path: 'calificar',
      loadChildren: () => import('./calificar/calificar.module')
      .then( m => m.CalificarPageModule)},
      {path: 'listado',
      loadChildren: () => import('./listado/listado.module')
      .then( m => m.ListadoPageModule)},
      {path: 'examen',
      loadChildren: () => import('./examen/examen.module')
      .then( m => m.ExamenPageModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreinscritosPageRoutingModule {}

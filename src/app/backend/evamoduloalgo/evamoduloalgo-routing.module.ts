import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvamoduloalgoPage } from './evamoduloalgo.page';

const routes: Routes = [
  {
    path: '',
    component: EvamoduloalgoPage,
    children: [
      {path: 'asignar', loadChildren: () => import('./asignar/asignar.module')
      .then( m => m.AsignarPageModule)},
      {path: 'calificar', loadChildren: () => import('./calificar/calificar.module')
      .then( m => m.CalificarPageModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvamoduloalgoPageRoutingModule {}

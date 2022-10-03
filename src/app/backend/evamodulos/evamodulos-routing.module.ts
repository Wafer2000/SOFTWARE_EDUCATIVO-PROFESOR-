import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvamodulosPage } from './evamodulos.page';

const routes: Routes = [
  {
    path: '',
    component: EvamodulosPage,
    children: [
      {path: 'temas', loadChildren: () => import('./temas/temas.module')
      .then( m => m.TemasPageModule)},
      {path: 'evaluaciones', loadChildren: () => import('./evaluaciones/evaluaciones.module')
      .then( m => m.EvaluacionesPageModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvamodulosPageRoutingModule {}

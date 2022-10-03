import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemasPage } from './temas.page';

const routes: Routes = [
  {
    path: '',
    component: TemasPage,
    children: [
      {path: 'modulo1', loadChildren: () => import('./modulo1/modulo1.module')
      .then( m => m.Modulo1PageModule)},
      {path: 'modulo2', loadChildren: () => import('./modulo2/modulo2.module')
      .then( m => m.Modulo2PageModule)},
      {path: 'modulo3', loadChildren: () => import('./modulo3/modulo3.module')
      .then( m => m.Modulo3PageModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemasPageRoutingModule {}

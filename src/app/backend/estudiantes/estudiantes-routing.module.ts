import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantesPage } from './estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: EstudiantesPage,
    children: [
      {path: 'calificar', loadChildren: () => import('./calificar/calificar.module')
      .then( m => m.CalificarPageModule)},
      {path: 'listado', loadChildren: () => import('./listado/listado.module')
      .then( m => m.ListadoPageModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulo2Page } from './modulo2.page';

const routes: Routes = [
  {
    path: '',
    component: Modulo2Page
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulo2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulo1Page } from './modulo1.page';

const routes: Routes = [
  {
    path: '',
    component: Modulo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulo1PageRoutingModule {}

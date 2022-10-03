import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Modulo3Page } from './modulo3.page';

const routes: Routes = [
  {
    path: '',
    component: Modulo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Modulo3PageRoutingModule {}

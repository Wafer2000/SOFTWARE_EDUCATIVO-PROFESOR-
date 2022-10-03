import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modulo2PageRoutingModule } from './modulo2-routing.module';

import { Modulo2Page } from './modulo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modulo2PageRoutingModule
  ],
  declarations: [Modulo2Page]
})
export class Modulo2PageModule {}

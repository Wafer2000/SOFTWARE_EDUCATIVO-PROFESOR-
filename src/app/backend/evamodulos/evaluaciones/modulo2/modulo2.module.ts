import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modulo2PageRoutingModule } from './modulo2-routing.module';

import { Modulo2Page } from './modulo2.page';
import { OpcionesmoduloComponent } from 'src/app/components/opcionesmodulo/opcionesmodulo.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modulo2PageRoutingModule
  ],
  declarations: [Modulo2Page, Pregunta2Component, OpcionesmoduloComponent]
})
export class Modulo2PageModule {}

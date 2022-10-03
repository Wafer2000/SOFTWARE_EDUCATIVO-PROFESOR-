import { OpcionesmoduloComponent } from './../../../../components/opcionesmodulo/opcionesmodulo.component';
import { Pregunta1Component } from './pregunta1/pregunta1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modulo1PageRoutingModule } from './modulo1-routing.module';

import { Modulo1Page } from './modulo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modulo1PageRoutingModule
  ],
  declarations: [Modulo1Page, Pregunta1Component, OpcionesmoduloComponent]
})
export class Modulo1PageModule {}

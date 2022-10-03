import { Modulo1Component } from 'src/app/backend/estudiantes/calificar/modulo1/modulo1.component';
import { Modulo2Component } from 'src/app/backend/estudiantes/calificar/modulo2/modulo2.component';
import { Modulo3Component } from 'src/app/backend/estudiantes/calificar/modulo3/modulo3.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarPageRoutingModule } from './calificar-routing.module';

import { CalificarPage } from './calificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarPageRoutingModule
  ],
  declarations: [CalificarPage, Modulo1Component, Modulo2Component, Modulo3Component]
})
export class CalificarPageModule {}

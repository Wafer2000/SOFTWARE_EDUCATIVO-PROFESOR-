import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvamoduloalgoPageRoutingModule } from './evamoduloalgo-routing.module';

import { EvamoduloalgoPage } from './evamoduloalgo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvamoduloalgoPageRoutingModule
  ],
  declarations: [EvamoduloalgoPage]
})
export class EvamoduloalgoPageModule {}

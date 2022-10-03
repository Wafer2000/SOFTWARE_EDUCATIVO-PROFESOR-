import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvamodulosPageRoutingModule } from './evamodulos-routing.module';

import { EvamodulosPage } from './evamodulos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvamodulosPageRoutingModule
  ],
  declarations: [EvamodulosPage]
})
export class EvamodulosPageModule {}

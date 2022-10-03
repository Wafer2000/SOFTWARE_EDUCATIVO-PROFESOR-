import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modulo3PageRoutingModule } from './modulo3-routing.module';

import { Modulo3Page } from './modulo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modulo3PageRoutingModule
  ],
  declarations: [Modulo3Page]
})
export class Modulo3PageModule {}

import { AdbicodigosComponent } from './adbicodigos/adbicodigos.component';
import { PreguntaComponent } from './preinscritos/examen/pregunta/pregunta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PreguntaComponent,
    AdbicodigosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
  ]
})
export class BackendModule { }

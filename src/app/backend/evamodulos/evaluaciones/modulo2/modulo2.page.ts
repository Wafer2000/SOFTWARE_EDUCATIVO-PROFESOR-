import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Preguntas } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Pregunta2Component } from './pregunta2/pregunta2.component';

@Component({
  selector: 'app-modulo2',
  templateUrl: './modulo2.page.html',
  styleUrls: ['./modulo2.page.scss'],
})
export class Modulo2Page implements OnInit {
  
  preguntas: Preguntas [] = [];
  pregunta: Preguntas;

  enableNuevo = false;
  resp: '';

  constructor(
    public modalController: ModalController,
    public firestoreService: FirestoreService, 
    private interaction: InteractionService,
    ) { }

  ngOnInit() {
    this.Preguntas();
  }

  cerrar(){
    this.modalController.dismiss();
  }

  Preguntas(){
    const path = 'Pregunta';
    this.firestoreService.getCollectionUnicAsc<Preguntas>(path, 'modulo', 2).subscribe(res => {
      this.preguntas = res;
    });
  }

  async presentModalOpc(pregunta: Preguntas) {
    const id = pregunta.id;
    const modal = await this.modalController.create({
      component: Pregunta2Component,
      mode: 'ios',
      canDismiss: true,
      componentProps: {id}
    });
    return await modal.present();
  }

  deletePregunta(pregunta: Preguntas){
    const path = 'Pregunta';
    this.interaction.presentLoading('Borrando Pregunta...')
    this.firestoreService.deleteDoc(path, pregunta.id).then(res=>{
      this.interaction.closeLoading();
      this.interaction.presentToast('Borrada con exito')
    })
  }

  Guardar(){
    const path = 'Pregunta';
    if(this.pregunta.preg === ''){
      this.interaction.presentToast('Digite la pregunta');
    }else if(this.pregunta.num === null){
      this.interaction.presentToast('Digite el numero de pregunta');
    }else if(this.pregunta.num > 10){
      this.interaction.presentToast('Maximo 20 preguntas');
    }else{
      this.interaction.presentLoading('Guardando...')
      this.firestoreService.createDoc(this.pregunta, path, this.pregunta.id).then(() =>{
        console.log('Guardado con exito ->')
        this.interaction.closeLoading();
        this.interaction.presentToast('Guardado con exito')
      }).catch( error => { 
        this.interaction.closeLoading();
        this.interaction.presentToast('A ocurrido un Error')
        console.log('ERROR', error); 
      });
    };
    this.enableNuevo = false;
  }

  nueva(){
    this.enableNuevo = false;
    const id = this.firestoreService.getId();
    this.pregunta = {
      id,
      num: null,
      preg: '',
      tiempo: new Date(),
      modulo: 2
    };
  }

}

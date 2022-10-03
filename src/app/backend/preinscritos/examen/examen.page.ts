import { PreguntasIns, OpcionesIns } from './../../../models/models';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {
  
  preguntas: PreguntasIns [] = [];
  pregunta: PreguntasIns;

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

  Preguntas(){
    const path = 'PreguntaIns';
    this.firestoreService.getCollectionTodosAsc<PreguntasIns>(path).subscribe(res => {
      this.preguntas = res;
    });
  }

  async presentModalOpc(pregunta: PreguntasIns) {
    const id = pregunta.id;
    const modal = await this.modalController.create({
      component: PreguntaComponent,
      mode: 'ios',
      canDismiss: true,
      componentProps: {id}
    });
    return await modal.present();
  }

  deletePregunta(pregunta: PreguntasIns){
    const path = 'PreguntaIns';
    this.interaction.presentLoading('Borrando Pregunta...')
    this.firestoreService.deleteDoc(path, pregunta.id).then(res=>{
      this.interaction.closeLoading();
      this.interaction.presentToast('Borrada con exito')
    })
  }

  Guardar(){
    const path = 'PreguntaIns';
    if(this.pregunta.preg === ''){
      this.interaction.presentToast('Digite la pregunta');
    }else if(this.pregunta.id === null){
      this.interaction.presentToast('Digite el numero de pregunta');
    }else if(this.pregunta.id > 10){
      this.interaction.presentToast('Maximo 10 preguntas');
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
    this.pregunta = {
      id: null,
      preg: '',
      tiempo: new Date()
    };
  }

}

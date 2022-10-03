import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, ModalController } from '@ionic/angular';
import { PreguntaEstu } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.page.html',
  styleUrls: ['./calificar.page.scss'],
})
export class CalificarPage implements OnInit {

  tarea: PreguntaEstu[] = [];

  nuevo: PreguntaEstu;

  enableNuevo = false;

  private path = 'PregAlgoritmo';

  constructor(
              public menucontroller: MenuController,
              public firestoreService: FirestoreService, 
              private interaction: InteractionService,
              public alertController: AlertController,
              public modalController: ModalController
              
  ) {}

  ngOnInit() {
    this.getPreguntaEstuRecientes();
  }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  cerrar(){
    this.modalController.dismiss();
  }

  Calificar(){
    if(this.nuevo.calif === null){
      this.interaction.closeLoading();
      this.interaction.presentToast('Digite el mensaje para la Noticia');
    }else{
      this.interaction.presentLoading('Guardando...')
      this.firestoreService.createDoc(this.nuevo, this.path, this.nuevo.id).then(() =>{
        console.log('Guardado con exito ->')
        this.interaction.closeLoading();
        this.interaction.presentToast('Guardado con exito')
      }).catch( error => { 
        this.interaction.closeLoading();
        this.interaction.presentToast('A ocurrido un Error')
        console.log('ERROR', error); 
      });
      this.nueva();
    };
  }

  getPreguntaEstuRecientes(){
    this.nueva();
    this.firestoreService.getCollectionTodos<PreguntaEstu>(this.path).subscribe(res => {
      this.tarea = res;
      console.log(res)
    });
  }

  nueva(){
    this.enableNuevo = false;
    this.nuevo = {
      pregunta: '',
      estudiante: '',
      respuesta: '',
      calif: null,
      tiempo: new Date(),
      id: this.firestoreService.getId(),
      fecha: new Date().toLocaleDateString('es-GB'),
      hora: new Date().toLocaleTimeString('es-GB'),
      hresp: '',
      fresp: '',
      estado: false,
    };
  }

}

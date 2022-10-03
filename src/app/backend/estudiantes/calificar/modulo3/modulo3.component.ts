import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { RespuestaModulo3 } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-modulo3',
  templateUrl: './modulo3.component.html',
  styleUrls: ['./modulo3.component.scss'],
})
export class Modulo3Component implements OnInit {

  respuesta: RespuestaModulo3[] = [];

  nuevo: RespuestaModulo3;

  enableNuevo = true;

  constructor(
    public firestoreService: FirestoreService, 
    private interaction: InteractionService,
    public alertController: AlertController,
    public modalController: ModalController,
  ) {}
  
  ngOnInit() {
    this.getRespuesta();
  }

  cerrar(){
    this.modalController.dismiss();
  }

  getRespuesta(){
    const path = 'Respuesta';
    this.firestoreService.getCollectionUnicDesc<RespuestaModulo3>(path, 'modulo', 3).subscribe(res => {
      this.respuesta = res;
      console.log(res)
    });
  }

  async guardarCalificacion(){
    this.interaction.presentLoading('Subiendo Pago...')
    const path = 'Respuesta';
    this.firestoreService.updateDoc(path, this.nuevo.id, this.nuevo).then( res => {
      console.log('Subido con exito', res);
      this.interaction.closeLoading();
      this.interaction.presentToast('Subido con exito')
    }).catch( error => {
      this.interaction.closeLoading();
      this.interaction.presentToast('A ocurrido un Error')
      console.log('ERROR', error);
    });
    this.enableNuevo = true;
  }

}

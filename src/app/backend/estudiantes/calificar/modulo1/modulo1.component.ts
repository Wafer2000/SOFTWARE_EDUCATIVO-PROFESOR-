import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { RespuestaModulo1 } from 'src/app/models/models';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.component.html',
  styleUrls: ['./modulo1.component.scss'],
})
export class Modulo1Component implements OnInit {

  respuesta: RespuestaModulo1[] = [];

  nuevo: RespuestaModulo1;

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
    this.firestoreService.getCollectionUnicDesc<RespuestaModulo1>(path, 'modulo', 1).subscribe(res => {
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

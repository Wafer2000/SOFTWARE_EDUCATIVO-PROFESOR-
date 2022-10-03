import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RespuestaIns } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.page.html',
  styleUrls: ['./calificar.page.scss'],
})
export class CalificarPage implements OnInit {

  respuesta: RespuestaIns[] = [];

  nuevo: RespuestaIns;

  enableNuevo = true;

  constructor(
    public firestoreService: FirestoreService, 
    private interaction: InteractionService,
    public alertController: AlertController,
  ) {}
  
  ngOnInit() {
    this.getRespuestaIns();
  }

  getRespuestaIns(){
    const path = 'RespuestaIns';
    this.firestoreService.getCollectionTodos<RespuestaIns>(path).subscribe(res => {
      this.respuesta = res;
      console.log(res)
    });
  }

  async guardarCalificacion(){
    this.interaction.presentLoading('Subiendo Pago...')
    const path = 'RespuestaIns';
    this.firestoreService.updateDoc(path, this.nuevo.uid, this.nuevo).then( res => {
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

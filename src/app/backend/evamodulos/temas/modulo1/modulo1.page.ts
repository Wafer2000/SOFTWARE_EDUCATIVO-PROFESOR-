import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, ModalController } from '@ionic/angular';
import { Temas } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.page.html',
  styleUrls: ['./modulo1.page.scss'],
})
export class Modulo1Page implements OnInit {

  noticias: Temas[] = [];

  nuevo: Temas;

  enableNuevo = false;

  private path = 'Temas';

  constructor(
              public menucontroller: MenuController,
              public firestoreService: FirestoreService, 
              private interaction: InteractionService,
              public alertController: AlertController,
              public modalController: ModalController
              
  ) {}

  ngOnInit() {
    this.getTemasRecientes();
  }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  cerrar(){
    this.modalController.dismiss();
  }

  createTemas(){
    if(this.nuevo.titulo === ''){
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

  getTemasRecientes(){
    this.nueva();
    this.firestoreService.getCollectionUnicAsc<Temas>(this.path, 'modulo', 1).subscribe(res => {
      this.noticias = res;
      console.log(res)
    });
  }

  deleteTemas(nuevos: Temas){
    this.interaction.presentLoading('Borrando Noticia...')
    this.firestoreService.deleteDoc(this.path, nuevos.id).then(res=>{
      this.interaction.closeLoading();
      this.interaction.presentToast('Borrada con exito')
    })
  }

  nueva(){
    this.enableNuevo = false;
    this.nuevo = {
      titulo: '',
      contenido: '',
      tiempo: new Date(),
      id: this.firestoreService.getId(),
      modulo: 1
    };
  }

}

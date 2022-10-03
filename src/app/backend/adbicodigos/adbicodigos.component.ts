import { InteractionService } from 'src/app/services/interaction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { Codigos } from 'src/app/models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-adbicodigos',
  templateUrl: './adbicodigos.component.html',
  styleUrls: ['./adbicodigos.component.scss'],
})
export class AdbicodigosComponent implements OnInit {

  codigos: Codigos[] = [];

  nuevo: Codigos;

  enableNuevo = false;

  private path = 'Codigos';

  constructor(
              public menucontroller: MenuController,
              public firestoreService: FirestoreService,
              public alertController: AlertController,
              public firebaseauthService: FirebaseauthService,
              public interaction: InteractionService,
              public router: Router
  ) {
  }

  ngOnInit() {
    this.getCodigosRecientes();
  }

  getCodigosRecientes(){
    this.nueva();
    this.firestoreService.getCollectionTodos<Codigos>(this.path).subscribe(res => {
      this.codigos = res;
      console.log(res);
    });
  }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  createCodigo(){
    if(this.nuevo.titulo === ''){
      this.interaction.presentToast('Digite el titulo del Codigo');
    }else if(this.nuevo.contenido === ''){
      this.interaction.presentToast('Digite el contenido del Codigo');
    }else if(this.nuevo.caracte === ''){
      this.interaction.presentToast('Digite las caracteristicas del Codigo');
    }else{
      this.interaction.presentLoading('Guardando...');
      this.firestoreService.createDoc(this.nuevo, this.path, this.nuevo.id).then(() =>{
        console.log('Guardado con exito ->');
        this.interaction.closeLoading();
        this.interaction.presentToast('Guardado con exito');
      }).catch( error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('A ocurrido un Error');
        console.log('ERROR', error);
      });
      this.nueva();
    };
  }

  deleteCodigos(nuevos: Codigos){
    this.interaction.presentLoading('Borrando Codigo...');
    this.firestoreService.deleteDoc(this.path, nuevos.id).then(res=>{
      this.interaction.closeLoading();
      this.interaction.presentToast('Borrada con exito');
    });
  }

  nueva(){
    this.enableNuevo = false;
    this.nuevo = {
      contenido: '',
      titulo: '',
      caracte: '',
      tiempo: new Date(),
      id: this.firestoreService.getId(),
      fecha: new Date().toLocaleDateString('es-GB'),
      hora: new Date().toLocaleTimeString('es-GB')
    };
  }

}

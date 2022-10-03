import { ListadoPage } from './listado/listado.page';
import { CalificarPage } from './calificar/calificar.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { ExamenPage } from './examen/examen.page';

@Component({
  selector: 'app-preinscritos',
  templateUrl: './preinscritos.page.html',
  styleUrls: ['./preinscritos.page.scss'],
})
export class PreinscritosPage implements OnInit {

  constructor(
    public menucontroller: MenuController,
    public modalController: ModalController,
    public firebaseauthService: FirebaseauthService,
    public router: Router
    ) { }

    ngOnInit() {}

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  async presentModalCali() {
    const modal = await this.modalController.create({
      component: CalificarPage,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

  async presentModalList() {
    const modal = await this.modalController.create({
      component: ListadoPage,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

  async presentModalExam() {
    const modal = await this.modalController.create({
      component: ExamenPage,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

}



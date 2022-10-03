import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { Modulo1Page } from './modulo1/modulo1.page';
import { Modulo2Page } from './modulo2/modulo2.page';
import { Modulo3Page } from './modulo3/modulo3.page';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
})
export class TemasPage implements OnInit {

  constructor(
    public menucontroller: MenuController,
    public modalController: ModalController,
    public firebaseauthService: FirebaseauthService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  async presentModal1() {
    const modal = await this.modalController.create({
      component: Modulo1Page,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

  async presentModal2() {
    const modal = await this.modalController.create({
      component: Modulo2Page,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

  async presentModal3() {
    const modal = await this.modalController.create({
      component: Modulo3Page,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

}



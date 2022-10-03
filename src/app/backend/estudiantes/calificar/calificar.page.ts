import { Modulo1Component } from './../calificar/modulo1/modulo1.component';
import { Modulo2Component } from './../calificar/modulo2/modulo2.component';
import { Modulo3Component } from './../calificar/modulo3/modulo3.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.page.html',
  styleUrls: ['./calificar.page.scss'],
})
export class CalificarPage implements OnInit {

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
      component: Modulo1Component,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

  async presentModal2() {
    const modal = await this.modalController.create({
      component: Modulo2Component,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

  async presentModal3() {
    const modal = await this.modalController.create({
      component: Modulo3Component,
      mode: 'ios',
      canDismiss: true,
    });
    return await modal.present();
  }

}



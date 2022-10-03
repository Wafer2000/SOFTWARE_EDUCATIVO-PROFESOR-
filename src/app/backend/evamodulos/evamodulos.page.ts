import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-evamodulos',
  templateUrl: './evamodulos.page.html',
  styleUrls: ['./evamodulos.page.scss'],
})
export class EvamodulosPage implements OnInit {

  constructor(
    public menucontroller: MenuController
    ) { }

    ngOnInit() {}

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }
}
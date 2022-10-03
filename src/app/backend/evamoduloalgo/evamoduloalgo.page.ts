import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-evamoduloalgo',
  templateUrl: './evamoduloalgo.page.html',
  styleUrls: ['./evamoduloalgo.page.scss'],
})
export class EvamoduloalgoPage implements OnInit {

  constructor(
    public menucontroller: MenuController
    ) { }

    ngOnInit() {}

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }
}
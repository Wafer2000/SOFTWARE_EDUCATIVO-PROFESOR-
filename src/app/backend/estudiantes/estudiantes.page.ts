import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  constructor(
    public menucontroller: MenuController
    ) { }

    ngOnInit() {}

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }
}
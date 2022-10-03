import { Component, Input, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Opciones } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.scss'],
})
export class Pregunta1Component implements OnInit {

  @Input() id: string;

  opciones: Opciones ={
    id: this.firestoreService.getId(),
    text: '',
    estado: false,
    name: '',
    disabled: false,
    checked: false,
    modulo: 1
  }

  constructor(
    public modalController: ModalController,
    public firestoreService: FirestoreService, 
    public alertController: AlertController
    ) { }

  ngOnInit() {
    console.log(this.id)
  }

  cerrar(){
    this.modalController.dismiss();
  }

  Guardar(){
    const path = 'Pregunta/'+this.id+'/opciones';
    this.firestoreService.createDoc(this.opciones, path, this.opciones.id).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });
    this.modalController.dismiss();
  }

}

import { PreguntasIns, OpcionesIns } from './../../../../models/models';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss'],
})
export class PreguntaComponent implements OnInit {

  @Input() id: string;

  opciones: OpcionesIns ={
    id: this.firestoreService.getId(),
    text: '',
    estado: false,
    name: '',
    disabled: false,
    checked: false
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
    const path = 'PreguntaIns/'+this.id+'/opciones';
    this.firestoreService.createDoc(this.opciones, path, this.opciones.id).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    });
    this.modalController.dismiss();
  }

}

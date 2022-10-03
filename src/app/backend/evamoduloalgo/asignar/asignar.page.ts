import { InteractionService } from 'src/app/services/interaction.service';
import { PreguntaEstu } from './../../../models/models';
import { Usuarios } from 'src/app/models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonDatetime, ModalController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-asignar',
  templateUrl: './asignar.page.html',
  styleUrls: ['./asignar.page.scss'],
})
export class AsignarPage implements OnInit {

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  dateValue = '';

  estudiantes: Usuarios []=[];

  algoritmo: PreguntaEstu={
    id: '',
    estudiante: '',
    pregunta: '',
    respuesta: '',
    calif: null,
    tiempo: undefined,
    hora: '',
    fecha: '',
    hresp: '',
    fresp: '',
    estado: false
  }

  constructor(
    public modalController: ModalController,
    public firestoreService: FirestoreService, 
    public alertController: AlertController,
    public firebaseauthService: FirebaseauthService,
    public interaction: InteractionService,
    ) { }

  ngOnInit() {
    this.Estudiante()
  }

  formatDate(value: string) {
    return format(parseISO(value), 'hh:mm aa');
  }

  Estudiante(){
    const path = 'Usuarios'
    this.firestoreService.getCollectionUnic<Usuarios>(path, 'tipo', 'Estudiante').subscribe(res=>{
      this.estudiantes = res;
      console.log(res);
    })
  }

  Guardar(algoritmo){
    const path = 'PregAlgoritmo';
    if(this.algoritmo.pregunta === ''){
      this.interaction.presentToast('Digite la pregunta');
    }else if(this.algoritmo.estudiante === ''){
      this.interaction.presentToast('Digite el nombre del estudiante');
    }else{
      this.nueva(algoritmo);
      this.interaction.presentLoading('Guardando...');
      this.firestoreService.createDoc(this.algoritmo, path, this.algoritmo.id).then(() =>{
        console.log('Guardado con exito');
        this.interaction.closeLoading();
        this.interaction.presentToast('Guardado con exito');
      }).catch( error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('A ocurrido un Error');
        console.log('ERROR', error);
      });
    };
  }

  nueva(algoritmo){
    this.algoritmo = {
      pregunta: algoritmo.pregunta,
      estudiante: algoritmo.estudiante,
      respuesta: '',
      calif: null,
      tiempo: new Date(),
      id: this.firestoreService.getId(),
      fecha: new Date().toLocaleDateString('es-GB'),
      hora: new Date().toLocaleTimeString('es-GB'),
      hresp: '',
      fresp: '',
      estado: false,
    };
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Preguntas, Opciones } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-opcionesmodulo',
  templateUrl: './opcionesmodulo.component.html',
  styleUrls: ['./opcionesmodulo.component.scss'],
})
export class OpcionesmoduloComponent implements OnInit {

  @Input() preguntas: Preguntas;
  opciones: Opciones[]=[];
  selectedRadioItem:any;
  selectedRadioGroup:any;

  constructor(
    public firestoreService: FirestoreService,
    private interaction: InteractionService
    ) {}

  ngOnInit() {
    this.getOpciones();
  }

  getOpciones(){
    const path = 'Pregunta/'+this.preguntas.id+'/opciones'
    this.firestoreService.getCollection<Opciones>(path).subscribe(res=>{
      this.opciones = res;
      console.log(res)
    });
  }

  deleteOpcion(opcione: Opciones){
    const path = 'Pregunta/'+this.preguntas.id+'/opciones';
    this.interaction.presentLoading('Borrando Opcion...')
    this.firestoreService.deleteDoc(path, opcione.id).then(res=>{
      this.interaction.closeLoading();
      this.interaction.presentToast('Borrada con exito')
    })
  }

}

import { InteractionService } from './../../services/interaction.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { OpcionesIns, PreguntasIns } from './../../models/models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss'],
})
export class OpcionesComponent implements OnInit {

  @Input() preguntas: PreguntasIns;
  opciones: OpcionesIns[]=[];
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
    const path = 'PreguntaIns/'+this.preguntas.id+'/opciones'
    this.firestoreService.getCollection<OpcionesIns>(path).subscribe(res=>{
      this.opciones = res;
      console.log(res)
    });
  }

  deleteOpcion(opcione: OpcionesIns){
    const path = 'PreguntaIns/'+this.preguntas.id+'/opciones';
    this.interaction.presentLoading('Borrando Opcion...')
    this.firestoreService.deleteDoc(path, opcione.id).then(res=>{
      this.interaction.closeLoading();
      this.interaction.presentToast('Borrada con exito')
    })
  }

}

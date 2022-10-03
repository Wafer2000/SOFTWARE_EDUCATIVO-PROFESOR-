import { Component, Input, OnInit } from '@angular/core';
import { PreguntasIns, OpcionesIns } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-opexam',
  templateUrl: './opexam.component.html',
  styleUrls: ['./opexam.component.scss'],
})
export class OpexamComponent implements OnInit {

  @Input() preguntas: PreguntasIns;
  opciones: OpcionesIns[]=[];

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

}

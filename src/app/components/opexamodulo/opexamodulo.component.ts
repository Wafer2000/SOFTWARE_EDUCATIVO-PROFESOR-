import { Component, Input, OnInit } from '@angular/core';
import { Preguntas, Opciones } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-opexamodulo',
  templateUrl: './opexamodulo.component.html',
  styleUrls: ['./opexamodulo.component.scss'],
})
export class OpexamoduloComponent implements OnInit {

  @Input() preguntas: Preguntas;
  opciones: Opciones[]=[];

  constructor(
    public firestoreService: FirestoreService,
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

}

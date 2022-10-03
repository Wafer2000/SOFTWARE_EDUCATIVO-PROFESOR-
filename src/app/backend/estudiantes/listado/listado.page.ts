import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  usuario: Usuarios[]=[];

  constructor(
    public firestoreService: FirestoreService,
  ) { }

  ngOnInit() {
    this.Usuarios();
  }

  Usuarios(){
    this.firestoreService.getCollection<Usuarios>('Usuarios').subscribe(res =>{
      this.usuario = res;
      console.log(res);
    })
  }

}

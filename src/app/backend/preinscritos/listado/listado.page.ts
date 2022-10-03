import { FirestoreService } from './../../../services/firestore.service';
import { UsuariosIns } from 'src/app/models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  usuario: UsuariosIns[]=[];

  constructor(
    public firestoreService: FirestoreService,
  ) { }

  ngOnInit() {
    this.UsuariosIns();
  }

  UsuariosIns(){
    this.firestoreService.getCollection<UsuariosIns>('UsuariosIns').subscribe(res =>{
      this.usuario = res;
      console.log(res);
    })
  }

}

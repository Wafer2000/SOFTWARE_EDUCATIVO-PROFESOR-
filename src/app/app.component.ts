import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Usuarios } from './models/models';
import { FirebaseauthService } from './services/firebaseauth.service';
import { FirestorageService } from './services/firestorage.service';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  registro: Usuarios = {
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    completado1: false,
    completado2: null,
    completado3: null,
    fechanacimiento: '',
    foto: '',
    uid: '',
    numidenti: null,
    tiempo: new Date(),
    tipo: 'Estudiante',
  };

  newImage = '';

  newFile: any;

  uid = '';

  suscriberUserInfo: Subscription;

  ingresarEnable = false;

  admin = false;

  prof = false;

  estu = false;

  pre = false;

  constructor(
    private platform: Platform,
    public firebaseauthService: FirebaseauthService,
    public firestoreService: FirestoreService,
    public firestorageService: FirestorageService
  ) {
    this.initializeApp();
    this.firebaseauthService.stateAuth().subscribe((res) => {
      if (res !== null) {
        this.uid = res.uid;
        this.getUserInfo(this.uid);
      } else {
        this.initRegistro();
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.getUid();
    });
  }

  initRegistro() {
    this.uid = '';
    this.registro = {
      nombres: '',
      apellidos: '',
      email: '',
      password: '',
      completado1: false,
      completado2: null,
      completado3: null,
      fechanacimiento: '',
      foto: '',
      uid: '',
      numidenti: null,
      tiempo: new Date(),
      tipo: 'Estudiante',
    };
    console.log(this.registro);
  }

  getUserInfo(uid: string) {
    console.log('getUserInfo');
    const path = 'Usuarios';
    this.suscriberUserInfo = this.firestoreService
      .getDoc<Usuarios>(path, this.uid)
      .subscribe((res) => {
        this.registro = res;
      });
  }

  async getUid() {
    const uid = await this.firebaseauthService.getUid();
    const path = 'Usuarios';
    this.firebaseauthService.stateAuth().subscribe((res) => {
      if (res !== null) {
        if (res.uid === '6V40qYJifneL0Ot3DkaNC4Rde9J3') {
          this.admin = true;
          this.prof = false;
          this.estu = false;
          this.pre = false;
          console.log('Bienvenido Administrador');
        } else if (res.uid === 'oqUm5Ldo7IOFjsfVpHo7cnM40363') {
          this.admin = false;
          this.prof = true;
          this.estu = false;
          this.pre = false;
          console.log('Bienvenido Profesor');
        } else {
          this.admin = false;
          this.prof = false;
          this.estu = true;
          this.pre = true;
        }
      } else {
        this.admin = false;
        this.prof = false;
        this.estu = false;
        this.pre = false;
      }
    });
  }
}

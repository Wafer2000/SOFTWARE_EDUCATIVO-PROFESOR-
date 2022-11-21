/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Usuarios } from 'src/app/models/models';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';

  usuarios: Usuarios[] = [];

  registro: Usuarios = {
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    fechanacimiento: '',
    foto: '',
    uid: '',
    numidenti: null,
    tiempo: new Date(),
    completado1: false,
    completado2: null,
    completado3: null,
    tipo: 'Estudiante'
  };

  newImage = '';

  newFile: any;

  uid = '';

  suscriberUserInfo: Subscription;

  ingresarEnable = true;

  passEnable = true;

  constructor(
    private interaction: InteractionService,
    public menucontroller: MenuController,
    private firebaseauthService: FirebaseauthService,
    private firestoreService: FirestoreService,
    public firestorageService: FirestorageService,
    public router: Router
    ) {
      this.firebaseauthService.stateAuth().subscribe( res => {
        if (res !== null){
          this.uid = res.uid;
          this.getUserInfo(this.uid);
        } else {
          this.initRegistro();
        }
      });
    }

  openmenu(){
    console.log('Abrir Menu');
    this.menucontroller.toggle('menu');
  }

  formatDate(value: string) {
    return format(parseISO(value), 'dd/MM/yyyy');
  }

  async ngOnInit() {
    const uid = await this.firebaseauthService.getUid();
    console.log(uid);
  }

  initRegistro(){
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
      tipo: 'Estudiante'
    };
    console.log(this.registro);
  }

  async newImageUpload(event: any){
    if(event.target.files && event.target.files[0]){
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image) => {
        this.registro.foto = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  async guardarUser(){
    const path = 'Usuarios';
    if(this.registro.nombres === ''){
      this.interaction.presentToast('Digite los Nombres');
    }else if(this.registro.apellidos === ''){
      this.interaction.presentToast('Digite los Apellidos');
    }else if(this.registro.numidenti === ''){
      this.interaction.presentToast('Digite el Numero de Identidad');
    }else if(this.registro.email === ''){
      this.interaction.presentToast('Digite el Correo Electronico');
    }else if(this.registro.password === ''){
      this.interaction.presentToast('Digite la Contraseña');
    }else if(this.registro.fechanacimiento === ''){
      this.interaction.presentToast('Digite la Fecha de Nacimiento');
    }else if(this.registro.foto === ''){
      this.interaction.presentToast('Adjunte una Foto de Perfil');
    }else{
      this.registro.completado1 = false;
      this.registro.completado2 = null;
      this.registro.completado3 = null;
      const id = await this.firebaseauthService.getUid();
      this.registro.uid = id;
      const name = await this.firebaseauthService.getUid();
      if (this.newFile !== undefined){
        this.registro.foto = await this.firestorageService.uploadImage(this.newFile, path, name);
      }
      this.interaction.presentLoading('Actualizando...');
      await this.firestoreService.createDoc(this.registro, path, id);
      console.log('Guardando con exito', await this.firebaseauthService.getUid());
      this.interaction.closeLoading();
      this.interaction.presentToast('Actualizado con exito');
    }
  }

  async salir(){
    this.interaction.presentLoading('Cerrando Sesion...');
    this.firebaseauthService.logout();
    this.suscriberUserInfo.unsubscribe();
    this.interaction.closeLoading();
    this.interaction.presentToast('Cerró sesion con exito');
  }

  getUserInfo(uid: string){
    console.log('getUserInfo');
    const path = 'Usuarios';
    this.suscriberUserInfo = this.firestoreService.getDoc<Usuarios>(path, this.uid).subscribe(res =>{
      this.registro = res;
    });
  }

  async ingresar(){
    const credenciales = {
      email: this.registro.email,
      password: this.registro.password,
    };
    if(this.registro.email === ''){
      this.interaction.presentToast('Digite el Correo Electronico');
    }else if(this.registro.password === ''){
      this.interaction.presentToast('Digite la Contraseña');
    }else {
      const res = await this.firebaseauthService.login(credenciales.email, credenciales.password).then( res => {
        this.interaction.presentLoading('Iniciando Sesion...');
        console.log('Ingresó con exito');
        this.interaction.closeLoading();
        this.interaction.presentToast('Inició sesion con exito');
      }).catch( error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Digite la Cuenta y Contraseña de manera correcta');
        console.log('ERROR', error);
      });
    }

  }

}

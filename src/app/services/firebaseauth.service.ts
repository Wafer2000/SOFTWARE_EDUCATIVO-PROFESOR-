import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Usuarios } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  constructor(
    public auth: AngularFireAuth,
    public fires: AngularFirestore,
    public storage: AngularFireStorage
    ) {
    this.getUid();
  }

  
  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async resetPassword(email: string): Promise<void>{
    try{
      return this.auth.sendPasswordResetEmail(email);
    } catch(error){
      console.log(error);
    }
  }

  logout() {
    return this.auth.signOut();
  }

  registrar(registro: Usuarios){
    return this.auth.createUserWithEmailAndPassword(registro.email, registro.password);
  }

  async getUid(){
    const user = await this.auth.currentUser;
    if (user === null){
      return null;
    } else{
      return user.uid;
    }
  }

  async getUser(){
    const usuario = await this.auth.currentUser;
    if (usuario === null){
      return null;
    } else{
      return usuario.email;
    }
  }

  stateAuth(){
    return this.auth.authState;
  }

}

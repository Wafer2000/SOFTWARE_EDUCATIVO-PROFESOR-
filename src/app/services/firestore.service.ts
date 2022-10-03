import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestoreService: AngularFirestore) { 
    
  }

  getId(){
    return this.firestoreService.createId();
  }

  createDoc(data: any, path: string, id: any){
    const collection = this.firestoreService.collection(path);
    return collection.doc(id).set(data);
  }

  updateDoc(path: string, id: string, data: any){
    return this.firestoreService.collection(path).doc(id).update(data);
  }

  getDoc<tipo>(path: string, id: string){
    const collection = this.firestoreService.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }

  deleteDoc(path: string, id: any) {
    const collection = this.firestoreService.collection(path);
    return collection.doc(id).delete();
  }

  getCollection<tipo>(path: string){
    const collection = this.firestoreService.collection<tipo>(path);
    return collection.valueChanges();
  }

  getCollectionTodos<tipo>(path: any){
    const dataCollection: AngularFirestoreCollection<tipo> = 
    this.firestoreService.collection<tipo>(path, ref => ref.orderBy('tiempo', 'desc'));
    return dataCollection.valueChanges();
  }

  getCollectionTodosAsc<tipo>(path: any){
    const dataCollection: AngularFirestoreCollection<tipo> = 
    this.firestoreService.collection<tipo>(path, ref => ref.orderBy('tiempo', 'asc'));
    return dataCollection.valueChanges();
  }

  getCollectionUnicDesc<tipo>(path: any, parametro: string, value: any){
    const dataCollection: AngularFirestoreCollection<tipo> = 
    this.firestoreService.collection<tipo>(path, ref => ref.where(parametro, '==', value).orderBy('tiempo', 'desc'));
    return dataCollection.valueChanges();
  }

  getCollectionUnicDescDouble<tipo>(path: any, parametro: string, value: any, parametro1: string, value1: any){
    const dataCollection: AngularFirestoreCollection<tipo> = 
    this.firestoreService.collection<tipo>(path, ref => ref.where(parametro, '==', value).where(parametro1, '==', value1).orderBy('tiempo', 'desc'));
    return dataCollection.valueChanges();
  }

  getCollectionUnicAsc<tipo>(path: any, parametro: string, value: any){
    const dataCollection: AngularFirestoreCollection<tipo> = 
    this.firestoreService.collection<tipo>(path, ref => ref.where(parametro, '==', value).orderBy('tiempo', 'asc'));
    return dataCollection.valueChanges();
  }

  getCollectionUnic<tipo>(path: any, parametro: string, value: any){
    const dataCollection: AngularFirestoreCollection<tipo> = 
    this.firestoreService.collection<tipo>(path, ref => ref.where(parametro, '==', value));
    return dataCollection.valueChanges();
  }

  getCollectionUnicDouble<tipo>(path: any, parametro: string, value: any, parametro1: string, value1: any){
    const dataCollection: AngularFirestoreCollection<tipo> = 
    this.firestoreService.collection<tipo>(path, ref => ref.where(parametro, '==', value).where(parametro1, '==', value1));
    return dataCollection.valueChanges();
  }

}

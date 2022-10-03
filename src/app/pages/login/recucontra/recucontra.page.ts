import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-recucontra',
  templateUrl: './recucontra.page.html',
  styleUrls: ['./recucontra.page.scss'],
  providers: [FirebaseauthService]
})
export class RecucontraPage implements OnInit {

  userEmail = new FormControl('');

  constructor(
    private firebaseauthService: FirebaseauthService,
    private router: Router
  ) { }

  ngOnInit() {}

  async resetPass(){
    try{
      const email = this.userEmail.value;
      await this.firebaseauthService.resetPassword(email);
      window.alert('A sido enviado el mensaje, debe revisar su bandeja de entrada');
      this.router.navigate(['/login'])
    } catch(error){
      console.log(error)
    }
  }

}

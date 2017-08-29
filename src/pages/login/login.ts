import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {HomePage} from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  user: Observable<firebase.User>;
   user1 = {
     email:null,
     password:null
   }
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.user = afAuth.authState;
  }

  public loginIn(user1){
    let loading = this.loadingCtrl.create({content:'Autenticando...'});
    loading.present();
    this.afAuth.auth.signInWithEmailAndPassword(user1.email, user1.password).then((firebaseUser)=>{
      // this.navCtrl.push(HomePage);
      this.navCtrl.setRoot(HomePage);
      loading.dismiss();
    }, error=>{
      loading.dismiss();
      this.alertCtrl.create({title:'AVISO', buttons:['Ok'],subTitle:'Usuario ou senha invalido !'}).present();
    });    
  }

}
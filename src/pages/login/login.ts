import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  public loginIn(user1){
    this.afAuth.auth.signInWithEmailAndPassword(user1.email, user1.password).then((firebaseUser)=>{
      // this.navCtrl.push(HomePage);
      this.navCtrl.setRoot(HomePage);
    }, error=>{
      console.log(error);
    });    
  }

}
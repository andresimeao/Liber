import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  user: Observable<firebase.User>;
  
  constructor(public navCtrl: NavController,  public afAuth: AngularFireAuth) {
     this.user = afAuth.authState;
  }
  


}

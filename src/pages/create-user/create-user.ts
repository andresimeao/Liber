import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {
  user = {email:null,password:null,name:null, urlPhoto:null};
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afDB: AngularFireDatabase, public afAuth: AngularFireAuth) {
  }
  
  public createUser(user){
    
    this.afAuth.auth.createUserWithEmailAndPassword(user.email , user.password).
    then((firebaseUser) => {
      this.afDB.database.ref('users/'+ firebaseUser.uid).set(user);
      alert('cadastrado com sucesso');
    }).catch((error)=>{
      alert('cadastro deu errado por causa : '+ error);
    });
       
        
  }

}
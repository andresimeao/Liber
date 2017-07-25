import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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
  user = {email:null,
    password:null,
    name:null, 
    urlPhoto:null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afDB: AngularFireDatabase, public afAuth: AngularFireAuth,public loadingCtrl: LoadingController,private alertCtrl: AlertController) {
  }


  public createUser(user){

    let alert = this.alertCtrl.create({
    title: 'Aviso',
    subTitle: 'Usuário Criado Com sucesso',
    buttons: ['ok']
  });

    let alertError = this.alertCtrl.create({
    title: 'Aviso',
    subTitle: 'Falha ao Criar Usuario',
    buttons: ['ok']
  });
  
  let loading = this.loadingCtrl.create({
    content: 'Salvando...'
  });
 
    loading.present();

    this.afAuth.auth.createUserWithEmailAndPassword(user.email , user.password).
    then((firebaseUser) => {
      this.afDB.database.ref('users/'+ firebaseUser.uid).set(user);
      loading.dismiss();  
      alert.present();
    }).catch((error)=>{
      loading.dismiss();
      alertError.present();
    });
       
     
  }

}
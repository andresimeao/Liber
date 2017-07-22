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
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {
  usuario = {email:null,senha:null,nome:null, caminho:null};
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afDB: AngularFireDatabase, public afAuth: AngularFireAuth) {}

  public cadastrarUsuario(usuario){
    
    this.afAuth.auth.createUserWithEmailAndPassword(usuario.email , usuario.senha).then(
        function(firebaseUser){
            alert('Cadastrado com sucesso UID: '+firebaseUser.uid);
          this.addUsuario(usuario)
        }, function(error){
            alert(error);
        });
  }

}

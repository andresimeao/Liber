import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StartPage } from '../start/start';


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

  addUserForm:FormGroup;
  listUsers: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afDB: AngularFireDatabase, public afAuth: AngularFireAuth,public loadingCtrl: LoadingController,private alertCtrl: AlertController,
  public formBuilder: FormBuilder){
    //Formulario com as validações
    this.addUserForm = this.formBuilder.group({
      email:['',Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.compose([Validators.required, Validators.minLength(6)])],
      name:['',Validators.compose([Validators.required])]
    });

  }

public adduser(name):boolean{
  let lista =  this.listUsers = this.afDB.list('users');
  
  lista.forEach(element => {
    element.forEach(i => {
      if(i.name == name ){
        return false;
      }
    });
    
  });
  return true;
}

  public createUser(){
    let user: any = this.addUserForm.value;
    // let lista =  this.listUsers = this.afDB.list('users');
  
  let loading = this.loadingCtrl.create({
    content: 'Salvando...'
  });
    loading.present();
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).
    then((firebaseUser) => {
      this.afDB.database.ref('users/'+ firebaseUser.uid).set({name:user.name, email:user.email});
      loading.dismiss();
      this.alertCtrl.create({title:'Aviso',message:'Usuário criado com sucesso',buttons:['ok']}).present()  
      this.navCtrl.setRoot(StartPage);
    }, (error)=>{
      loading.dismiss();
      this.alertCtrl.create({title:'Aviso',message:'Falha ao criar usuário',buttons:['ok']}).present()
    });
               
  }

}
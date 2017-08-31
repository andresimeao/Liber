import { Component } from '@angular/core';
import { NavController, NavParams,AlertController, LoadingController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {TermsModalPage} from '../terms-modal/terms-modal';

@Component({
  selector: 'page-create-book',
  templateUrl: 'create-book.html',
})
export class CreateBookPage {
  
  // book = {
  //   title:null,
  //   synopsis:null,
  //   category:null,
  //   gender:null,
  //   warnings:null
  // }
    
  addBookForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public loadingCtrl: LoadingController, private alertCtrl: AlertController,
  public formBuilder: FormBuilder, public modalCtrl: ModalController) {
   
    this.addBookForm = this.formBuilder.group({
      title:['',Validators.compose([Validators.required])],
      synopsis:['', Validators.compose([Validators.required, Validators.minLength(6)])],
      category:['',Validators.compose([Validators.required])],
      // gender:['', Validators.compose([Validators.required])],
      checkTerms: [false, Validators.compose([Validators.required])],
      warnings: ['', Validators.compose([Validators.required])]
    });
  }
  
  public createBook(){
  
    let loading = this.loadingCtrl.create({content:'Criando...'});
    loading.present();
    let userauth = this.afAuth.auth.currentUser;
    let book = this.addBookForm.value;
    let bookDataBase = this.afDB.list('books');
    
    bookDataBase.push({title:book.title, synopsis:book.synopsis, category:book.category, 
    warnings:book.warnings, userId:userauth.uid}).then(reference =>{
     
      
    loading.dismiss();

      this.alertCtrl.create({title:'AVISO',message:'Criado com sucesso', buttons:['Ok']}).present();
      let user = this.afDB.list('users/'+ userauth.uid +'/booksId');
      user.push({bookId:reference.path.o[1], title:book.title}).then(reference => {console.log('id do livro cadastrado no usuario')});

    },error =>{

      this.alertCtrl.create({title:'AVISO',subTitle:'Falha', buttons:['Ok']}).present();

      loading.dismiss();
    });

  }

  openTermsModal() {
    let modal = this.modalCtrl.create(TermsModalPage);
    modal.present();
  }

}

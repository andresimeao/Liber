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
      checkTerms: ['', Validators.compose([Validators.required])],
      warnings: ['', Validators.compose([Validators.required])]
    });
  }
  
  public createBook(){
    let user = this.afAuth.auth.currentUser;
    let book = this.addBookForm.value;
    let bookDataBase = this.afDB.list('books');

    bookDataBase.push({title:book.title, synopsis:book.synopsis, category:book.category, 
    warnings:book.warnings, userId:user.uid});

  }

  openTermsModal() {
    let modal = this.modalCtrl.create(TermsModalPage);
    modal.present();
  }

}

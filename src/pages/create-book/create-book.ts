import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-create-book',
  templateUrl: 'create-book.html',
})
export class CreateBookPage {
  
  book = {
    title:null,
    synopsis:null,
    category:null,
    gender:null
  }
  
  tags = [];
  addBookForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afDB: AngularFireDatabase, public afAuth: AngularFireAuth,public loadingCtrl: LoadingController,private alertCtrl: AlertController,
  public formBuilder: FormBuilder) {

    this.addBookForm = this.formBuilder.group({
      title:['',Validators.compose([Validators.required])],
      synopsis:['', Validators.compose([Validators.required, Validators.minLength(6)])],
      category:['',Validators.compose([Validators.required])],
      // gender:['', Validators.compose([Validators.required])],
      checkTerms: ['', Validators.compose([Validators.required])]
    });
  }
  
  public createBook(){
    let Book = this.addBookForm.value;

    debugger;
    

  }
  onChange(val){
    console.log(this.tags);
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateBookPage');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  user = {
    emai:'',
    password:''
  }
  
  constructor(public navCtrl: NavController) {
    
  }

}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {HomePage} from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  user = {
    emai:'',
    password:''
  }
  
  constructor(public navCtrl: NavController) {}

  public loginIn(){
    this.navCtrl.push(HomePage);
  }

}
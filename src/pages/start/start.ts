import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../user/login/login';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {
  
  constructor(public navCtrl: NavController) {
    
  }

}
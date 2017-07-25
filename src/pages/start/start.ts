//View child para navegar para outra pagina
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {CreateUserPage} from '../create-user/create-user';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {
  
  constructor(public navCtrl: NavController) {}

  public showCreateUser(){
    this.navCtrl.push(CreateUserPage);
  }

  public showLogin(){
    this.navCtrl.push(LoginPage);
  }
}
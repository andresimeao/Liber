import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {CreateBookPage} from '../create-book/create-book';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  
  tabPerfil: string = "library";
  
  constructor(public navCtrl: NavController) {
    
  }
  
  public showCreateBook(){
    this.navCtrl.push(CreateBookPage);
  }
}
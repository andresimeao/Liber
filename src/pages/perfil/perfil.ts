import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  
  tabPerfil: string = "library";
  
  constructor(public navCtrl: NavController) {
    
  }

}
//View child para navegar para outra pagina
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {CadastroUsuarioPage} from '../cadastro-usuario/cadastro-usuario';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {
  
  constructor(public navCtrl: NavController) {}

  public irParaCadastro(){
    this.navCtrl.push(CadastroUsuarioPage);
  }
}
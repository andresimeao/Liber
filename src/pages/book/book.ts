import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  
  sinopse = "Em 'A tormenta de espadas' os Sete Reinos já sentem o rigoroso inverno que chega, mas as batalhas parecem mais cruéis  e impiedosas. Enquanto os Sete Reinos estremecem com a chegada dos selvagens pela Muralha, numa maré interminável de homens, gigantes e terríveis bestas, Jon Snow, o Bastardo de Winterfell, que está entre eles, divide-se entre sua consciência e o papel que é forçado a desempenhar. Robb Stark, o Jovem Lobo, vence todas as suas batalhas, mas será que ele conseguirá vencer os desafios que não se resolvem apenas com a espada? Arya continua a caminho de Correrrio, mas mesmo alguém tão desembaraçado como ela terá grande dificuldade em ultrapassar os obstáculos que se aproximam. Na corte de Joffrey, Tyrion luta pela vida, depois de ter sido ferido na Batalha da Água Negra; e Sansa, livre do compromisso com o homem que agora ocupa o Trono de Ferro, precisa lidar com as consequências de ser a segunda na linha de sucessão de Winterfell, uma vez que Bran e Rickon estariam mortos. No Leste, Daenerys Targaryen navega em direção às terras da sua infância, mas antes ela precisará aportar às desprezíveis cidades dos esclavagistas. Mas a menina indefesa agora é uma mulher poderosa."

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}

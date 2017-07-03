import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  cartaoDebitoRoot = 'CartaoDebitoPage'
  cartaoCreditoRoot = 'CartaoCreditoPage'
  saldoRoot = 'SaldoPage'


  constructor(public navCtrl: NavController) {}

}

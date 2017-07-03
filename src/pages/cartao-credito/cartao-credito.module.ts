import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartaoCreditoPage } from './cartao-credito';

@NgModule({
  declarations: [
    CartaoCreditoPage,
  ],
  imports: [
    IonicPageModule.forChild(CartaoCreditoPage),
  ],
  exports: [
    CartaoCreditoPage
  ]
})
export class CartaoCreditoPageModule {}

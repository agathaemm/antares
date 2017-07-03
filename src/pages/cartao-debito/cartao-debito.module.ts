import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartaoDebitoPage } from './cartao-debito';

@NgModule({
  declarations: [
    CartaoDebitoPage,
  ],
  imports: [
    IonicPageModule.forChild(CartaoDebitoPage),
  ],
  exports: [
    CartaoDebitoPage
  ]
})
export class CartaoDebitoPageModule {}

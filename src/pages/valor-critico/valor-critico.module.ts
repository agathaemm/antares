import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValorCriticoPage } from './valor-critico';

@NgModule({
  declarations: [
    ValorCriticoPage,
  ],
  imports: [
    IonicPageModule.forChild(ValorCriticoPage),
  ],
  exports: [
    ValorCriticoPage
  ]
})
export class ValorCriticoPageModule {}

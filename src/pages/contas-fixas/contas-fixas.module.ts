import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContasFixasPage } from './contas-fixas';

@NgModule({
  declarations: [
    ContasFixasPage,
  ],
  imports: [
    IonicPageModule.forChild(ContasFixasPage),
  ],
  exports: [
    ContasFixasPage
  ]
})
export class ContasFixasPageModule {}

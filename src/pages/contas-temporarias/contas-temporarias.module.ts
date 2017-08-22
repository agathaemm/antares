import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContasTemporariasPage } from './contas-temporarias';

@NgModule({
  declarations: [
    ContasTemporariasPage,
  ],
  imports: [
    IonicPageModule.forChild(ContasTemporariasPage),
  ],
  exports: [
    ContasTemporariasPage
  ]
})
export class ContasTemporariasPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroGastoFixoPage } from './cadastro-gasto-fixo';

@NgModule({
  declarations: [
    CadastroGastoFixoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroGastoFixoPage),
  ],
  exports: [
    CadastroGastoFixoPage
  ]
})
export class CadastroGastoFixoPageModule {}

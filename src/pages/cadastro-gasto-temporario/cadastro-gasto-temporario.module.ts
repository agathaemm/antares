import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroGastoTemporarioPage } from './cadastro-gasto-temporario';

@NgModule({
  declarations: [
    CadastroGastoTemporarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroGastoTemporarioPage),
  ],
  exports: [
    CadastroGastoTemporarioPage
  ]
})
export class CadastroGastoTemporarioPageModule {}

import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  navCtrl: any;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Editar usuário',          component: "SignupPage" },
      { title: 'Contas fixas',            component: "ContasFixasPage" },
      { title: 'Contas temporárias',      component: "ContasTemporariasPage" },
      { title: 'Categorias',              component: "CategoriasPage" },
      { title: 'Adicionar valor crítico', component: "AddValorCriticoPage" },
      { title: 'Sair',                    component: "LoginPage" }
    ];

  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  public abreSuporte() {
    this.navCtrl.push( "SuportePage" );
  }
}

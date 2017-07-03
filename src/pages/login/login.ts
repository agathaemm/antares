import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openSignup() {
    this.navCtrl.push( "SignupPage" );
  }

  openForgotPassword() {
    this.navCtrl.push( "ForgotPasswordPage" );
  }

  openTabsPage() {
    this.navCtrl.push( TabsPage );
  }

}

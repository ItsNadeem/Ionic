import { Component } from '@angular/core';
import { NavController, NavParams, MenuController} from 'ionic-angular';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public menu: MenuController,) { }

  startApp() {
    this.navCtrl.push(HomePage);
    this.menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter() {
    // the left menu on root should be disabled on the login page
    this.menu.enable(false);
  }
}

import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController, MenuController, LoadingController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public backgroundImage = 'assets/img/background/background-6.jpg';

  constructor(public navCtrl: NavController,
              public menu: MenuController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) { }
  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.enable(false);
  }

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 100
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  login() {
    this.presentLoading('Thanks for signing up!');
    this.navCtrl.push(HomePage);
    this.menu.enable(true);
  }

  signup() {
    this.presentLoading('Thanks for signing up!');
    // this.navCtrl.push(HomePage);
  }
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }
}

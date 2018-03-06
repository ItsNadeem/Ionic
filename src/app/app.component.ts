import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

export interface PageInterface {
  title: string;
  icon: string;
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  rootPage:any;

  appPages: PageInterface[] = [
    { title: 'Dashboard', icon: 'home' },
    { title: 'My Groups', icon: 'people' },
    { title: 'My Account', icon: 'information-circle' }
  ];
  morePages: PageInterface[] = [
    { title: 'add new group', icon: 'people' },
    { title: 'add new friend', icon: 'person' },
  ];


  constructor( public platform: Platform,
               public statusBar: StatusBar,
               public splashScreen: SplashScreen) {
    this.platformReady();
    this.rootPage = LoginPage;

  }

  platformReady() {
    // Calls any initial plugins when ready
    // Here you can do any higher level native things you might need.
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}


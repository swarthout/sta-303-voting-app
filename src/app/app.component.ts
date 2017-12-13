import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { TutorialPage } from '../pages/tutorial/tutorial';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TutorialPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
    });
  }
}


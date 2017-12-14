import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home'

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {

    this.slides = [
      {
        title: "Create a Change",
        description: "Propose a change you want to see in the world!",
        image: 'assets/imgs/globe.png',
      },
      {
        title: "Vote on Issues",
        description: "The voting app automatically determines which proposals are relevant to you, and asks for your opinion. Depending on the scope of the proposal, more or fewer people will be involved.",
        image: 'assets/imgs/australia.jpg',
      },
      {
        title: "Own your Democracy",
        description: "This application is decentralized, meaning it is not owned or controlled by a single government or corporation. We as a global community decide the fate of our future.",
        image: 'assets/imgs/nodes.jpg',
      },
      {
        title: "Ultimate Actualization",
        description: "This application, and this application alone has control of the world's fleet of robots. Our highly automated society allows for our greatest dreams to be built rapidly.",
        image: 'assets/imgs/construction.jpg'
      }
    ];
  }

  startApp() {
    this.navCtrl.setRoot('HomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}

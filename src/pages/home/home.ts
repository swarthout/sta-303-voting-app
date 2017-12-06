import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  proposals: Array<object>
  constructor(public navCtrl: NavController) {
    this.proposals = [
      {
        imgUrl: "assets/imgs/park.jpg",
        title: "Ryan wants to build a Park",
        description: "123 W. 45th Street, New York City",
        likeCount: 12,
        commentCount: 4
      },
      {
        imgUrl: "assets/imgs/coaster.jpg",
        title: "Lilly wants a Roller Coaster in Central Park",
        description: "Central Park, New York City",
        likeCount: 23,
        commentCount: 180
      }
    ]
  }

}

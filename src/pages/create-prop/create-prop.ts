import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LocationProvider } from '../../providers/locations/locations';

/**
 * Generated class for the CreatePropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-prop',
  templateUrl: 'create-prop.html',
})
export class CreatePropPage {
  showList: boolean = false
  searchResults = []
  searchString = ""
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public locationProvider: LocationProvider,
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePropPage');
  }

  getResults(searchString) {
    if (searchString) {
      this.locationProvider.getResults(searchString).subscribe(
        (data: any) => {
          this.searchResults = data.predictions.map(p => p.description)
          this.showList = true
        }
      )
    }
    else {
      this.showList = false
    }
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

  selectLocation(location) {
    this.searchString = location
    this.showList = false
  }

}

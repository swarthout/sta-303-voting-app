import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LocationProvider } from '../../providers/locations/locations';
import { Proposal, ProposalProvider } from '../../providers/proposal/proposal';

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
  searchPlace = ""
  proposal: Partial<Proposal>
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public locationProvider: LocationProvider,
    public proposalProvider: ProposalProvider,
    public viewCtrl: ViewController
  ) {
    this.proposal = {}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePropPage');
  }

  getResults(searchString) {
    if (searchString) {
      this.locationProvider.getResults(searchString).then(
        (data: any) => {
          console.log(data)
          this.searchResults = data
          this.showList = true
        }
      )
    }
    else {
      this.showList = false
    }
  }

  createProposal() {
    this.proposal.location = this.searchString
    this.proposal.imgUrl = "http://lorempixel.com/400/200/city"
    this.proposalProvider.addProposal(this.proposal).then(() => this.viewCtrl.dismiss())

  }

  selectLocation(location) {
    this.searchString = location.description
    this.searchPlace = location.place_id
    this.showList = false
  }

}

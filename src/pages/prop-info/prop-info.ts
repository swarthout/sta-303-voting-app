import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Proposal, ProposalProvider } from '../../providers/proposal/proposal'

/**
 * Generated class for the PropInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prop-info',
  templateUrl: 'prop-info.html',
})
export class PropInfoPage {
  proposal: Proposal
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public proposalProvider: ProposalProvider, public viewCtrl: ViewController) {
    let id = navParams.get('id')
    this.proposal = proposalProvider.getProposal(id)
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

}

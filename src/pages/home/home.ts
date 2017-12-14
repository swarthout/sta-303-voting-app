import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Proposal, ProposalProvider } from '../../providers/proposal/proposal'
import { PropInfoPage } from '../prop-info/prop-info'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  proposals: Proposal[] = []
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public proposalProvider: ProposalProvider) {

  }

  ionViewDidLoad() {
    this.proposalProvider.getProposals().then(proposals => this.proposals = proposals)
  }

  viewInfo(id) {
    this.navCtrl.push('PropInfoPage', { id });
  }

  createProposal() {
    this.navCtrl.push('CreatePropPage');
  }

  doRefresh(refresher) {
    this.proposalProvider.getProposals().then(proposals => {
      this.proposals = proposals
      refresher.complete()
    })
  }

}

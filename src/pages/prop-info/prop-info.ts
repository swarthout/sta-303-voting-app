import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Proposal, ProposalProvider } from '../../providers/proposal/proposal'
import { VotePage } from '../vote/vote';
import { CommentPage } from '../comment/comment';

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
  commentType: string
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proposalProvider: ProposalProvider,
    public modalCtrl: ModalController
  ) {
    let id = navParams.get('id')
    this.proposal = proposalProvider.getProposal(id)
    this.commentType = "support"
  }

  ionViewDidLoad() {
  }

  submitVote() {

    let modal = this.modalCtrl.create(VotePage, { proposal: this.proposal });
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  submitComment() {
    let modal = this.modalCtrl.create(CommentPage, { proposal: this.proposal });
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

}

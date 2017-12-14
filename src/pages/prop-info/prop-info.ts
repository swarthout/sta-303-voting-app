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
  proposal: Proposal = {
    id: 0,
    title: "",
    description: "",
    imgUrl: "",
    commentCount: 0,
    comments: [],
    location: "",
    voteCount: 0
  }
  commentType: string
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proposalProvider: ProposalProvider,
    public modalCtrl: ModalController
  ) {
    this.commentType = "support"
  }

  ionViewDidLoad() {
    let id =this. navParams.get('id')
    this.proposalProvider.getProposal(id).then(proposal => this.proposal = proposal)
  }

  submitVote() {

    let modal = this.modalCtrl.create(VotePage, { proposal: this.proposal });
    modal.onDidDismiss(data => {
      if (data) {
        this.proposal.voteCount += 1
      }
    });
    modal.present();
  }

  submitComment() {
    let modal = this.modalCtrl.create(CommentPage, { proposal: this.proposal });
    modal.onDidDismiss(comment => {
      if (comment) {
        this.proposalProvider.addComment(this.proposal.id, comment).then(proposal => this.proposal = proposal)
      }
    });
    modal.present();
  }

  get supportComments() {
    if (this.proposal) {
      return this.proposal.comments.filter((comment: any) => comment.type == "support")
    }
    return []
  }

  get opposeComments() {
    if (this.proposal) {
      return this.proposal.comments.filter((comment: any) => comment.type == "oppose")
    }
    return []
  }

  get questionComments() {
    if (this.proposal) {
      return this.proposal.comments.filter((comment: any) => comment.type == "question")
    }
    return []
  }

}

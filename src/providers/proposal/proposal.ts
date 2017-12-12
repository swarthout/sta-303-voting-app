import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProposalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export type Proposal = {
  id: number,
  imgUrl: string,
  title: string,
  location: string,
  description: string,
  voteCount: number,
  commentCount: number,
  comments?: string[]
}

@Injectable()
export class ProposalProvider {
  proposals: Proposal[]
  idCount: number
  constructor() {
    this.proposals = [
      {
        id: 1,
        imgUrl: "assets/imgs/park.jpg",
        title: "Ryan wants to build a Park",
        location: "123 W. 45th Street, New York City",
        description: "lorem ipsum dolor sit amet",
        voteCount: 12,
        commentCount: 4,
        comments: []
      },
      {
        id: 2,
        imgUrl: "assets/imgs/coaster.jpg",
        title: "Lilly wants a Roller Coaster in Central Park",
        location: "Central Park, New York City",
        description: "",
        voteCount: 23,
        commentCount: 180
      }
    ]
    this.idCount = this.proposals.length + 1
  }

  getProposals(): Proposal[] {
    return this.proposals
  }

  getProposal(id: number): Proposal {
    return this.proposals.find(p => p.id == id) || this.proposals[0]
  }
  addProposal(proposal) {
    this.proposals.push({ ...proposal, id: this.idCount })
    this.idCount += 1
  }

  addComment(proposalId: number, comment: string) {
    let i = this.proposals.findIndex(p => p.id == proposalId)
    this.proposals[i].comments.push(comment)
    this.proposals[i].commentCount += 1
  }

}

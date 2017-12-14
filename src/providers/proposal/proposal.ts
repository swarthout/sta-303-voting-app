import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
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
  comments?: object[]
}

let defaultProposals = [
  {
    id: 1,
    imgUrl: "assets/imgs/park.jpg",
    title: "New Park in New York City",
    location: "123 W. 45th Street, New York City",
    description: "The world needs more parks, plain and simple",
    voteCount: 12,
    commentCount: 4,
    comments: [{
      text: "This is awesome",
      type: "support"
    },
    {
      text: "I don't want to have to move from my spot in Times Square",
      type: "oppose"
    },
    {
      text: "I think this is a bad idea...",
      type: "oppose"
    }
    ]
  },
  {
    id: 2,
    imgUrl: "assets/imgs/coaster.jpg",
    title: "Roller Coaster in Central Park",
    location: "Central Park, New York City",
    description: "I think it would be really fun if there was a roller coaster in Central Park!",
    voteCount: 23,
    commentCount: 180,
    comments: [{
      text: "So dope!!",
      type: "support"
    },
    {
      text: "I love roller coasters!",
      type: "support"
    }]
  }
]

@Injectable()
export class ProposalProvider {
  proposals: Proposal[]
  idCount: number
  constructor(private storage: Storage) {
    this.seedStorage()
    this.idCount = defaultProposals.length + 1
  }

  async seedStorage() {
    for (let proposal of defaultProposals) {
      let exists = await this.storage.get(`proposals/${proposal.id}`)
      if (!exists) {
        await this.storage.set(`proposals/${proposal.id}`, proposal)
      }
    }
  }
  async getProposals() {
    let proposals = []
    await this.storage.forEach((proposal, key) => {
      if (key.indexOf("proposals") >= 0) {
        proposals.push(proposal)
      }
    })
    return proposals
  }

  async getProposal(id: number) {
    let proposal = await this.storage.get(`proposals/${id}`)
    return proposal || await this.storage.get(`proposals/1`)
  }
  async addProposal(proposal) {
    let newProposal = {
      ...proposal,
      id: this.idCount,
      comments: [],
      commentCount: 0,
      voteCount: 0
    }
    await this.storage.set(`proposals/${newProposal.id}`, newProposal)
    this.idCount += 1
    return this.getProposals()
  }

  async addComment(proposalId: number, comment: object) {
    let proposal = await this.storage.get(`proposals/${proposalId}`)
    proposal.comments.push(comment)
    proposal.commentCount += 1
    await this.storage.set(`proposals/${proposalId}`, proposal)
    return proposal
  }

}

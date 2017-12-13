import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropInfoPage } from './prop-info';
import { VotePage } from '../vote/vote';
import { CommentPage } from '../comment/comment';

@NgModule({
  declarations: [
    PropInfoPage
  ],
  imports: [
    IonicPageModule.forChild(PropInfoPage),
  ],
  exports: [
    PropInfoPage
  ]
})
export class PropInfoPageModule {}

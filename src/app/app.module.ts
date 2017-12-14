import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProposalProvider } from '../providers/proposal/proposal';
import { PropInfoPage } from '../pages/prop-info/prop-info';
import { VotePage } from '../pages/vote/vote';
import { CommentPage } from '../pages/comment/comment';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LocationProvider } from '../providers/locations/locations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    TutorialPage,
    VotePage,
    CommentPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TutorialPage,
    VotePage,
    CommentPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProposalProvider,
    LocationProvider,
    HttpClient
  ]
})
export class AppModule {}

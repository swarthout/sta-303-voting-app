import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProposalProvider } from '../providers/proposal/proposal';
import { PropInfoPage } from '../pages/prop-info/prop-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PropInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PropInfoPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProposalProvider
  ]
})
export class AppModule {}

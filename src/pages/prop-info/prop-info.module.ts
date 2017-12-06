import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropInfoPage } from './prop-info';

@NgModule({
  declarations: [
    PropInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PropInfoPage),
  ],
})
export class PropInfoPageModule {}

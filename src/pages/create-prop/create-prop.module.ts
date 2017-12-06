import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePropPage } from './create-prop';

@NgModule({
  declarations: [
    CreatePropPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePropPage),
  ],
})
export class CreatePropPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiRutinaPage } from './mi-rutina';

@NgModule({
  declarations: [
    MiRutinaPage,
  ],
  imports: [
    IonicPageModule.forChild(MiRutinaPage),
  ],
  exports: [
    MiRutinaPage
  ]
})
export class MiRutinaPageModule {}

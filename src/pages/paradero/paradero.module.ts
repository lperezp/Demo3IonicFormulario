import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParaderoPage } from './paradero';

@NgModule({
  declarations: [
    ParaderoPage,
  ],
  imports: [
    IonicPageModule.forChild(ParaderoPage),
  ],
  exports: [
    ParaderoPage
  ]
})
export class ParaderoPageModule {}

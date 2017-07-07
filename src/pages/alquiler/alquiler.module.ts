import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlquilerPage } from './alquiler';

@NgModule({
  declarations: [
    AlquilerPage,
  ],
  imports: [
    IonicPageModule.forChild(AlquilerPage),
  ],
  exports: [
    AlquilerPage
  ]
})
export class AlquilerPageModule {}

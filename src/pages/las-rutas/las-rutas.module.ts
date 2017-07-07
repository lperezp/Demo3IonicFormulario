import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LasRutasPage } from './las-rutas';

@NgModule({
  declarations: [
    LasRutasPage,
  ],
  imports: [
    IonicPageModule.forChild(LasRutasPage),
  ],
  exports: [
    LasRutasPage
  ]
})
export class LasRutasPageModule {}

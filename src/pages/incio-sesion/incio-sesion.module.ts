import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncioSesionPage } from './incio-sesion';

@NgModule({
  declarations: [
    IncioSesionPage,
  ],
  imports: [
    IonicPageModule.forChild(IncioSesionPage),
  ],
  exports: [
    IncioSesionPage
  ]
})
export class IncioSesionPageModule {}

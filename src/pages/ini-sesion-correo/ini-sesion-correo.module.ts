import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniSesionCorreoPage } from './ini-sesion-correo';

@NgModule({
  declarations: [
    IniSesionCorreoPage,
  ],
  imports: [
    IonicPageModule.forChild(IniSesionCorreoPage),
  ],
  exports: [
    IniSesionCorreoPage
  ]
})
export class IniSesionCorreoPageModule {}

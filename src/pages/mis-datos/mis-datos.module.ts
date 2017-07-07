import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisDatosPage } from './mis-datos';

@NgModule({
  declarations: [
    MisDatosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisDatosPage),
  ],
  exports: [
    MisDatosPage
  ]
})
export class MisDatosPageModule {}

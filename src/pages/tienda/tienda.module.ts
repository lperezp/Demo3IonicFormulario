import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiendaPage } from './tienda';

@NgModule({
  declarations: [
    TiendaPage,
  ],
  imports: [
    IonicPageModule.forChild(TiendaPage),
  ],
  exports: [
    TiendaPage
  ]
})
export class TiendaPageModule {}

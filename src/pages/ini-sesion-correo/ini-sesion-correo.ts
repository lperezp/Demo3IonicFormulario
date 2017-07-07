import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IniSesionCorreoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ini-sesion-correo',
  templateUrl: 'ini-sesion-correo.html',
})
export class IniSesionCorreoPage {

	 tittle : string = "Iniciar Sesión por Correo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniSesionCorreoPage');
  }

}

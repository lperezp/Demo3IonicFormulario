import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AlquilerPage } from '../pages/alquiler/alquiler';
import { EstacionamientoPage } from '../pages/estacionamiento/estacionamiento';
import { IncioSesionPage } from '../pages/incio-sesion/incio-sesion';
import { IniSesionCorreoPage } from '../pages/ini-sesion-correo/ini-sesion-correo';
import { LasRutasPage } from '../pages/las-rutas/las-rutas';
import { MenuPrincipalPage } from '../pages/menu-principal/menu-principal';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
import { LocalesPage } from '../pages/locales/locales';
import { Registro1_2Page } from '../pages/registro1-2/registro1-2';
import { Registro2_2Page } from '../pages/registro2-2/registro2-2';
import { ReportePage } from '../pages/reporte/reporte';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { TallerPage } from '../pages/taller/taller';
import { TiendaPage } from '../pages/tienda/tienda';

import { Materialize } from 'C:/Users/Luis Eduardo/Documents/App/BiciApp/BiciApp/node_modules/materialize-css';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //=>Menú Principal{ title: 'Home', component: HomePage },
      { title: 'Lista', component: ListPage },
      { title: "▼ Las Rutas", component: LasRutasPage },
      { title: "Estacionamiento", component:  EstacionamientoPage },
      { title: "Locales Comerciales", component: LocalesPage },
      { title: "Tienda", component: TiendaPage },
      { title: "Taller", component: TallerPage },
      { title: "Mi Perfil", component: MiPerfilPage },
      { title: 'Alquiler', component: AlquilerPage },

      { title: "Iniciar Sesión", component: IncioSesionPage },
      { title: "Iniciar Sesión", component: IniSesionCorreoPage },

      { title: "Menu Principal", component: MenuPrincipalPage },

      { title: "Registro", component: Registro1_2Page },
      { title: "Registro", component: Registro2_2Page },
      { title: "Reporte", component: ReportePage },
      { title: "Reiniciar contraseña", component: ResetPasswordPage },



    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

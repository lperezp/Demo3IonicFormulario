import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AlquilerPage } from '../pages/alquiler/alquiler';
import { EstacionamientoPage } from '../pages/estacionamiento/estacionamiento';
import { IncioSesionPage } from '../pages/incio-sesion/incio-sesion';
import { IniSesionCorreoPage } from '../pages/ini-sesion-correo/ini-sesion-correo';
import { LasRutasPage } from '../pages/las-rutas/las-rutas';
import { MenuPrincipalPage } from '../pages/menu-principal/menu-principal';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
import { Registro1_2Page } from '../pages/registro1-2/registro1-2';
import { LocalesPage } from '../pages/locales/locales';
import { Registro2_2Page } from '../pages/registro2-2/registro2-2';
import { ReportePage } from '../pages/reporte/reporte';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { TallerPage } from '../pages/taller/taller';
import { TiendaPage } from '../pages/tienda/tienda';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlquilerPage,
    EstacionamientoPage,
    IncioSesionPage,
    IniSesionCorreoPage,
    LasRutasPage,
    LocalesPage,
    MenuPrincipalPage,
    MiPerfilPage,
    Registro1_2Page,
    Registro2_2Page,
    ReportePage,
    ResetPasswordPage,
    TallerPage,
    TiendaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlquilerPage,
    EstacionamientoPage,
    IncioSesionPage,
    IniSesionCorreoPage,
    LasRutasPage,
    MenuPrincipalPage,
    MiPerfilPage,
    Registro1_2Page,
    LocalesPage,
    Registro2_2Page,
    ReportePage,
    ResetPasswordPage,
    TallerPage,
    TiendaPage
  ],


  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

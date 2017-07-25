import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { PerfilPage } from '../pages/perfil/perfil';
import { StartPage } from '../pages/start/start';
import { LoginPage } from '../pages/login/login';
import { CreateUserPage } from '../pages/create-user/create-user';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyAdS7MMzXuXxkPrn5_H31Vqm2_qKPQvi6A",
    authDomain: "liber-da8ad.firebaseapp.com",
    databaseURL: "https://liber-da8ad.firebaseio.com",
    storageBucket: "liber-da8ad.appspot.com",
    messagingSenderId: "877231867880"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    StartPage,
    LoginPage,
    CreateUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    StartPage,
    LoginPage,
    CreateUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

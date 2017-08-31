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
import { CreateBookPage } from '../pages/create-book/create-book';
import {TermsModalPage} from '../pages/terms-modal/terms-modal';
import {BookPage} from '../pages/book/book';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import {IdService} from '../services/id-service';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ElasticModule } from 'angular2-elastic';

import { Camera } from '@ionic-native/camera';

export const firebaseConfig = {
  apiKey: "AIzaSyCR1Vw2pQGIntu-eTDMGRz_pxePosCAenc",
  authDomain: "liber-760db.firebaseapp.com",
  databaseURL: "https://liber-760db.firebaseio.com",
  projectId: "liber-760db",
  storageBucket: "liber-760db.appspot.com",
  messagingSenderId: "252339686715"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    StartPage,
    LoginPage,
    CreateUserPage,
    CreateBookPage,
    TermsModalPage,
    BookPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ElasticModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PerfilPage,
    StartPage,
    LoginPage,
    CreateUserPage,
    CreateBookPage,
    TermsModalPage,
    BookPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // IdService
  ]
})
export class AppModule {}

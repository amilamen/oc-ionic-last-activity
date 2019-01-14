import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { DonneesService } from './../services/donneesService';
import { AuthService } from './../services/authService';

import { MyApp } from './app.component';
import { SettingsPage } from './../pages/settings/settings';
import { LendCdPage } from './../pages/cds/lendcd/lendcd';
import { CdListPage } from './../pages/cds/cdList/cdlist';
import { LendBookPage } from './../pages/books/lendbook/lendbook';
import { TabsPage } from './../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { BookListPage } from '../pages/books/booklist/booklist';
import { AuthPage } from '../pages/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    SettingsPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    SettingsPage,
    AuthPage
  ],
  providers: [
    DonneesService,
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

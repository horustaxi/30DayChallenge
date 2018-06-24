import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule} from "@ionic/storage";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SecondPage} from '../pages/second/second';
import {IntroPage} from '../pages/intro/intro';
import { TimerPage } from '../pages/timer/timer';
import { CalendarPage} from '../pages/calendar/calendar';
import { RetrieveDataProvider } from '../providers/retrieve-data/retrieve-data';
import {Dialogs} from '@ionic-native/dialogs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondPage,
    IntroPage,
    TimerPage,
    CalendarPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage,
    IntroPage,
    TimerPage,
    CalendarPage,
  ],
  providers: [
    Dialogs,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RetrieveDataProvider,
  ]
})
export class AppModule {}

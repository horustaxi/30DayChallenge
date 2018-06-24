import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage'
import { HomePage } from '../pages/home/home';
import {IntroPage} from "../pages/intro/intro";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, public storage : Storage) {
    platform.ready().then(() => {

      this.storage.get("shownIntro").then((result)=>{
            if(result){
              this.rootPage = HomePage;
            }else{
              this.rootPage=  IntroPage;
              this.storage.set("shownIntro", true);
            }
      }).catch(e=>{

      })
    });
  }
}


import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SecondPage} from "../second/second";
import {Storage} from '@ionic/storage';
import "rxjs/add/operator/map"
import {RetrieveDataProvider} from "../../providers/retrieve-data/retrieve-data";
import { TimerPage } from '../timer/timer';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public squat: any[];
  public day: number;

  constructor(public navCtrl: NavController,
              public retreiveData: RetrieveDataProvider,
              public storage: Storage) {


    this.loadData();

  }

  ionViewDidEnter() {
    this.storage.get("day").then(result => {
      if (!result) {
        result = 0;
      }
      this.day = result;
      console.log("the index of the day is ", this.day);
    }).catch(e => {
      console.log("first time playing");

    })
  }

  launchSecondPgae() {

    this.navCtrl.push(SecondPage, {challenge: this.squat, index: this.day});
    console.log("today's challenge is ", this.day);


  }

  loadData() {
    this.retreiveData.getData().map(res => res['squat']).subscribe(data => {
      this.squat = data;
      console.log("you selected", this.squat);

    });
  }

  launchTimerPage(){
    this.navCtrl.push(TimerPage);
  }


}

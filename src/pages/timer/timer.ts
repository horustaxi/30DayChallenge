import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Dialogs} from '@ionic-native/dialogs';


/**
 * Generated class for the TimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {

  timerended : boolean  = false;
  maxTime:number=5;
  timerM:number;
  color ="#fce300";
  constructor(public navCtrl: NavController, public navParams: NavParams, private dialogs: Dialogs) {

  }

  StartTimer(){

    this.timerM = setTimeout(x =>
      {

        this.maxTime -= 1;

        if(this.maxTime == 1 && this.timerended==false) {
          this.maxTime = 15;
          this.timerended = true;


        }

          if(this.maxTime>0){
            this.StartTimer();
          }

          else{
              clearInterval(this.timerM);
            this.timerended = true;
          }

      }, 1000);


  }


}

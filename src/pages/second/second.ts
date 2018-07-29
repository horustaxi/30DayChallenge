import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {CalendarPage} from '../calendar/calendar';
import {NativeStorage} from "@ionic-native/native-storage";

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  //Array of the workouts
  challengeArray: string[];
  //Gey which day we will play
  day: number;
  //Index of the day in the array
  index: number;
  challengeName: string;
  //Has this challenge ended
  challengeComplete = false;
  //Store the playedTodayArray of last time the player played
  playedTodayArray: Number[];
  //Done playing for the day
  play = true;
  challengeInfo: any;
  timerended: boolean = false;
  timerStarted: boolean = false;
  maxTime: number = 5;
  timerM: number;
  color = "#fce300";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: NativeStorage) {

    console.log('constructor loaded');
    this.challengeName = this.navParams.get('challengeName');
    this.challengeArray = this.navParams.get('challengeArray');

    this.playedTodayArray = new Date().toLocaleDateString().split('/').map(item => parseInt(item));
    console.log(this.playedTodayArray);
    this.storage.getItem(this.challengeName).then(
      data => this.challengeInfo = data,
      error => {
        console.log('oops error', error);
        this.index = 0;

      }
    );


  }


  ionViewWillEnter() {
    console.log("ion view entered");
    this.canUserPlay();
    if (this.challengeInfo != null) {
      this.index = this.challengeInfo['day'];
    }

    this.day = parseInt(this.challengeArray[this.index]);
  }

  ionViewWillLeave() {
    console.log(this.play)

  }


  //Called when Done button is pressed
  playedForTheDay() {
    this.play = false;
    this.storage.setItem(this.challengeName, {"playedLast": this.playedTodayArray}).then(() => {
      console.log("user played last at", this.playedTodayArray)
    });
    if (this.index < 30) {
      this.index++;
      this.storage.setItem(this.challengeName, {"day": this.index, "playedLast": this.playedTodayArray})
      if (this.challengeName == 'plank') {
        this.maxTime = parseInt(this.challengeArray[this.index]);
      } else {
        this.day = parseInt(this.challengeArray[this.index]);
      }
    } else {
      this.challengeComplete = true;
    }

  }

  //Called to handle the logic of play once per day

  canUserPlay() {

    if (this.challengeInfo) {
      let result = this.challengeInfo['playedLast'];
      if (!result) {
        this.play = true;
        return
      } else {
        let dateArray = result;
        console.log("the dateArray value is", dateArray);
        if (dateArray[0] == this.playedTodayArray[0]) {
          if (dateArray[1] < (this.playedTodayArray[1])) {
            this.play = true
          } else {
            this.play = false
          }
        } else {
          this.play = true
        }
      }
    }
    else {

      console.warn("oops first time playing");
    }
  }

  lanuchCalendarPage() {

    let calModal = this.modalCtrl.create(CalendarPage, {data: this.challengeArray, day : this.index});
    calModal.present();
  }


  StartTimer() {
    this.timerStarted = true;
    this.timerM = setTimeout(() => {

      this.maxTime -= 1;

      if (this.maxTime == 1 && this.timerended == false) {
        this.maxTime = this.day;
        this.timerended = true;


      }

      if (this.maxTime > 0) {
        this.StartTimer();
      }

      else {
        clearInterval(this.timerM);
        this.playedForTheDay();

      }

    }, 1000);


  }

}



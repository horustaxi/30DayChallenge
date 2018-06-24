import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {CalendarPage} from '../calendar/calendar';
import {NativeStorage} from'@ionic-native/native-storage'
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
  challengeArray: any[];
  //Gey which day we will play
  day: number;
  //Index of the day in the array
  index: number;
  //Has this challenge ended
  challengeComplete = false;
  //Store the playedTodayArray of last time the player played
  playedTodayArray: Number[];
  //Done playing for the day
  play: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage, public modalCtrl:ModalController) {

    console.log('constructor loaded')
    this.challengeArray = this.navParams.get('challenge');
    this.index = this.navParams.get('index');
    this.day = this.challengeArray[this.index];
    this.playedTodayArray = new Date().toLocaleDateString().split('/').map(Number);
    console.warn("the squat day is ", this.day);


  }

  ionViewWillEnter() {
    console.log("ion view entered");
    this.canUserPlay();
    this.storage.get("day").then(result => {
      console.log("the modified val is ", result);
      this.index = result;
    }).catch(e=>{

    })

  }

  ionViewWillLeave() {
    console.log(this.play)

  }


  // Called when Done button is pressed
  playedForTheDay() {
    this.play = false;
    this.storage.set("playedLast", this.playedTodayArray)
      .then(() => {
        console.log("user played last at", this.playedTodayArray)
      });
    if (this.index < 30) {
      this.index++;
      this.storage.set("day", this.index + 1)
      this.day = this.challengeArray[this.index];
    } else {
      this.challengeComplete = true;
    }

  }

  //Called to handle the logic of play once per day

  canUserPlay() {
    this.storage.get("playedLast").then(result => {
      /* first we conpare the month*/
      console.log("the result is :", result);
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

    }).catch(e => {
      console.warn("oops first time playing", e);
    });
  }

  lanuchCalendarPage(){

    let calModal = this.modalCtrl.create(CalendarPage, { data: this.challengeArray });
    calModal.present();
  }

}



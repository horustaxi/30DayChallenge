import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SecondPage} from "../second/second";
import {Storage} from '@ionic/storage';
import "rxjs/add/operator/map"




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public storage: Storage) {


  }

  ionViewDidEnter() {

  }

  launchTimerPage(){
    let challengeType = 'plank';
    let challengeArray = ["20", "20", "30", "30", "40", "rest", "45", "45", "60", "60", "60", "90", "rest", "90", "90",
      "120", "120", "150", "rest", "150", "150", "180", "180", "210", "210", "rest", "240", "240", "270", "300"
    ];
    this.navCtrl.push(SecondPage, {challengeName : challengeType, challengeArray : challengeArray})
      .then(()=>console.log('plank done'));
  }

  launchSquatChallenge(){

    let challengeType = 'squat';
    let challengeArray = ["50","55","60", "rest","70", "75","80","rest","100","105","110","rest", "130", "135", "140",
      "rest", "150", "155", "160", "rest", "180", "185", "190", "rest", "220", "225", "230", "rest", "240", "250"
    ];
    //let squat  = this.loadData(challengeType);
    this.navCtrl.push(SecondPage, {challengeName : challengeType, challengeArray : challengeArray})
      .then(()=>console.log("squat done"));

  }

  launchPushUpChallenge(){
    let challengeType = 'push-up';
    let challengeArray = ["5", "5", "6", "6", "7", "7", "10", "10", "10", "15", "15", "15", "rest", "18", "18", "20",
      "20", "20", "25", "25", "30", "rest", "30", "35", "35", "40", "40", "45", "45", "50"
    ];
    this.navCtrl.push(SecondPage, {challengeName : challengeType, challengeArray : challengeArray})
      .then(()=>console.log('push-up done'));

  }

  launchCrunchChallenge(){

    let challengeType = "crunch";
    let challengeArray = ["25", "30", "35", "rest", "40", "45", "50", "rest", "60", "65", "70", "rest", "80", "90",
      "95", "rest", "100", "105", "110", "rest", "115", "120", "125", "rest", "130", "135", "140", "rest", "145", "150"
    ];
    this.navCtrl.push(SecondPage, {challengeName : challengeType, challengeArray: challengeArray})
      .then(()=>console.log('crunch done'));


  }


}

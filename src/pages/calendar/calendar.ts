import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Slides  } from 'ionic-angular';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  @ViewChild('slides') private slides: Slides;
  challengeDays : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {

  }

  ionViewDidLoad() {
    console.log("nothing");
  }


  slideChanged(){
    //let index = this.slides.getPreviousIndex();
    //let requiredId = this.challengeDays[index].id;
  }

  closeModel(){
    this.viewCtrl.dismiss();
  }

  ionViewWillEnter(){
    this.challengeDays = this.navParams.get("data");
  }
}

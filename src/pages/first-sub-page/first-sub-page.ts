import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SecondSubPagePage } from '../second-sub-page/second-sub-page'
/*
  Generated class for the FirstSubPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-first-sub-page',
  templateUrl: 'first-sub-page.html'
})
export class FirstSubPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstSubPagePage');
  }

  openPage() {
    this.navCtrl.push(SecondSubPagePage);
  }
}

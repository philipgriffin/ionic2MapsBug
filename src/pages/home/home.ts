import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FirstSubPagePage } from '../first-sub-page/first-sub-page'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openPage() {
    this.navCtrl.push(FirstSubPagePage);
  }
}

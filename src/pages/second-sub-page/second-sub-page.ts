import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform  } from 'ionic-angular';
import { GoogleMap, GoogleMapsLatLng } from 'ionic-native';

 
/*
  Generated class for the SecondSubPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-second-sub-page',
  templateUrl: 'second-sub-page.html'
})
export class SecondSubPagePage {
  @ViewChild('map') mapElement;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {

      platform.ready().then(() => {
          this.loadMap();
      });
  }

  loadMap(){
       let location = new GoogleMapsLatLng(53.348963, -6.260284);

       this.map = new GoogleMap('map', {
         'backgroundColor': 'white',
         'controls': {
           'compass': true,
           'myLocationButton': true,
           'indoorPicker': true,
           'zoom': true
         },
         'gestures': {
           'scroll': true,
           'tilt': true,
           'rotate': true,
           'zoom': true
         },
         'camera': {
           'latLng': location,
           'tilt': 30,
           'zoom': 7
         }
       });
     }

}

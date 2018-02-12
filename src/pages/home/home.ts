import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpErrorResponse} from "@angular/common/http";
import {MediaProvider} from "../../providers/media/media";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    if (localStorage.getItem('token') !== null) {
      this.mediaProvider.getUserData().subscribe(response => {
        console.log('Welcome ' + response['full_name']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../../app/Interface/user";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = {
    username: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {
  }

  login(){
    this.mediaProvider.login(this.user).subscribe(response => {
      console.log(response['token']);
      localStorage.setItem('token', response['token']);
      this.navCtrl.setRoot(TabsPage);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
      //this.status = error.error.message;
    });
  }

  register() {
    this.mediaProvider.register(this.user).subscribe(response => {
      console.log(response);
      this.login();
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if (localStorage.getItem('token') !== null) {
      this.mediaProvider.getUserData().subscribe(response => {
        this.navCtrl.setRoot(TabsPage);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }
  }

}

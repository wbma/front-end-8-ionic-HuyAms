import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Media} from "../../app/Interface/media";
import {MediaProvider} from "../../providers/media/media";
import {LoginPage} from "../login/login";

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  file: File;
  mediaFile: Media = {
    title: '',
    description: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider: MediaProvider) {
  }

  setFile(evt) {
    console.log(evt.target.files[0]);
    this.file = evt.target.files[0];
  }

  startUpload() {
    const formData = new FormData();
    formData.append('title', this.mediaFile.title);
    formData.append('description', this.mediaFile.description);
    formData.append('file', this.file);
    this.mediaProvider.upload(formData);
    this.navCtrl.setRoot(UploadPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

}

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {NavController} from "ionic-angular";
import {HomePage} from "../../pages/home/home";

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  apiUrl = 'http://media.mw.metropolia.fi/wbma';

  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }

  public login(user) {
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post(this.apiUrl + '/login', user, settings);
  }

  register(user) {
    return this.http.post(this.apiUrl + '/users', user);
  }

  getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token'))
    };
    return this.http.get(this.apiUrl + '/users/user', settings);
  }

  upload(formData) {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token'))
    };

    return this.http.post(this.apiUrl + '/media', formData, settings).subscribe(response => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }
}



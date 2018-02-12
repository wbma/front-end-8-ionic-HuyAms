import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {UploadPage} from "../upload/upload";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = UploadPage;
  tab4Root = AboutPage;
  tab5Root = ContactPage;

  constructor() {

  }
}

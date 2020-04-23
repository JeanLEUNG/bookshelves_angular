import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDYPspkruRTl2WSTR5Sgrj5I-p7IvMwVdE",
      authDomain: "bibliotheque-d375a.firebaseapp.com",
      databaseURL: "https://bibliotheque-d375a.firebaseio.com",
      projectId: "bibliotheque-d375a",
      storageBucket: "bibliotheque-d375a.appspot.com",
      messagingSenderId: "969810712342",
      appId: "1:969810712342:web:873c3adc0009c074a02237"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

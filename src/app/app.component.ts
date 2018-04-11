import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.auth.signInAnonymously().catch((error) => {
      console.log('error', error);
    });
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        console.log(uid, isAnonymous);
        // ...
      } else {
        // User is signed out.
        // ...
        console.log('logout');
      }
    });
  }

}

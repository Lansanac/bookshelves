import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyCSmwfDStdv5FfBMwKL_8yvquqEfPoZmXk",
      authDomain: "bookshelves-2f765.firebaseapp.com",
      databaseURL: "https://bookshelves-2f765.firebaseio.com",
      projectId: "bookshelves-2f765",
      storageBucket: "bookshelves-2f765.appspot.com",
      messagingSenderId: "956303247983",
      appId: "1:956303247983:web:97118d140188ef21f35b9a",
      measurementId: "G-8GFHPDEJV6"
    };
    firebase.initializeApp(firebaseConfig);
  }
}

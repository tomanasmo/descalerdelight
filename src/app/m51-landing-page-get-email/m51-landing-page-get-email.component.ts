import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDziIm6eq26_BJrIl-5rqTj_KTDsgQsAqo",
  authDomain: "ladalt.firebaseapp.com",
  projectId: "ladalt",
  storageBucket: "ladalt.appspot.com",
  messagingSenderId: "57276615570",
  appId: "1:57276615570:web:c595c3ba5789fea71e0f4b",
  measurementId: "G-XRMGBSM939"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore"; 

@Component({
  selector: 'app-m51-landing-page-get-email',
  templateUrl: './m51-landing-page-get-email.component.html',
  styleUrls: ['./m51-landing-page-get-email.component.css']
})
export class M51LandingPageGetEmailComponent {

  async doTest() {

    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

}

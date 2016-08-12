import * as firebase from 'firebase'

// Firebase setup
const config = {
  apiKey: "AIzaSyBvbih18hAFNeR_kptuLck_1iLYbKFTk90",   
  authDomain: "justin-harrison.firebaseapp.com",
  databaseURL: "https://justin-harrison.firebaseio.com",
  storageBucket: "justin-harrison.appspot.com"
}
const firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.database()
export const storage = firebaseApp.storage()


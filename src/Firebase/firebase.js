
import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCm7wS8pvLIj3jCwCPeOWK53sa06s9QXXM",
  authDomain: "finance-portfolio-tracke-7675f.firebaseapp.com",
  databaseURL: "https://finance-portfolio-tracke-7675f.firebaseio.com",
  projectId: "finance-portfolio-tracke-7675f",
  storageBucket: "finance-portfolio-tracke-7675f.appspot.com",
  messagingSenderId: "784164110300",
  appId: "1:784164110300:web:8895625152290639961919",
  measurementId: "G-SCLP4VEZ9K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  
export default firebase;
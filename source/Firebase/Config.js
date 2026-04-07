
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBupFyxlF9t4X4FJSgT8lW8iRIz5jVTHtk",
  authDomain: "friendsapp-361d3.firebaseapp.com",
  projectId: "friendsapp-361d3",
  storageBucket: "friendsapp-361d3.appspot.com",
  messagingSenderId: "956817360742",
  appId: "1:956817360742:web:1f3ddc0ffacd7a8bdc6aa7",
//   measurementId: "G-TBM49KWYM2"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
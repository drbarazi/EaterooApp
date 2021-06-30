import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDp1xre0wAhlo6p_1VkTSIGyEcXoER1Cm0',
  authDomain: 'eaterooapps.firebaseapp.com',
  databaseURL: 'https://eaterooapps-default-rtdb.firebaseio.com/',
  projectId: 'eaterooapps',
  storageBucket: 'eaterooapps.appspot.com',
  messagingSenderId: '847305464010',
  appId: '1:847305464010:web:b9a4e03d4adaab875d7c33',
  measurementId: 'G-L2QG0J2SCT',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase

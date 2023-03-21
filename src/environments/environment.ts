// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const environment = {
  firebase: {
    projectId: 'acehaven-5b524',
    appId: '1:1091192864091:web:6222acef46eb2db244ae7e',
    storageBucket: 'acehaven-5b524.appspot.com',
    locationId: 'europe-west3',
    apiKey: 'AIzaSyCRR6oyLxr0LHej8Pxol-x_3bjGv3W0SaI',
    authDomain: 'acehaven-5b524.firebaseapp.com',
    messagingSenderId: '1091192864091',
  },
  production : false,
};

// Initialize Firebase
const app = initializeApp(environment.firebase);

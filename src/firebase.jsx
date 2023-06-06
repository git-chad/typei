import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCrIwGN2VVmqg_icNzXzfM6EtyztHV3Tzk",
    authDomain: 'typei-dev.firebaseapp.com',
    projectId:'typei-dev',
    storageBucket: 'typei-dev.appspot.com',
    messagingSenderId: '695451315675',
    appId: '1:695451315675:web:672f1781b1aef4bbfa4bfe'
};

// init app
const initApp = initializeApp(firebaseConfig);

// init firebase auth, refer to server
export const auth = getAuth(initApp);

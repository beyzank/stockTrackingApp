import {getDatabase, ref} from "firebase/database";
import {initializeApp} from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyDrwO5k065Ka1N4e20YDGxdSIlmcQAyFBY",
    authDomain: "idvlabs-stock-tracking-app.firebaseapp.com",
    projectId: "idvlabs-stock-tracking-app",
    storageBucket: "idvlabs-stock-tracking-app.appspot.com",
    messagingSenderId: "421003806366",
    appId: "1:421003806366:web:f108816a2250bf361bdd8f",
    databaseURL: "https://idvlabs-stock-tracking-app-default-rtdb.europe-west1.firebasedatabase.app",
};
initializeApp(firebaseConfig);
export const db = getDatabase();
export const dbRef = ref(db);

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyBykCNho5wiUBgXwBGHomAJJfo2zGMWtF8",
	authDomain: "comfort-depot.firebaseapp.com",
	projectId: "comfort-depot",
	storageBucket: "comfort-depot.appspot.com",
	messagingSenderId: "765736569437",
	appId: "1:765736569437:web:6dea8ff82ef74c96635bb4",
	measurementId: "G-JZV20CCNTG",
};

//if snapshot does not exist, create one. 
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
              displayName, 
              email, 
              createdAt, 
              ...additionalData
          })  
        } catch(error){
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;

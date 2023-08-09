import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, TwitterAuthProvider, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { checkUsername, loginUser, signupUser } from "../api/api-calls";

const firebaseConfig = {
    apiKey: "AIzaSyAV58to_cOEk7P2cKjgZYqBEOdTFec5YB0",
    authDomain: "semantus-firebase.firebaseapp.com",
    projectId: "semantus-firebase",
    storageBucket: "semantus-firebase.appspot.com",
    messagingSenderId: "571100760055",
    appId: "1:571100760055:web:37d8fa6dd00c28e69050f2"
 };

class Firebase {
   constructor() {
      this.app = initializeApp(firebaseConfig);
   }

   async emailSignup(email, username, password){
      const auth = getAuth();

      // if another user is signed in, we first want to sign them out
      if(auth.currentUser){
         await auth.signOut();
      }

      // check if username is still available
      const usernameCheck = (await checkUsername(username)).data.message;

      if(usernameCheck.includes("verfügbar")) {
         await createUserWithEmailAndPassword(auth, email, password);

         const idToken = await auth.currentUser.getIdToken(true)
         const response = await signupUser(idToken, username);
   
         console.log(response)
      }
   }

   async socialSignup(platform, username){
      const auth = getAuth();

      const provider = platform === "twitter" ? new TwitterAuthProvider() : platform === "google" ? new GoogleAuthProvider() : new GithubAuthProvider();

      // if another user is signed in, we first want to sign them out
      if(auth.currentUser){
         await auth.signOut();
      }

      // check if username is still available
      const usernameCheck = await checkUsername(username);

      // only if username is available, we want to sign the user up
      if(usernameCheck.includes("verfügbar")) {
         await signInWithPopup(auth, provider);

         const idToken = await auth.currentUser.getIdToken(true)
         const response = await signupUser(idToken, username);
   
         console.log(response)
      }
   }

   async emailSignin(email, password){
      const auth = getAuth();

      // if another user is signed in, we first want to sign them out
      if(auth.currentUser){
         await auth.signOut();
      }

      await signInWithEmailAndPassword(auth, email, password);

      const idToken = await auth.currentUser.getIdToken(true);
      const response = await loginUser(idToken);

      console.log(response);
   }

   async socialSignin(platform){
      const provider = platform === "twitter" ? new TwitterAuthProvider() : platform === "google" ? new GoogleAuthProvider() : new GithubAuthProvider();
      const auth = getAuth();

      // if another user is signed in, we first want to sign them out
      if(auth.currentUser){
         await auth.signOut();
      }

      await signInWithPopup(auth, provider);

      const idToken = await auth.currentUser.getIdToken(true);
      const response = await loginUser(idToken);
 
      console.log(response);         
   }
}

export default Firebase;

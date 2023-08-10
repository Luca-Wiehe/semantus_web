import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, TwitterAuthProvider, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { checkUsername, getUserData, loginUser, signupUser } from "../api/api-calls";

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

   async logout(){
      console.log("Logging out");
      const auth = getAuth();
      await auth.signOut();
   }

   async getUserData(){
      const auth = getAuth();

      if(auth.currentUser){
         const idToken = await auth.currentUser.getIdToken(true);
         const response = await getUserData(idToken);

         if(response.status === 200) {
            return response.data;
         }else{
            return null;
         }
      }
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
         const idToken = await auth.currentUser.getIdToken(true);
         const response = await signupUser(idToken, username);

         if(response.status === 201) {
            return true;
         }else {
            return false;
         }
      }

      return false;
   }

   async socialSignup(platform, username){
      const auth = getAuth();

      const provider = platform === "twitter" ? new TwitterAuthProvider() : platform === "google" ? new GoogleAuthProvider() : new GithubAuthProvider();

      // if another user is signed in, we first want to sign them out
      if(auth.currentUser){
         await auth.signOut();
      }

      // check if username is still available
      const usernameCheck = (await checkUsername(username)).data.message;

      // only if username is available, we want to sign the user up
      if(usernameCheck.includes("verfügbar")) {
         await signInWithPopup(auth, provider);

         if(auth.currentUser){
            const idToken = await auth.currentUser.getIdToken(true);
            const response = await signupUser(idToken, username);

            if(response.status === 201) {
               return true;
            }else {
               return false;
            }
         }
         
      }

      return false;
   }

   async emailSignin(email, password){
      const auth = getAuth();

      // if another user is signed in, we first want to sign them out
      if(auth.currentUser){
         await auth.signOut();
      }

      await signInWithEmailAndPassword(auth, email, password);

      try{
         if(auth.currentUser){
            const idToken = await auth.currentUser.getIdToken(true);
            const response = await loginUser(idToken);
   
            if(response.status === 200) {
               return true;
            }else {
               return false;
            }
         }
      }catch(error){
         return false;
      }
      
   }

   async socialSignin(platform){
      const provider = platform === "twitter" ? new TwitterAuthProvider() : platform === "google" ? new GoogleAuthProvider() : new GithubAuthProvider();
      const auth = getAuth();

      // if another user is signed in, we first want to sign them out
      if(auth.currentUser){
         await auth.signOut();
      }

      await signInWithPopup(auth, provider);
      
      try{
         if(auth.currentUser){
            const idToken = await auth.currentUser.getIdToken(true);
            const response = await loginUser(idToken);
            
            if(response.status === 200) {
               return true;
            }else {
               return false;
            }
         }
      }catch(error){
         return false;
      }
      
   }
}

export default Firebase;

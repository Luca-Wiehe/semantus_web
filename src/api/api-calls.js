import axios from "axios";

export const checkUsername = async (username) => {
   const response = await axios.get("http://127.0.0.1:8000/check-username/", {
         params: {
            "username": username
         }
      })

   return response;
}

export const loginUser = async (idToken) => {
   const response = await axios.get("http://127.0.0.1:8000/login/", {
      headers: {
         Authorization: `${idToken}`
      }
   });

   return response;
}

export const getUserData = async (idToken) => {
   const response = await axios.get("http://127.0.0.1:8000/login/", {
      headers: {
         Authorization: `${idToken}`
      }
   });

   return response;
}

export const signupUser = async (idToken, username) => {
   const response = await axios.post(
      "http://127.0.0.1:8000/signup/", null, 
      {
         headers: {
            "Authorization": `${idToken}`
         },
         params: {
            "username": username
         }
      });

   return response;
}
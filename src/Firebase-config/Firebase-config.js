// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCWYy-nL6Twu9Yz3PS22bY6AcCWVzv9nWo",
//   authDomain: "chef-recipe-hunter-clien-e539c.firebaseapp.com",
//   projectId: "chef-recipe-hunter-clien-e539c",
//   storageBucket: "chef-recipe-hunter-clien-e539c.appspot.com",
//   messagingSenderId: "409745261641",
//   appId: "1:409745261641:web:8fc7c1d4c6b7423220eb98"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;















// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('environment variable', import.meta.env.VITE_apiKey);

const firebaseConfig = {
apiKey: import.meta.env.VITE_APIKEY,
authDomain: import.meta.env.VITE_AUTHDOMAIN,
projectId: import.meta.env.VITE_PROJECTID,
storageBucket: import.meta.env.VITE_STORAGEBUCKET,
messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
appId: import.meta.env.VITE_APPID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
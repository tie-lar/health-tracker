// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk8oW9HFSIM-pljbWvaSlVxi_QdGw5inc",
  authDomain: "ontrack-file-upload.firebaseapp.com",
  projectId: "ontrack-file-upload",
  storageBucket: "ontrack-file-upload.appspot.com",
  messagingSenderId: "162646742230",
  appId: "1:162646742230:web:b93d96dae728b3c2ebe577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
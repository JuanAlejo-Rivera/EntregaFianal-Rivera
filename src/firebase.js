//Traigo una funcion que me conecta la app de react (codigo del front end) con la plataforma de firebase
import { initializeApp } from "firebase/app";
//Taigo una funcion que me conecta con el servicio de base de datos de firebase
import { getFirestore } from "firebase/firestore"

//Estas son las llaves de acceso 
const firebaseConfig = {
  apiKey: "AIzaSyCmfkLkjB9VST4n4_1YKAznEWOQNs6YkCE",
  authDomain: "cerveceria-sinu.firebaseapp.com",
  projectId: "cerveceria-sinu",
  storageBucket: "cerveceria-sinu.appspot.com",
  messagingSenderId: "813040371911",
  appId: "1:813040371911:web:c350890a2fb394886896e2",
  measurementId: "G-8NQ9B4RGVR"
};

//Esta es una variable que representa "la plataforma" en si
const app = initializeApp(firebaseConfig);

//Esta es una variables que presenta "La pestaña Firestore Database o la base de datos"
export const db = getFirestore(app)
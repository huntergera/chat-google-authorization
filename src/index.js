import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDUBEMzxw4pZLqlAi0oKYLaJuQzCch6n3k",
    authDomain: "chat-react-c13db.firebaseapp.com",
    projectId: "chat-react-c13db",
    storageBucket: "chat-react-c13db.appspot.com",
    messagingSenderId: "493031357710",
    appId: "1:493031357710:web:55567ee44143f3e8a3ab5f",
    measurementId: "G-L0LVKV7DPW"
}
const app = initializeApp(firebaseConfig);


export const Context = createContext(null)

const auth = getAuth(app);
const firestore = getFirestore(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        app,
        auth,
        firestore
    }}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
    </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

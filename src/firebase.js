import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAu5znO8wlIzjpfQ10XjKzLxcx7I_evIwY',
  authDomain: 'phone-login-test-4769a.firebaseapp.com',
  projectId: 'phone-login-test-4769a',
  storageBucket: 'phone-login-test-4769a.appspot.com',
  messagingSenderId: '62106832589',
  appId: '1:62106832589:web:c2d0decc9d1c6b1891a384'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

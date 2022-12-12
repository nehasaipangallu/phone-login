import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXrWY7bbePBkza9_PGVOovpfIiYcWZq20',
  authDomain: 'soulipie.firebaseapp.com',
  projectId: 'soulipie',
  storageBucket: 'soulipie.appspot.com',
  messagingSenderId: '201876828788',
  appId: '1:201876828788:web:ff6f7c66e3598aa17f9721'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

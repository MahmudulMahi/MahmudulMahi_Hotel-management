import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
}
// const firebaseConfig = {
//   apiKey: "AIzaSyD3lPLPfj-7MXMiCLEHFM4yW4y-JjDHx2o",
//   authDomain: "hottle-booking.firebaseapp.com",
//   projectId: "hottle-booking",
//   storageBucket: "hottle-booking.appspot.com",
//   messagingSenderId: "477510623135",
//   appId: "1:477510623135:web:f94a0d5231742df322a7aa"
// }

export const app = initializeApp(firebaseConfig)

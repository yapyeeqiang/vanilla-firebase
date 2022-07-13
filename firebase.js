import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAk71UDty8hTaYdU4jE3EnjjDpgENwx-6E',
    authDomain: 'vanilla-ac567.firebaseapp.com',
    projectId: 'vanilla-ac567',
    storageBucket: 'vanilla-ac567.appspot.com',
    messagingSenderId: '585617655885',
    appId: '1:585617655885:web:40fbed66a71f5fd1593404',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

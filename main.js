import './style.css'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

const todosSnapshot = await getDocs(collection(db, 'todos'))

todosSnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data())
})

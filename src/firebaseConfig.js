import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBvzxMZCb2ICHqFBTbXMtLcyHTmhD-Vg68",
    authDomain: "gjfurniturejpr.firebaseapp.com",
    databaseURL: "https://gjfurniturejpr.firebaseio.com",
    projectId: "gjfurniturejpr",
    storageBucket: "gjfurniturejpr.appspot.com",
    messagingSenderId: "882974853907",
};

firebase.initializeApp(config)
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')
export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
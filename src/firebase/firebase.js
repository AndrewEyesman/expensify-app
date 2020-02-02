import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//     description: 'asiudhfaiuhef',
//     note: 'ass juice',
//     amount: 6000,
//     createdAt: 1488
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
// })

// setTimeout(() => {
//     database.ref('expenses').push({
//         description: 'asiudhfaiuhef',
//         note: 'ass juice',
//         amount: 6000,
//         createdAt: 1488
//     })
// }, 3000)

// database.ref('notes/-LznnE-870GbThScdo7F').remove()

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// setTimeout(() => {
//     database.ref('age').set(28)
// }, 3500)

// setTimeout(() => {
//     database.ref().off('value')
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: 'Andrew',
//     age: '25',
//     isSingle: true,
//     stressLevel: 100000,
//     job: {
//         title: 'software developer',
//         company: 'google'
//     },
//     location: {
//         city: 'NY',
//         zip: 14580
//     }
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((e) => {
//     console.log(e)
// })

// database.ref('isSingle').set(null)

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'seattle'
// })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed')
//     }).catch((e) => {
//         console.log(e)
//     })
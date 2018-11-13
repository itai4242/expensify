import * as firebase from 'firebase';

  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database()

  export {firebase, database as default};

//   database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   })
//   database.ref('expenses').on('child_removed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   })
//   database.ref('expenses').on('child_added',(snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   })


//   database.ref('expenses').on('value',(snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   })
//   database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })

//   database.ref('expenses').push({
//     description : 'Credit Card',
//     note: 'high expense',
//     amount: 4500,
//     createdAt: -7000
//   })

//   database.ref().set({
//     name: 'Itai',
//     age: 29,
//     stresslevel: 6,
//     job: {
//       title: 'software developer',
//       company: 'google'
//     },
//     isSingle: true,
//     location: {
//         city:'gavash',
//         countrey: 'israel'
//     }
// })
// // database.ref('age').set(30);
// // database.ref('location/city').set('ramat-gan')

// database.ref('attribute').set({
//     height: 1.83,
//     weight: 100
// }).then (() => {
//     console.log('got update with new data')
// }). catch((e) => {
//     console.log('you made this mistake', e)
// database.ref('isSingle').remove().then(()=>{
//   console.log('data remove')
// }).catch((e)=>{
//   console.log('didnt remove', e);
// })
// database.ref().on('value', (snapshot) =>{
//   const val = snapshot.val();
//   console.log(`${val.name} is ${val.job.title} in ${val.job.company}`)
// })
// database.ref().update({
//   stresslevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'haifa'
// })
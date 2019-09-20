const firebaseconfig = require('../config/firebaseconfig')

import * as firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp(firebaseconfig);

const db = firebase.firestore()

export default db

import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as firebase from 'firebase';
const app = express();

firebase.initializeApp({
  apiKey: "AIzaSyDZ0_cPKIN1LWlKHbFRSjEqH7MNYSOxVz8",
  authDomain: "cube-quwe.firebaseapp.com",
  databaseURL: "https://cube-quwe.firebaseio.com",
  projectId: "cube-quwe",
  storageBucket: "cube-quwe.appspot.com",
  messagingSenderId: "1052131879923"
});

// Routes
import apiRoute from './routes/api';

const messageOfTheDay = 'Dont do drugs, kids!';

// Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

// Routes
app.use('/api', apiRoute);

// Angular connection
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});

// Host the app
app.listen(3000, () => {
  console.log('Listening on port http://localhost:3000/');
});
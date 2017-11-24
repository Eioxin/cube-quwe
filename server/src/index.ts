import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
const app = express();

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
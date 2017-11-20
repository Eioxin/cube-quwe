import * as express from 'express';
import * as path from 'path';
const app = express();

const messageOfTheDay = 'Dont do drugs, kids!';

// Make Angular files public
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/api/test', (req, res) => {
  res.json({ msg: messageOfTheDay });
});

// For Angular routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Host the app
app.listen(3000, () => {
  console.log('oimfeiomfieo');
});
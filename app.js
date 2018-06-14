const userDB = {
  1: {
    id: 1,
    username: "Joel",
    password: "ukulele1",
    surprise: "cookies"
  }, 
  2: {
    id: 2,
    username: "KV",
    password: "1234",
    surprise: "donuts"
  }, 
  3: {
    id: 3,
    username: "Don",
    password: "1111",
    surprise: "parakeet"
  }
}

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const userID = req.cookies.userID;
  res.render('index', {user: userDB[userID]});
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  let loggedInUser = null;
  for (userID in userDB) {
    const user = userDB[userID];
    if (user.username === username && user.password === password) {
      loggedInUser = user;
      break;
    }
  }

  if (!loggedInUser) {
    res.send("🤷‍♀️");
    return;
  }

  res.cookie('userID', loggedInUser.id);

  res.redirect('/');
});

app.listen(9000, () => console.log("😎"));

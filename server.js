const express = require('express');
const exphbs = require('express-handlebars').engine;
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();


app.engine('hbs', exphbs({
     extname: 'hbs', 
     defaultLayout: 'main', 
     layoutsDir: path.join(__dirname, 'views/layouts') 
    }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page', message: 'My first Node.js Express HBS app' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login Page' });
});

app.get('/404', (req, res) => {
   res.render('404', { title: '404' });
 });

 app.get('/reg', (req, res) => {
   res.render('reg', { title: 'reg' });
 });

 app.post('/reg', (req, res) => { 
   const { username, password, email, birthdate, photo } = req.body; 
   if (username && password && email) { 
       console.log(`User registered successfully! Username: ${username}`);
       return res.redirect('/');
   }
   else { 
       return res.status(400).send('Registration failed. Missing required fields.'); 
   }
});

 app.use((req, res, next) => {
   res.status(404).render('404', { title: '404 - Page Not Found' });
 });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const sequelize = require('./config/db.config');


sequelize.sync() 
  .then(() => { 
    console.log('Database & tables created!'); 
  }) 
  .catch((err) => { 
    console.error('Error creating database:', err); 
  });
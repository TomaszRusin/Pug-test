
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', (req, res ,next) => {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
})

app.get('/', (req, res, next) => {
    res.render('home-page');
})

app.get('/auth/google', (req, res, next) => {
    res.render('logged', {
        user: {
            first_name: req.query.first_name,
            last_name: req.query.last_name
        }
    });
})

app.listen(3000);

app.use((req, res, next) => {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
})
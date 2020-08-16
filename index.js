const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const bodyParser = require('body-parser'); 
const keys = require('./config/keys');

require('./models/User'); //this needs to be first because this will execute
require('./services/passport'); //then the passport which uses the schema will work

mongoose.connect(keys.MONGO_URI);


const app = express();

app.use(bodyParser.json()); //express will not parse incoming request body that's why we need this. This will parse the body and add this to the req.body object

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 days expiration
        keys: [keys.COOKIE_KEY]
    })
);

app.use(passport.initialize());
app.use(passport.session());

//is the same as const authRoutes = require('./routes/authRoutes');
//authRoutes(app);
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
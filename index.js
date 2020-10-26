const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User'); //this needs to be first because this will execute
require('./models/Driver'); //this needs to be second because this will execute
require('./services/passport'); //then the passport, which is used in the users schema -> will work

// mongoose.connect(keys.MONGO_URI);
mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true });

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
require('./routes/driverRoutes')(app);

//this is code for production only
if (process.env.NODE_ENV === 'production') {
    //make sure that express will serve up production assets files (like main.js or main.css files)
    app.use(express.static('client/build')); //if there is a request first match up to see if any files match up with the incoming request. This must always be first
    //if the request matchs with the files in the above express will answer it with the files in the above. 


    //make sure that exoress will serve up the index.html if express does not recognize the route
    const path = require('path');
    //this line says, if the request is not in the express routes handlers, no files in our client then provide the index.html file.
    //this is the catch all for all requests
    app.get('*', (req, res) => { 
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
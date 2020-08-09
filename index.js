const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID, //variable is located in ./config/keys
    clientSecret: keys.GOOGLE_CLIENT_SECRET, //variable is located in ./config/keys
    callbackURL: "/auth/google/callback"
},
    (accessToken) => {
        console.log(accessToken)
    }

    // function (accessToken, refreshToken, profile, cb) {
    //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //         return cb(err, user);
    //     });
    // }
));

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     function (req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('/');
//     });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
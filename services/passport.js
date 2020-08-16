
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const KakaoStrategy = require('passport-kakao').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.GOOGLE_CLIENT_ID, //variable is located in ./config/keys
        clientSecret: keys.GOOGLE_CLIENT_SECRET, //variable is located in ./config/keys
        callbackURL: "/auth/google/callback",
        proxy: true
    },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ userProfileId: profile.id })

            //if the User collection has a record w/ googleId that exists, do not save
            if (existingUser) {
                //done is a method from passport that lets the auth case know that it is finished
                done(null, existingUser);
            } else {
                //create a new user and save to database
                //create a new model instance
                const userNew = await new User({ userProfileId: profile.id }).save();
                done(null, userNew);
            }
        }
    ));

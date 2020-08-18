
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
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
            const existingUser = await User.findOne({ userProfileId: profile.id, method: 'google' })

            //if the User collection has a record w/ googleId that exists, do not save
            if (existingUser) {
                //done is a method from passport that lets the auth case know that it is finished
                done(null, existingUser);
            } else {
                //create a new user and save to database
                //create a new model instance
                const userNew = await new User({ userProfileId: profile.id, method: 'google' }).save();
                done(null, userNew);
            }
        }
    ));

passport.use(
    new KakaoStrategy({
        clientID: keys.KAKAO_KEY,
        callbackURL: "/auth/kakao/callback",
    }, async (token, tokenSecret, profile, done) => {
        const existingUser = await User.findOne({ userProfileId: profile.id })

        //if the User collection has a record w/ kakao that exists, do not save
        if (existingUser) {
            //done is a method from passport that lets the auth case know that it is finished
            done(null, existingUser);
        } else {
            //create a new user and save to database
            //create a new model instance
            const userNew = await new User({ userProfileId: profile.id, method: 'kakao' }).save();
            done(null, userNew);
        }
    }));


passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK_CLIENT_ID,
    clientSecret: keys.FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback"
}, async (token, tokenSecret, profile, done) => {

    const existingUser = await User.findOne({ userProfileId: profile.id })

    //if the User collection has a record w/ facebook that exists, do not save
    if (existingUser) {
        //done is a method from passport that lets the auth case know that it is finished
        done(null, existingUser);
    } else {
        //create a new user and save to database
        //create a new model instance
        const userNew = await new User({ userProfileId: profile.id, method: 'facebook' }).save();
        done(null, userNew);
    }
}));
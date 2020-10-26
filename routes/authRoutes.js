const passport = require('passport');

const keys = require('../config/keys');

module.exports = (app) => {

    // app.get('/', (req, res) => {
    //     res.send({ bye: 'buddy' });
    // });

    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => { // Successful authentication, redirect home.
            res.redirect('/');
        }
    );

    app.get('/auth/kakao', passport.authenticate('kakao'));


    app.get(
        '/auth/kakao/callback',
        function (req, res, next) {
            passport.authenticate('kakao', function (err, user) {
                if (!user) { return res.redirect(`${keys.URL_LOCATION}/login`); }
                req.logIn(user, function (err) {
                    return res.redirect(`${keys.URL_LOCATION}/`);
                });
            })(req, res);
        }
    );


    app.get('/auth/facebook', passport.authenticate('facebook'));

    // http://localhost:5000/auth/facebook
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect(`${keys.URL_LOCATION}/`);
        });



    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user); //the reference to the current user model is req.user  (setup by passport);
    });

}

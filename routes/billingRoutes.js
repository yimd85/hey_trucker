const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIPE_SECRET_KEY);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {


    app.post('/api/stripe', requireLogin, async (req, res) => { 
        //one of the functions has to process the route. that's why require login (which is hte middle ware is where it is) and the last argument is where it is
        
        const createCustomer = await stripe.customers.create({
            description: req.user.userProfileId, //assign the description to the id of the user
            email: req.body.email,
            source: req.body.id //this is the tokenized credit card that gets saved to the customers
        });

        const createSubscription = await stripe.subscriptions.create({
            customer: createCustomer.id,
            items: [
                { price: 'price_1HGHCcH7nqNOblXD4o9Z1eP6' },
            ],
        });
        //the reference to the current user model is req.user  (setup by passport);
        req.user.subscription = true;
        const user = await req.user.save(); //to save the user model add the method .save();


        res.send(user);

    });

}

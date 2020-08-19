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

        req.user.customerId = createCustomer.id;
        req.user.subscriptionId = createSubscription.id;
        const user = await req.user.save(); //to save the user model add the method .save();


        res.send(user);

    });



    app.put('/api/stripe', requireLogin, async (req, res) => {
        await stripe.customers.update(
            req.user.customerId, //from the user table the customer id 
            {
                email: req.body.email,
                source: req.body.id
            } //this is the tokenized credit card that gets saved to the customers
        );

        res.send(req.user);
    });



    app.delete('/api/stripe', requireLogin, async (req, res) => {
        await stripe.subscriptions.del(
            req.user.subscriptionId
        );

        req.user.subscriptionId = '';
        const user = await req.user.save();


        res.send(user);
    });





    app.get('/api/stripeRenew', requireLogin, async (req, res) => {


        const createSubscription = await stripe.subscriptions.create({
            customer: req.user.customerId,
            items: [
                { price: 'price_1HGHCcH7nqNOblXD4o9Z1eP6' },
            ],
        });
        //the reference to the current user model is req.user  (setup by passport);

        req.user.subscriptionId = createSubscription.id;
        const user = await req.user.save(); //to save the user model add the method .save();

        res.send(user);

    });




    app.get('/api/stripeCustomer', requireLogin, async (req, res) => {
        const subscription = await stripe.subscriptions.retrieve(
            req.user.subscriptionId
        );

        const customer = await stripe.customers.retrieve(req.user.customerId);

        res.send({ 
            subscriptionEnd: subscription.current_period_end, 
            customerBrand: customer.sources.data[0].brand, 
            last4: customer.sources.data[0].last4,
        });

    });


}

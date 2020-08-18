const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const Driver = mongoose.model('drivers');

module.exports = app => {


    app.get('/api/driver', requireLogin, async (req, res) => {
        const blogs = await Driver.find({ _user: req.user.id });

        res.send(blogs);
    });


    app.post('/api/driver', requireLogin, async (req, res) => {
        //one of the functions has to process the route. that's why require login (which is hte middle ware is where it is) and the last argument is where it is


        const {
            addressOne,
            addressTwo,
            city,
            country,
            email,
            firstName,
            lastName,
            phone,
            state,
            zip,
            trailerType,
            driversLicense,
            licensePlate
        } = req.body;

        const driver = new Driver({
            _user: req.user.id,
            addressOne,
            addressTwo,
            city,
            country,
            email,
            firstName,
            lastName,
            phone,
            state,
            zip,
            trailerType,
            driversLicense,
            licensePlate
        });
        console.log(driver);

        try {
            await driver.save();
            res.send(driver);
        } catch (err) {
            res.status(422).send(err);
        }

    });

    app.put('/api/driver', requireLogin, async (req, res) => {
        const blogs = await Driver.findByIdAndUpdate(
            '5f39671db542c02558f9849b',
            {
                _user: req.user.id,
                firstName: 'test2',
                lastName: 't2est2',
                email: 't2est2',
                phone: 't2est2',
                address: 't2est2',
                addressTwo: 't2est2',
                city: 't2est2',
                state: 't2est2',
                zip: 't2est2',
                country: 't2est2',
                country: 't2est2',
                trailerType: 't2est2',
                driversLicense: 't2est2',
                licensePlate: 't2est2',
            },
            (err, result) => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send(result)
                }

            }
        );

    });


}

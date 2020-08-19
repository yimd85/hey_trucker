const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const Driver = mongoose.model('drivers');

module.exports = app => {


    app.get('/api/driver', requireLogin, async (req, res) => {
        const driver = await Driver.find({ _user: req.user.id });
        res.send(driver);
    });


    app.post('/api/driver', requireLogin, async (req, res) => {
        //one of the functions has to process the route. that's why require login (which is hte middle ware is where it is) and the last argument is where it is
        const driver = new Driver({
            _user: req.user.id,
            address: req.body.address,
            addressTwo: req.body.addressTwo,
            city: req.body.city,
            country: req.body.country,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            state: req.body.state,
            zip: req.body.zip,
            trailerType: req.body.trailerType,
            driversLicense: req.body.driversLicense,
            licensePlate: req.body.licensePlate
        });
        try {
            await driver.save();
            res.send(driver);
        } catch (err) {
            res.status(422).send(err);
        }

    });

    app.put('/api/driver', requireLogin, async (req, res) => {
        try {
            await Driver.findOneAndUpdate(
                { _user: req.user.id },
                {
                    _user: req.user.id,
                    address: req.body.address,
                    addressTwo: req.body.addressTwo,
                    city: req.body.city,
                    country: req.body.country,
                    email: req.body.email,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    phone: req.body.phone,
                    state: req.body.state,
                    zip: req.body.zip,
                    trailerType: req.body.trailerType,
                    driversLicense: req.body.driversLicense,
                    licensePlate: req.body.licensePlate
                });
            const driver = await Driver.find({ _user: req.user.id });
            res.send(driver);
        } catch (err) {
            res.status(422).send(err);
        }
    });
}

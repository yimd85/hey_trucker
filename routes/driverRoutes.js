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
        const driver = new Driver({
            _user: req.user.id,
            firstName: 'test',
            lastName: 'test',
            email: 'test',
            phone: 'test',
            address: 'test',
            addressTwo: 'test',
            city: 'test',
            state: 'test',
            zip: 'test',
            country: 'test',
            country: 'test',
            trailerType: 'test',
            driversLicense: 'test',
            licensePlate: 'test',
        });

        try {
            await driver.save();
            res.send(req.user);
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

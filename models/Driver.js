const mongoose = require('mongoose');
const { Schema } = mongoose;

const driverSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    addressTwo: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    trailerType: String,
    driversLicense: String,
    licensePlate: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
});


mongoose.model('drivers', driverSchema);//this creates a collection called drivers with schema driverSchema



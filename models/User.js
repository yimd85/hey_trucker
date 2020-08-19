const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userProfileId: String, //oauth services ID
    subscriptionId: { type: String, default: '' }, //stripe subscription
    customerId: { type: String, default: '' }, //stripe customer
    method: String, //oauth strategy
});


mongoose.model('users', userSchema);//this creates a collection called users with schema userSchema



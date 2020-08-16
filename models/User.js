const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userProfileId: String,
    subscription: { type: Boolean, default: false }
});


mongoose.model('users', userSchema);//this creates a collection called users with schema userSchema



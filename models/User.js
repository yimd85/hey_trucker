const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
});


mongoose.model('users', userSchema);//this creates a collection called users with schema userSchema



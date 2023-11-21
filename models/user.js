const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Determines how much processing time it will take to perform the hash
const SALT_ROUNDS = 6 // 6 is a reasonable value

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true, // trim spaces before and after hte string before saving
        lowercase: true, // converts the string to lowercase before saving
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

// Mongoose pre-save hook (Mongoose middleware) that will hash the password when it has changed
userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
  });

module.exports = mongoose.model('User', userSchema);
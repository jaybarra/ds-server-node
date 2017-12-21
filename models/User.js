// models/user.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String
    }
});

// methods ====================================================================
/**
 *
 * @param password
 * @returns {string|string}
 */
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

/**
 *
 * @param password
 * @returns {boolean}
 */
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("User", userSchema);
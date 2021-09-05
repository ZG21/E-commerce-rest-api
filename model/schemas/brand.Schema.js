/**Packages */

const mongoose = require("mongoose");

/** Schema creation */
const brandSchema = new mongoose.Schema({
    idBrand: {
        type: "String",
        required: true,
        unique: true
    },
    name: {
        type: "String",
        required: true,
    }
});
/** Schema exportation */
module.exports = brandSchema;

/**Packages */

const mongoose = require("mongoose");

/** Schema creation */
const categorySchema = new mongoose.Schema({
    idCategory: {
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
module.exports = categorySchema;

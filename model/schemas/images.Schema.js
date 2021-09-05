/**Packages */

const mongoose = require("mongoose");

/** Schema creation */
const imageSchema = new mongoose.Schema({
    idImages: {
        type: "String",
        required: true,
        unique: true
    },
    name: {
        type: "String",
        required: true,
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_product",
        required: true,
    }

});
/** Schema exportation */
module.exports = imageSchema;

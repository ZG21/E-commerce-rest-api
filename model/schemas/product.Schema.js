/**Packages */

const mongoose = require("mongoose");

/** Schema creation */
const productSchema = new mongoose.Schema({
    idProduct: {
        type: "Number",
        required: true
    },
    name: {
        type: "String",
        required: true,
    },
    price: {
        type: "Number",
        required: true
    },
    existence: {
        type: "Boolean",
        required: true,
    },
    calification: {
        type: "String",
        required: true,
    },
    discount: {
        type: "Number",
        required: true
    }
    /**brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_brand"
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_category"
    } */
});
/** Schema exportation */
module.exports = productSchema;

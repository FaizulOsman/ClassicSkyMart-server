"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const VariationSchema = new mongoose_1.Schema({
    color: { type: String },
    size: { type: String },
});
const ProductSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    variation: { type: VariationSchema, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Product = (0, mongoose_1.model)('Product', ProductSchema);

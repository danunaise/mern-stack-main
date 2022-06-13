const mongoose = require('mongoose');

//กำหนดชนิดของตัวแปร บันทึกลงฐานข้อมูล
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },description: {
        type: String,
        required: true
    },author: {
        type: String,
        default: 'anonymous'
    },slug: {
        type: String,
        lowercase: true,
        unique: true
    }
},{timestamps: true});

module.exports = mongoose.model('Blogs', blogSchema);

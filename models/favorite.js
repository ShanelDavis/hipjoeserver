const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    menus: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }]
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite; 
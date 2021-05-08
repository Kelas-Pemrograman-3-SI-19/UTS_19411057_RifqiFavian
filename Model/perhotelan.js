const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const perhotelanSchema = new Schema({

    namahotel: {
        type : String
    },

    lokasihotel: {
        type : String
    },

    deskripsihotel:{
        type : String
    },

    fasilitashotel:{
        type : String
    },

    ketersediaankamar:{
        type : String
    },

    biayakamar: {
        type : String
    }
})

module.exports = mongoose.model('perhotelan', perhotelanSchema)
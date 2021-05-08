const perhotelanModel = require ('../model/perhotelan')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        perhotelanModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Memesan Hotel '
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Memesan Hotel'
            }))
    
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        perhotelanModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
    })

exports.getById = (id) =>
    new Promise((resolve, reject) => {
        perhotelanModel.findOne({
            _id: objectId(id),
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })
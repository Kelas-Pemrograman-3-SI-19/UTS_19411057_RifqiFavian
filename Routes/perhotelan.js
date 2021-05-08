const router = require('express').Router()
const perhotelanController = require('../controller/perhotelan')

router.post('/insert', (req, res) => {
    perhotelanController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getall', (req, res) => {
    perhotelanController.getAll(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res) => {
    perhotelanController.getById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

module.exports = router
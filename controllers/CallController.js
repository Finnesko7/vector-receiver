const Call = require('../models/Call');
const {validationResult} = require('express-validator/check');

exports.store = async (req, res) => {
    let status = 201;
    let result = {};
    validate(req, res);

        try {
            const call = await Call.create({
                id: req.body.token,
                phoneFrom: req.body.from_phone,
                phoneTo: req.body.who_raised,
                recordLink: req.body.record_link
            });

            result = call.toJSON();
        } catch (err) {
            console.log(err);
            status = 500;
        }

    res.status(status).json(result)
}

exports.getSingle = async (req, res) => {
    const call = await Call.findByPk(req.params.id);
    res.json(call.toJSON())
}

exports.getAll = async (req, res) => {
    const calls = await Call.findAll();
    res.json(calls)
}

exports.update = async (req, res) => {
    const call = await Call.findByPk(req.params.id);
    call.processed = req.body.processed;
    await call.save();

    res.status(204).send();
}

const validate = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(500).json(errors)
    }
}
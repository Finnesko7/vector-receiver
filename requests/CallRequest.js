const {body} = require('express-validator')

exports.validate = (action) => {
    switch (action) {
        case 'store': {
            return [
                body('token').exists().isString(),
                body('from_phone').exists().isString(),
                body('who_raised').exists().isString(),
                body('record_link').exists().isString(),
            ]
        }
    }
}
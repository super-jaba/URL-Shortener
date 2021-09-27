const ApiError = require('../exceptions/api-error');


module.exports = function(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({
            message: err.message,
            errors: err.errors
        });
    }
    
    // If error is unexpected
    console.log(err);
    return res.status(500).json({
        message: 'An unexpected error occured.'
    });
}
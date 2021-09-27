const validUrl = require('valid-url');

const ApiError = require('../exceptions/api-error');
const urlService = require("../services/url-service");


class ShortenerController {

    async home(req, res, next) {
        try {
            return res.json({
                message: 'Hello, Profi.ru!'
            });
        } catch(err) {
            next(err);
        }
    }

    async new(req, res, next) {
        try {
            const urlToShort = req.body.url;
            const urlCustomName = req.body.custom;

            if (!validUrl.isUri(urlToShort)) {
                throw ApiError.BadRequest('Specified URL is not correct.');
            }

            const returnedData =  await urlService.getShortUrl(urlToShort, urlCustomName);

            return res.status(200).json({
                url: returnedData
            });
        } catch(err) {
            next(err);
        }
    }

    async redirect(req, res, next) {
        try {
            const url = req.params.url;

            const fullUrl = await urlService.getFullUrl(url);

            return res.redirect(fullUrl);
        } catch(err) {
            next(err);
        }
    }

}


module.exports = new ShortenerController();
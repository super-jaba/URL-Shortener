const shortid = require('shortid');

const urlModel = require('../models/url-model');
const ApiError = require('../exceptions/api-error');
const protocol = require('../config').PROTOCOL;
const domain = require('../config').DOMAIN;
const port = require('../config').PORT;


class UrlService {

    async getShortUrl(fromUrl, toUrl) {
        if (!toUrl) {
            // Generate new random url
            const shortUrl = shortid.generate();
            const urlDocument = await urlModel.create({ fromUrl, shortUrl });
            return `${protocol}://${domain}/${urlDocument.shortUrl}`;
        } else {
            // Generate custom url
            const candidate = await urlModel.findOne({ shortUrl: toUrl });
            if (candidate) {
                throw ApiError.BadRequest('This short URL is already taken. Try another.');
            }

            const urlDocument = await urlModel.create({ fromUrl, shortUrl: toUrl });

            return `${protocol}://${domain}/${urlDocument.shortUrl}`;
        }
    }

    async getFullUrl(shortUrl) {
        const candidate = await urlModel.findOne({ shortUrl: shortUrl });
        if (!candidate) {
            throw ApiError.BadRequest('URL not found.');
        }

        return candidate.fromUrl;
    }

}


module.exports = new UrlService();
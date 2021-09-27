const express = require('express');

const ShortenerController = require('../controllers/shortener-controller');


const router = express.Router();

router.get('/', ShortenerController.home);
router.post('/new', ShortenerController.new);
router.get('/:url', ShortenerController.redirect);

module.exports = router;
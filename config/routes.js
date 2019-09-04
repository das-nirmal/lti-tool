const router = require('express').Router();
const ltiController = require('../controllers/lti-controller');

// lti endpoint for validation of lti launch request
router.post('/lti', ltiController.validateLaunch);

router.get('/', (req, res) => res.render('index.ejs'));

module.exports = router;
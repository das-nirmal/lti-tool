const router = require('express').Router();
const ltiController = require('../app/controllers/lti-controller');

// lti endpoint for validation of lti launch request
router.post('/lti', ltiController.validateLaunch);

router.get('/', (req, res) => res.render('index.ejs'));

router.get('/app', (req, res) => res.render('app.ejs'));

module.exports = router;
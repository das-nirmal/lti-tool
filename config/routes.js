const router = require('express').Router();
const ltiController = require('../app/controllers/lti-controller');

// lti endpoint for validation of lti launch request
router.post('/lti', ltiController.validateLaunch);

module.exports = router;
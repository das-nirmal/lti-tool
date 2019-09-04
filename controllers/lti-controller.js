const lti = require('ims-lti');
const querystring = require('querystring');

const config = require('../config/app-config');

function validateLaunch(req, res) {
    
    // todo: validate minimum # of body parameters ?

    const consumerKey = req.body.oauth_consumer_key;
    const secret = config.consumerStore[consumerKey];

    console.log(JSON.stringify(req.body, null, 4));

    if (!secret) {
        return res.status(400).send('Error! LTI launch - Consumer not registered.');
    }
    
    const provider = new lti.Provider(consumerKey, secret);

    // validate request using ims-lti module
    provider.valid_request(req, (err, isValid) => {

        if (!isValid) {
            // redirect to error page with err obj
            return res.status(401).send(`Error! LTI launch - validation failed with following error:
${JSON.stringify(err, null, 4)}`);
        }

        // redirect to success route
        return res.redirect('/app?' + querystring.stringify(req.body));
    });
}

module.exports = {
    validateLaunch
};
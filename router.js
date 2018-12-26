var router = require('express').Router();

router.use('/v1/auth', require('./webserver/api/v1/Login/Login.router'));
router.use('/v2/auth', require('./webserver/api/v2/Login/Login.router'));
// router.use('/auth/register', require('./webserver/api/v1/Login/Login.router'));

exports = module.exports = router;
const express = require('express');
const router  = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/private", ensureLoggedIn('/auth/login'), (req, res) => {

  let user = req.user.username
   res.render('private/index',{user})
  });


module.exports = router;

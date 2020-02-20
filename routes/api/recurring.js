const express = require('express');
const router = express.Router();
const recurringController = require('../../controllers/recurringController');

function isAuth(req, res, next) {
  if(req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

router.use(require('../../config/auth'));
router.get('/getRecurring', isAuth, recurringController.getRecurring);
router.post('/addRecurring', isAuth, recurringController.addRecurring);
router.post('/deleteRecurring', recurringController.deleteRecurring);

module.exports = router;
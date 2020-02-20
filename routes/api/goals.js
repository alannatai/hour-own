const express = require('express');
const router = express.Router();
const goalsController = require('../../controllers/goalsController');

function isAuth(req, res, next) {
  if(req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

router.use(require('../../config/auth'));
router.post('/addGoal', isAuth, goalsController.addGoal);
router.post('/completeDailyGoal', goalsController.completeDailyGoal);
router.post('/deleteGoal', goalsController.deleteGoal);
router.put('/updateGoal', goalsController.updateGoal);

module.exports = router;
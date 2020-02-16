const User = require('../models/user');
const jwt = require('jsonwebtoken');

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch(err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(401).json({ err: 'User not found' })
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if(isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'Incorrect password' })
      }
    });
  } catch(err) {
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

module.exports = {
  signup,
  login
}
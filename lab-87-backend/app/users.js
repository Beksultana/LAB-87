const express = require('express');
const UserSchema = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', (req, res) => {
   const user = new UserSchema(req.body);

    user.generateToken();

   user.save()
       .then(user => res.send(user))
       .catch(error => res.status(400).send(error));
    console.log(user);
});

router.post('/session', auth, async (req, res) => {
   const user = await UserSchema.findOne({username: req.body.username});
    if (!user) {
        return res.status(400).send({error: 'Username not found'});
    }

    const isMatch = await user.checkPassword(req.body.password);
    if (!isMatch) {
        return res.status(400).send({error: 'Password is wrong'})
    }

    user.generateToken();
    await user.save();

    return res.send({message: "Login success", user});
});

module.exports = router;
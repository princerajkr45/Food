const express = require('express')
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator')

router.post('/createuser', 
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 }),
    async(req,res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

     try {
        const { name ,email,password,location } = req.body
       await User.create({
           name: name,
           email: email,
           password: password,
           location: location
        })
        res.status(200).json({message: 'User created successfully', success: true});
     } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error', success: false});
     }
});


module.exports = router;
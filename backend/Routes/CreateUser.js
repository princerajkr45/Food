const express = require('express')
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const jwtSecret = 'Y4V(xVznY(Lc@KMDR$nzJ_Cu(e56kaNn';

const bcrypt = require('bcryptjs');


router.post('/createuser',
   body('email').isEmail(),
   body('name').isLength({ min: 5 }),
   body('password').isLength({ min: 5 }),
   async (req, res) => {

      const { name, email, password, location } = req.body

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      const salt = await bcrypt.genSalt(10);
      let encryptedPassword = await bcrypt.hash(password, salt);
      try {
         await User.create({
            name: name,
            email: email,
            password: encryptedPassword,
            location: location
         })
         res.status(200).json({ message: 'User created successfully', success: true });
      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'Server Error', success: false });
      }
   });


router.post('/loginuser', body('email').isEmail(),
   body('password').isLength({ min: 5 }),
   async (req, res) => {


      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      try {
         const { email ,password} = req.body
         const user = await User.findOne({ email: email })

         if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
         }

         const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials', success: false });  // Wrong password

         }
         const data = {
            user: { id: user.id }
         }
         const authToken = jwt.sign(data,jwtSecret, { expiresIn: '1h' });
         res.status(200).json({ message: 'User logged successfully', success: true ,authToken: authToken });

      } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'Server Error', success: false });
      }
   });

module.exports = router;
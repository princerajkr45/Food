const express = require('express')
const router = express.Router()

router.post('/foodData',(req,res) => {
     try {
        //  console.log(global.foodItems)
         res.status(200).json([global.foodItems])
     } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error fetching food data' })
     }
});

module.exports = router;
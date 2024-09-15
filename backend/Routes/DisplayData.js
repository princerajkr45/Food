const express = require('express')
const router = express.Router()

router.post('/foodData',(req,res) => {
     try {
        //  console.log( global.foodCategories)
         res.status(200).json([global.foodItems, global.foodCategories])
     } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error fetching food data' })
     }
});

module.exports = router;
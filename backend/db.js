const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://priyance5204:TYqjaSnrevfaTfeP@cluster0.ica4z.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

        const fetchedData = mongoose.connection.db.collection('food-items');
        const foodCategory = mongoose.connection.db.collection('foodCategory');

        const data = await fetchedData.find({}).toArray();
        const categoryData = await foodCategory.find({}).toArray();

        global.foodItems = data
        global.foodCategories = categoryData;

        // console.log('Fetched data:', foodItems);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = mongoDB;

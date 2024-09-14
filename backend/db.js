const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://priyance5204:TYqjaSnrevfaTfeP@cluster0.ica4z.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');

        // const fetchedData = mongoose.connection.db.collection('food-items');

        // const data = await fetchedData.find({}).toArray();

        // console.log('Fetched data:', data);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = mongoDB;

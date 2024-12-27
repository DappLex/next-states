import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true)

    if (initialized) {
        console.log('Mongodb already connected')
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'next-estate',
            userNewUrlParser: true,
            useUnifiedTopology: true,
        });
        initialized = true;
        console.log('MongoDB connected');

    } catch (error) {
        console.log('MongoDB connection error', error);
    }
}
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-yr9fzjj-shard-00-00.jxcokft.mongodb.net:27017,ac-yr9fzjj-shard-00-01.jxcokft.mongodb.net:27017,ac-yr9fzjj-shard-00-02.jxcokft.mongodb.net:27017/?ssl=true&replicaSet=atlas-73kx4j-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;


//mongodb+srv://lucifer89240:<password>@stream.ehsaxpq.mongodb.net/?retryWrites=true&w=majority
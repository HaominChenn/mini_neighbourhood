import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

// create an express application
const app = express(); 
dotenv.config();
//set up request
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors());

//use express middleware connect this to our app nav to localhost:5000/posts
app.use('/posts', postRoutes);
//const CONNECTION_URL = "mongodb+srv://haomin:haomin@minineighbourhood.krps8.mongodb.net/miniNeighbourhood?retryWrites=true&w=majority";
const PORT= process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// return a promise, call back function if successfully show log 
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message));
//not make any warning in console
mongoose.set('useFindAndModify', false);
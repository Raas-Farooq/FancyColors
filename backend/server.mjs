import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import developers from './data.mjs';
import getData from './data.mjs';
import fetch from 'node-fetch';

import mongoose from 'mongoose';

const port = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/tabsDb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// .then(() => {
//     console.log("Al - Aali - Runs")
// }).catch(err => console.log("i have seen err", err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
const tabsSchema = new mongoose.Schema({

})

const tabsModel = mongoose.model('tabsModel', tabsSchema)


app.get('/loaded', async(req,res) => {
    try{

        const myData = await getData();
        // const response = await fetch('https://www.course-api.com/react-tabs-project');
        // const myData = await response.json();
        console.log("myData ",myData);
        if(myData){
            res.json(myData);
        }
        else{
            res.json({message:"Not Received Your Tavs"})
        }
       
    }
    catch(err){
        res.status(500).json({err:err.message})
    }
})




app.listen(port, () => console.log(`listening on ${port}`) );


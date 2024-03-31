import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {receiveData} from '../src/data.mjs';

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



let mydata;
mongoose.connect('mongodb://localhost:27017/toursDb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    
    console.log("Mongoose Bro is Connected ");
    
    // console.log("Mongoose Bro is Connected JSON stringify" + JSON.stringify(receiveData)); 

}).catch(err => {
    console.log("check your error: ",err);
});

const toursSchema = new mongoose.Schema({
    id:String,
    name:String,
    info:String,
    image:String,
    price:String
});

const toursModel = mongoose.model('toursModel',toursSchema);


app.get('/load', async(req,res) => {
    try{
        const toursInfo = await toursModel.find({});
        // * if you wanted to load all the data again then you can run the below code
        // await toursModel.deleteMany();
        // const mydata = await receiveData();
        // await toursModel.insertMany(mydata);
        
        // const tours = await toursModel.find({});
        console.log("toursModel:  ", toursInfo);
        if(toursInfo.length === 0){
            console.log("i Am Running");
            toursModel.deleteMany();
            const tours = await receiveData();
            toursModel.insertMany(tours);
            const toursInf = await toursModel.find({});
            res.json(toursInf);
        }
        res.json(toursInfo);
    }
    catch(err){
        (res.status(500).json({err:err.message}))
    }
})

app.get('/loadData', async(req,res) => {
    try{
        
        
        await toursModel.deleteMany({});

        const allTours = await receiveData();
        await toursModel.insertMany(allTours);

        const tours = await toursModel.find({});
        res.json(tours);

    }
    catch(err){
        (res.status(500).json({err:err.message}))
    }
})

app.post('/removeElement', async(req,res) => {
    try{
        const id = req.body.id;
        console.log("id: ", id);
        const tours = await toursModel.find({});
        console.log("Before Deleting: ", tours.length);
        const found = await toursModel.findOne({id});
   
        
        if(found){
            console.log("yews greater than 0");
            
            await toursModel.deleteOne({id});
            const newTours = await toursModel.find({});
            res.json(newTours);
            console.log("After Deleting: ", newTours.length);
        }
    
        res.json(tours);

    }
    catch(err){
        (res.status(500).json({err:err.message}))
    }
})

app.listen(port, () => console.log(`listening on ${port}`) );


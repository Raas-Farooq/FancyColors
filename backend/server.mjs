import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import BirthdayData from '../src/data.mjs';
import BirthdayMod from './models/BirthdayModel.js';
import mongoose from 'mongoose';

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/Birthday',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    
    console.log("Mongoose Bro is Connected " + BirthdayData);
    console.log("Mongoose Bro is Connected " + JSON.stringify(BirthdayData)); 
    
    // BirthdayMod.insertMany(BirthdayData).then(() => console.log("inserted data success")).
    // catch(err => {
    //     console.log('this is the errp ', err);
    // })

}).catch(err => {
    console.log("check your error: ",err);
})

app.get('/start', async (req,res) => {
    try{
        let birthdaymodel = await BirthdayMod.find({});
        if(birthdaymodel.length <= 0){
            console.log("empty");
            await BirthdayMod.insertMany(BirthdayData)
            birthdaymodel = await BirthdayMod.find({});
        }
        // const ids = birthdaymodel.map(birth => birth.id);
        // console.log("ids :", ids);
        // const updated = BirthdayData.filter(person => !ids.includes(person.id))
        // await BirthdayMod.insertMany(updated);
        
        res.json(birthdaymodel);
    }
    catch(err) {
        (res.status(500).json({err:err.message}));
    }
})

app.get('/clear', async (req,res) => {
    try{

        await BirthdayMod.deleteMany({});
        res.json({message: 'Data is cleared Buddy!'});
    }
    catch(err){

    }
})

// app.get('/clear', async (req,res) => {
//     try{
//         const birthdaymodel = await birthdaymodel.find();
//         birthdaymodel = [];
//         await birthdaymodel.save();

//         res.json(birthdaymodel);
//     }
//     catch(err){

//     }
// })
app.listen(port, () => console.log(`listening on ${port}`) );


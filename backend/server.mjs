import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Reviews from '../src/data.mjs';

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
mongoose.connect('mongodb://localhost:27017/reviewsDb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    
    console.log("Mongoose Bro is Connected ");
    
    // console.log("Mongoose Bro is Connected JSON stringify" + JSON.stringify(receiveData)); 

}).catch(err => {
    console.log("check your error: ",err);
});

const reviewsSchema = new mongoose.Schema({
    id:Number,
    name:String,
    job:String,
    image:String,
    text:String
});

const reviewsModel = mongoose.model('reviewsModel',reviewsSchema);


app.get('/load', async(req,res) => {
    try{
        // await reviewsModel.deleteMany({});
        const allPeople = await reviewsModel.find({});
        console.log("AllPeople: outside ", allPeople);
        if(allPeople.length === 0){
            await reviewsModel.insertMany(Reviews);

            const reviews = await reviewsModel.find({});
            console.log("AllReviews inside: ", reviews);
            res.json(reviews)
        }
        else{
            res.json(allPeople)
        }
        
    }catch(err){
        res.status(500).json({err:err.message})
    }
})

app.get('/nextReview', async(req, res) => {
    try{
        let id = req.query.id;
        console.log("id inside nextRevie: ", typeof(id));
        id = parseInt(id);
        const people = await reviewsModel.find({});
        console.log("These are the People in Next: ", typeof(people[0].id));
        const person = people.filter(user => user.id === id);
        console.log('Person: ', person);
        res.json(person);
    }
    catch(err){
        console.log("Be proActive: ", err);
        throw err;
    }
})


app.get('/prevReview', async(req, res) => {
    try{
        let id = req.query.id;
        console.log("typeof id inside prevRevie: ", id);
        id = parseInt(id);
        const people = await reviewsModel.find({});
        const person = people.filter(user => user.id === id);
        res.json(person);
    }
    catch(err){
        console.log("Be proActive: ", err);
        throw err;
    }
})

app.get('/random', async(req, res) => {
    try{
        let id = req.query.id;
        id = parseInt(id);
        const people = await reviewsModel.find({});
        const person = people.filter(user => user.id === id);
        res.json(person);
    }
    catch(err){
        console.log("Be proActive: ", err);
        throw err;
    }
})


app.listen(port, () => console.log(`listening on ${port}`) );

// // app.get('/load', async(req,res) => {
// //     try{
// //         const toursInfo = await toursModel.find({});
       
// //         console.log("toursModel:  ", toursInfo);
// //         if(toursInfo.length === 0){
// //             console.log("i Am Running");
// //             toursModel.deleteMany();
// //             const tours = await receiveData();
// //             toursModel.insertMany(tours);
// //             const toursInf = await toursModel.find({});
// //             res.json(toursInf);
// //         }
// //         res.json(toursInfo);
// //     }
// //     catch(err){
// //         (res.status(500).json({err:err.message}))
// //     }
// // })


// app.get('/loadData', async(req,res) => {
//     try{
        
        
//         await toursModel.deleteMany({});

//         const allTours = await receiveData();
//         await toursModel.insertMany(allTours);

//         const tours = await toursModel.find({});
//         res.json(tours);

//     }
//     catch(err){
//         (res.status(500).json({err:err.message}))
//     }
// })

// app.post('/removeElement', async(req,res) => {
//     try{
//         const id = req.body.id;
//         console.log("id: ", id);
//         const tours = await toursModel.find({});
//         console.log("Before Deleting: ", tours.length);
//         const found = await toursModel.findOne({id});

//         if(found){
//             console.log("yews greater than 0");
            
//             await toursModel.deleteOne({id});
//             const newTours = await toursModel.find({});
//             res.json(newTours);
//             console.log("After Deleting: ", newTours.length);
//         }
//         else{
//             res.json(tours);
//         }
        

//     }
//     catch(err){
//         (res.status(500).json({err:err.message}))
//     }
// })




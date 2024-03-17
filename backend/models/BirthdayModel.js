import mongoose from 'mongoose';

const BirthdaySchema = new mongoose.Schema({
    birthday:{
    id:Number,
    name:String,
    age:String,
    image:Number
    }
});

const BirthdayMod = mongoose.model('BirthdayMod', BirthdaySchema);

// module.exports = BirthdayMod;

export default BirthdayMod;
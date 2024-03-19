import mongoose from 'mongoose';

const BirthdaySchema = new mongoose.Schema({
    id:Number,
    name:String,
    age:String,
    image:String
    
});

const BirthdayMod = mongoose.model('BirthdayMod', BirthdaySchema);

// module.exports = BirthdayMod;

export default BirthdayMod;
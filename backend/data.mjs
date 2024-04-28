// import fetch from 'node-fetch';
import axios from 'axios';
// const fetch = require('node-fetch')


let developers;

const getData = async () => {
    try{
        const res = await axios.get('https://www.course-api.com/react-tabs-project');
        const data = await res.data;
        return data;
        // console.log("Developers: ", developers);
    }
    catch(err){
        console.log("ErrOr in DATA File: ", err)
    }
}


export default getData
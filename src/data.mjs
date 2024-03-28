import axios from 'axios';


// const url = 'https://course-api.com/react-tours-project';
let allData;
const receiveData = async () => {
    try{
        const response = await axios.get('https://course-api.com/react-tours-project');
       
        return response.data;    
    }
    catch(err){
        console.log("Be Conscious about solving Them ", err);
        throw err;
    }

}

export {receiveData};
    

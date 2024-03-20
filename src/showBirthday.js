import React from 'react';


function Birthday({birthdayData}){
    console.log("birthDay under Reveal: ", birthdayData);
    if(!birthdayData){
        
    }
        else {
            return (
                <React.Fragment>
                    {birthdayData.map((bir,ind) => 
              
                        <div className="card" key={ind}>
                            <img src={bir.image} width="60px" />
                            <div>
                                <h5 key={bir.id}>{bir.name}</h5>
                                <h5>{bir.age}</h5>
                            </div>
                            
                            
                        </div>
                    )}
                </React.Fragment>
              )
        }
 
}

export default Birthday
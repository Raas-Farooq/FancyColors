import React from 'react';


function Birthday({birthdayData}){
    console.log("birthDay under Reveal: ", birthdayData);
    if(!birthdayData){
        return (
            <h3> 0 Birthday Remaining </h3>
        )
    }
        else {
            return (
                <React.Fragment>
                    {birthdayData.map((bir,ind) => 
              
                        <div className="card">
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
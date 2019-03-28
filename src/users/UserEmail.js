import React from 'react';

const UserEmail = (props)=>{
  console.log(props);
    return (
    
    <div>
 
     <button onClick={props.changeEmailIdFromChildButton}>Change Email</button>
            </div> 
    )
}

export default UserEmail;
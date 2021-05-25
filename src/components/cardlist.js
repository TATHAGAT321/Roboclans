import React from 'react';
import Roboapp from'./roboapp';

var cards = ({robots})=>{
	return(
	<div>
	{
	    robots.map((user,i)=>{
	    return (
			<Roboapp
			key = {i} 
			id={user.id} 
			name={user.name.first + " " + user.name.last} 
			email={user.email} />
	    )
	    })
    }
    </div>
   );
};

export default cards; 

import React from 'react';

const Scroll = (props)=>{
	return (
        <div style={{overflowY :"scroll", border: "3px solid #357edd" , height : "650px" }}>
        {props.children}
        </div>
	);
};

export default Scroll;
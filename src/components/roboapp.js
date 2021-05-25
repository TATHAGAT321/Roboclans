import React from 'react';
var cards = (props)=>{
	return (
     <div className = "bg-light-green tc dib bw1 pa3 ma3 br2 grow w-20-l" >
     <img alt="I'm a robot" src = {`https://robohash.org/${props.name}?set=set3&size=200x200`} />
     <div className="tc">
     <h4> {props.name} </h4>
     <h5 style={{overflowX: "scroll"}}> {props.email} </h5>
     </div>
     </div>
	);
}
export default cards; 
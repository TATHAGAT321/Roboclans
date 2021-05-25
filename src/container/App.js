import React from 'react';
import Cards from '../components/cardlist.js';
import Searchbox from '../components/searchbox.js';
import Scroll from '../components/scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
class App extends React.Component{ 
   
   constructor() {
   	 super();
     this.state = {
     	robotlist: [],
     	searchtext : ''
     };

   }
   componentDidMount() {
    fetch('https://randomuser.me/api/1.3/?results=50&&nat=ch')
    .then(response => response.json())
    .then(users => { this.setState({robotlist:users.results})});
   }
    
   searchboxst = (event) => {
    this.setState({ searchtext : event.target.value})
   }

	render(){
  const {robotlist,searchtext} = this.state;
	const matchingrobots = robotlist.filter((robotlist) =>{
        const firstName = robotlist.name.first.toLowerCase();
        const lastName  = robotlist.name.last.toLowerCase();
        const searchInput = searchtext.toLowerCase();
      	return ( firstName.includes(searchInput) 
              || lastName.includes(searchInput));
      });
  if(!robotlist.length){
    return <h1 className = 'tc blue'> Loading </h1>; 
  }
  else{ 
	  return(
       <div className="tc pa3 ma3">
        <h1 className="blue"> Roboclans </h1>
         <Searchbox searchstring={this.searchboxst}/>
         <Scroll>
          <ErrorBoundary>
           <Cards robots={matchingrobots}/>
          </ErrorBoundary>
         </Scroll>
       </div>

	    );
    } 
     
  }

} 

export default App;


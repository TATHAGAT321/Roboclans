import React from 'react';

const searchbox = ({searchstring}) => {

	return(
    <input className='br3 pa2 ma3 ba bw1 b--blue tc' type='text' placeholder='searchbox' onChange={searchstring} />
   );

}
export default searchbox;
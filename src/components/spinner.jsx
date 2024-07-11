import React from 'react';
import './spinner.css';
const Spinner = () => 
{
     return(
        <div className='flex flex-col items-center space-y-2'>
             <div class="lds-spinner">
            <div>
                </div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div>
                    
                </div>
        </div>
            <p>Loading...</p>
        </div>
         
     )
}

export default Spinner;
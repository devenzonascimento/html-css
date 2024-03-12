import React from 'react';

const Button = ({executeNextStep}) => {
    return (
        <>
            <button id='step' className='button' onClick={executeNextStep}>STEP</button>
        </>
    );
}
 
export default Button;
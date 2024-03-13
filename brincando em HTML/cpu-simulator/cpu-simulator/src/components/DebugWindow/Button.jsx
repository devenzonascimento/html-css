import React from 'react';

const Button = ({executeNextStep, updateValues}) => {
    return (
        <>
            <button id='step' className='button' onClick={() => {
                executeNextStep()
                updateValues()
                }}>STEP</button>
        </>
    );
}
 
export default Button;
import React from 'react';

import Button from './Button';

const DubugWindow = ({executeNextStep, updateValues}) => {
    return (
        <div className="debug-container">
            <Button updateValues={updateValues} executeNextStep={executeNextStep}/>
        </div>
    );
}

export default DubugWindow;
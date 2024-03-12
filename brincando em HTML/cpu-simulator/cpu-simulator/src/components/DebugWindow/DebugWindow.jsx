import React from 'react';

import Button from './Button';

const DubugWindow = ({executeNextStep}) => {
    return (
        <div className="debug-container">
            <Button executeNextStep={executeNextStep}/>
        </div>
    );
}

export default DubugWindow;
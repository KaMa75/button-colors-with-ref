import React, {forwardRef} from 'react';

function ButtonFwdRef({onClick}, ref) {
    return (
        <div className="buttons-wrapper">
            <button
                ref={ref}
                onClick={onClick}
            >
                Button 3 - fwdRef - click me
            </button>
        </div>
    );
}

const forwardedButton = forwardRef(ButtonFwdRef);

export default forwardedButton;

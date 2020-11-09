import React, {useEffect, useRef} from 'react';

function Button() {
    const button1Ref = useRef();
    const button2Ref = useRef();

    const changeButton = (button) => {
        button.current.style.backgroundColor = 'red';
        button.current.style.color = 'white';
    }

    const handleOnClick = () => {
        changeButton(button2Ref);
    }

    useEffect(() => {
        changeButton(button1Ref);
    });

    return (
        <div className="buttons-wrapper">
            <button
                ref={button1Ref}
            >
                Button 1
            </button>
            <button
                ref={button2Ref}
                onClick={handleOnClick}
            >
                Button 2 - click me!
            </button>
        </div>
    );
}

export default Button;

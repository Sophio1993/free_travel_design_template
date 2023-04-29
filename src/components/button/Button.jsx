import React from "react";

function Button(props) {
    const { children, onClick, text, className } = props;

    return (
        <div onClick={onClick} className={className}>
            {children}
            {text}
        </div>
    );
}

export default Button;

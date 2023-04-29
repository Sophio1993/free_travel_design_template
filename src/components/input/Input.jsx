// import React from "react";

// function Input(props) {
//     const { children, label, icon, placeholder, ...inputProps } = props;

//     return (
//         <div className="input-group">
//             <div className="icon-container">{children}</div>
//             <label>{label}</label>
//             <input
//                 type="text"
//                 placeholder={placeholder}
//                 {...inputProps}
//             ></input>
//         </div>
//     );
// }

// export default Input;

import React from "react";
import "./style.css";

function Input(props) {
    const { label, children, placeholder } = props;

    return (
        // <div className="input-group">
        <div className="input-container">
            <div className="icon-container">{children}</div>
            <div className="label-container">
                <label>{label}</label>
                <span className="placeholder">{placeholder}</span>
            </div>
        </div>
        /* </div> */
    );
}

export default Input;

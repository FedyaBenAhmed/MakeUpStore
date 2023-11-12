import React from "react";
import './SousTitle.css'



const SousTitle = (props: { sousTitle: any; } ) => {
const {sousTitle} = props;
    return (
        <div>
            <h1 className="SousTitle">{sousTitle}</h1>    
        </div>
    );
};

export default SousTitle;
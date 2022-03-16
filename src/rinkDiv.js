import React from "react";

export const RinkDiv = React.forwardRef((props, ref) => (
    <div className="center" ref={ref}>
        {props.children}
    </div>
));
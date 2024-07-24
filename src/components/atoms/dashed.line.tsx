import React from "react";

function DashedLine() {
    return (
        <div className="flex w-1/2 items-center gap-1">
            <div className="h-0.5 w-full bg-brand-500"></div>
            <div className="h-0.5 w-4 bg-brand-500"></div>
        </div>
    );
}

export default DashedLine;

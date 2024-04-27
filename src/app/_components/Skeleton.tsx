import React from 'react';
import {className} from "postcss-selector-parser";

function Skeleton({className}: { className: string }) {
    className += " animate-pulse bg-[var(--pokemon-bg)] rounded"
    return (
        <div role="status" className={className}>
        </div>
    );
}

export default Skeleton;
import React from 'react';
import Skeleton from "@/app/_components/Skeleton";

function DamageRelations({name}: { name: string }) {
    return (
        <p style={{backgroundColor: `var(--type-${name})`}}
           className="text-[var(--background)] w-full capitalize inline text-center rounded mb-1">
            {name}
        </p>
    )
}

export default DamageRelations;
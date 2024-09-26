"use client"
import {usePathname} from "next/navigation";

function PathName({isShort}: { isShort: boolean }) {
    let path: string = usePathname()
    if (isShort) {
        path = `${path.split('/')[2]}`
    }

    let nonLatinDetected: boolean = false;

    if (path.includes('%')) {
        nonLatinDetected = true;
    }

    return (
        <>
            <span className="underline"> {path}</span>
            {nonLatinDetected
                ? <p className="bg-yellow-400 text-[var(--background)] rounded px-4 font-ubuntu">
                    Non-latin characters detected in the text you
                    entered, try again with
                    only latin
                    characters</p>
                : <></>

            }
        </>
    );
}

export default PathName;

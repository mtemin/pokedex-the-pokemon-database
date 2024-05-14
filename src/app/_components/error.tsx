"use client"
import Link from "next/link";

import {usePathname} from "next/navigation";

function Error() {
    const pathName: string = usePathname();
    return (
        <section className="flex justify-center items-center max-[500px]:items-start h-screen w-screen p-[1rem]">
            <main
                className="w-[35vw] h-[25vh] max-sm:w-[80vw] max-sm:h-[30vh] max-md:w-[65vw] max-xl:w-[55vw]  max- bg-rose-500 rounded-2xl flex flex-col justify-center items-center max-sm:items-start max-sm:pl-4 ">
                <p className="text-3xl max-sm: text-[var(--background)] mb-2">Page not found.</p>
                <p className="text-xl text-[var(--background)] italic mb-8">The requested
                    URL &quot; {pathName} &quot; does not
                    exist.</p>
                <Link href="/pokedex" className="px-4 py-2 bg-[var(--background)] text-[var(--foreground)] rounded">
                    Go to pokedex page
                </Link>
            </main>
        </section>
    );
}

export default Error;

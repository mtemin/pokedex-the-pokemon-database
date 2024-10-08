"use client"
import type {Metadata} from 'next'
import {Ubuntu, Pixelify_Sans} from 'next/font/google';
import localFont from "next/font/local";
import './globals.css'
import {Provider as ReduxProvider} from 'react-redux'
import ReactQueryClient from "@/app/ReactQueryClient";
import {store} from "@/lib/store";

// const inter = Inter({ subsets: ['latin'] })
const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ['300', '400', '500', '700'],
    variable: '--font-ubuntu'
})

const pixelify = localFont({
    // src: 'PixelifySans-VariableFont_wght.ttf',
    src: '../fonts/PixelifySans-VariableFont_wght.ttf',
    preload: true,
})


const metadata: Metadata = {
    title: 'Pokedex ~ Pokemon Database',
    description: 'Generated by create next app',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={pixelify.className}>
        <ReactQueryClient>
            <ReduxProvider store={store}>
                {/* <body className={ubuntu.className}>{children}</body> */}
                {/*<ErrorBoundary fallback={<Error/>}>*/}
                <body className={pixelify.className}>{children}</body>
                {/*</ErrorBoundary>*/}
            </ReduxProvider>
        </ReactQueryClient>
        </html>
    )
}

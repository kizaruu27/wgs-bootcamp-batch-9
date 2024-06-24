import React from "react";

export default function Content() {
    const msg = 'Selamat Datang, Gamteng!';
    const date = new Date();
    const time = date.toLocaleTimeString();

    return (
        <>
            <div className='content'>
                <h1 className="h3 mt-3">{time}</h1>
            </div>
        </>
    )
}
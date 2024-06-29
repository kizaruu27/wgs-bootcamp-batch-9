import React from "react";

export default function Nav() {
    return (
        <>
            <div className='header mt-3'>
                <div className='title'>
                    <h1 className="h3">React Title</h1>
                </div>
                <div className='nav'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/redux-page">React Redux</a>
                </div>
            </div>
        </>
    )
}
import { useEffect, useState } from "react";

export default function HooksClock() {
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }

    useEffect(() => {
        const clockTicking = setInterval(() => {
            tick();
            // console.log('Time Ticking');
        }, 1000);
        return () => {
            clearInterval(clockTicking);
        }
    })

    return (
        <>
            <div className="text-center">
                <h1>Jam Pake Hooks</h1>
                <p className="display-3">{time.toLocaleTimeString()}</p>
            </div>
        </>
    )
}
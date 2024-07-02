export default function HomeHeader({userName, children}) {
    return (
        <div className="container mt-5">
            <h1>Selamat Datang, {userName}!</h1>
            {children}
        </div>
    )
}
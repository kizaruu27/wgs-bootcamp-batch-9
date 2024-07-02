import NavMenu from "../elements/NavMenu";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavMenu type={'navbar-brand'} href='/'>Home</NavMenu>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavMenu type='nav-link' href='/about'>About</NavMenu>
                        </li>
                        <li className="nav-item">
                            <NavMenu type='nav-link' href='/contact'>Contact</NavMenu>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
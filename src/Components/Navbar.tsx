import { Link } from 'react-router-dom'

function Navbar() {
    return <section>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <img src="src/assets/body-blitzers-high-resolution-logo.jpeg" width="112" height="480" />
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar">
                    <Link to='/' className="navbar-item">
                        Home
                    </Link>
                    <div className="navbar-item">
                        <Link to='/exercises' className="navbar-item">
                            Exercises
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to='/collection' className="navbar-item">
                            Collection
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        <hr className="navbar-divider" />
    </section>
}

export default Navbar
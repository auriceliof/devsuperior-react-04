import './styles.css';

const Navbar = () => {
    return (
        <nav className="bg-primary navbar-nav-container">
            <div className='navbar-title'>
                <a href="/">
                    <h2>MovieFlix</h2>
                </a>
            </div>
            <div>
                <button className="btn btn-primary btn-navbar">Sair</button>
            </div>
        </nav>
    );
};

export default Navbar;

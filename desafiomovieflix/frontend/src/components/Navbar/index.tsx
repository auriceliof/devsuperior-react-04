import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { getTokenData, isAuthenticated } from 'utils/auth';
import history from 'utils/history';
import { removeAuthData } from 'utils/requests';
import './styles.css';

const Navbar = () => {

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: true,
                tokeData: getTokenData()               
            })
        }
        else {
            setAuthContextData({
                authenticated: false
            })
        }
    }, [setAuthContextData])

    const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthContextData ({
            authenticated: false
        });
        history.replace('/');
    }

    return (
        <nav className="bg-primary navbar-nav-container">
            <div className='navbar-title'>
                <a href="/">
                    <h2>MovieFlix</h2>
                </a>
            </div>
            <div >
                {authContextData.authenticated ? (
                    <>
                        <a href="#logout" onClick={handleLogoutClick} className='nav-logout'>Sair</a>
                    </>
                ) : (
                    ''
                )}
            </div>
        </nav>
    );
};

export default Navbar;

import { Link } from "react-router-dom";

const Header = ()=>
    {
        return(
            <>
            <div className="header">
            <div className="logo">
                <img src="https://t3.ftcdn.net/jpg/01/10/15/32/360_F_110153209_pDnpiRAnNRVO88Q4UNcSfisBO1csCmLs.jpg"/>
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link></li>
                    <li><Link to="/emergency" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Emergency</Link></li>
                    <li><Link to="/" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Awareness</Link></li>
                    <li><Link to="/" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Safety Tips</Link></li>
                    <li><Link to="/login" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Log In</Link></li>

                </ul>
            </nav>
            </div>
            </>
        )
    }

export default Header;
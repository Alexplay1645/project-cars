import './Header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div className="Header">
            <Link to='/'>
                <h1>Cars documentation page</h1>
                <h3>Learn Cars</h3>
            </Link>
        </div>
    );
}

export default Header;
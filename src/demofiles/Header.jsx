import {Link} from 'react-router-dom';
import './styles.css';


export default function Header(){
    return(
        <div className="header">
            <header>
                <nav>
                    <ul>
                        <Link to='/home'><li>Home</li></Link>
                        <Link to='/about'><li>About us</li></Link>
                        <Link to='/contact'><li>Contact us</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
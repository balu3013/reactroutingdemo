import '../cssstyles/style.css';
import {Link} from 'react-router-dom';

export default function MainComponent(){
    return(
        <div className="header">
            <header>
                <nav>
                    <ul>
                       <Link to='/home'><li>Home</li></Link>
                       <Link to='/header'><li>Header</li></Link>
                       <Link to='/contact'><li>Contact</li></Link>
                       <Link to='/login'><li>Login</li></Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
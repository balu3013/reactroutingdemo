import MainComponent from './Main';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import HomePage from './Home';
import Cont from './Contact';
import Log from './Login';
import Head from './Header';


export default function MainFile(){
    return(

        <>
        <BrowserRouter>
            <MainComponent />
            <Routes>
                <Route path='/home' exact Component={HomePage} />
                <Route path='/contact' exact Component={Cont} />
                <Route path='/login' exact Component={Log} />
                <Route path='/header' exact Component={Head} />
            </Routes>

        </BrowserRouter>
        </>
    )
}

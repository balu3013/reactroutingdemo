import Header from "./Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './Contact';
import Login from './Login';
import {useState} from 'react';

export default function Main(){

    let object = {
        details : [
            {
                id : 1,
                name : 'react1'
            },
            {
                id : 2,
                name : 'react2'
            },{
                id : 3,
                name : 'react3'
            },
            {
                id : 4,
                name : 'react4'
            },{
                id : 5,
                name : 'react5'
            },
            {
                id : 6,
                name : 'react6'
            }
        ]
    }

    let [count,setCount] = useState(0);

   
    return(
        <>
            
            <BrowserRouter>
                   <Header />
                <Routes>
                    <Route exact path='/home' Component={Home}/>
                    <Route exact path='/contact' Component={Contact} />
                    <Route exact path='/about' Component={About}/>
                    <Route exact path='/login' Component={Login}/>
                </Routes>
            </BrowserRouter>

           <h2>Count : {count}</h2>
           <button onClick={() => {
            setCount(count++);
           }} style={{
            padding : '14px 30px',
            backgroundColor : 'blue',
            border : 'none',
            color : 'white',
            cursor : 'pointer',
           }}>Click me</button>


           <div>
                {
                    object.details.map((item) => {
                        return(
                            <div key={item.id}>
                                <h2>{item.name}</h2>
                            </div>

                        )
                    })
                }
           </div>
        </>
    )
}
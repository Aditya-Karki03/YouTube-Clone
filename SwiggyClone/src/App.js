import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Components/NavBar';



const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
    return(
        <div className='w-screen h-screen'>
            <NavBar/>
        </div>
    )
}

root.render(
    <App/>
)
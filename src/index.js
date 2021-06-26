import React from 'react';
import ReactDOM from 'react-dom';


import List from './containers/List'
import 'bootswatch/dist/cyborg/bootstrap.min.css'


const App = () => {
    return (
        <main>
            <div className='container'>
                <List/>
            </div>
        </main>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));




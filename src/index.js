import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';


import List from './containers/List'
import 'bootswatch/dist/cyborg/bootstrap.min.css'


const App = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark border-bottom border-white">
                <a href="/" className='navbar-brand'>
                    MovieApp
                </a>
            </nav>
            <main>
                <div className='container'>
                    <List />
                </div>
            </main>
        </Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));




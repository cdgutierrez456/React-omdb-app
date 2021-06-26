import React from 'react';

import Card from '../components/Card/Card'

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=509b9805';

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        // const res = await fetch('../../assets/data.json')
        const res = await fetch(`${API}&s=batman`);
        const resJSON = await res.json();
        console.log(resJSON)
        // this.setState({ data: resJSON });
    }

    render() {
        return (
            <div className='row'>
                {
                    this.state.data.map(movie => {
                        return <Card movie={movie} />
                    })
                }
            </div>
        )
    }

}


export default List;
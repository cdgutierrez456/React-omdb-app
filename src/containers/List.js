import React, { Fragment } from 'react';

import Card from '../components/Card/Card'

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=509b9805';

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount() {
        // const res = await fetch('../../assets/data.json')
        const res = await fetch(`${API}&s=batman`);
        const resJSON = await res.json();
        this.setState({ data: resJSON.Search });
    }

    async handleSubmit(e) {
        e.preventDefault();
        if(!this.state.searchTerm) {
            return this.setState({error: 'Please write a valid text'});
        }

        const res = await fetch(`${API}&s=${this.state.searchTerm}`);
        const data = await res.json();
        this.setState({data: data.Search});

    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input 
                            type="text"
                            id=""
                            className="form-control"
                            placeholder='Search'
                            onChange={e => this.setState({searchTerm: e.target.value})}
                            autoFocus/>
                        </form>
                        <p className='text-white'>
                            {this.state.error ? this.state.error: ''}
                        </p>
                    </div>
                </div>
                <div className='row'>
                    {
                        this.state.data.map(movie => {
                            return <Card movie={movie} />
                        })
                    }
                </div>
            </Fragment>
        )
    }

}


export default List;
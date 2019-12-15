import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = {
        number: [1, 2, 3, 4, 5],
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }
    deleteHandler = (counterId) => {
        console.log('delete clicked')
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters})
    }
    render() {
        return (
            <div>
                {this.state.counters.map(counters =>
                    <Counter
                        delete={this.deleteHandler}
                        key={counters.id} 
                        value={counters.value}
                        id={counters.id} />)}
            </div>
        )
    }
}

export default Counters;
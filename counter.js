import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: this.props.value
    }
    
    render() {
        return (
            <div>
                <span style={{ fontSize: '30px' }} className='badge badge-secondary mx-2'> {this.props.id} </span>
                <h1 style ={{ fontSize:'30px'}} className={this.addBootstrapMethod()}> {this.counterMethod()} </h1>
                <button className='btn btn-primary mx-2' onClick=""> Up </button>
                <button className='btn btn-warning mx-2'onClick="" > Down </button>
                <button className="btn btn-danger" onClick={this.props.delete}> Delete </button>
            </div>
        );
    }
    counterMethod() {
        let count = this.state.count
        if (count === 0) {
            return "zero"
        } else {
            return count
        }
    }
    addBootstrapMethod() {
        let count = this.state.count
        let style = 'badge m-2 badge-'
        if (count === 0) {
            return style += 'danger'
        } else if (count <= 9 ) {
            return style += 'warning'
        }else if (count >= 10 && count <= 15){
            return style += 'success'
        } 
        else {
            return style += 'primary'
        }

    }
}

export default Counter;
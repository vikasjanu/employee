import React from 'react';

export default class Employee extends React.Component {
    componentDidMount(){
        console.log(this.props);
        this.test();
    }
    
    test(){
        console.log('test');
    }

    render(){
        console.log('Hii');
        return <h1>My Name is {this.props.name}</h1>
    }
}
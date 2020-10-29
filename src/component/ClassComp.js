import React from 'react';

export default class ClassComp extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render() {
    return <h2>This is Class {this.props.text}</h2>
    }
}
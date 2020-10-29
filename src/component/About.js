import React from 'react';

export default class About extends React.Component{
    constructor(props){
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    handleLogout(){
        localStorage.removeItem("token");
        this.props.history.push("/");
    }

    render(){
        const token = localStorage.getItem("token");

        if(!token){
            this.props.history.push("/");
        }

        const requestOptions = {
            method: 'GET',
            headers: {'Authorization': 'Bearer '+token}
        };

        const username = 'VIKAS.CCC@MNIT.AC.IN';

        fetch('http://localhost:9090/api/v1/users/'+username, requestOptions)
        .then(function(response) {
            console.log(response.status); // Will show you the status
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })        
        .then(data => {
            console.log(data);
            this.setState({
                firstName: data.data.firstName,
                lastName: data.data.lastName
            })
        })
        .catch(function(e){
            console.log(e);
        });       
        return (<div>
                <h2>Welcome, {this.state.firstName+' '+this.state.lastName}</h2>
                <button onClick={e=>this.handleLogout(e)}>Logout</button>
            </div>);
    }
}
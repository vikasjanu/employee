import React from 'react';

export default class Login extends React.Component{
    constructor(props){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let rule = /^(([^<>()#[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,12}))$/;

        if(rule.test(this.state.username)==false){
            alert("Please enter valid email address.");
            this.username.focus(); 
            return false;  
        }

        if(this.state.username.length < 3){
            alert("Username should more then 3 char");
            this.username.focus(); 
            return false;            
        }
        if(this.state.password.length < 6){
            alert("password should more then 6 char");
            this.password.focus(); 
            return false;  
        }
        //alert("Username is:" + this.state.username);
        //alert("Password is:" + this.state.password);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                 username: btoa(this.state.username), 
                 password: btoa(this.state.password)
             }),
        };
        //const username =  this.state.username;
        fetch('http://localhost:9090/api/v1/login', requestOptions)
        //.then(response => response.json())

        .then(function(response) {
            console.log(response.status); // Will show you the status
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })

        
        .then(data => {
            //console.log(response);
            
            console.log(data);
            if(data.token){
               // console.log(data.data.firstName);
                console.log(this.props);
                localStorage.setItem("token",data.token);
    
                this.props.history.push({ 
                    pathname: '/about',
                    user: data.data //all data
                });

                //this.props.history.push('/about');

                
            }
        })
        .catch(function(e){
            console.log(e);
        });
    }
    handleChange(event, key){
        console.log(event.target);
            this.setState({
                [key]: event.target.value
            })
    }

    handleSignup(){
        this.props.history.push('/signup');
    }
    render(){
        return (
            <div>
              <h2>Login Page</h2>
              <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" id="username" ref={(text1) => { this.username = text1; }} value={this.state.username} onChange={e=>this.handleChange(e,"username")} />

                <label>Password</label>
                <input type="text" id="passsword" ref={(text1) => { this.password = text1; }} value={this.state.password} onChange={e=>this.handleChange(e,"password")} />


                <input type="submit" value="Submit" />
              </form>
                <br/>
                <br/>
                <br/>
              <button onClick={e=>this.handleSignup(e)}>Signup</button>
            </div>
          );
    }
}


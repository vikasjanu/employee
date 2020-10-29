import React from 'react';

export default class Login extends React.Component{
    constructor(props){
        super()
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        alert("Username is:" + this.state.fname);
        //alert("Password is:" + this.state.password);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                firstName: this.state.fname, 
                lastName: this.state.lname, 
                emailAddress: this.state.email, 
                password: this.state.password, 
             }),
        };

        fetch('http://localhost:9090/api/v1/users', requestOptions)
        .then(response => response.json())
        .then(data => {
            //console.log(data);

            if(data.status==true){
               // console.log(data.data.firstName);
                console.log(this.props);
                //localStorage.setItem("firstName",data.data.firstName);
    
                this.props.history.push({ 
                    pathname: '/login'
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


    handleHomeRedirect(){
        this.props.history.push('/');
    }
  
    render(){
        return (
            <div>
              <h2>Signup Page</h2>
              <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type="text" id="fname" value={this.state.fname} onChange={e=>this.handleChange(e,"fname")} />
                <br/>
                <label>Last Name</label>
                <input type="text" id="lname" value={this.state.lname} onChange={e=>this.handleChange(e,"lname")} />
                <br/>
                <label>Email/Username</label>
                <input type="text" id="email" value={this.state.email} onChange={e=>this.handleChange(e,"email")} />
                <br/>
                <label>Password</label>
                <input type="text" id="passsword" value={this.state.password} onChange={e=>this.handleChange(e,"password")} />

                <br/>
                <input type="submit" value="Signup" />


                <br/>
                <br/>
                <br/>
              <button onClick={e=>this.handleHomeRedirect(e)}>Goto Home</button>
              </form>

              
            </div>
          );
    }
}


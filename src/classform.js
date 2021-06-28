import React, { Component } from 'react';

class ClassForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            name : '' ,
            email : '',
            password :'',
    };
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value});
    }

    handleSubmit(e){
        e.preventDefault();
            console.log('Name:',this.state.name);
            console.log('Email:',this.state.email);
            console.log('Password:',this.state.password)
        
    }
          
    render() {
        return (
            <center>

            <div className='form'>
                <h2>Form using Class Component</h2>

                <label htmlFor="name" className="label">Name</label><br/>
                <input type="text" name="name" id="name" value={this.state.name} placeholder="Name" onChange={this.handleChange}/><br/>

                <label htmlFor="Email" className="label">Email</label><br/>
                <input type="Email" name="email" id="Email" value={this.state.email} placeholder="Example@gmail.com" onChange={this.handleChange}/><br/>

                <label htmlFor="password" className="label">Password</label><br/>
                <input type="password" name="password" id="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}/><br/>

                <button onClick={this.handleSubmit} type="submit">Submit</button>
            </div>
            </center>
        );
    }
}

export default ClassForm;
import React, { Component } from 'react';

class ClassForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            fname : '' ,
            sname : '' ,
            email : '',
           gender: '',
            phone :''
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
           console.log(this.state)
            // console.log('Gender:',select);
            this.setState({
                fname : '' ,
                sname : '' ,
                email : '',
                gender :'select',
                phone :''

            })
            
        
    }
          
    render() {
        return (
            <center>

            <div className='form'>
                <h2>Form using Class Component</h2>

                <label htmlFor="name" className="label">First Name</label><br/>
                <input type="text" name="fname" id="firstName" value={this.state.fname} placeholder="First Name" onChange={this.handleChange}/><br/>

                <label htmlFor="name" className="label">last Name</label><br/>
                <input type="text" name="sname" id="secondName" value={this.state.sname} placeholder="Second Name" onChange={this.handleChange}/><br/>

                <label htmlFor="Email" className="label">Email</label><br/>
                <input type="Email" name="email" id="Email" value={this.state.email} placeholder="Example@gmail.com" onChange={this.handleChange}/><br/>

                <select name='gender' value={this.state.gender} onChange={this.handleChange}>
                    <option  value="select">select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />

                

                <label htmlFor="phone-number" className="label">Phone number</label><br/>
                <input type="text" name="phone" id="phone" value={this.state.phone} placeholder="Password" onChange={this.handleChange}/><br/>

                <button onClick={this.handleSubmit} type="submit">Submit</button>
            </div>
            </center>
        );
    }
}

export default ClassForm;
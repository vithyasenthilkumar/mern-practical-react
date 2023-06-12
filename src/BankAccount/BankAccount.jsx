import React, { Component } from 'react'
import './BankAccount.css'

export class BankAccount extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           firstName:'',
           lastName:'',
           phone_number:'',
           address:'',
           email:'',
           account_type:''
        }
      }
    firstNameHandler = event => {
        this.setState(
          {
            firstName:event.target.value
          }
        )
      }
      lastNameHandler = event => {
        this.setState(
          {
            lastName:event.target.value
          }
        )
      }
      phone_numberHandler = event => {
        this.setState(
          {
            phone_number:event.target.value
          }
        )
      }
      addressHandler = event => {
        this.setState(
          {
            address:event.target.value
          }
        )
      }
      emailHandler = event => {
        this.setState(
          {
            email:event.target.value
          }
        )
      }
      account_typeHandler = event => {
        this.setState(
          {
            account_type:event.target.value
          }
        )
      }
    formSubmitHandler = event => {
        event.preventDefault()
        console.log(
          this.state.firstName,
          this.state.lastName,
          this.state.phone_number,
          this.state.address,
          this.state.email,
          this.state.account_type
        )
    }
render() {
    const {firstName,lastName,phone_number,address,email,account_type}=this.state
    return (
        
      <div>
      <h1>BANK ACCOUNT</h1>
      <h3>APPLICATION FORM</h3>
      <form className='bank-account-form' onSubmit={this.formSubmitHandler}>
      <div className="form-group">
      <label>First Name</label>
          <input type='text' className='accept-form'
          placeholder='Enter your First Name here' 
          required
          value={firstName}
          onChange={this.firstNameHandler}
          />
          <label>Last Name</label>
          <input type='text' className='accept-form'
          placeholder='Enter your Last Name here (optional)'
          value={lastName}
          onChange={this.lastNameHandler}
          />
          <label>Phone Number</label>
          <input type='text'className='accept-form'
          placeholder='Enter your Phone Number here'
          required
          value={phone_number}
          onChange={this.phone_numberHandler}
          />
          <label>address</label>
          <input type='address'className='accept-form'
          placeholder='Enter your Address here'
          required
          value={address}
          onChange={this.addressHandler}
          />
          <label>E-Mail</label>
          <input type='email' className='accept-form'
          placeholder='Enter your E-Mail here'
          required
          value={email}
          onChange={this.emailHandler}
          />
          <label>Account-Type</label>
          <input type='text'className='accept-form'
          placeholder='Enter your Account-type here'
          required
          value={account_type}
          onChange={this.account_typeHandler}
          />
          </div>
          <button type="submit">Submit</button>
          </form>
      </div>
    )
}
};


export default BankAccount;
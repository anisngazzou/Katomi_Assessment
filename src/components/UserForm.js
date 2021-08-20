import React, { Component } from 'react';
import FirstStep from './Xinput';
import Result from './Result';

export class UserForm extends Component {
  state = {
    step: 1,
    value: null
    
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
   
   { this.setState({
      step: step + 1
    });}
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    let amount = parseFloat(e.target.value);
    if (isNaN(amount) || amount < 0 || e.target.value[0] === '0') {
      amount = '';
  }
    this.setState({ [input]: amount });
  };

  render() {
    const { step } = this.state;
    const { value } = this.state;
    const values = { value };

    switch (step) {
      case 1:
        return (
          <FirstStep
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
       
        return <Result 
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        handleChange={this.handleChange}
        values={values}/>;
      default:
        (console.log('This is a multi-step form '))
    }
  }
}

export default UserForm;

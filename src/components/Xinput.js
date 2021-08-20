import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FirstStep extends Component {
  continue = e => {
    e.preventDefault();
   
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Katomi Test :)" />
            <h1>Welcome To Katomi Test Solution </h1>
            <TextField
              placeholder="Enter number  in [0,365]"
              type="number"
              label="Enter Your Lucky numbe X"
              onChange={handleChange('value')}
              defaultValue={values.value}
              margin="normal"
              fullWidth
            />
            <br />
           
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FirstStep;

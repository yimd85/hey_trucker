
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Payments from './Payments';
import * as actions from '../actions'

class Join extends React.Component {
    state = {
        addressOne: '',
        addressTwo: '',
        city: '',
        country: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        state: '',
        zip: '',
        trailerType: '',
        driversLicense: '',
        licensePlate: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    renderButton() {
        let allowButton = false;
        if (this.state.addressOne,
            this.state.addressTwo,
            this.state.city,
            this.state.country,
            this.state.email,
            this.state.firstName,
            this.state.lastName,
            this.state.phone,
            this.state.state,
            this.state.zip,
            this.state.trailerType,
            this.state.driversLicense,
            this.state.licensePlate) {
            allowButton = true;
        }

        switch (allowButton) {
            case null:
                return null;
            case false:
                return <Button disabled={true} style={{ marginTop: '20px', width: "100%", height: '50px' }} variant="contained" color="primary"  >
                    <div className={'gilroy-regular'}>Subscribe</div>
                </Button>;
            default:
                return (
                    <Payments driverInfo={this.state} />
                );
        }
    }

    render() {
        return (
            <div style={{ textAlign: 'center', }} >
                <h1 className={'gilroy-regular'}>Truckers</h1>
                <div className={'gilroy-regular'}>Become a member now and get instant access to our network</div>
                <div className={'gilroy-regular'}> of shippers and book your next job. We want to eliminate</div>
                <div className={'gilroy-regular'}>empty miles as much as you do!</div>
                <div className={'formParent'}  >
                    <div style={{ width: "100%", marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextField
                            style={{ width: "49.5%" }}
                            required
                            label="First Name"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='firstName'
                        />
                        <TextField
                            style={{ width: "49.5%" }}
                            required
                            label="Last Name"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='lastName'
                        />
                    </div>
                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Email"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='email'
                    />
                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Address One"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='addressOne'
                    />
                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Address Two"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='addressTwo'
                    />
                    <div style={{ width: "100%", marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextField
                            style={{ width: "70%" }}
                            required
                            label="City"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='city'
                        />
                        <TextField
                            style={{ width: "29%" }}
                            required
                            label="State"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='state'
                        />
                    </div>


                    <div style={{ marginTop: '20px', width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextField
                            style={{ width: "49.5%" }}
                            required
                            label="Zip/Postal Code"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='zip'
                        />

                        <TextField
                            style={{ width: "49.5%" }}
                            required
                            label="Phone"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='phone'
                        />
                    </div>



                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Country"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='country'
                    />

                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Trailer Type"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='trailerType'
                    />

                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Drivers License Info"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='driversLicense'
                    />

                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="License Plate Number"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='licensePlate'
                    />
                    {this.renderButton()}
                </div>
            </div >
        )
    }
}



export default connect(null, actions)(Join);
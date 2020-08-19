
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Payments from './Payments';
import * as actions from '../actions'

class Join extends Component {
    state = {
        address: '',
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


    componentDidMount() {
        if (this.props.driverUpdate) {
            this.props.getDrivers();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.driver !== prevProps.driver) {
            this.setState(this.props.driver)
        }


    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    renderButton(allowButton) {
        switch (allowButton) {
            case null:
                return null;
            case false:
                return (
                    <Button disabled={true} style={{ marginTop: '20px', width: "100%", height: '50px' }} variant="contained" color="primary"  >
                        <div className={'gilroy-regular'}>Subscribe</div>
                    </Button>
                );
            default:
                return (
                    <Payments driverInfo={this.state} />
                );
        }
    }


    renderUpdateButton(allowButton) {
        switch (allowButton) {
            case null:
                return null;
            case false:
                return (
                    <Button disabled={true} style={{ marginTop: '20px', width: "100%", height: '50px' }} variant="contained" color="primary"  >
                        <div className={'gilroy-regular'}>Update Profile</div>
                    </Button>
                );
            default:
                return (
                    <Button onClick={() => this.props.updateDrivers(this.state)} style={{ marginTop: '20px', width: "100%", height: '50px' }} variant="contained" color="primary" href="#contained-buttons">
                        <div className={'gilroy-regular'}>Update Profile</div>
                    </Button>
                );
        }
    }

    render() {

        let allowButton = false;
        if (this.state.address,
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

        return (
            <div style={{ textAlign: 'center', }} >

                {this.props.driverUpdate ?
                    null
                    :
                    <>
                        <h1 className={'gilroy-regular'}>Truckers</h1>
                        <div className={'gilroy-regular'}>Become a member now and get instant access to our network</div>
                        <div className={'gilroy-regular'}> of shippers and book your next job. We want to eliminate</div>
                        <div className={'gilroy-regular'}>empty miles as much as you do!</div>
                    </>
                }
                {this.props.driverUpdate ?
                    <div className={'formParent'}  >
                        <div style={{ marginTop: '10px', width: "100%", textAlign: 'right', }} >

                            <Link
                                to={"/profile"}
                                className="leftNavItems"
                            >
                                <i className="material-icons">{"clear"}</i>
                            </Link>

                        </div>
                    </div>
                    :
                    null
                }

                <div className={'formParent'}  >
                    <div style={{ width: "100%", marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                        <TextField
                            style={{ width: "49.5%" }}
                            required
                            label="First Name"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='firstName'
                            value={this.state.firstName}
                        />
                        <TextField
                            style={{ width: "49.5%" }}
                            required
                            label="Last Name"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='lastName'
                            value={this.state.lastName}
                        />
                    </div>
                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Email"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='email'
                        value={this.state.email}
                    />
                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Address One"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='address'
                        value={this.state.address}
                    />
                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Address Two"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='addressTwo'
                        value={this.state.addressTwo}
                    />
                    <div style={{ width: "100%", marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextField
                            style={{ width: "70%" }}
                            required
                            label="City"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='city'
                            value={this.state.city}
                        />
                        <TextField
                            style={{ width: "29%" }}
                            required
                            label="State"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='state'
                            value={this.state.state}
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
                            value={this.state.zip}
                        />

                        <TextField
                            style={{ width: "49.5%" }}
                            required
                            label="Phone"
                            variant="outlined"
                            onChange={this.handleChange}
                            name='phone'
                            value={this.state.phone}
                        />
                    </div>



                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Country"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='country'
                        value={this.state.country}
                    />

                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Trailer Type"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='trailerType'
                        value={this.state.trailerType}
                    />

                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="Drivers License Info"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='driversLicense'
                        value={this.state.driversLicense}
                    />

                    <TextField
                        style={{ marginTop: '20px', width: "100%" }}
                        required
                        label="License Plate Number"
                        variant="outlined"
                        onChange={this.handleChange}
                        name='licensePlate'
                        value={this.state.licensePlate}
                    />
                    {this.props.driverUpdate ? this.renderUpdateButton(allowButton) : this.renderButton(allowButton)}

                </div>
            </div >
        )
    }
}



export default connect(null, actions)(Join);
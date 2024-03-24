import React, { useState, useRef } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import emailjs from '@emailjs/browser';

const BusinessForm = () => {
    const form = useRef();

    const [contactMethod, setContactMethod] = useState('');
    const [hearAboutUs, setHearAboutUs] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const servID = process.env.REACT_APP_SERVID;
    const tempID2 = process.env.REACT_APP_TEMPID2;
    const uid = process.env.REACT_APP_UID;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(servID, tempID2, form.current, uid)
            .then((result) => {
                setEmail('');
                setHearAboutUs('');
                setContactMethod('');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    const handleContactMethodChange = (event) => {
        setContactMethod(event.target.value);
    };

    const handleHearAboutUsChange = (event) => {
        setHearAboutUs(event.target.value);
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        // Regular expression pattern for validating email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if the input matches the email pattern
        if (!emailPattern.test(value)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    return(
        <form className="mbr-form p-2" ref={form} onSubmit={sendEmail}>
            <input type="hidden" value="Business Services & Support" name='subject' />
            <div className="row">
                <div className="col-md-4 mb-3">
                    <TextField label="Full Name" color="success" type="text" required name="name" fullWidth />
                </div>
                <div className="col-md-4 mb-3">
                    <TextField label="Phone Number" color="success" type="tel" required name="phoneNumber" fullWidth />
                </div>
                <div className="col-md-4 mb-3">
                    <TextField label="Email" color="success" type="email" name="email" fullWidth 
                    value={email}
                    onChange={handleEmailChange}
                    error={!!emailError}
                    helperText={emailError}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-3">
                    <FormControl fullWidth>
                        <InputLabel color="success" required id="contactMethodLabel">Preferred Contact Method</InputLabel>
                        <Select value={contactMethod} onChange={handleContactMethodChange} required color="success" labelId="contactMethodLabel" label="Preferred Contact Method" name="contactMethod">
                            <MenuItem value="phone">Phone</MenuItem>
                            <MenuItem value="email">Email</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-md-4 mb-3">
                    <FormControl fullWidth>
                        <InputLabel color="success" required id="hearAboutUsLabel">How Did You Hear About Us</InputLabel>
                        <Select value={hearAboutUs} onChange={handleHearAboutUsChange} color="success" labelId="hearAboutUsLabel" label="How Did You Hear About Us" name="hearAboutUs">
                            <MenuItem value="Friend/Family">Friend/Family</MenuItem>
                            <MenuItem value="Google">Google</MenuItem>
                            <MenuItem value="DoctorNurse">Doctor/Nurse</MenuItem>
                            <MenuItem value="Advertisement">Advertisement</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-md-4 mb-3">
                    <TextField label="Best Time to Reach You" placeholder="e.g. 9:00 AM - 12:00 PM" color="success" type="text" name="bestTimeToReach" fullWidth/>
                </div>
            </div>

            <div className='row'>
                <div className="col-md-12 mb-3">
                    <label>Allow us at least 14 days to respond before follow-up:</label>
                    <TextField multiline rows={5} label="Your Inquiry" color="success" type="text" name="inquiry" fullWidth />
                </div>
            </div>

            <div className="text-center">
                <Button type="submit" className="btn my-4" style={{ color: 'white', backgroundColor: '#2B8C79', borderRadius: '5px' }}>SEND</Button>
            </div>
        </form>
    )
}

export default BusinessForm;
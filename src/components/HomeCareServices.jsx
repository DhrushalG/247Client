import React, { useRef, useState } from 'react';
import { TextField, ListItemText, Button, Checkbox, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import emailjs from '@emailjs/browser';

const HomeCareForm = () => {
    const form = useRef();

    const [contactMethod, setContactMethod] = useState('');
    const [lookingFor, setLookingFor] = useState('');
    const [hearAboutUs, setHearAboutUs] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [daysNeeded, setDaysNeeded] = useState([]);

    const daysOfWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
        ];

    const servID = process.env.REACT_APP_SERVID;
    const tempID = process.env.REACT_APP_TEMPID;
    const uid = process.env.REACT_APP_UID;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(servID, tempID, form.current, uid)
            .then((result) => {
                console.log(result.text);
                setEmail('');
                setHearAboutUs('');
                setContactMethod('');
                setLookingFor('');
                setDaysNeeded([]);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    const handleContactMethodChange = (event) => {
        setContactMethod(event.target.value);
    };
    
    const handleLookingForChange = (event) => {
        setLookingFor(event.target.value);
    };

    const handleHearAboutUsChange = (event) => {
    setHearAboutUs(event.target.value);
    };

    const handleDaysNeededChange = (event) => {
        setDaysNeeded(event.target.value);
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

    return (
        <div>
        <form className="mbr-form p-2" ref={form} onSubmit={sendEmail}>
            <input type="hidden" value="Home Care Services" name='subject' />
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

                {/* <div className="col-md-4 mb-3">
                    <TextField label="Age of Client" color="success" type="number" required name="ageOfClient" fullWidth />
                </div>

                <div className="col-md-4 mb-3">
                    <TextField label="Area Zipcode" color="success" type="text" required name="zipCode" fullWidth />
                </div> */}
                <div className="col-md-4 mb-3">
                    <FormControl fullWidth>
                        <InputLabel color="success"  required id="contactMethodLabel">Preferred Contact Method</InputLabel>
                        <Select value={contactMethod}  onChange={handleContactMethodChange} required color="success" 
                                labelId="contactMethodLabel" label="Preferred Contact Method" name="contactMethod">
                            <MenuItem value="phone">Phone</MenuItem>
                            <MenuItem value="email">Email</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="col-md-4 mb-3">
                    <FormControl fullWidth>
                        <InputLabel color="success" id="hearAboutUsLabel">How Did You Hear About Us</InputLabel>
                        <Select value={hearAboutUs} onChange={handleHearAboutUsChange}
                        color="success" labelId="hearAboutUsLabel" label="How Did You Hear About Us" name="hearAboutUs">
                            <MenuItem value="Friend/Family">Friend/Family</MenuItem>
                            <MenuItem value="Google">Google</MenuItem>
                            <MenuItem value="DoctorNurse">Doctor/Nurse</MenuItem>
                            <MenuItem value="Advertisement">Advertisement</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="col-md-4 mb-3">
                    <FormControl fullWidth>
                        <InputLabel color="success"  required id="lookingForLabel">I Am Looking For</InputLabel>
                        <Select value={lookingFor}
                        onChange={handleLookingForChange} color="success" required labelId="lookingForLabel" label="I Am Looking For" name="lookingFor">
                            <MenuItem value="24hr-LiveIn">24hr Live-in</MenuItem>
                            <MenuItem value="Hourly">Hourly</MenuItem>
                            <MenuItem value="Respite-Care">Respite Care</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className="row align-items-center">
            <div className="col-md-4 mb-3">
                    <TextField label="Age of Client" color="success" type="number" required name="ageOfClient" fullWidth />
                </div>

                <div className="col-md-4 mb-3">
                    <TextField label="Area Zipcode" color="success" type="text" required name="zipCode" fullWidth />
                </div>
                {/* <div className="col-md-4 mb-3">
                    <FormControl fullWidth>
                        <InputLabel color="success"  required id="contactMethodLabel">Preferred Contact Method</InputLabel>
                        <Select value={contactMethod}  onChange={handleContactMethodChange} required color="success" 
                                labelId="contactMethodLabel" label="Preferred Contact Method" name="contactMethod">
                            <MenuItem value="phone">Phone</MenuItem>
                            <MenuItem value="email">Email</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="col-md-4 mb-3">
                    <FormControl fullWidth>
                        <InputLabel color="success" id="hearAboutUsLabel">How Did You Hear About Us</InputLabel>
                        <Select value={hearAboutUs} onChange={handleHearAboutUsChange}
                        color="success" labelId="hearAboutUsLabel" label="How Did You Hear About Us" name="hearAboutUs">
                            <MenuItem value="Friend/Family">Friend/Family</MenuItem>
                            <MenuItem value="Google">Google</MenuItem>
                            <MenuItem value="DoctorNurse">Doctor/Nurse</MenuItem>
                            <MenuItem value="Advertisement">Advertisement</MenuItem>
                        </Select>
                    </FormControl>
                </div> */}

                <div className="col-md-4 mb-3">
                    <FormControl fullWidth>
                        <InputLabel color='success' id="days-label">Days When Services Are Needed</InputLabel>
                        <Select label = 'Days When Services Are Needed' name='daysNeeded' color = 'success' id="days-select" multiple
                        value={daysNeeded} onChange={handleDaysNeededChange} renderValue={(selected) => selected.join(', ')}>
                        {daysOfWeek.map((day) => (
                            <MenuItem  key={day} value={day}>
                            <Checkbox name='daysNeeded' checked={daysNeeded.indexOf(day) > -1} />
                            <ListItemText primary={day} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 mb-3">
                    <label>Please give any additional information <br /> (i.e. months which care is needed, any
                                disabilities or conditions to take note of, preferences for care givers):</label>
                    <TextField multiline rows={5} label="Additional Information" color="success" type="text" name="message" fullWidth />
                </div>
            </div>

            <div className="text-center">
                <Button type="submit" className="btn my-4" style={{ color: 'white', backgroundColor: '#2B8C79', borderRadius: '5px' }}>SEND</Button>
            </div>
        </form>
        </div>
    );
};

export default HomeCareForm;

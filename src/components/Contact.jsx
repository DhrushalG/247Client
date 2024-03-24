import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import HomeCareForm from './HomeCareServices';
import EmploymentForm from './EmploymentOpp';
import BusinessForm from './BusinessServ';
import image1 from "../images/image1.jpeg";

const Contact = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option === selectedOption ? '' : option);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div className='d-flex justify-content-center' style={{ marginBottom: '10px', width: '100%' }}>
                <div className='d-flex justify-content-center' style={{ alignItems: 'center', width: '75%'}}>
                    <Typography variant="h5" style={{ marginRight: '20px', minWidth: '20%', textAlign: 'center' }}>I am interested in:</Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Button variant={selectedOption === 'homecare' ? 'contained' : 'outlined'} 
                                    onClick={() => handleOptionClick('homecare')} style={{
                                    backgroundColor: selectedOption === 'homecare' ? 'white' : '#1b8c79',
                                    color: selectedOption === 'homecare' ? '#1b8c79' : 'white',
                                    outline: 'none',
                                }}>
                                Home Care Services
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant={selectedOption === 'employment' ? 'contained' : 'outlined'} 
                                    onClick={() => handleOptionClick('employment')} 
                                    style={{ backgroundColor: selectedOption === 'employment' ? 'white' : '#1b8c79', 
                                    color: selectedOption === 'employment' ? '#1b8c79' : 'white',
                                    outline: 'none',
                                }}>
                                Employment Opportunities
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant={selectedOption === 'business' ? 'contained' : 'outlined'}
                                    onClick={() => handleOptionClick('business')}
                                    style={{ backgroundColor: selectedOption === 'business' ? 'white' : '#1b8c79', 
                                    color: selectedOption === 'business' ? '#1b8c79' : 'white',
                                    outline: 'none',
                                }}>
                                Business Services/Support
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                
            </div>
            {selectedOption === 'homecare' && (
                <div className='d-flex justify-content-center'>
                    <Paper elevation={3} style={{ marginTop: '10px', padding: '10px', width: '75%' }}>
                        <Typography  style={{ color: '#1b8c79'}} variant="h5" align='center'>Home Care Services</Typography>
                        <HomeCareForm />
                    </Paper>
                </div>
            )}
            {selectedOption === 'employment' && (
                <div className='d-flex justify-content-center'>
                <Paper elevation={3} style={{ marginTop: '10px', padding: '10px', width: '75%' }}>
                    <Typography style={{ color: '#1b8c79'}} variant="h5" align='center'>Employment Opportunities</Typography>
                    <EmploymentForm />
                </Paper>
                </div>
            )}
            {selectedOption === 'business' && (
                <div className='d-flex justify-content-center'>
                <Paper elevation={3} style={{ marginTop: '10px', padding: '10px', width: '75%' }}>
                    <Typography style={{ color: '#1b8c79'}} variant="h5" align='center'>Business Services/Support</Typography>
                    <BusinessForm />
                </Paper>
                </div>
            )}
            <div className="" style={{ marginTop: '20px', minWidth: '50%', maxWidth: '100%', height: '500px' }}>
                    <img src={image1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="" alt="Responsive" />
                </div>
        </div>
    );
}

export default Contact;
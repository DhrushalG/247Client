import React, { useRef, useState } from 'react';
import { RadioGroup, FormControlLabel, FormLabel, Radio, TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

import '../static/App.css';
import image1 from "../images/image1.jpeg";

const contactInfo = [
    { title: 'Phone', content: '847-483-8999' },
    { title: 'Email', content: 'Assurecare247@gmail.com' },
    { title: 'Address', content: '9375 Landings Ln, Des Plaines,<br />IL, 60016, USA' }

];

const Contact2 = () => {
    const form = useRef();
    const [value, setValue] = useState('Assessment');

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current); // Get form data
        console.log('Form Data:', formData);

        // Append file data to form data
        const fileInput = form.current.querySelector('input[type="file"]');
        if (fileInput && fileInput.files.length > 0) {
            console.log('File Input:', fileInput.files[0]);
            formData.append('my_file', fileInput.files[0]);
        }
        console.log("FOrm Data:", formData)
        console.log("Form Current:", form.current)

        // Define the template parameters including the attachment data
    const templateParams = {
        name: formData.get('name'), // Example: Get other form data
        email: formData.get('email'), // Example: Get other form data
        message: formData.get('message'), // Example: Get other form data
        my_file: formData.get('my_file') // Get the attachment data
    };

        emailjs.sendForm('service_58bba7h', 'template_cc2p8lm', form.current, 'dsGLM6dLjVE-DXwfp', templateParams)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="Contact text-center">
            <title>24/7 AssureCare - Contact</title>
            {/* <Link to='/ContactUs2'>New Forms(WIP)</Link> */}
            <h2 className="mt-4 center">CONTACT US</h2>
            <p>*Feel free to email/call for applicant inquiry or to schedule an assessment, or email us directly below!*</p>

            <div className="d-flex justify-content-center flex-wrap">
                {contactInfo.map((info, index) => (
                    <div className="m-4" style={{ width: '300px' }} key={index}>
                        <h5 className="card-title border-bottom">{info.title}</h5>
                        <p className="card-text font-weight-light" dangerouslySetInnerHTML={{ __html: info.content }} />
                    </div>
                ))}
            </div>

            <div className='d-flex flex-wrap justify-content-center'>
                <div style={{ minWidth: '45%' }}>
                    <form className="mbr-form p-2" ref={form} onSubmit={sendEmail} >
                        <div className="d-flex justify-content-around">
                            <div className='col-md-4 multi-horizontal' style={{ width: '25%' }}>
                                <FormLabel id="radio-buttons-group">Subject*</FormLabel>
                                <RadioGroup aria-labelledby="radio-buttons-group" name="subject" value={value} onChange={handleChange}>
                                    <FormControlLabel value="Assessment" control={<Radio />} label="Assessment" />
                                    <FormControlLabel value="New Hire" control={<Radio />} label="New Hire" />
                                </RadioGroup>
                            </div>

                            <div className='m-3 border multi-horizontal text-center' style={{ height: '100px', width: '100px', borderRadius: '21px' }}>
                                <label htmlFor='resumeInput'>Resume here</label>
                                <input id="resumeInput" type="file" accept=".pdf,.png,.doc,.docx" name="my_file" style={{ display: 'none'}} />
                            </div>

                        </div>
                        <div className="d-flex justify-content-around" style={{ width: '100%' }}>
                            <div className="col-md-4 multi-horizontal" style={{ marginTop: '25px' }} data-for="name">
                                <TextField label='Full Name' color="success" type='text' required='true' name="name" />
                            </div>
                            <div className="col-md-4 multi-horizontal" style={{ marginTop: '25px' }} data-for="email">
                                <TextField label='Your Email' color="success" type="email" required='true' name="email" />
                            </div>
                        </div>
                        <div className="md-4 multi-horizontal" data-for="message">
                            <TextField style={{ marginTop: '25px', width: '90%' }} multiline rows={4} label='Message' color='success' type="text" focused required='true' name="message" />
                        </div>
                        <div className="center">
                            <button href="" type="submit" value='Send' className="btn my-4 justify-content-center" style={{ color: 'white', backgroundColor: '#2B8C79', borderRadius: '5px' }}>SEND</button>
                        </div>
                    </form>
                </div>
                <div className="" style={{ minWidth: '50%', maxWidth: '100%', height: '500px' }}>
                    <img src={image1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="" alt="Responsive" />
                </div>
            </div>
        </div>
    )
}

export default Contact2;
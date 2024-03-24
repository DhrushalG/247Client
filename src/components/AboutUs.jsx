import { Link } from 'react-router-dom';
import image2 from "../images/image2.jpeg";
import IDPH from '../images/IDPH_Licensing.png'
import '../static/App.css';
import { Button } from '@mui/material';

const AboutUs = () => {
    return (
        <div className="AboutUs d-flex flex-wrap justify-content-center align-items-center text-center p-5" style={{ height: '100%', width: '100%' }}>
            <title>24/7 AssureCare - About Us</title>

            <div style={{ width: '50%', minWidth: '350px' }}>
                <img src={image2} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} class="" alt="Responsive" />
            </div>
            <div className="p-3" style={{ width: '50%', minWidth: '350px' }}>
                <h2 className="">GET TO KNOW US</h2>
                <p className='text-justify'>
                    As a company founded by a family with over 25 years of combined care
                    giving experience, we understand that caring for a loved one can be a
                    challenging and emotional journey. That's why we're here to offer our
                    compassionate and professional caregiving services to families in need.
                    24/7 Assure Care’s team of experienced caregivers is dedicated to providing
                    personalized care and support to each of our clients, with a focus on
                    enhancing their quality of life and promoting their independence. Whether
                    you need assistance with daily living activities, medication management, or
                    just a friendly companion, we're here to help. Our services are available on
                    a flexible schedule, including live-in and hourly options, so you can choose
                    the level of care that best fits your needs.
                </p>
            </div>

            <div className='p-3 text-center' style={{ width: '80%', minWidth: '350px' }}>
                <h2 class="">WHY CHOOSE 24/7 ASSURE CARE?</h2>
                <p class="">Our agency is founded by a pair of experienced caregivers who understand
                    that each client requires personalized care. When choosing a caregiver for each client, we take deep consideration into
                    compatibility based on client needs and preferences. Offering 24 hour services including holidays and weekends, you and
                    your loved one can relax knowing 24/7 Assure Care is there.</p>
                <div className="d-flex align-items-center">
                <Button variant='contained' style={{ backgroundColor: '#1b8c79' }}>
                    <Link className='' style={{ textDecoration: 'none', backgroundColor: '#1b8c79', color: 'white' }} to='/Services'>
                        Our Services
                    </Link>
                </Button>
                <Button variant='contained' className='ml-3' style={{ backgroundColor: '#1b8c79'}}>
                    <Link className='' style={{ textDecoration: 'none', backgroundColor: '#1b8c79', color: 'white' }} to='/Contact'>
                        Contact
                    </Link>
                </Button>
                </div>
            </div>
            <div className='px-1 d-flex justify-content-end align-self-end' style={{ width: '50%', minWidth: '350px' }}>
                <h5 className=''>*Licensed by
                    <img className='ml-3' src={IDPH} style={{ width: '100px', objectFit: 'contain' }} class="" alt="Responsive" />
                </h5>
            </div>
        </div>
    )
}

export default AboutUs;
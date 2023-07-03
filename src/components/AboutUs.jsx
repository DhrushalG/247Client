import { Link } from 'react-router-dom';
import image3 from "../images/image3.jpeg";

import '../static/App.css';

const AboutUs = () => {
    return (
        <div className="AboutUs d-flex text-center" style={{ height: '100%', width: '100%' }}>
            <div className="p-4" style={{ width: '50%' }}>
                <h2 className="">GET TO KNOW US</h2>
                <label htmlFor="">
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
                </label>

                <div class="row align-items-center">
                    <div class="">
                        <h2 class="">Why choose 24/7 Assure Care?</h2>
                        <p class="">Our agency is founded by a pair of experienced caregivers who understand
                            that each client requires personalized care. When choosing a caregiver for each client, we take deep consideration into
                            compatibility based on client needs and preferences. Offering 24 hour services including holidays and weekends, you and
                            your loved one can relax knowing 24/7 Assure Care is there.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Link className='btn rounded-pill m-4' style={{ backgroundColor: '#2B8C79', color: 'white' }} to='/Services'>Our Services</Link>
                    <Link className='btn rounded-pill m-4' style={{ backgroundColor: '#2B8C79', color: 'white' }} to='/Contact'>Contact</Link>
                </div>
            </div>

            <div style={{ width: '50%', backgroundColor: '#2B8C79' }}>
                <img src={image3} style={{ width: '100%', height: '100%', objectFit: 'cover' }} class="" alt="Responsive image" />
            </div>
        </div>
    )
}

export default AboutUs;
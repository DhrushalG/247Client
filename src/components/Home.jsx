import { Link } from 'react-router-dom';
import '../static/App.css';
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";
import image6 from "../images/image6.jpg";
import { Button } from '@mui/material';

const Home = () => {

    const sections = [
        {
            title: 'MISSION',
            description:
                'Respectfully and compassionately meet the needs of our client and their families, by listening, planning, educating, and delivering the highest quality of individualized care.',
        },
        {
            title: 'VISION',
            description:
                'Create and sustain a leading high-quality service that supports individuals to live as independently as possible in the comfort of their own homes.',
        },
        {
            title: 'PROMISE',
            description:
                '24/7 AssureCare LLC is a home care agency that provides high-quality care services to individuals who need assistance with daily living activities. We specialize in providing care to seniors, individuals with disabilities, & those in recovery from illness or surgery.',
        },
    ];

    const Section = ({ title, description }) => (
        <div className='d-flex align-items-center'>
            <h3>{title}</h3>
            <label className=' mx-3 py-4'>{description}</label>
        </div>
    );

    const needs = [
        'Needs aid post-operation, hospitalization, or rehabilitation',
        'Lives alone and is at risk of falls or injury',
        'Disabled or uses a wheelchair, walker or cane',
        'Just needs help with daily living activities'
    ];

    return (
        <div class='Home d-flex flex-column align-items-center text-center'>
            <title>24/7 AssureCare - Home</title>
            <div className="" style={{ width: '100%', height: '500px', backgroundColor: '#1b8c79' }} >
                <img src={image3} style={{ width: '100%', height: '100%', objectFit: 'cover' }} class="" alt="Responsive" />
            </div>
            <h2 className='mt-4 mb-2'>PROVIDING EXCELLENT CARE YOU DESERVE</h2>
            <p>OUR SERVICE ARE IN THE FOLLOWING COUNTIES: <br /> Cook - DuPage - Lake</p>

            <div className="mt-4 d-flex flex-wrap justify-content-center" style={{ width: '100%', height: '100%' }}>
                <div className=" p-4" style={{ width: '50%', minWidth: '350px' }}>
                    <h2 className=''>OUR CLIENTS ARE OUR M.V.P.</h2>
                    <div className='p-2'>
                        {sections.map((section, index) => (
                            <Section key={index} {...section} />
                        ))}
                    </div>
                    <Button variant='contained' className='ml-3' style={{ backgroundColor: '#1b8c79'}}>
                        <Link className='' style={{ textDecoration: 'none', backgroundColor: '#1b8c79', color: 'white' }} to='/AboutUs'>
                            About Us
                        </Link>
                    </Button>
                </div>

                <div className="" style={{ width: '50%', minWidth: '350px' }}>
                    <img src={image6} className='' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} alt="Responsive" />
                </div>

                <div className=" " style={{ width: '50%', minWidth: '350px' }}>
                    <img src={image4} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} alt="Responsive" />
                </div>

                <div className='p-4' style={{ width: '50%', minWidth: '350px' }}>
                    <div className='pt-4 d-flex flex-column justify-content-center' style={{ height: '75%' }}>
                        <h2 className='mt-4 mb-2'>WHO NEEDS OUR SUPPORTIVE SERVICES?</h2>
                        {needs.map((need, index) => (
                            <h5 className='my-2' key={index}>{need}</h5>
                        ))}
                        <div className='mt-2'>
                            <Button variant='contained' style={{ backgroundColor: '#1b8c79' }}>
                                <Link className='' style={{ textDecoration: 'none', backgroundColor: '#1b8c79', color: 'white' }} to='/Services'>
                                    Our Services
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
import { Link } from 'react-router-dom';
import '../static/App.css';
import image1 from "../images/image1.jpeg";
import image3 from "../images/image3.jpeg";
import image5 from "../images/image5.jpeg";

const Home = () => {
    return (
        <div class='Home d-flex flex-column align-items-center text-center'>
            <title>24/7 AssureCare - Home</title>
            {/* <h2>24/7 Assure Care LLC</h2> */}
            {/* <h2 style={{ color: 'white' }}>24/7 Assure Care LLC</h2> */}
            <div className="" style={{ width: '100%', height: '200px', backgroundColor: '#2B8C79' }} >
                <img src={image1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} class="" alt="Responsive" />
            </div>
            <div>
                <h2 className='mt-4 mb-2'>Providing Excellent Care you Deserve</h2>
                <h4>Our services are in the following counties: <br />
                    Cook - DuPage - Lake</h4>
            </div>
            <div className="my-4" style={{ width: '100%', height: '100%' }}>
                <div className="d-flex" style={{}}>
                    <div className="p-4" style={{ width: '50%', minHeight: '50%' }}>
                        <h2 className=''>Our clients are our M.V.P</h2>
                        <div className='p-2'>
                            <div className='d-flex align-items-center'>
                                <h3 className=''>Mission</h3>
                                <label className='p-3'>
                                    Respectfully and compassionately meet the needs of our client and their families, by listening,
                                    planning, educating, and delivering the highest quality of individualized care.
                                </label>
                            </div>
                            <div className='d-flex align-items-center'>
                                <h3>Vision</h3>
                                <label className='p-3'>
                                    Create and sustain a leading high-quality service that supports individuals to live
                                    as independently as possible in the comfort of their own homes.
                                </label>
                            </div>
                            <div className='d-flex align-items-center'>
                                <h3>Promise</h3>
                                <label className='p-3'>
                                    24/7 AssureCare LLC is a home care agency that provides high-quality care services to
                                    individuals who need assistance with daily living activities. We specialize in
                                    providing care to seniors, individuals with disabilities, & those in recovery from
                                    illness or surgery.
                                </label>
                            </div>
                        </div>
                        <Link className='btn rounded-pill' style={{ backgroundColor: '#2B8C79', color: 'white' }} to='/AboutUs'>About Us</Link>
                    </div>

                    <div className="border" style={{ width: '50%', backgroundColor: '#2B8C79' }}>
                        <img src={image3} className='' style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Responsive" />
                    </div>
                </div>

                <div className="d-flex" style={{ minHeight: '50%' }}>
                    <div className="" style={{ width: '50%' }}>
                        <img src={image5} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Responsive" />
                    </div>

                    <div className='p-4' style={{ width: '50%' }}>
                        <div className='pt-4 d-flex flex-column justify-content-center' style={{ height: '75%' }}>
                            <h2 className='mb-2'> Who needs our supportive services?</h2>
                            <h5 className='my-2'>Needs aid post-operation, hospitlaization, or rehabilitation</h5>
                            <h5 className='my-2'>Lives alone and is at risk of falls or injury</h5>
                            <h5 className='my-2'>Disabled or uses a wheelchair, walker or cane</h5>
                            <h5 className='my-2'>Or they just need help with daily living activities</h5>
                            <div className='mt-2'>
                                <Link className='btn rounded-pill' style={{ backgroundColor: '#2B8C79', color: 'white' }} to='/Services'>Our Services</Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
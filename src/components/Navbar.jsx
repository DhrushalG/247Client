import { Link } from "react-router-dom";
import Logo from '../images/logo.jpg';

const Navbar = () => {
    return (
        <nav class='navbar-fixed navbar-dark navbar-expand' style={{ backgroundColor: '#1B8C79' }}>
            <div class='navbar-nav align-items-center d-flex justify-content-between' >

                <div className=' d-flex align-items-center' style={{ minWidth: '25%' }}>
                    <Link className='nav-link' to='/'>
                        <img src={Logo} className='p-1' alt='' style={{ backgroundColor: 'white', boxShadow: '50px -165px 40px 160px rgba(30, 158, 130, 1)', borderRadius: '10px' }} />
                    </Link>
                    <Link class=' mt-2 nav-link h5' to='/'>
                        24/7 Assure Care
                    </Link>
                </div>

                <div class='d-flex flex-wrap justify-content-center ' style={{ minWidth: '50%' }}>
                    <Link class='nav-link mx-2' to='/AboutUs'>About Us</Link>
                    <Link class='nav-link mx-2 ' to='/Services'>Services</Link>
                    <Link class='nav-link mx-2 ' to='/Contact'>Contact Us</Link>
                    <Link class='nav-link mx-2' to='/Resources'>Resources</Link>
                </div>

                <div className='d-flex justify-content-end px-3' style={{ minWidth: '25%' }}>
                    <label>847-483-8999</label>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
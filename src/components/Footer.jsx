import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="d-flex flex-column align-items-end">
            <div class='row' style={{ width: '100%' }}>
                <div class='col-4 col-md mr-5'>
                    <h5>Resources</h5>
                    <ul class='list-unstyled text-small'>
                        <li><Link class='text-muted' to='/Resources'>FAQ</Link></li>
                        <li><Link class='text-muted' to='/Contact'>Form</Link></li>
                        <li><Link class='text-muted' to='/Privacy-policy'>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div class='col-4 col-md ml-5'>
                    <h5>About</h5>
                    <ul class='list-unstyled text-small'>
                        <li><Link class='text-muted' to='/AboutUs'>About Us</Link></li>
                        <li><Link class='text-muted' to='/Services'>Services</Link></li>
                    </ul>
                </div>
            </div>

            <div class='text-center'>
                <small class='text-muted'>&copy; 2023 by 24/7 Assure Care LLC - All rights reserved.</small>
            </div>
        </div>
    )
}

export default Footer;
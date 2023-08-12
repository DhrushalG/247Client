import { Link } from "react-router-dom";

const Footer = () => {
    return (
        // <footer class='container py-5' style={{ minWidth: '100%' }}>
        <div class='row'>
            <div class='col-3 col-md'>
                <small class='d-block mb-3 text-muted'>&copy; 2023 by 24/7 Assure Care LLC - All rights reserved.</small>
            </div>
            <div class='col-3 col-md'>
                <h5>Resources</h5>
                <ul class='list-unstyled text-small'>
                    <li><Link class='text-muted' to='/Resources'>FAQ</Link></li>
                    <li><Link class='text-muted' to='/Contact'>Form</Link></li>
                </ul>
            </div>
            <div class='col-3 col-md'>
                <h5>About</h5>
                <ul class='list-unstyled text-small'>
                    <li><Link class='text-muted' to='/AboutUs'>About Us</Link></li>
                    <li><Link class='text-muted' to='/Services'>Services</Link></li>
                </ul>
            </div>
        </div>
        // </footer>
    )
}

export default Footer;
import '../static/App.css';
import image1 from "../images/image1.jpeg";

const Contact = () => {
    return (
        <div className="Contact text-center">
            <div className="" style={{ height: '150px' }}>
                <h3 className="my-4">CONTACT US</h3>
                <h5>9375 Landings Ln, Des Plaines, IL 60016, USA </h5>
                <h5>Assurecare247@gmail.com</h5>
                <h5>847-483-8999</h5>
            </div>
            <div className="" style={{ width: '100%', height: '600px' }}>
                <img src={image1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} class="" alt="Responsive" />
            </div>
        </div>
    )
}

export default Contact;
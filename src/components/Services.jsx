
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";

import '../static/App.css';
import { Bento, Accessibility, Iron, Bathtub, SelfImprovement, LocalMall, Medication } from '@mui/icons-material';

const Services = () => {
    return (
        <div className="text-center" style={{ width: '100%' }}>
            <title>24/7 AssureCare - Services</title>
            <div style={{ color: '#2B8C79' }}>
                <h2 className="mt-4">OUR SERVICES</h2>
                <p>Quality Guranteed</p>
            </div>

            <div className="" style={{ backgroundColor: '#2B8C79', color: 'white' }}>
                <div className="d-flex flex-wrap justify-content-center" style={{ height: '50%' }}>
                    <div className="" style={{ width: '34%', minWidth: '475px' }}>
                        <img src={image2} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Responsive" />
                    </div>

                    <div className="p-4" style={{ width: '33%', minWidth: '450px' }}>
                        <h4 className="mt-2">24-HOUR LIVE-IN</h4>
                        <label>
                            Our caregivers can provide around-the-clock care and support, living with
                            your loved one in their home and providing assistance with daily living
                            activities, medication management, meal preparation, light housekeeping,
                            and more. This service is ideal for those who need constant supervision or
                            who prefer the comfort of having a caregiver present at all times.
                        </label>

                    </div>

                    <div className="" style={{ width: '33%', minWidth: '475px' }}>
                        <img src={image3} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Responsive" />
                    </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center" style={{ height: '50%' }}>

                    <div className="p-4" style={{ width: '34%', minWidth: '450px' }}>
                        <h4 className="mt-4">DAILY LIVING ACTIVITY</h4>
                        <label htmlFor="">
                            Our caregivers can assist in daily activities by helping your loved one
                            in most tasks with minimal interference to help maintain their independence
                            and dignity.</label>
                    </div>

                    <div className="" style={{ width: '33%', minWidth: '475px' }}>
                        <img src={image4} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Responsive" />
                    </div>
                    <div className="p-4" style={{ width: '33%', minWidth: '450px' }}>
                        <h4 className="mt-2">COMPANIONSHIP & SUPERVISION</h4>
                        <label htmlFor="">
                            Our caregivers can provide companionship and supervision to help your loved one stay
                            socially engaged and mentally stimulated, while also ensuring their safety and
                            wellbeing. We will also accompany your loved one to appointments and events,
                            providing transportation and assistance as needed, to ensure they can continue to
                            participate in the activities they enjoy.
                        </label>
                    </div>
                </div>
            </div>

            <div className="p-4 d-flex flex-wrap justify-content-around" style={{ backgroundColor: '#1B8A79', color: 'white' }}>
                <div className="p-4 mx-5" style={{ width: '250px' }}>
                    <div className="mt-4">
                        <Bento class='icon'></Bento>
                    </div>
                    <h4 className="">MEAL PREP</h4>
                    <label htmlFor="">
                        Our caregivers can prepare nutritious meals tailored to your loved one's dietary needs and preferences,
                        ensuring they get the nourishment they need to stay healthy.
                    </label>
                </div>
                <div className="p-4 mx-5" style={{ width: '250px' }}>
                    <div className="mt-4">
                        <LocalMall class='icon'></LocalMall>
                    </div>
                    <h4 className="">SHOPPING & ERRANDS</h4>
                    <label htmlFor="">
                        Our caregivers can assist with shopping and other errands, such as picking up prescriptions or
                        dropping off mail, so your loved one can focus on enjoying their day.
                    </label>
                </div>
                <div className="p-4 mx-5" style={{ width: '250px' }}>
                    <div className="mt-4">
                        <SelfImprovement class='icon'></SelfImprovement>
                    </div>
                    <h4>EXERCISE</h4>
                    <label htmlFor="">
                        Our caregivers can help your loved one stay active and healthy with light exercise
                        and movement, tailored to their abilities and preferences.</label>
                </div>
                <div className="p-4 mx-5" style={{ width: '250px' }}>
                    <div className="mt-4">
                        <Medication class='icon'></Medication>
                    </div>
                    <h4 className="">MEDICATION REMINDERS</h4>
                    <label htmlFor="">
                        Our caregivers can help your loved one manage their medications, reminding them when it's
                        time to take their pills and ensuring they're taking them as prescribed.
                    </label>
                </div>
                <div className="p-4 mx-5" style={{ width: '250px' }}>
                    <div className="mt-4">
                        <Accessibility class='icon'></Accessibility>
                    </div>
                    <h4 className="">LIFTING/AMBULATION & TRANSFER</h4>
                    <label htmlFor="">
                        Our caregivers can assist with lifting, ambulation, and transfers utilizing specialized
                        techniques to ensure your loved one stays safe and comfortable.
                    </label>
                </div>
                <div className="p-4 mx-5" style={{ width: '250px' }}>
                    <div className="mt-4">
                        <Iron class='icon'></Iron>
                    </div>
                    <h4 className="">LIGHT HOUSEKEEPING</h4>
                    <label htmlFor="">
                        Our caregivers can help with light housekeeping tasks, such as dusting, vacuuming,
                        and laundry, to keep your loved one's home clean and comfortable.
                    </label>
                </div>
                <div className="p-4 mx-5" style={{ width: '250px' }}>
                    <div className="mt-4">
                        <Bathtub class='icon'></Bathtub>
                    </div>
                    <h4 className="">BATHING & DRESSING</h4>
                    <label htmlFor="">
                        Our caregivers can provide assistance with bathing, grooming, and dressing,
                        ensuring your loved one looks and feels their best.
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Services;
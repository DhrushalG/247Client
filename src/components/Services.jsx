import React from 'react';

import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";

import '../static/App.css';
import { Bento, Accessibility, Iron, Bathtub, SelfImprovement, LocalMall, Medication } from '@mui/icons-material';

const Services = () => {

    const services = [
        {
            image: image7,
            title: '24-HOUR LIVE-IN',
            description:
                'Our caregivers can provide around-the-clock care and support, living with your loved one in their home and providing assistance with daily living activities, medication management, meal preparation, light housekeeping, and more. This service is ideal for those who need constant supervision or who prefer the comfort of having a caregiver present at all times.',
        },
        {
            image: image8,
            title: 'DAILY LIVING ACTIVITY',
            description:
                'Our caregivers can assist in daily activities by helping your loved one in most tasks with minimal interference to help maintain their independence and dignity.',
        },
        {
            image: image9,
            title: 'COMPANIONSHIP & SUPERVISION',
            description:
                'Our caregivers can provide companionship and supervision to help your loved one stay socially engaged and mentally stimulated, while also ensuring their safety and wellbeing. We will also accompany your loved one to appointments and events, providing transportation and assistance as needed, to ensure they can continue to participate in the activities they enjoy.',
        },
    ];

    const otherServices = [
        {
            icon: Bento,
            title: 'MEAL PREP',
            description:
                "Our caregivers can prepare nutritious meals tailored to your loved one's dietary needs and preferences, ensuring they get the nourishment they need to stay healthy."
        },
        {
            icon: LocalMall,
            title: 'SHOPPING & ERRANDS',
            description:
                'Our caregivers can assist with shopping and other errands, such as picking up prescriptions or dropping off mail, so your loved one can focus on enjoying their day.'
        },
        {
            icon: SelfImprovement,
            title: 'EXERCISE',
            description:
                'Our caregivers can help your loved one stay active and healthy with light exercise and movement, tailored to their abilities and preferences.'
        },
        {
            icon: Medication,
            title: 'MEDICATION REMINDERS',
            description:
                "Our caregivers can help your loved one manage their medications, reminding them when it's time to take their pills and ensuring they're taking them as prescribed."
        },
        {
            icon: Accessibility,
            title: 'LIFTING/AMBULATION & TRANSFER',
            description:
                'Our caregivers can assist with lifting, ambulation, and transfers utilizing specialized techniques to ensure your loved one stays safe and comfortable.'
        },
        {
            icon: Iron,
            title: 'LIGHT HOUSEKEEPING',
            description:
                'Our caregivers can help with light housekeeping tasks, such as dusting, vacuuming, and laundry, to keep your loved one\'s home clean and comfortable.'
        },
        {
            icon: Bathtub,
            title: 'BATHING & DRESSING',
            description:
                'Our caregivers can provide assistance with bathing, grooming, and dressing, ensuring your loved one looks and feels their best.'
        }
    ];

    const ServiceUpper = ({ image, title, description }) => (
        <div className="p-4" style={{ width: '33.3%', minWidth: '350px' }}>
            <h4 className={title === '24-HOUR LIVE-IN' ? 'mt-2' : 'mt-4'}>{title}</h4>
            <label>{description}</label>
        </div>
    );

    const ServiceLower = ({ icon: Icon, title, description }) => (
        <div className="p-4 mx-5" style={{ width: '250px' }}>
            <div className="mt-4">
                <Icon class='icon' />
            </div>
            <h4>{title}</h4>
            <label htmlFor="">{description}</label>
        </div>
    );

    return (
        <div className="text-center" style={{ height: '100%', width: '100%' }}>
            <title>24/7 AssureCare - Services</title>
            <div style={{ color: '#2B8C79' }}>
                <h2 className="mt-4">OUR SERVICES</h2>
                <p>Quality Guranteed</p>
            </div>

            <div className="" style={{ backgroundColor: '#2B8C79', color: 'white' }}>
                <div className="d-flex flex-wrap justify-content-center" style={{ height: '50%' }}>
                    {services.map((service, index) => (
                        <React.Fragment key={index}>
                            <div className="" style={{ width: '33.3%', minWidth: '350px' }}>
                                <img src={service.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Responsive" />
                            </div>
                            <ServiceUpper {...service} />
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="p-4 d-flex flex-wrap justify-content-around" style={{ backgroundColor: '#1B8A79', color: 'white' }}>
                {otherServices.map((service, index) => (
                    <ServiceLower {...service} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Services;
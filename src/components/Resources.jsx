import '../static/App.css';
import image5 from "../images/image5.jpg";

const Resources = () => {
    return (
        <div className="Resources text-center">
            <title>24/7 AssureCare - Resources</title>
            <div className="" style={{ height: '400px', width: '100%' }}>
                <img src={image5} style={{ width: '100%', height: '100%', objectFit: 'cover' }} class="" alt="Responsive" />
            </div>
            <div>
                <div className=" d-flex flex-wrap justify-content-around p-4" style={{}}>
                    <div className="my-2 mx-5" style={{ width: '350px' }}>
                        <h4 className="my-4">
                            IS THERE A MINIMUM LENGTH OF TIME THAT I CAN REQUEST CARE FOR MY LOVED ONE?</h4>
                        <label htmlFor="">
                            If you need someone for 1 day, or 365 days, we can take care of you. It’s in our name
                            and we work to that standard.
                        </label>
                    </div>
                    <div className="my-2 mx-5" style={{ width: '350px' }}>
                        <h4 className="my-4">
                            WHAT KIND OF PAYMENTS DOES YOUR AGENCY ACCEPT?</h4>
                        <label htmlFor="">
                            The cost of our services varies depending on the level of care needed and the location.
                            We offer competitive rates and accept a variety of payment methods, including checks
                            and Zelle.
                        </label>
                    </div>
                    <div className="my-2 mx-5" style={{ width: '350px' }}>
                        <h4 className="my-4">
                            HOW DOES 24/7 ASSURE CARE ENSURE THE SAFETY OF CLIENTS?
                        </h4>
                        <label htmlFor="">
                            We take the safety and well-being of our clients very seriously. We have protocols
                            in place to ensure that our caregivers follow proper hygiene and infection control
                            practices, and we regularly monitor the care being provided.
                        </label>
                    </div>
                    <div className="my-2 mx-5" style={{ width: '350px' }}>
                        <h4 className="my-4">
                            DO YOU PROVIDE WOUND CARE OR ANY MEDICAL SERVICES?</h4>
                        <label htmlFor="">
                            Unfortunately, we do not provide medical care, as we are a home care agency and not a home
                            health agency. The tasks of a home health aide are not drastically different from that of
                            a caregiver, but our staff is not required to have the additional medical training outside
                            of basic life support and emergency procedure training. Although we can't provide these
                            services to you directly we can refer you to the right location.
                        </label>
                    </div>
                    <div className="my-2 mx-5" style={{ width: '350px' }}>
                        <h4 className="my-4">
                            HOW DOES 24/7 ASSURE CARE HANDLE EMRGENCIES?</h4>
                        <label htmlFor="">
                            We have protocols in place to handle emergencies, including medical emergencies and severe
                            weather conditions. All our caregivers are trained to respond quickly and appropriately in
                            these situations.
                        </label>
                    </div>
                    <div className="my-2 mx-5" style={{ width: '350px' }}>
                        <h4 className="my-4">
                            WHAT IF THE CAREGIVER I AM ASSIGNED ISN'T A GOOD FIT?</h4>
                        <label htmlFor="">
                            At 24/7 Assure Care, we steer our focus on finding you or your loved one the right
                            caregiver for their needs. If there is ever an issue with a current caregiver, we are
                            more than happy to re-assess needs and try something different.
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources;
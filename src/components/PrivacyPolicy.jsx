const PrivacyPolicy = () => {
    return (
        <div className="PrivacyPolicy d-flex justify-content-center mt-4" style={{ height: '500px' }}>
            <div style={{ width: '30%' }}></div>
            <div className="text-center mb-5" style={{ width: '80%', height: '300px' }}>
                <h2 style={{ marginBottom: '15px' }}>Privacy Policy</h2>
                <p>
                    We collect your name and email address through the contact form on this website
                    for the sole purpose of responding to your inquiries. We do not store this
                    information on our website, and it is only used to communicate with you.
                </p>
                <p>
                    Your data is transmitted securely, and we take measures to protect it. We do not
                    share this information with third parties.
                </p>
                <p>
                    If you have any questions or concerns about the privacy of your data, please
                    contact us at [your contact information phone/email].
                </p>
            </div>
            <div style={{ width: '30%' }}></div>
        </div>
    )
}

export default PrivacyPolicy;
import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact">
                    <h2 className="contact__heading">I can help.</h2>
                    <h3 className="contact__subheading">I’m available for full-time job or freelance work.</h3>
                    <div className="contact__description">If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</div>
                    <a href="mailto:franjo.djido@outlook.com" className="btn btn-lg btn-primary">Message me</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;
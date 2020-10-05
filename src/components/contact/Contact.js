import React from 'react'

function Contact() {
    return (
        <section id="contact">
            <div className="inner text-white">
                <section>
                    <form method="post" action="#">
                        <div className="fields">
                            <div className="field half">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="field half">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label for="message">Message</label>
                                <textarea name="message" id="message" rows="6"></textarea>
                            </div>
                        </div>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" className="primary" /></li>
                            <li><input type="reset" value="Clear" /></li>
                        </ul>
                    </form>
                </section>
                <section className="split">
                    <section>
                        <div className="contact-method">
                            <span className="icon solid alt fa-envelope"></span>
                            <h3>Email</h3>
                            <a href="#">avinashkumar906@gmail.com</a>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon solid alt fa-phone"></span>
                            <h3>Phone</h3>
                            <span>(+91) 880 239 3238</span>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon solid alt fa-home"></span>
                            <h3>Address</h3>
                            <span>H No G68, Badarpur,<br />
                            New Delhi, India</span>
                        </div>
                    </section>
                </section>
            </div>
        </section>    
    )
}

export default Contact

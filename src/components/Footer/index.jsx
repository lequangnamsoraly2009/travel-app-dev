import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { Form , Button } from 'reactstrap';

function Footer(props) {
    return (
        <div className="footer__container">
             <section className="footer__subscription">
                 <p className="footer__subscription-heading">
                     Join the Adventure newsletter to receive
                 </p>
                 <p className="footer__subscription-text">
                     You can unsubscribe at any time
                 </p>
                 <div className="footer__subscription-input__ares">
                     <Form>
                         <input type="email" name="email" placeholder="Your Email" className="footer__input"/>
                         <Button className="primary">Subscribe</Button>
                     </Form>
                 </div>
             </section>
             <div className="footer__links">
                 <div className="footer__links-wrapper">
                     <div className="footer__links-items">
                         <h2>About Us</h2>
                         <Link to='/' >My Team</Link>
                         <Link to='/' >Support</Link>
                         <Link to='/' >My Leader</Link>
                     </div>
                     <div className="footer__links-items">
                         <h2>Social Media</h2>
                         <Link to='/' >FaceBook</Link>
                         <Link to='/' >Telegram</Link>
                         <Link to='/' >Instagram</Link>
                     </div>
                 </div>
                 <div className="footer__links-wrapper">
                     <div className="footer__links-items">
                         <h2>About Us</h2>
                         <Link to='/' >My Team</Link>
                         <Link to='/' >Support</Link>
                         <Link to='/' >My Leader</Link>
                     </div>
                     <div className="footer__links-items">
                         <h2>Social Media</h2>
                         <Link to='/' >FaceBook</Link>
                         <Link to='/' >Telegram</Link>
                         <Link to='/' >Instagram</Link>
                     </div>
                 </div>
             </div>
             <div className="footer__footer">
                <small className="footer__footer-rights">
                        Soraly <i class="far fa-copyright"></i> 2020
                </small>
             </div>
        </div>
    );
}

export default Footer;
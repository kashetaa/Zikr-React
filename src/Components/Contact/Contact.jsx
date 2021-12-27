import React from 'react';
import logo from '../../assets/images/logo.jpg';
import Footer1 from '../../assets/images/footer-image-4.jpg';
import Footer2 from '../../assets/images/footer-image-5.jpg';
import Footer3 from '../../assets/images/footer-image-6.jpg';
import Footer4 from '../../assets/images/footer-image-7.jpg';

class Contact extends React.Component {
  render() {
    return (
      <section id="contacts" class="contact mt-5">
        <div class="container">
          <div class="row news">
            <div id="holder">
              <div id="mask"></div>
              <div id="mask1"></div>
            </div>
            <div class="col-sm-12 col-xs-12 news-color">
              <div class="col-md-5 col-md-offset-1 col-sm-6 col-xs-12">
                <div class="col-sm-2 news-icon p-0">
                  <i class="fa fa-paper-plane"></i>
                </div>
                <div class="col-sm-10 news-text p-0">
                  <h3>Sign Up for Newsletter</h3>
                  <p>
                    If you sign up for newsletter you’ll not fail to get our
                    update.
                  </p>
                </div>
              </div>
              <div class="col-md-5 col-md-offset-1 col-sm-6 col-xs-12 border2">
                <div class="newsletter">
                  <form action="#">
                    <div class="input-group">
                      <input
                        type="email"
                        class="form-controls"
                        placeholder="Your E-mail Here"
                      />
                      <span class="input-group-btn">
                        <a class="button-form">Submit</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="contact-logo">
                <a href="index.html">
                  <a href="index.html">
                    <img src={logo} class="img-responsive logo" alt="img" />
                  </a>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consecteturlit, sed do eiusmod
                  tempor incididunt ut abore et dolore magna aliqua. Amar sonar
                  Bangla ami tomay Valobashi.
                </p>
              </div>
              <div class="cont-icon">
                <h4>Follow Us:</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="contact-address footer-common p-0">
                <h5>Get in Touch</h5>
                <ul>
                  <li>
                    <p>
                      <a href="#">
                        <i class="fa fa-phone"></i>
                      </a>
                      (+12) 345 678 123, (+34) 564 123 5678
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                      www.Zikr.com, www.llearn.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">
                        <i class="fa fa-globe"></i>
                      </a>
                      www.Zikr.com, www.llearn.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#">
                        <i class="fa fa-print"></i>
                      </a>
                      (+12) 345 678 123, (+34) 564 123 5678
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-2 col-sm-6">
              <div class="contact-links footer-common">
                <h5>Important Links</h5>
                <ul class="col-sm-6 p-0">
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>courses
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>testimonial
                    </a>
                  </li>
                </ul>
                <ul class="col-sm-6 p-0">
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Instructor
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
              <div class="contact-news footer-common">
                <h5> Photos</h5>
                <ul>
                  <li>
                    <img src={Footer1} class="img-responsive" alt="#" />
                  </li>
                  <li>
                    <img src={Footer2} class="img-responsive" alt="#" />
                  </li>
                  <li>
                    <img src={Footer3} class="img-responsive" alt="#" />
                  </li>
                  <li>
                    <img src={Footer4} class="img-responsive" alt="#" />
                  </li>
                  <li>
                    <img src={Footer2} class="img-responsive" alt="#" />
                  </li>
                  <li>
                    <img src={Footer1} class="img-responsive" alt="#" />
                  </li>
                  <li>
                    <img src={Footer4} class="img-responsive" alt="#" />
                  </li>
                  <li>
                    <img src={Footer3} class="img-responsive" alt="#" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

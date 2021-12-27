import React from 'react';
import Headingicon from '../../assets/images/heading-icon.png';
import testimonial1 from '../../assets/images/testimonial-feedback-image-1.jpg';
import testimonial2 from '../../assets/images/testimonial-feedback-image-2.jpg';
import testimonial3 from '../../assets/images/testimonial-feedback-image-2.jpg';
import testimonial4 from '../../assets/images/testimonial-feedback-image-1.jpg';
class Mission extends React.Component {
  render() {
    return (
      <section id="mission" class="we-offer common">
        <div class="container">
          <div class="header">
            <h2>Our Missions</h2>
            <img src={Headingicon} class="img-responsive" alt="#" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="offer-section">
                <div class="border">
                  <div class="mask2"></div>
                  <div class="mask3"></div>
                </div>
                <img src={testimonial1} class="img-responsive" alt="img" />
                <h4>Saleem</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the prining and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="offer-section">
                <div class="border">
                  <div class="mask2"></div>
                  <div class="mask3"></div>
                </div>
                <img src={testimonial2} class="img-responsive" alt="img" />
                <h4>Salma</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the prining and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="offer-section">
                <div class="border">
                  <div class="mask2"></div>
                  <div class="mask3"></div>
                </div>
                <img src={testimonial3} class="img-responsive" alt="img" />
                <h4>Salma</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the prining and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="offer-section">
                <div class="border">
                  <div class="mask2"></div>
                  <div class="mask3"></div>
                </div>
                <img src={testimonial4} class="img-responsive" alt="img" />
                <h4>Saleem</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the prining and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Mission;

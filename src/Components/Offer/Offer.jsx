import React from 'react';
import Headingicon from '../../assets/images/heading-icon.png';
import Book from '../../assets/images/Book.png';
import Certificate from '../../assets/images/certificate.png';
import Daimond from '../../assets/images/diamond.png';
import Scholar from '../../assets/images/scholar.png';

class Vision extends React.Component {
  render() {
    return (
      <section id="offer" class="we-offer common">
        <div class="container">
          <div class="header">
            <h2>We Offer</h2>
            <img src={Headingicon} class="img-responsive" alt="#" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="offer-section">
                <div class="border">
                  <div class="mask2"></div>
                  <div class="mask3"></div>
                </div>
                <img src={Scholar} class="img-responsive" alt="img" />
                <h4>Surah of Holy Quran</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the prining and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="offer-section">
                <div class="border">
                  <div class="mask2"></div>
                  <div class="mask3"></div>
                </div>
                <img src={Book} class="img-responsive" alt="img" />
                <h4>The Real Hadiths</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the prining and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="offer-section">
                <div class="border">
                  <div class="mask2"></div>
                  <div class="mask3"></div>
                </div>
                <img src={Daimond} class="img-responsive" alt="img" />
                <h4>Sadaqah Jariyah</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the prining and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="offer-section">
                <div class="border">
                  <div class="mask2"></div>
                  <div class="mask3"></div>
                </div>
                <img src={Certificate} class="img-responsive" alt="img" />
                <h4>Water For Gaza</h4>
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

export default Vision;

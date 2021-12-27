import React from 'react';
import Partner1 from '../../assets/images/logo-new-1.png';
import Partner2 from '../../assets/images/logo-new-2.png';
import Partner3 from '../../assets/images/logo-new-3.png';
import Partner4 from '../../assets/images/logo-new-4.png';
import Partner5 from '../../assets/images/logo-new-5.png';

class Partners extends React.Component {
  render() {
    return (
      <section id="offer" class="we-offer common">
        <div class="header1">
          <h2>Our Mission</h2>
        </div>
        <section id="brand" class="brand-part mt-3">
          <div class="container partnerbg">
            <div class="row">
              <div class="col-md-12">
                <div class="achive-content">
                  <div class="achieve-img">
                    <a href="#">
                      <img src="images/partnre-image-1.jpg" alt="" />
                    </a>
                  </div>
                  <div class="achieve-img">
                    <a href="#">
                      <img src={Partner1} alt="" />
                    </a>
                  </div>
                  <div class="achieve-img">
                    <a href="#">
                      <img src={Partner2} alt="" />
                    </a>
                  </div>
                  <div class="achieve-img">
                    <a href="#">
                      <img src={Partner3} alt="" />
                    </a>
                  </div>
                  <div class="achieve-img">
                    <a href="#">
                      <img src={Partner4} alt="" />
                    </a>
                  </div>
                  <div class="achieve-img">
                    <a href="#">
                      <img src={Partner5} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Partners;

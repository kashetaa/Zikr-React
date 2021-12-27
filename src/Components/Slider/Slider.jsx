import React from 'react';
import slider1 from '../../assets/images/Slider-1.jpg';
import slider2 from '../../assets/images/slider-2.jpg';
import slider3 from '../../assets/images/Slider_4.jpg';

class Slider extends React.Component {
  render() {
    return (
      <section>
        <div
          id="bootstrap-touch-slider"
          class="carousel bs-slider fade control-round indicators-line"
          data-ride="carousel"
          data-pause="hover"
          data-interval="false"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#bootstrap-touch-slider"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#bootstrap-touch-slider" data-slide-to="1"></li>
            <li data-target="#bootstrap-touch-slider" data-slide-to="2"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div
              class="item active single_bnr"
              //   style="background-image: url(images/slider-image-1.jpg)"
            >
              <img src={slider2} alt="" />
              <div class="bs-slider-overlay"></div>

              <div class="container">
                <div class="row">
                  <div class="slide-text slide_style_center">
                    <div class="banner_total text-center">
                      <div id="typed-strings">
                        <h3 data-animation="animated flipInX">Get Knowledge</h3>
                      </div>
                      <span id="typed"></span>
                      <h1 data-animation="animated fadeInUp">
                        Think, Learn Grow
                      </h1>
                      <p>
                        We are the education hub. We can provide you a best
                        service in the sector of education. we will know the
                        world better and can make your futureetter. So, don’t be
                        late just join with our education system from today.
                      </p>
                      <div class="banner_btn">
                        <a
                          class="btn_one"
                          href="#index"
                          data-animation="animated fadeInUp"
                        >
                          read more
                        </a>
                        <a
                          class="btn_two"
                          href="#index"
                          data-animation="animated fadeInDown"
                        >
                          free trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="item single_bnr">
              <img src={slider1} alt="" />
              <div class="bs-slider-overlay"></div>
              <div class="container">
                <div class="row">
                  <div class="slide-text slide_style_center">
                    <div class="banner_total text-center">
                      <div id="typed-strings">
                        <h3 data-animation="animated flipInX">Get Knowledge</h3>
                      </div>
                      <span id="typed"></span>
                      <h1 data-animation="animated fadeInUp">
                        Think, Learn Grow
                      </h1>
                      <p>
                        We are the education hub. We can provide you a best
                        service in the sector of education. we will know the
                        world better and can make your futureetter. So, don’t be
                        late just join with our education system from today.
                      </p>
                      <div class="banner_btn">
                        <a
                          class="btn_one"
                          href="#index"
                          data-animation="animated fadeInUp"
                        >
                          read more
                        </a>
                        <a
                          class="btn_two"
                          href="#index"
                          data-animation="animated fadeInDown"
                        >
                          free trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="item single_bnr">
              <img src={slider3} alt="" />
              <div class="bs-slider-overlay"></div>

              <div class="container">
                <div class="row">
                  <div class="slide-text slide_style_center">
                    <div class="banner_total text-center">
                      <div id="typed-strings">
                        <h3 data-animation="animated flipInX">Get Knowledge</h3>
                      </div>
                      <span id="typed"></span>
                      <h1 data-animation="animated fadeInUp">
                        Think, Learn Grow
                      </h1>
                      <p>
                        We are the education hub. We can provide you a best
                        service in the sector of education. we will know the
                        world better and can make your futureetter. So, don’t be
                        late just join with our education system from today.
                      </p>
                      <div class="banner_btn">
                        <a
                          class="btn_one"
                          href="#index"
                          data-animation="animated fadeInUp"
                        >
                          read more
                        </a>
                        <a
                          class="btn_two"
                          href="#index"
                          data-animation="animated fadeInDown"
                        >
                          free trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="left carousel-control"
            href="#bootstrap-touch-slider"
            role="button"
            data-slide="prev"
          >
            <span class="fa fa-angle-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>

          <a
            class="right carousel-control"
            href="#bootstrap-touch-slider"
            role="button"
            data-slide="next"
          >
            <span class="fa fa-angle-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Slider;

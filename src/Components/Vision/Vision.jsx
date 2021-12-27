import React, { Component } from 'react';
import Headingicon from '../../assets/images/heading-icon.png';
import Justice from '../../assets/images/Justice.jpg';
import Faith from '../../assets/images/Faith.jpg';

class Vision extends React.Component {
  render() {
    return (
      <section id="classes" class="our-classes common">
        <div class="header">
          <h2>OUR VISION</h2>
          <img src={Headingicon} class="img-responsive" alt="#" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div class="classes-inner">
          <div class="container">
            <div class="row">
              <div class="col-md-12 cls-pad">
                <div class="classes-details">
                  <div class="details-item">
                    <div class="col-md-3 classes-vedio-slick">
                      <div class="classes-vedio">
                        <a class="bla-1" href="#0">
                          <img src={Faith} class="img-responsive" alt="img" />
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3 classes-right">
                      <h4>Faith</h4>

                      <p class="p-b-30">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum as been the industry's
                        standard dummy text ever since the 1500s, when an
                        unknown prinertook a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five
                        centuries.
                      </p>

                      <div class="class-btn text-left">
                        <a class="btn_three" href="#">
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3 classes-vedio-slick">
                      <div class="classes-vedio">
                        <a class="bla-1" href="#0">
                          <img src={Justice} class="img-responsive" alt="img" />
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3  classes-right">
                      <h4>Justice</h4>

                      <p class="p-b-30">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum as been the industry's
                        standard dummy text ever since the 1500s, when an
                        unknown prinertook a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five
                        centuries.
                      </p>
                      <br />

                      <div class="class-btn text-left">
                        <a class="btn_three" href="#">
                          Apply Now
                        </a>
                      </div>
                    </div>

                    <div class="col-md-3 classes-vedio-slick mt-5">
                      <div class="classes-vedio">
                        <a class="bla-1" href="#0">
                          <img src={Justice} class="img-responsive" alt="img" />
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3 classes-right mt-5">
                      <h4>EDUCATION</h4>

                      <p class="p-b-30">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum as been the industry's
                        standard dummy text ever since the 1500s, when an
                        unknown prinertook a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five
                        centuries.
                      </p>

                      <div class="class-btn text-left">
                        <a class="btn_three" href="#">
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3 classes-vedio-slick mt-5">
                      <div class="classes-vedio">
                        <a class="bla-1" href="#0">
                          <img src={Faith} class="img-responsive" alt="img" />
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3  classes-right mt-5">
                      <h4>Action</h4>

                      <p class="p-b-30">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum as been the industry's
                        standard dummy text ever since the 1500s, when an
                        unknown prinertook a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five
                        centuries.
                      </p>
                      <br />

                      <div class="class-btn text-left">
                        <a class="btn_three" href="#">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Vision;

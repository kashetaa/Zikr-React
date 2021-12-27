import React from 'react';
import Headingicon from '../../assets/images/heading-icon.png';
import Instructor_1 from '../../assets/images/insructor-image-1.jpg';
import Instructor_2 from '../../assets/images/insructor-image-2.jpg';
import Instructor_3 from '../../assets/images/insructor-image-3.jpg';
import Instructor_4 from '../../assets/images/insructor-image-4.jpg';
import ShapeOver from '../../assets/images/shape-hover.png';

class Istructor extends React.Component {
  render() {
    return (
      <section id="Instructors" class="our-Instructors common">
        <div class="container">
          <div class="header">
            <h2>OUR EXPERIENCED STAFFS</h2>
            <img src={Headingicon} class="img-responsive" alt="#" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="Instructors-image">
                <img src={Instructor_1} class="img-responsive" alt="img" />
                <div class="work_overlay text-center hidden-xs hidden-sm">
                  <img src={ShapeOver} class="img-responsive" alt="img" />
                </div>
                <div class="res_overlay"></div>
                <div class="work-name">
                  <h4>Merry Guit</h4>
                  <p>Senior Faculty Member</p>
                </div>
                <div class="work-icon">
                  <ul>
                    <li class="fac">
                      <a href="#">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="tweet">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="link">
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="Instructors-image">
                <a href="#">
                  <img src={Instructor_2} class="img-responsive" alt="img" />
                </a>
                <div class="work_overlay text-center hidden-xs hidden-sm">
                  <img src={ShapeOver} class="img-responsive" alt="img" />
                </div>
                <div class="res_overlay"></div>
                <div class="work-name">
                  <h4>Modric Luis</h4>
                  <p>Senior Faculty Member</p>
                </div>
                <div class="work-icon">
                  <ul>
                    <li class="fac">
                      <a href="#">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="tweet">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="link">
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="Instructors-image">
                <a href="#">
                  <img src={Instructor_3} class="img-responsive" alt="img" />
                </a>
                <div class="work_overlay text-center hidden-xs hidden-sm">
                  <img src={ShapeOver} class="img-responsive" alt="img" />
                </div>
                <div class="res_overlay"></div>
                <div class="work-name">
                  <h4>Kovic Jesis</h4>
                  <p>Faculty Member</p>
                </div>
                <div class="work-icon">
                  <ul>
                    <li class="fac">
                      <a href="#">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="tweet">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="link">
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="Instructors-image">
                <a href="#">
                  <img src={Instructor_4} class="img-responsive" alt="img" />
                </a>
                <div class="work_overlay text-center hidden-xs hidden-sm">
                  <img src={ShapeOver} class="img-responsive" alt="img" />
                </div>
                <div class="res_overlay"></div>
                <div class="work-name">
                  <h4>Popy Aktar</h4>
                  <p>Senior Faculty Member</p>
                </div>
                <div class="work-icon">
                  <ul>
                    <li class="fac">
                      <a href="#">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="tweet">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="link">
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Istructor;

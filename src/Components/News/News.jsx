import React from 'react';
import Headingicon from '../../assets/images/heading-icon.png';
import News1 from '../../assets/images/blog-image-1.jpg';
import News2 from '../../assets/images/blog-image-2.jpg';
import News3 from '../../assets/images/blog-image-3.jpg';
import News4 from '../../assets/images/blog-image-4.jpg';

class News extends React.Component {
  render() {
    return (
      <section id="news" class="our-blog common">
        <div class="container">
          <div class="header">
            <h2>OUR LATEST NEWS</h2>
            <img src={Headingicon} class="img-responsive" alt="#" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div class="row">
            <div class="col-md-6 blog-h">
              <div class="blog-image">
                <img src={News1} class="img-responsive" alt="img" />
                <a href={News1} data-fancybox>
                  <div class="overlay-blog">
                    <div class="overlay_shape">
                      <i class="fa fa-unlink"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div class="blog-inner">
                <div class="blog-text">
                  <div class="border-blog">
                    <div class="mask-blog"></div>
                    <div class="mask-blog1"></div>
                  </div>
                  <h5>STUDENT LEARNING WHEN TRAVELING</h5>
                  <ul>
                    <li>
                      <i class="fa fa-user"></i> codevibrant
                    </li>
                    <li>
                      <i class="fa fa-calendar"></i>August 9, 2018
                    </li>
                  </ul>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>

                  <div class="log-btn">
                    <a href="blog-detail-left.html">
                      read more <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div class="clr"></div>
              </div>
            </div>
            <div class="col-md-6 blog-h">
              <div class="blog-image">
                <img src={News2} class="img-responsive" alt="img" />
                <a href={News2} data-fancybox>
                  <div class="overlay-blog">
                    <div class="overlay_shape">
                      <i class="fa fa-unlink"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div class="blog-inner">
                <div class="blog-text">
                  <div class="border-blog">
                    <div class="mask-blog"></div>
                    <div class="mask-blog1"></div>
                  </div>
                  <h5>MUSIC CLASS FOR EXTRA STUDENTS</h5>
                  <ul>
                    <li>
                      <i class="fa fa-user"></i> codevibrant
                    </li>
                    <li>
                      <i class="fa fa-calendar"></i> August 9, 2018
                    </li>
                  </ul>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>

                  <div class="log-btn">
                    <a href="blog-detail-left.html">
                      read more <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div class="clr"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 blog-h mt-5">
                <div class="blog-image">
                  <img src={News3} class="img-responsive" alt="img" />
                  <a href={News3} data-fancybox>
                    <div class="overlay-blog">
                      <div class="overlay_shape">
                        <i class="fa fa-unlink"></i>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="blog-inner">
                  <div class="blog-text">
                    <div class="border-blog">
                      <div class="mask-blog"></div>
                      <div class="mask-blog1"></div>
                    </div>
                    <h5>STUDENTS CLICK PHOTOS NEAR OCEAN</h5>
                    <ul>
                      <li>
                        <i class="fa fa-user"></i> codevibrant
                      </li>
                      <li>
                        <i class="fa fa-calendar"></i>August 9, 2018
                      </li>
                    </ul>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>

                    <div class="log-btn">
                      <a href="blog-detail-left.html">
                        read more <i class="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="clr"></div>
                </div>
              </div>
              <div class="col-md-6 blog-h mt-5">
                <div class="blog-image">
                  <img src={News4} class="img-responsive" alt="img" />
                  <a href={News4} data-fancybox>
                    <div class="overlay-blog">
                      <div class="overlay_shape">
                        <i class="fa fa-unlink"></i>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="blog-inner">
                  <div class="blog-text">
                    <div class="border-blog">
                      <div class="mask-blog"></div>
                      <div class="mask-blog1"></div>
                    </div>
                    <h5>BEST APPS DEVELOPED BY IT</h5>
                    <ul>
                      <li>
                        <i class="fa fa-user"></i> codevibrant
                      </li>
                      <li>
                        <i class="fa fa-calendar"></i> August 9, 2018
                      </li>
                    </ul>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy.
                    </p>

                    <div class="log-btn">
                      <a href="blog-detail-left.html">
                        read more <i class="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="clr"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;

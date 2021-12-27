import React from 'react';
import slider1 from '../../assets/images/Slider-1.jpg';
import slider2 from '../../assets/images/slider-2.jpg';
import slider3 from '../../assets/images/Slider_4.jpg';

class Mis extends React.Component {
  render() {
    return (
      <section>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
            </div>
            <div class="carousel-item">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
            </div>
            <div class="carousel-item">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Mis;

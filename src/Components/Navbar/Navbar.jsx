import React from 'react';
import logo from '../../assets/images/logo.jpg';

class Navbar extends React.Component {
  render() {
    return (
      <header id="home">
        <div class="header-border"></div>
        <nav class="navbar navbar-default custom_nav">
          <div class="container">
            <div class="row">
              <div class="col-sm-2 pl0 pr0">
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a href="index.html">
                    <img src={logo} class="img-responsive logo" alt="img" />
                  </a>
                </div>
              </div>
              <div class="col-sm-10 pl0 pr0">
                <div
                  class="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul class="nav nav-menu">
                    <li class="active">
                      <a href="index.html" class="">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#classes">Our Vision</a>
                    </li>
                    <li>
                      <a href="#mission">Our Mission</a>
                    </li>
                    <li>
                      <a href="#news">Latest News</a>
                    </li>
                    <li>
                      <a href="#contacts">Contact us</a>
                    </li>
                  </ul>
                  <ul class="menu-btn">
                    <li>
                      <a class="btn_one" href="index">
                        Dowmload App
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;

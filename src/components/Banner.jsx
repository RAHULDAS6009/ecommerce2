import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="banner-area pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-banner gray-bg">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sb-img text-center">
                      <img src="/images/banner/02.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sb-content mt-60">
                      <div className="banner-text">
                        <h5 className="lato">New Arrival</h5>
                        <h2 className="montserrat">Grag T- Shirt</h2>
                        <h3 className="montserrat">$99.99</h3>
                        <div className="banner-list">
                          <ul>
                            <li>Best quality</li>
                            <li>Best quality</li>
                            <li>Best quality</li>
                          </ul>
                        </div>
                        <div className="social-icon-wraper mt-25">
                          <div className="social-icon socile-icon-style-1">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-favorite-outline"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-tooltip="Quick View"
                                  className="q-view"
                                  data-bs-toggle="modal"
                                  data-bs-target=".modal"
                                  tabIndex="0"
                                >
                                  <i className="zmdi zmdi-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-repeat"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-banner gray-bg">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sb-img text-center">
                      <img src="/images/banner/01.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sb-content mt-60">
                      <div className="banner-text">
                        <h5 className="lato">New Arrival</h5>
                        <h2 className="montserrat">Grag T- Shirt</h2>
                        <h3 className="montserrat">$99.99</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content.
                        </p>
                        <a className="btn-def btn2" href="#">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

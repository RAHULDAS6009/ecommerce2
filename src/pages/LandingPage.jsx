import React from "react";
import Header from "../components/Header";
import SliderArea from "../components/SliderArea";
import DeliveryService from "../components/DeliveryService";
import { BrandingSection } from "../components/BrandingSection";
import NewArrivalArea from "../components/NewArrivalArea";
import Banner from "../components/Banner";
import DiscuntedArea from "../components/DiscuntedArea";

export const LandingPage = () => {
  return (
    <div>
      <div className="wrapper home-one">
        {/* Start of header area */}
        <Header />
        {/* End of header area */}

        {/*slider area start*/}
        <SliderArea />
        {/*slider area start*/}

        {/*delivery service start*/}
        <DeliveryService />
        {/*delivery service start*/}

        {/*branding-section-area start*/}
        <BrandingSection />
        {/*branding-section-area end*/}

        {/*new arrival area start*/}
        <NewArrivalArea />
        {/*new arrival area end*/}

        {/*banner area start*/}
        <Banner />
        {/*banner area end*/}

        {/*discunt-featured-onsale-area start */}
        <DiscuntedArea />
        {/*discunt-featured-onsale-area end*/}

        {/*testimonial-area-start*/}
        <div className="testimonial-area overlay ptb-70 mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="heading-title color-lightgrey mb-40 text-center">
                  <h5 className="uppercase">Testimonial</h5>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="total-testimonial active-slider carosule-pagi pagi-03">
                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img src="/images/team/testi-03.jpg" alt="" />
                    </div>
                    <div className="testimonial-content color-lightgrey">
                      <div className="name-degi pos-rltv">
                        <h5>Alexandra</h5>
                        <p>Developer</p>
                      </div>
                      <div className="testi-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img src="/images/team/testi-02.jpg" alt="" />
                    </div>
                    <div className="testimonial-content color-lightgrey">
                      <div className="name-degi pos-rltv">
                        <h5>Bernadette</h5>
                        <p>Facebook Liker</p>
                      </div>
                      <div className="testi-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img src="/images/team/testi-01.jpg" alt="" />
                    </div>
                    <div className="testimonial-content color-lightgrey">
                      <div className="name-degi pos-rltv">
                        <h5>Amanda</h5>
                        <p>Designer</p>
                      </div>
                      <div className="testi-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*testimonial-area-end*/}

        {/*new-arrival on-sale Top-ratted area start*/}
        <div className="arrival-ratted-sale-area pt-70">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="heading-title heading-style pos-rltv mb-50 text-center">
                  <h5 className="uppercase">New Arrival</h5>
                </div>
                <div className="ctg-slider-active">
                  <div className="single-ctg new-arrival-ctg">
                    <div className="single-ctg-item">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="product-ctg-img pos-rltv product-overlay">
                            <a href="single-product.html">
                              <img src="/images/product/s01.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="product-ctg-content">
                            <p>Primo Court Mid Suede</p>
                            <p className="font-bold">$236.99</p>
                            <div className="social-icon socile-icon-style-1 mt-15">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="zmdi zmdi-shopping-cart"></i>
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
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-ctg-item">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="product-ctg-img pos-rltv product-overlay">
                            <a href="single-product.html">
                              <img src="/images/product/s02.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="product-ctg-content">
                            <p>Primo Court Mid Suede</p>
                            <p className="font-bold">$236.99</p>
                            <div className="social-icon socile-icon-style-1 mt-15">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="zmdi zmdi-shopping-cart"></i>
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
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-ctg new-arrival-ctg">
                    <div className="single-ctg-item">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="product-ctg-img pos-rltv product-overlay">
                            <a href="single-product.html">
                              <img src="/images/product/s01.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="product-ctg-content">
                            <p>Primo Court Mid Suede</p>
                            <p className="font-bold">$236.99</p>
                            <div className="social-icon socile-icon-style-1 mt-15">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="zmdi zmdi-shopping-cart"></i>
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
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-ctg-item">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="product-ctg-img pos-rltv product-overlay">
                            <a href="single-product.html">
                              <img src="/images/product/s02.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-6">
                          <div className="product-ctg-content">
                            <p>Primo Court Mid Suede</p>
                            <p className="font-bold">$236.99</p>
                            <div className="social-icon socile-icon-style-1 mt-15">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="zmdi zmdi-shopping-cart"></i>
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
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-ctg on-sale-ctg">
                  <div className="heading-title heading-style pos-rltv mb-50 text-center">
                    <h5 className="uppercase">On Sale</h5>
                  </div>
                  <div className="ctg-slider-active">
                    <div className="single-ctg new-arrival-ctg">
                      <div className="single-ctg-item">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-img pos-rltv product-overlay">
                              <a href="single-product.html">
                                <img src="/images/product/s01.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-content">
                              <p>Primo Court Mid Suede</p>
                              <p className="font-bold">$236.99</p>
                              <div className="social-icon socile-icon-style-1 mt-15">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-ctg-item">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-img pos-rltv product-overlay">
                              <a href="single-product.html">
                                <img src="/images/product/s02.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-content">
                              <p>Primo Court Mid Suede</p>
                              <p className="font-bold">$236.99</p>
                              <div className="social-icon socile-icon-style-1 mt-15">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-ctg new-arrival-ctg">
                      <div className="single-ctg-item">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-img pos-rltv product-overlay">
                              <a href="single-product.html">
                                <img src="/images/product/s01.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-content">
                              <p>Primo Court Mid Suede</p>
                              <p className="font-bold">$236.99</p>
                              <div className="social-icon socile-icon-style-1 mt-15">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-ctg-item">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-img pos-rltv product-overlay">
                              <a href="single-product.html">
                                <img src="/images/product/s02.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-content">
                              <p>Primo Court Mid Suede</p>
                              <p className="font-bold">$236.99</p>
                              <div className="social-icon socile-icon-style-1 mt-15">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-ctg top-rated-ctg">
                  <div className="heading-title heading-style pos-rltv mb-50 text-center">
                    <h5 className="uppercase">Top Rated</h5>
                  </div>
                  <div className="ctg-slider-active">
                    <div className="single-ctg new-arrival-ctg">
                      <div className="single-ctg-item">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-img pos-rltv product-overlay">
                              <a href="single-product.html">
                                <img src="/images/product/s01.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-content">
                              <p>Primo Court Mid Suede</p>
                              <p className="font-bold">$236.99</p>
                              <div className="social-icon socile-icon-style-1 mt-15">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-ctg-item">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-img pos-rltv product-overlay">
                              <a href="single-product.html">
                                <img src="/images/product/s02.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-content">
                              <p>Primo Court Mid Suede</p>
                              <p className="font-bold">$236.99</p>
                              <div className="social-icon socile-icon-style-1 mt-15">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-ctg new-arrival-ctg">
                      <div className="single-ctg-item">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-img pos-rltv product-overlay">
                              <a href="single-product.html">
                                <img src="/images/product/s01.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-content">
                              <p>Primo Court Mid Suede</p>
                              <p className="font-bold">$236.99</p>
                              <div className="social-icon socile-icon-style-1 mt-15">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
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
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-ctg-item">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-img pos-rltv product-overlay">
                              <a href="single-product.html">
                                <img src="/images/product/s02.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-6">
                            <div className="product-ctg-content">
                              <p>Primo Court Mid Suede</p>
                              <p className="font-bold">$236.99</p>
                              <div className="social-icon socile-icon-style-1 mt-15">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
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
                                </ul>
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
          </div>
        </div>
        {/*new-arrival on-sale Top-ratted area end*/}

        {/*brand area are start*/}
        <div className="brand-area ptb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="total-brand">
                  <div className="brand-item">
                    <div className="single-brand shadow-box">
                      <a href="#">
                        <img src="/images/brand/01.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-item">
                    <div className="single-brand shadow-box">
                      <a href="#">
                        <img src="/images/brand/02.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-item">
                    <div className="single-brand shadow-box">
                      <a href="#">
                        <img src="/images/brand/03.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-item">
                    <div className="single-brand shadow-box">
                      <a href="#">
                        <img src="/images/brand/04.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-item">
                    <div className="single-brand shadow-box">
                      <a href="#">
                        <img src="/images/brand/05.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-item">
                    <div className="single-brand shadow-box">
                      <a href="#">
                        <img src="/images/brand/06.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-item">
                    <div className="single-brand shadow-box">
                      <a href="#">
                        <img src="/images/brand/01.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-item">
                    <div className="single-brand shadow-box">
                      <a href="#">
                        <img src="/images/brand/02.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-item">
                    <div className="single-brand shadow-box">
                      <a href="#">
                        <img src="/images/brand/03.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="brand-item">
                    <div className="single-brand shadow-box">
                      <a href="#">
                        <img src="/images/brand/04.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*brand area are start*/}

        {/*blog area are start*/}
        <div className="blog-area pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="heading-title heading-style pos-rltv mb-50 text-center">
                  <h5 className="uppercase">Blog</h5>
                </div>
                <div className="total-blog">
                  <div className="blog-item">
                    <div className="single-blog">
                      <div className="blog-img pos-rltv product-overlay">
                        <a href="#">
                          <img src="/images/blog/01.jpg" alt="" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="blog-title">
                          <h5 className="uppercase font-bold">
                            <a href="#">New fashion collection 2022</a>
                          </h5>
                          <div className="like-comments-date">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-favorite-outline"></i>
                                  13 Like
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-comment-outline"></i>
                                  03 Comments
                                </a>
                              </li>
                              <li className="blog-date">
                                <a href="#">
                                  <i className="zmdi zmdi-calendar-alt"></i>16
                                  jun 2022
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-text">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using.
                            </p>
                          </div>
                          <a
                            className="read-more montserrat"
                            href="single-blog.html"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-item">
                    <div className="single-blog">
                      <div className="blog-img pos-rltv product-overlay">
                        <a href="#">
                          <img src="/images/blog/02.jpg" alt="" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="blog-title">
                          <h5 className="uppercase font-bold">
                            <a href="#">New fashion collection 2022</a>
                          </h5>
                          <div className="like-comments-date">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-favorite-outline"></i>
                                  13 Like
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-comment-outline"></i>
                                  03 Comments
                                </a>
                              </li>
                              <li className="blog-date">
                                <a href="#">
                                  <i className="zmdi zmdi-calendar-alt"></i>16
                                  jun 2022
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-text">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using.
                            </p>
                          </div>
                          <a
                            className="read-more montserrat"
                            href="single-blog.html"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-item">
                    <div className="single-blog">
                      <div className="blog-img pos-rltv product-overlay">
                        <a href="#">
                          <img src="/images/blog/03.jpg" alt="" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="blog-title">
                          <h5 className="uppercase font-bold">
                            <a href="#">New fashion collection 2022</a>
                          </h5>
                          <div className="like-comments-date">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-favorite-outline"></i>
                                  13 Like
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-comment-outline"></i>
                                  03 Comments
                                </a>
                              </li>
                              <li className="blog-date">
                                <a href="#">
                                  <i className="zmdi zmdi-calendar-alt"></i>16
                                  jun 2022
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-text">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using.
                            </p>
                          </div>
                          <a
                            className="read-more montserrat"
                            href="single-blog.html"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-item">
                    <div className="single-blog">
                      <div className="blog-img pos-rltv product-overlay">
                        <a href="#">
                          <img src="/images/blog/01.jpg" alt="" />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="blog-title">
                          <h5 className="uppercase font-bold">
                            <a href="#">New fashion collection 2022</a>
                          </h5>
                          <div className="like-comments-date">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-favorite-outline"></i>
                                  13 Like
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-comment-outline"></i>
                                  03 Comments
                                </a>
                              </li>
                              <li className="blog-date">
                                <a href="#">
                                  <i className="zmdi zmdi-calendar-alt"></i>16
                                  jun 2022
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-text">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using.
                            </p>
                          </div>
                          <a
                            className="read-more montserrat"
                            href="single-blog.html"
                          >
                            Read More
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
        {/*blog area are end*/}

        {/* footer area start*/}
        <div className="footer-area ptb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="single-footer contact-us">
                  <div className="footer-title uppercase">
                    <h5>Contact US</h5>
                  </div>
                  <ul>
                    <li>
                      <div className="contact-icon">
                        <i className="zmdi zmdi-pin-drop"></i>
                      </div>
                      <div className="contact-text">
                        <p>Address: Your address goes here</p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-icon">
                        <i className="zmdi zmdi-email-open"></i>
                      </div>
                      <div className="contact-text">
                        <p>
                          <span>
                            <a href="mailto://demo@example.com">
                              demo@example.com
                            </a>
                          </span>
                          <span>
                            <a href="mailto://info@example.com">
                              info@example.com
                            </a>
                          </span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="contact-icon">
                        <i className="zmdi zmdi-phone-paused"></i>
                      </div>
                      <div className="contact-text">
                        <p>
                          <a href="tel://01234567890">01234567890</a>
                          <a href="tel://01234567890">01234567890</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4">
                <div className="single-footer informaton-area">
                  <div className="footer-title uppercase">
                    <h5>Information</h5>
                  </div>
                  <div className="informatoin">
                    <ul>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">Order History</a>
                      </li>
                      <li>
                        <a href="#">Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Returnes</a>
                      </li>
                      <li>
                        <a href="#">Private Policy</a>
                      </li>
                      <li>
                        <a href="#">Site Map</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 d-md-none d-block d-lg-block">
                <div className="single-footer instagrm-area">
                  <div className="footer-title uppercase">
                    <h5>InstaGram</h5>
                  </div>
                  <div className="instagrm">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="/images/gallery/01.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/gallery/02.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/gallery/03.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/gallery/04.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/gallery/05.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/gallery/06.jpg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 offset-xl-1">
                <div className="single-footer newslatter-area">
                  <div className="footer-title uppercase">
                    <h5>Get Newsletters</h5>
                  </div>
                  <div className="newslatter">
                    <form action="#" method="post">
                      <div className="input-box pos-rltv">
                        <input placeholder="Type Your Email hear" type="text" />
                        <a href="#">
                          <i className="zmdi zmdi-arrow-right"></i>
                        </a>
                      </div>
                    </form>
                    <div className="social-icon socile-icon-style-3 mt-40">
                      <div className="footer-title uppercase">
                        <h5>Social Network</h5>
                      </div>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-google"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="zmdi zmdi-twitter"></i>
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
        {/*footer area start*/}

        {/*footer bottom area start*/}
        <div className="footer-bottom global-table">
          <div className="global-row">
            <div className="global-cell">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <p className="copyrigth text-center">
                      © 2022 <span className="text-capitalize">clothing</span>.
                      Made with{" "}
                      {/* <i style="color: #f53400" className="fa fa-heart"></i> */}
                      <i
                        className="fa fa-heart"
                        style={{ color: "#f53400" }}
                      ></i>
                      by
                      <a href="https://themeforest.net/user/codecarnival/portfolio">
                        CodeCarnival
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <ul className="payment-support text-end">
                      <li>
                        <a href="#">
                          <img src="/images/icons/pay1.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/icons/pay2.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/icons/pay3.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/icons/pay4.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/icons/pay5.png" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*footer bottom area end*/}

        {/* QUICKVIEW PRODUCT */}
        <div id="quickview-wrapper">
          {/* Modal */}
          <div
            className="modal fade"
            id="productModal"
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-product">
                    <div className="product-/images">
                      {/*modal tab start*/}
                      <div className="portfolio-thumbnil-area-2">
                        <div className="tab-content active-portfolio-area-2">
                          <div
                            role="tabpanel"
                            className="tab-pane active"
                            id="view1"
                          >
                            <div className="product-img">
                              <a href="#">
                                <img
                                  src="/images/product/01.jpg"
                                  alt="Single portfolio"
                                />
                              </a>
                            </div>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="view2">
                            <div className="product-img">
                              <a href="#">
                                <img
                                  src="/images/product/02.jpg"
                                  alt="Single portfolio"
                                />
                              </a>
                            </div>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="view3">
                            <div className="product-img">
                              <a href="#">
                                <img
                                  src="/images/product/03.jpg"
                                  alt="Single portfolio"
                                />
                              </a>
                            </div>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="view4">
                            <div className="product-img">
                              <a href="#">
                                <img
                                  src="/images/product/04.jpg"
                                  alt="Single portfolio"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="product-more-views-2">
                          <ul
                            className="thumbnail-carousel-modal-2 nav"
                            data-tabs="tabs"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link active"
                                id="view1"
                                data-bs-toggle="tab"
                                href="#view1"
                                role="tab"
                                aria-controls="view1"
                                aria-selected="true"
                              >
                                <img src="/images/product/01.jpg" alt="" />
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="view2"
                                data-bs-toggle="tab"
                                href="#view2"
                                role="tab"
                                aria-controls="view2"
                                aria-selected="true"
                              >
                                <img src="/images/product/02.jpg" alt="" />
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="view3"
                                data-bs-toggle="tab"
                                href="#view3"
                                role="tab"
                                aria-controls="view3"
                                aria-selected="true"
                              >
                                <img src="/images/product/03.jpg" alt="" />
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="view4"
                                data-bs-toggle="tab"
                                href="#view4"
                                role="tab"
                                aria-controls="view4"
                                aria-selected="true"
                              >
                                <img src="/images/product/04.jpg" alt="" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*modal tab end*/}
                    {/* .product-/images */}
                    <div className="product-info">
                      <h1>Aenean eu tristique</h1>
                      <div className="price-box-3">
                        <div className="s-price-box">
                          <span className="new-price">$160.00</span>
                          <span className="old-price">$190.00</span>
                        </div>
                      </div>
                      <a href="shop.html" className="see-all">
                        See all features
                      </a>
                      <div className="quick-add-to-cart">
                        <form method="post" className="cart">
                          <div className="numbers-row">
                            <input
                              type="number"
                              id="french-hens"
                              value="3"
                              min="1"
                            />
                          </div>
                          <button
                            className="single_add_to_cart_button"
                            type="submit"
                          >
                            Add to cart
                          </button>
                        </form>
                      </div>
                      <div className="quick-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam fringilla augue nec est tristique auctor. Donec non
                        est at libero.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Nam fringilla augue nec est tristique
                        auctor. Donec non est at libero.Nam fringilla tristique
                        auctor.
                      </div>
                      <div className="social-sharing-modal">
                        <div className="widget widget_socialsharing_widget">
                          <h3 className="widget-title-modal">
                            Share this product
                          </h3>
                          <ul className="social-icons-modal">
                            <li>
                              <a
                                title="Facebook"
                                href="#"
                                className="facebook m-single-icon"
                              >
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                title="Twitter"
                                href="#"
                                className="twitter m-single-icon"
                              >
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                title="Pinterest"
                                href="#"
                                className="pinterest m-single-icon"
                              >
                                <i className="fa fa-pinterest"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                title="Google +"
                                href="#"
                                className="gplus m-single-icon"
                              >
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                title="LinkedIn"
                                href="#"
                                className="linkedin m-single-icon"
                              >
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* .product-info */}
                  </div>
                  {/* .modal-product */}
                </div>
                {/* .modal-body */}
              </div>
              {/* .modal-content */}
            </div>
            {/* .modal-dialog */}
            {/*  */}
          </div>
          {/* END Modal */}
        </div>
        {/* END QUICKVIEW PRODUCT */}
      </div>
    </div>
  );
};

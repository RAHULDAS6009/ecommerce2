import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer area start */}
      <div className="footer-area ptb-50">
        <div className="container">
          <div className="row">
            {/* Contact Us */}
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

            {/* Information */}
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

            {/* Instagram */}
            <div className="col-xl-3 col-lg-4 d-md-none d-block d-lg-block">
              <div className="single-footer instagrm-area">
                <div className="footer-title uppercase">
                  <h5>InstaGram</h5>
                </div>
                <div className="instagrm">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/images/gallery/01.jpg" alt="insta 1" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery/02.jpg" alt="insta 2" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery/03.jpg" alt="insta 3" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery/04.jpg" alt="insta 4" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery/05.jpg" alt="insta 5" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery/06.jpg" alt="insta 6" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter + Social */}
            <div className="col-xl-3 col-lg-3 col-md-4 offset-xl-1">
              <div className="single-footer newslatter-area">
                <div className="footer-title uppercase">
                  <h5>Get Newsletters</h5>
                </div>
                <div className="newslatter">
                  <form action="#" method="post">
                    <div className="input-box pos-rltv">
                      <input
                        placeholder="Type Your Email hear"
                        type="text"
                      />
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

          </div>{/* .row */}
        </div>{/* .container */}
      </div>
      {/* footer area end */}

      {/* footer bottom area start */}
      <div className="footer-bottom global-table">
        <div className="global-row">
          <div className="global-cell">
            <div className="container">
              <div className="row">
                {/* left side text */}
                <div className="col-md-6">
                  <p className="copyrigth text-center">
                    © 2022{" "}
                    <span className="text-capitalize">clothing</span>. Made with{" "}
                    <i
                      className="fa fa-heart"
                      style={{ color: "#f53400" }}
                    ></i>{" "}
                    by{" "}
                    <a href="https://themeforest.net/user/codecarnival/portfolio">
                      CodeCarnival
                    </a>
                  </p>
                </div>

                {/* right side payment icons */}
                <div className="col-md-6">
                  <ul className="payment-support text-end">
                    <li>
                      <a href="#">
                        <img src="/images/icons/pay1.png" alt="pay1" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/icons/pay2.png" alt="pay2" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/icons/pay3.png" alt="pay3" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/icons/pay4.png" alt="pay4" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/icons/pay5.png" alt="pay5" />
                      </a>
                    </li>
                  </ul>
                </div>

              </div>{/* .row */}
            </div>{/* .container */}
          </div>
        </div>
      </div>
      {/* footer bottom area end */}
      <br />
    </>
  );
};

export default Footer;

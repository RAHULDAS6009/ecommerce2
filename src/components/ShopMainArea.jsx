import React from "react";
import { ProductCard, productData } from "./NewArrivalArea";

const ShopMainArea = () => {
  return (
    <div>
      <div className="shop-main-area ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-area-top">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="sort product-show">
                      <label>View</label>
                      <select id="input-amount">
                        <option value="volvo">10</option>
                        <option value="saab">15</option>
                        <option value="vw">20</option>
                        <option value="audi" selected>
                          25
                        </option>
                      </select>
                    </div>
                    <div className="sort product-type">
                      <label>Sort By</label>
                      <select id="input-sort">
                        <option value="#" selected>
                          Default
                        </option>
                        <option value="#">Name (A - Z)</option>
                        <option value="#">Name (Z - A)</option>
                        <option value="#">Price (Low &gt; High)</option>
                        <option value="#">Price (High &gt; Low)</option>
                        <option value="#">Rating (Highest)</option>
                        <option value="#">Rating (Lowest)</option>
                        <option value="#">Model (A - Z)</option>
                        <option value="#">Model (Z - A)</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-3 col-md-2">
                    <div className="list-grid-view text-center">
                      <ul className="nav" role="tablist">
                        <li role="presentation">
                          <a
                            className="active"
                            href="#grid"
                            aria-controls="grid"
                            role="tab"
                            data-bs-toggle="tab"
                          >
                            <i className="zmdi zmdi-widgets"></i>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#list"
                            aria-controls="list"
                            role="tab"
                            data-bs-toggle="tab"
                          >
                            <i className="zmdi zmdi-view-list-alt"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 d-sm-none d-md-block d-block">
                    <div className="total-showing text-end">
                      Showing - <span>10</span> to <span>18</span> Of Total{" "}
                      <span>36</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>

            <div className="col-lg-12">
              <div className="shop-total-product-area clearfix mt-35">
                <div className="tab-content">
                  <ProductGrid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-area ptb-50">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-4">
              <div class="single-footer contact-us">
                <div class="footer-title uppercase">
                  <h5>Contact US</h5>
                </div>
                <ul>
                  <li>
                    <div class="contact-icon">
                      {" "}
                      <i class="zmdi zmdi-pin-drop"></i>{" "}
                    </div>
                    <div class="contact-text">
                      <p>Address: Your address goes here</p>
                    </div>
                  </li>
                  <li>
                    <div class="contact-icon">
                      {" "}
                      <i class="zmdi zmdi-email-open"></i>{" "}
                    </div>
                    <div class="contact-text">
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
                    <div class="contact-icon">
                      {" "}
                      <i class="zmdi zmdi-phone-paused"></i>{" "}
                    </div>
                    <div class="contact-text">
                      <p>
                        <a href="tel://01234567890">01234567890</a>{" "}
                        <a href="tel://01234567890">01234567890</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-4">
              <div class="single-footer informaton-area">
                <div class="footer-title uppercase">
                  <h5>Information</h5>
                </div>
                <div class="informatoin">
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
            <div class="col-xl-3 col-lg-4 d-md-none d-block d-lg-block">
              <div class="single-footer instagrm-area">
                <div class="footer-title uppercase">
                  <h5>InstaGram</h5>
                </div>
                <div class="instagrm">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="images/gallery/01.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/gallery/02.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/gallery/03.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/gallery/04.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/gallery/05.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/gallery/06.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 offset-xl-1">
              <div class="single-footer newslatter-area">
                <div class="footer-title uppercase">
                  <h5>Get Newsletters</h5>
                </div>
                <div class="newslatter">
                  <form action="#" method="post">
                    <div class="input-box pos-rltv">
                      <input placeholder="Type Your Email hear" type="text" />
                      <a href="#">
                        <i class="zmdi zmdi-arrow-right"></i>
                      </a>
                    </div>
                  </form>
                  <div class="social-icon socile-icon-style-3 mt-40">
                    <div class="footer-title uppercase">
                      <h5>Social Network</h5>
                    </div>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer-bottom global-table">
              <div class="global-row">
                <div class="global-cell">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6">
                        <p class="copyrigth text-center">
                          © 2022 <span class="text-capitalize">clothing</span>.
                          Made with{" "}
                          <i
                            style={{ color: "#f53400" }}
                            class="fa fa-heart"
                          ></i>
                          by
                          <a href="https://themeforest.net/user/codecarnival/portfolio">
                            CodeCarnival
                          </a>
                        </p>
                      </div>
                      <div class="col-md-6">
                        <ul class="payment-support text-end">
                          <li>
                            <a href="#">
                              <img src="images/icons/pay1.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="images/icons/pay2.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="images/icons/pay3.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="images/icons/pay4.png" alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="images/icons/pay5.png" alt="" />
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
  );
};

function ProductGrid() {
  return (
    <div className=" min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-green-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product, id) => (
            <ProductCard key={id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopMainArea;

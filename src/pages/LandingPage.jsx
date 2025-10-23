import React from "react";

export const LandingPage = () => {
  return (
    <div>
      <div className="wrapper home-one">
        {/* Start of header area */}
        <header className="header-area header-wrapper">
          <div className="header-top-bar black-bg clearfix">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-6">
                  <div className="login-register-area">
                    <ul>
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a href="#">Register</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <div className="social-search-area text-center">
                    <div className="social-icon socile-icon-style-2">
                      <ul>
                        <li>
                          <a href="#" title="facebook">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="twitter">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="dribble">
                            <i className="fa fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="behance">
                            <i className="fa fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" title="rss">
                            <i className="fa fa-rss"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <div className="cart-currency-area login-register-area text-end">
                    <ul>
                      <li>
                        <div className="header-currency">
                          <select>
                            <option value="1">USD</option>
                            <option value="2">Pound</option>
                            <option value="3">Euro</option>
                            <option value="4">Dinar</option>
                          </select>
                        </div>
                      </li>
                      <li>
                        <div className="header-cart">
                          <div className="cart-icon">
                            <a href="#">
                              Cart<i className="zmdi zmdi-shopping-cart"></i>
                            </a>
                            <span>2</span>
                          </div>
                          <div className="cart-content-wraper">
                            <div className="cart-single-wraper">
                              <div className="cart-img">
                                <a href="#">
                                  <img src="//images/product/01.jpg" alt="" />
                                </a>
                              </div>
                              <div className="cart-content">
                                <div className="cart-name">
                                  <a href="#">Aenean Eu Tristique</a>
                                </div>
                                <div className="cart-price">$70.00</div>
                                <div className="cart-qty">
                                  Qty: <span>1</span>
                                </div>
                              </div>
                              <div className="remove">
                                <a href="#">
                                  <i className="zmdi zmdi-close"></i>
                                </a>
                              </div>
                            </div>
                            <div className="cart-single-wraper">
                              <div className="cart-img">
                                <a href="#">
                                  <img src="/images/product/02.jpg" alt="" />
                                </a>
                              </div>
                              <div className="cart-content">
                                <div className="cart-name">
                                  <a href="#">Aenean Eu Tristique</a>
                                </div>
                                <div className="cart-price">$70.00</div>
                                <div className="cart-qty">
                                  Qty: <span>1</span>
                                </div>
                              </div>
                              <div className="remove">
                                <a href="#">
                                  <i className="zmdi zmdi-close"></i>
                                </a>
                              </div>
                            </div>
                            <div className="cart-subtotal">
                              Subtotal: <span>$200.00</span>
                            </div>
                            <div className="cart-check-btn">
                              <div className="view-cart">
                                <a className="btn-def" href="cart.html">
                                  View Cart
                                </a>
                              </div>
                              <div className="check-btn">
                                <a className="btn-def" href="checkout.html">
                                  Checkout
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="sticky-header" className="header-middle-area">
            <div className="container">
              <div className="full-width-mega-dropdown">
                <div className="row">
                  <div className="col-md-2">
                    <div className="logo ptb-20">
                      <a href="index.html">
                        <img src="/images/logo/logo.png" alt="main logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-10 d-none d-md-block">
                    <nav id="primary-menu">
                      <ul className="main-menu">
                        <li className="current">
                          <a className="active" href="index.html">
                            Home
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a className="active" href="index.html">
                                Home One
                              </a>
                            </li>
                            <li>
                              <a href="index-2.html">Home Two</a>
                            </li>
                            <li>
                              <a href="index-boxed-01.html">
                                Home Three (Boxed)
                              </a>
                            </li>
                            <li>
                              <a href="index-boxed-02.html">
                                Home Four (Boxed)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-parent pos-rltv">
                          <a href="shop.html">Man</a>
                          <div className="mega-menu-area mma-800">
                            <ul className="single-mega-item">
                              <li className="menu-title uppercase">Shirts</li>
                              <li>
                                <a href="shop.html">Shirt 01</a>
                              </li>
                              <li>
                                <a href="shop.html">Shirt 02</a>
                              </li>
                              <li>
                                <a href="shop.html">Shirt 03</a>
                              </li>
                              <li>
                                <a href="shop.html">Shirt 04</a>
                              </li>
                            </ul>
                            <ul className="single-mega-item">
                              <li className="menu-title uppercase">Pants</li>
                              <li>
                                <a href="shop.html">Pant 01</a>
                              </li>
                              <li>
                                <a href="shop.html">Pant 02</a>
                              </li>
                              <li>
                                <a href="shop.html">Pant 03</a>
                              </li>
                              <li>
                                <a href="shop.html">Pant 04</a>
                              </li>
                            </ul>
                            <ul className="single-mega-item">
                              <li className="menu-title uppercase">T-Shirts</li>
                              <li>
                                <a href="shop.html">T-Shirt 01</a>
                              </li>
                              <li>
                                <a href="shop.html">T-Shirt 02</a>
                              </li>
                              <li>
                                <a href="shop.html">T-Shirt 03</a>
                              </li>
                              <li>
                                <a href="shop.html">T-Shirt 04</a>
                              </li>
                            </ul>
                            <div className="mega-banner-img">
                              <a href="single-product.html">
                                <img
                                  src="/images/banner/banner-fashion-02.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="mega-parent pos-rltv">
                          <a href="shop.html">Women</a>
                          <div className="mega-menu-area mma-700">
                            <ul className="single-mega-item">
                              <li className="menu-title uppercase">Sharees</li>
                              <li>
                                <a href="shop.html">Sharee 01</a>
                              </li>
                              <li>
                                <a href="shop.html">Sharee 02</a>
                              </li>
                              <li>
                                <a href="shop.html">Sharee 03</a>
                              </li>
                              <li>
                                <a href="shop.html">Sharee 04</a>
                              </li>
                              <li>
                                <a href="shop.html">Sharee 05</a>
                              </li>
                            </ul>
                            <ul className="single-mega-item">
                              <li className="menu-title uppercase">Lahenga</li>
                              <li>
                                <a href="shop.html">Lahenga 01</a>
                              </li>
                              <li>
                                <a href="shop.html">Lahenga 02</a>
                              </li>
                              <li>
                                <a href="shop.html">Lahenga 03</a>
                              </li>
                              <li>
                                <a href="shop.html">Lahenga 04</a>
                              </li>
                              <li>
                                <a href="shop.html">Lahenga 05</a>
                              </li>
                            </ul>
                            <ul className="single-mega-item">
                              <li className="menu-title uppercase">Sandels</li>
                              <li>
                                <a href="shop.html">Sandel 01</a>
                              </li>
                              <li>
                                <a href="shop.html">Sandel 02</a>
                              </li>
                              <li>
                                <a href="shop.html">Sandel 03</a>
                              </li>
                              <li>
                                <a href="shop.html">Sandel 04</a>
                              </li>
                              <li>
                                <a href="shop.html">Sandel 05</a>
                              </li>
                            </ul>
                            <div className="mega-banner-img">
                              <a href="single-product.html">
                                <img
                                  src="/images/banner/banner-fashion.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="mega-parent">
                          <a href="shop.html">Shortcut</a>
                          <div className="mega-menu-area mma-970">
                            <ul className="single-mega-item">
                              <li className="menu-title uppercase">
                                Shortcode-01
                              </li>
                              <li>
                                <a href="shortcode-banner.html">
                                  shortcode-banner
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-best-top-on-sale-slider.html">
                                  too-on-sale
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-blog-item.html">
                                  Short Blog Item
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-brand-prodcut.html">
                                  Brand Product
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-brand-slider.html">
                                  Brand Slider
                                </a>
                              </li>
                            </ul>
                            <ul className="single-mega-item">
                              <li className="menu-title uppercase">
                                Shortcode-02
                              </li>
                              <li>
                                <a href="shortcode-breadcrumb.html">
                                  Breadcrumb
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-related-product.html">
                                  Related Product
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-service.html">Service</a>
                              </li>
                              <li>
                                <a href="shortcode-skill.html">Skill</a>
                              </li>
                              <li>
                                <a href="shortcode-slider.html">Slider</a>
                              </li>
                            </ul>
                            <ul className="single-mega-item">
                              <li className="menu-title uppercase">
                                Shortcode-03
                              </li>
                              <li>
                                <a href="shortcode-team.html">Team</a>
                              </li>
                              <li>
                                <a href="shortcode-testimonial.html">
                                  Testimonial
                                </a>
                              </li>
                              <li>
                                <a href="shortcode-why-choose-us.html">
                                  Why Choose Us
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="mega-parent">
                          <a href="index.html">Pages</a>
                          <div className="mega-menu-area mma-970">
                            <ul className="single-mega-item coloum-4">
                              <li className="menu-title uppercase">Pages-01</li>
                              <li>
                                <a href="about-us.html">About-us</a>
                              </li>
                              <li>
                                <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                <a href="blog-right.html">Blog-Right</a>
                              </li>
                              <li>
                                <a href="single-blog.html">Single Blog</a>
                              </li>
                              <li>
                                <a href="single-blog-right.html">
                                  Single Blog Right
                                </a>
                              </li>
                              <li>
                                <a href="blog-full.html">Blog-Fullwidth</a>
                              </li>
                            </ul>
                            <ul className="single-mega-item coloum-4">
                              <li className="menu-title uppercase">pages-02</li>
                              <li>
                                <a href="blog-full-right.html">
                                  Blog Ful Rightl
                                </a>
                              </li>
                              <li>
                                <a href="cart.html">Cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="compare.html">Compare</a>
                              </li>
                              <li>
                                <a href="complete-order.html">Complete Order</a>
                              </li>
                              <li>
                                <a href="contact-us.html">Contact US</a>
                              </li>
                            </ul>
                            <ul className="single-mega-item coloum-4">
                              <li className="menu-title uppercase">pages-03</li>
                              <li>
                                <a href="login.html">Login</a>
                              </li>
                              <li>
                                <a href="my-account.html">My Account</a>
                              </li>
                              <li>
                                <a href="shop-full-grid.html">Shop Full Grid</a>
                              </li>
                              <li>
                                <a href="shop-full-list.html">Shop Full List</a>
                              </li>
                              <li>
                                <a href="shop-list-right-sidebar.html">
                                  Shop List Right
                                </a>
                              </li>
                              <li>
                                <a href="shop-list.html">Shop List</a>
                              </li>
                            </ul>
                            <ul className="single-mega-item coloum-4">
                              <li className="menu-title uppercase">pages-03</li>
                              <li>
                                <a href="shop-right-sidebar.html">Shop Right</a>
                              </li>
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="single-product.html">Single Prodcut</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                              <li>
                                <a href="faq.html">FAQ</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="blog.html">BLOG</a>
                        </li>
                        <li>
                          <a href="about-us.html">ABOUT</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-lg-3 d-none d-lg-block">
                    <div className="search-box global-table">
                      <div className="global-row">
                        <div className="global-cell">
                          <form action="#">
                            <div className="input-box">
                              <input
                                className="single-input"
                                placeholder="Search anything"
                                type="text"
                              />
                              <button className="src-btn">
                                <i className="fa fa-search"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* mobile-menu-area start */}
                  <div className="mobile-menu-area">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <nav id="dropdown">
                            <ul>
                              <li>
                                <a href="index.html">Home</a>
                                <ul>
                                  <li>
                                    <a className="active" href="index.html">
                                      Home One
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index-2.html">Home Two</a>
                                  </li>
                                  <li>
                                    <a href="index-boxed-01.html">
                                      Home Three (Boxed)
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index-boxed-02.html">
                                      Home Four (Boxed)
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Man</a>
                                <ul className="single-mega-item">
                                  <li>
                                    <a href="shop.html">Shirt 01</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Shirt 02</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Shirt 03</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Shirt 04</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Pant 01</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Pant 02</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Pant 03</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Pant 04</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">T-Shirt 01</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">T-Shirt 02</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">T-Shirt 03</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">T-Shirt 04</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="shop.html">Shop</a>
                                <ul className="single-mega-item">
                                  <li>
                                    <a href="shop.html">Sharee 01</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Sharee 02</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Sharee 03</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Sharee 04</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Sharee 05</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Lahenga 01</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Lahenga 02</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Lahenga 03</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Lahenga 04</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Lahenga 05</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Sandel 01</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Sandel 02</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Sandel 03</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Sandel 04</a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Sandel 05</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Shortcode</a>
                                <ul className="single-mega-item">
                                  <li>
                                    <a href="shortcode-banner.html">
                                      shortcode-banner
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-best-top-on-sale-slider.html">
                                      too-on-sale
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-blog-item.html">
                                      Short Blog Item
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-brand-prodcut.html">
                                      Brand Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-brand-slider.html">
                                      Brand Slider
                                    </a>
                                  </li>

                                  <li>
                                    <a href="shortcode-breadcrumb.html">
                                      Breadcrumb
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-related-product.html">
                                      Related Product
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-service.html">Service</a>
                                  </li>
                                  <li>
                                    <a href="shortcode-skill.html">Skill</a>
                                  </li>
                                  <li>
                                    <a href="shortcode-slider.html">Slider</a>
                                  </li>

                                  <li>
                                    <a href="shortcode-team.html">Team</a>
                                  </li>
                                  <li>
                                    <a href="shortcode-testimonial.html">
                                      Testimonial
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shortcode-why-choose-us.html">
                                      Why Choose Us
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Pages</a>
                                <ul className="single-mega-item coloum-4">
                                  <li>
                                    <a href="about-us.html">About-us</a>
                                  </li>
                                  <li>
                                    <a href="blog.html">Blog</a>
                                  </li>
                                  <li>
                                    <a href="blog-right.html">Blog-Right</a>
                                  </li>
                                  <li>
                                    <a href="single-blog.html">Single Blog</a>
                                  </li>
                                  <li>
                                    <a href="single-blog-right.html">
                                      Single Blog Right
                                    </a>
                                  </li>
                                  <li>
                                    <a href="blog-full.html">Blog-Fullwidth</a>
                                  </li>
                                  <li className="menu-title uppercase">
                                    pages-02
                                  </li>
                                  <li>
                                    <a href="blog-full-right.html">
                                      Blog Ful Rightl
                                    </a>
                                  </li>
                                  <li>
                                    <a href="cart.html">Cart</a>
                                  </li>
                                  <li>
                                    <a href="checkout.html">Checkout</a>
                                  </li>
                                  <li>
                                    <a href="compare.html">Compare</a>
                                  </li>
                                  <li>
                                    <a href="complete-order.html">
                                      Complete Order
                                    </a>
                                  </li>
                                  <li>
                                    <a href="contact-us.html">Contact US</a>
                                  </li>
                                  <li className="menu-title uppercase">
                                    pages-03
                                  </li>
                                  <li>
                                    <a href="login.html">Login</a>
                                  </li>
                                  <li>
                                    <a href="my-account.html">My Account</a>
                                  </li>
                                  <li>
                                    <a href="shop-full-grid.html">
                                      Shop Full Grid
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-full-list.html">
                                      Shop Full List
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-list-right-sidebar.html">
                                      Shop List Right
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-list.html">Shop List</a>
                                  </li>
                                  <li className="menu-title uppercase">
                                    pages-03
                                  </li>
                                  <li>
                                    <a href="shop-right-sidebar.html">
                                      Shop Right
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop.html">Shop</a>
                                  </li>
                                  <li>
                                    <a href="single-product.html">
                                      Single Prodcut
                                    </a>
                                  </li>
                                  <li>
                                    <a href="wishlist.html">Wishlist</a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="about-us.html">about</a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*mobile menu area end*/}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* End of header area */}

        {/*slider area start*/}
        <div className="slider-area pos-rltv carosule-pagi cp-line">
          <div className="active-slider">
            <div className="single-slider pos-rltv">
              <div className="slider-img">
                <img src="/images/slider/slider01.jpg" alt="" />
              </div>
              <div className="slider-content pos-abs">
                <h4>Best Collection</h4>
                <h1 className="uppercase pos-rltv underline">
                  exclusive Fashion 2022
                </h1>
                <a href="#" className="btn-def btn-white">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="single-slider pos-rltv">
              <div className="slider-img">
                <img src="/images/slider/slider02.jpg" alt="" />
              </div>
              <div className="slider-content pos-abs">
                <h4>Best Collection</h4>
                <h1 className="uppercase pos-rltv underline">
                  exclusive Fashion 2022
                </h1>
                <a href="#" className="btn-def btn-white">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="single-slider pos-rltv">
              <div className="slider-img">
                <img src="/images/slider/slider01.jpg" alt="" />
              </div>
              <div className="slider-content pos-abs">
                <h4>Best Collection</h4>
                <h1 className="uppercase pos-rltv underline">
                  exclusive Fashion 2022
                </h1>
                <a href="#" className="btn-def btn-white">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*slider area start*/}

        {/*delivery service start*/}
        <div className="delivery-service-area ptb-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-service shadow-box text-center">
                  <img src="/images/icons/garantee.png" alt="" />
                  <h5>Money Back Guarantee</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-service shadow-box text-center">
                  <img src="/images/icons/coupon.png" alt="" />
                  <h5>Gift Coupon</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-service shadow-box text-center">
                  <img src="/images/icons/delivery.png" alt="" />
                  <h5>Free Shipping</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-service shadow-box text-center">
                  <img src="/images/icons/support.png" alt="" />
                  <h5>24x7 Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*delivery service start*/}

        {/*branding-section-area start*/}
        <div className="branding-section-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="active-slider pos-rltv carosule-pagi cp-line pagi-02">
                  <div className="single-slider">
                    <div className="row">
                      <div className="col-xl-7 col-lg-6 col-md-6">
                        <div className="brand-img text-center">
                          <img src="/images/team/branding.png" alt="" />
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="brand-content ptb-55">
                          <div className="brand-text color-lightgrey">
                            <h6>New Fashion</h6>
                            <h2 className="uppercase montserrat">
                              Brand Cortta
                            </h2>
                            <h3 className="montserrat">$200.00</h3>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout.
                            </p>
                            <div className="social-icon-wraper mt-35">
                              <div className="social-icon">
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
                          <div className="brand-timer shadow-box-2 mt-50">
                            <div className="timer-wraper text-center">
                              <div className="timer">
                                <div data-countdown="2023/02/01"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slider">
                    <div className="row">
                      <div className="col-xl-7 col-lg-6 col-md-6">
                        <div className="brand-img text-center">
                          <img src="/images/team/branding.png" alt="" />
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="brand-content ptb-55">
                          <div className="brand-text color-lightgrey">
                            <h6>New Fashion</h6>
                            <h2 className="uppercase montserrat">
                              Brand Cortta
                            </h2>
                            <h3 className="montserrat">$200.00</h3>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout.
                            </p>
                            <div className="social-icon-wraper mt-35">
                              <div className="social-icon">
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
                          <div className="brand-timer shadow-box-2 mt-50">
                            <div className="timer-wraper text-center">
                              <div className="timer">
                                <div data-countdown="2017/02/01"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-slider">
                    <div className="row">
                      <div className="col-xl-7 col-lg-6 col-md-6">
                        <div className="brand-img text-center">
                          <img src="/images/team/branding.png" alt="" />
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="brand-content ptb-55">
                          <div className="brand-text color-lightgrey">
                            <h6>New Fashion</h6>
                            <h2 className="uppercase montserrat">
                              Brand Cortta
                            </h2>
                            <h3 className="montserrat">$200.00</h3>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout.
                            </p>
                            <div className="social-icon-wraper mt-35">
                              <div className="social-icon">
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
                          <div className="brand-timer shadow-box-2 mt-50">
                            <div className="timer-wraper text-center">
                              <div className="timer">
                                <div data-countdown="2023/02/01"></div>
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
        {/*branding-section-area end*/}

        {/*new arrival area start*/}
        <div className="new-arrival-area pt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="heading-title heading-style pos-rltv mb-50 text-center">
                  <h5 className="uppercase">New Arrival</h5>
                </div>
                <div className="total-new-arrival new-arrival-slider-active carsoule-btn row">
                  <div className="product-item">
                    {/* single product start*/}
                    <div className="single-product">
                      <div className="product-img">
                        <div className="product-label">
                          <div className="new">New</div>
                        </div>
                        <div className="single-prodcut-img product-overlay pos-rltv">
                          <a href="single-product.html">
                            <img
                              alt=""
                              src="/images/product/01.jpg"
                              className="primary-image"
                            />
                            <img
                              alt=""
                              src="/images/product/02.jpg"
                              className="secondary-image"
                            />
                          </a>
                        </div>
                        <div className="product-icon socile-icon-tooltip text-center">
                          <ul>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Add To Cart"
                                className="add-cart"
                                data-placement="left"
                              >
                                <i className="fa fa-cart-plus"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Wishlist"
                                className="w-list"
                              >
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Compare"
                                className="cpare"
                              >
                                <i className="fa fa-refresh"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Quick View"
                                className="q-view"
                                data-bs-toggle="modal"
                                data-bs-target=".modal"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-text">
                        <div className="prodcut-name">
                          <a href="single-product.html">Quisque fringilla</a>
                        </div>
                        <div className="prodcut-ratting-price">
                          <div className="prodcut-price">
                            <div className="new-price">$220</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* single product end*/}
                  </div>
                  <div className="product-item">
                    {/* single product start*/}
                    <div className="single-product">
                      <div className="product-img">
                        <div className="single-prodcut-img product-overlay pos-rltv">
                          <a href="single-product.html">
                            <img
                              alt=""
                              src="/images/product/03.jpg"
                              className="primary-image"
                            />
                            <img
                              alt=""
                              src="/images/product/04.jpg"
                              className="secondary-image"
                            />
                          </a>
                        </div>
                        <div className="product-icon socile-icon-tooltip text-center">
                          <ul>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Add To Cart"
                                className="add-cart"
                                data-placement="left"
                              >
                                <i className="fa fa-cart-plus"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Wishlist"
                                className="w-list"
                              >
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Compare"
                                className="cpare"
                              >
                                <i className="fa fa-refresh"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Quick View"
                                className="q-view"
                                data-bs-toggle="modal"
                                data-bs-target=".modal"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-text">
                        <div className="prodcut-name">
                          <a href="single-product.html">Quisque fringilla</a>
                        </div>
                        <div className="prodcut-ratting-price">
                          <div className="prodcut-price">
                            <div className="new-price">$220</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* single product end*/}
                  </div>
                  <div className="product-item">
                    {/* single product start*/}
                    <div className="single-product">
                      <div className="product-img">
                        <div className="product-label">
                          <div className="new">Sale</div>
                        </div>
                        <div className="single-prodcut-img product-overlay pos-rltv">
                          <a href="single-product.html">
                            <img
                              alt=""
                              src="/images/product/02.jpg"
                              className="primary-image"
                            />
                            <img
                              alt=""
                              src="/images/product/03.jpg"
                              className="secondary-image"
                            />
                          </a>
                        </div>
                        <div className="product-icon socile-icon-tooltip text-center">
                          <ul>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Add To Cart"
                                className="add-cart"
                                data-placement="left"
                              >
                                <i className="fa fa-cart-plus"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Wishlist"
                                className="w-list"
                              >
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Compare"
                                className="cpare"
                              >
                                <i className="fa fa-refresh"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Quick View"
                                className="q-view"
                                data-bs-toggle="modal"
                                data-bs-target=".modal"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-text">
                        <div className="prodcut-name">
                          <a href="single-product.html">Quisque fringilla</a>
                        </div>
                        <div className="prodcut-ratting-price">
                          <div className="prodcut-ratting">
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-star-o"></i>
                            </a>
                          </div>
                          <div className="prodcut-price">
                            <div className="new-price">$220</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* single product end*/}
                  </div>
                  <div className="product-item">
                    {/* single product start*/}
                    <div className="single-product">
                      <div className="product-img">
                        <div className="single-prodcut-img product-overlay pos-rltv">
                          <a href="single-product.html">
                            <img
                              alt=""
                              src="/images/product/04.jpg"
                              className="primary-image"
                            />
                            <img
                              alt=""
                              src="/images/product/03.jpg"
                              className="secondary-image"
                            />
                          </a>
                        </div>
                        <div className="product-icon socile-icon-tooltip text-center">
                          <ul>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Add To Cart"
                                className="add-cart"
                                data-placement="left"
                              >
                                <i className="fa fa-cart-plus"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Wishlist"
                                className="w-list"
                              >
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Compare"
                                className="cpare"
                              >
                                <i className="fa fa-refresh"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Quick View"
                                className="q-view"
                                data-bs-toggle="modal"
                                data-bs-target=".modal"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-text">
                        <div className="prodcut-name">
                          <a href="single-product.html">Quisque fringilla</a>
                        </div>
                        <div className="prodcut-ratting-price">
                          <div className="prodcut-price">
                            <div className="new-price">$220</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* single product end*/}
                  </div>
                  <div className="product-item">
                    {/* single product start*/}
                    <div className="single-product">
                      <div className="product-img">
                        <div className="single-prodcut-img product-overlay pos-rltv">
                          <a href="single-product.html">
                            <img
                              alt=""
                              src="/images/product/05.jpg"
                              className="primary-image"
                            />
                            <img
                              alt=""
                              src="/images/product/06.jpg"
                              className="secondary-image"
                            />
                          </a>
                        </div>
                        <div className="product-icon socile-icon-tooltip text-center">
                          <ul>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Add To Cart"
                                className="add-cart"
                                data-placement="left"
                              >
                                <i className="fa fa-cart-plus"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Wishlist"
                                className="w-list"
                              >
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Compare"
                                className="cpare"
                              >
                                <i className="fa fa-refresh"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                data-tooltip="Quick View"
                                className="q-view"
                                data-bs-toggle="modal"
                                data-bs-target=".modal"
                              >
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-text">
                        <div className="prodcut-name">
                          <a href="single-product.html">Quisque fringilla</a>
                        </div>
                        <div className="prodcut-ratting-price">
                          <div className="prodcut-ratting">
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-star-o"></i>
                            </a>
                          </div>
                          <div className="prodcut-price">
                            <div className="new-price">$220</div>
                            <div className="old-price">
                              <del>$250</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* single product end*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*new arrival area end*/}

        {/*banner area start*/}
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
        {/*banner area end*/}

        {/*discunt-featured-onsale-area start */}
        <div className="discunt-featured-onsale-area pt-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-area tab-cars-style">
                  <div className="title-tab-product-category">
                    <div className="col-lg-12 text-center">
                      <ul className="nav mb-40 heading-style-2" role="tablist">
                        <li role="presentation">
                          <a
                            className="active"
                            href="#newarrival"
                            aria-controls="newarrival"
                            role="tab"
                            data-bs-toggle="tab"
                          >
                            New Arrival
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#bestsellr"
                            aria-controls="bestsellr"
                            role="tab"
                            data-bs-toggle="tab"
                          >
                            Best Seller
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#specialoffer"
                            aria-controls="specialoffer"
                            role="tab"
                            data-bs-toggle="tab"
                          >
                            Special Offer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-tab-product-category">
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane fade in active"
                        id="newarrival"
                      >
                        <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="product-label">
                                  <div className="new">New</div>
                                </div>
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/01.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/02.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/03.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/04.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="product-label">
                                  <div className="new">Sale</div>
                                </div>
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/02.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/03.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-ratting">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                  </div>
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/04.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/03.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/05.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/06.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-ratting">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                  </div>
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                    <div className="old-price">
                                      <del>$250</del>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                        </div>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane fade in"
                        id="bestsellr"
                      >
                        <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="product-label">
                                  <div className="new">New</div>
                                </div>
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/01.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/02.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="product-label">
                                  <div className="new">Sale</div>
                                </div>
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/02.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/03.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-ratting">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                  </div>
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/04.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/03.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/03.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/04.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/05.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/06.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-ratting">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                  </div>
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                    <div className="old-price">
                                      <del>$250</del>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                        </div>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane fade in"
                        id="specialoffer"
                      >
                        <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/04.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/03.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/05.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/06.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-ratting">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                  </div>
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                    <div className="old-price">
                                      <del>$250</del>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="product-label">
                                  <div className="new">New</div>
                                </div>
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/01.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/02.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/03.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/04.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
                          </div>
                          <div className="product-item">
                            {/* single product start*/}
                            <div className="single-product">
                              <div className="product-img">
                                <div className="product-label">
                                  <div className="new">Sale</div>
                                </div>
                                <div className="single-prodcut-img product-overlay pos-rltv">
                                  <a href="single-product.html">
                                    <img
                                      alt=""
                                      src="/images/product/02.jpg"
                                      className="primary-image"
                                    />
                                    <img
                                      alt=""
                                      src="/images/product/03.jpg"
                                      className="secondary-image"
                                    />
                                  </a>
                                </div>
                                <div className="product-icon socile-icon-tooltip text-center">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Add To Cart"
                                        className="add-cart"
                                        data-placement="left"
                                      >
                                        <i className="fa fa-cart-plus"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Wishlist"
                                        className="w-list"
                                      >
                                        <i className="fa fa-heart-o"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Compare"
                                        className="cpare"
                                      >
                                        <i className="fa fa-refresh"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-tooltip="Quick View"
                                        className="q-view"
                                        data-bs-toggle="modal"
                                        data-bs-target=".modal"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="product-text">
                                <div className="prodcut-name">
                                  <a href="single-product.html">
                                    Quisque fringilla
                                  </a>
                                </div>
                                <div className="prodcut-ratting-price">
                                  <div className="prodcut-ratting">
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star"></i>
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                  </div>
                                  <div className="prodcut-price">
                                    <div className="new-price">$220</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* single product end*/}
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

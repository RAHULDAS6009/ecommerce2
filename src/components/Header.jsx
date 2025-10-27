import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  return (
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
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="dribble">
                          <i className="fa fa-dribbble" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="behance">
                          <i className="fa fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="rss">
                          <i className="fa fa-rss" />
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
                      <div className="header-cart">
                        <div className="cart-icon">
                          <a href="#">
                            Cart
                            <i className="zmdi zmdi-shopping-cart" />
                          </a>
                          <span>2</span>
                        </div>
                        <div className="cart-content-wraper">
                          <div className="cart-single-wraper">
                            <div className="cart-img">
                              <a href="#">
                                <img
                                  src="images/product/01.jpg"
                                  alt="Product 01"
                                />
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
                                <i className="zmdi zmdi-close" />
                              </a>
                            </div>
                          </div>

                          <div className="cart-single-wraper">
                            <div className="cart-img">
                              <a href="#">
                                <img
                                  src="images/product/02.jpg"
                                  alt="Product 02"
                                />
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
                                <i className="zmdi zmdi-close" />
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

        {/* MOBILE: toggle + menu */}
        <div className="col-12 d-md-none">
          <button
            className="mobile-nav-toggle"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
            type="button"
          >
            <span className="mobile-nav-icon">☰</span> Menu
          </button>

          <div
            id="mobile-menu"
            className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}
          >
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/fullgrid">Man</a>
              </li>
              <li>
                <a href="/fullgrid">Women</a>
              </li>
              <li>
                <a href="blog.html">About</a>
              </li>
            </ul>
          </div>
        </div>
        {/* END MOBILE */}

        <div id="sticky-header" className="header-middle-area">
          <div className="container">
            <div className="full-width-mega-dropdown">
              <div className="row">
                <div className="col-md-2">
                  <div className="logo ptb-20">
                    <a href="/">
                      <img src="images/logo/logo.png" alt="main logo" />
                    </a>
                  </div>
                </div>

                {/* Desktop nav */}
                <div className="col-lg-7 col-md-10 d-none d-md-block">
                  <nav id="primary-menu" aria-label="Primary Navigation">
                    <ul className="main-menu">
                      <li className="current">
                        <a className="active" href="/">
                          Home
                        </a>
                        <ul className="dropdown">
                          <li>
                            <a className="active" href="/">
                              Home One
                            </a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Two</a>
                          </li>
                          <li>
                            <a href="index-boxed-01.html">Home Three (Boxed)</a>
                          </li>
                          <li>
                            <a href="index-boxed-02.html">Home Four (Boxed)</a>
                          </li>
                        </ul>
                      </li>

                      <li className="mega-parent pos-rltv">
                        <a href="/fullgrid">Man</a>
                        <div className="mega-menu-area mma-800">
                          <ul className="single-mega-item">
                            <li className="menu-title uppercase">Shirts</li>
                            <li>
                              <a href="/fullgrid">Shirt 01</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Shirt 02</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Shirt 03</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Shirt 04</a>
                            </li>
                          </ul>
                          <ul className="single-mega-item">
                            <li className="menu-title uppercase">Pants</li>
                            <li>
                              <a href="/fullgrid">Pant 01</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Pant 02</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Pant 03</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Pant 04</a>
                            </li>
                          </ul>
                          <ul className="single-mega-item">
                            <li className="menu-title uppercase">T-Shirts</li>
                            <li>
                              <a href="/fullgrid">T-Shirt 01</a>
                            </li>
                            <li>
                              <a href="/fullgrid">T-Shirt 02</a>
                            </li>
                            <li>
                              <a href="/fullgrid">T-Shirt 03</a>
                            </li>
                            <li>
                              <a href="/fullgrid">T-Shirt 04</a>
                            </li>
                          </ul>
                          <div className="mega-banner-img">
                            <a href="single-product.html">
                              <img
                                src="images/banner/banner-fashion-02.jpg"
                                alt="banner"
                              />
                            </a>
                          </div>
                        </div>
                      </li>

                      <li className="mega-parent pos-rltv">
                        <a href="/fullgrid">Women</a>
                        <div className="mega-menu-area mma-700">
                          <ul className="single-mega-item">
                            <li className="menu-title uppercase">Sharees</li>
                            <li>
                              <a href="/fullgrid">Sharee 01</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Sharee 02</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Sharee 03</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Sharee 04</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Sharee 05</a>
                            </li>
                          </ul>
                          <ul className="single-mega-item">
                            <li className="menu-title uppercase">Lahenga</li>
                            <li>
                              <a href="/fullgrid">Lahenga 01</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Lahenga 02</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Lahenga 03</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Lahenga 04</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Lahenga 05</a>
                            </li>
                          </ul>
                          <ul className="single-mega-item">
                            <li className="menu-title uppercase">Sandels</li>
                            <li>
                              <a href="/fullgrid">Sandel 01</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Sandel 02</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Sandel 03</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Sandel 04</a>
                            </li>
                            <li>
                              <a href="/fullgrid">Sandel 05</a>
                            </li>
                          </ul>
                          <div className="mega-banner-img">
                            <a href="single-product.html">
                              <img
                                src="images/banner/banner-fashion.jpg"
                                alt="banner"
                              />
                            </a>
                          </div>
                        </div>
                      </li>

                      <li className="mega-parent">
                        <a href="/fullgrid">Shortcut</a>
                        <div className="mega-menu-area mma-970">
                          {/* … keep existing */}
                        </div>
                      </li>

                      <li className="mega-parent">
                        <a href="/">Pages</a>
                        <div className="mega-menu-area mma-970">{/* … */}</div>
                      </li>

                      <li>
                        <a href="/">BLOG</a>
                      </li>
                      <li>
                        <a href="/">ABOUT</a>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Desktop search */}
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
                            <button className="src-btn" type="button">
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <div>
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
                            <a href="index-boxed-01.html">Home Three (Boxed)</a>
                          </li>
                          <li>
                            <a href="index-boxed-02.html">Home Four (Boxed)</a>
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
                              <a href="shortcode-breadcrumb.html">Breadcrumb</a>
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
                              <a href="blog-full-right.html">Blog Ful Rightl</a>
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
                {/* <div className="mobile-menu-area">
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
                </div> */}
                {/*mobile menu area end*/}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

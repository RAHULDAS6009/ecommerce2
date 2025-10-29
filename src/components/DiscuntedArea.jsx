import React from "react";
import Slider from "react-slick";

/* custom arrows to mirror your jQuery version */
const PrevArrow = ({ onClick }) => (
  <div className="arrow-left" onClick={onClick} role="button" aria-label="Previous">
    <i className="zmdi zmdi-chevron-left"></i>
  </div>
);
const NextArrow = ({ onClick }) => (
  <div className="arrow-right" onClick={onClick} role="button" aria-label="Next">
    <i className="zmdi zmdi-chevron-right"></i>
  </div>
);

/* slick settings same as your snippet */
const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  dots: false,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1169, settings: { slidesToShow: 4 } },
    { breakpoint: 969,  settings: { slidesToShow: 3 } },
    { breakpoint: 767,  settings: { slidesToShow: 2 } },
    { breakpoint: 479,  settings: { slidesToShow: 1 } },
  ],
};

const DiscuntedArea = () => {
  return (
    <div>
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
                    {/* ---------- TAB: New Arrival ---------- */}
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="newarrival"
                    >
                      <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                        <Slider {...sliderSettings}>
                          {/* Slide 1 */}
                          <div>
                            <div className="product-item">
                              {/* single product start*/}
                              <div className="single-product">
                                <div className="product-img">
                                  <div className="product-label">
                                    <div className="new">New</div>
                                  </div>
                                  <div className="single-prodcut-img product-overlay pos-rltv">
                                    <a href="single-product.html">
                                      <img alt="" src="/images/product/01.jpg" className="primary-image" />
                                      <img alt="" src="/images/product/02.jpg" className="secondary-image" />
                                    </a>
                                  </div>
                                  <div className="product-icon socile-icon-tooltip text-center">
                                    <ul>
                                      <li>
                                        <a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left">
                                          <i className="fa fa-cart-plus"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" data-tooltip="Wishlist" className="w-list">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" data-tooltip="Compare" className="cpare">
                                          <i className="fa fa-refresh"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" data-tooltip="Quick View" className="q-view" data-bs-toggle="modal" data-bs-target=".modal">
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
                          </div>

                          {/* Slide 2 */}
                          <div>
                            <div className="product-item">
                              <div className="single-product">
                                <div className="product-img">
                                  <div className="single-prodcut-img product-overlay pos-rltv">
                                    <a href="single-product.html">
                                      <img alt="" src="/images/product/03.jpg" className="primary-image" />
                                      <img alt="" src="/images/product/04.jpg" className="secondary-image" />
                                    </a>
                                  </div>
                                  <div className="product-icon socile-icon-tooltip text-center">
                                    <ul>
                                      <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                      <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                      <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                      <li><a href="#" data-tooltip="Quick View" className="q-view" data-bs-toggle="modal" data-bs-target=".modal"><i className="fa fa-eye"></i></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="product-text">
                                  <div className="prodcut-name"><a href="single-product.html">Quisque fringilla</a></div>
                                  <div className="prodcut-ratting-price">
                                    <div className="prodcut-price"><div className="new-price">$220</div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Slide 3 */}
                          <div>
                            <div className="product-item">
                              <div className="single-product">
                                <div className="product-img">
                                  <div className="product-label"><div className="new">Sale</div></div>
                                  <div className="single-prodcut-img product-overlay pos-rltv">
                                    <a href="single-product.html">
                                      <img alt="" src="/images/product/02.jpg" className="primary-image" />
                                      <img alt="" src="/images/product/03.jpg" className="secondary-image" />
                                    </a>
                                  </div>
                                  <div className="product-icon socile-icon-tooltip text-center">
                                    <ul>
                                      <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                      <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                      <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                      <li><a href="#" data-tooltip="Quick View" className="q-view" data-bs-toggle="modal" data-bs-target=".modal"><i className="fa fa-eye"></i></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="product-text">
                                  <div className="prodcut-name"><a href="single-product.html">Quisque fringilla</a></div>
                                  <div className="prodcut-ratting-price">
                                    <div className="prodcut-ratting">
                                      <a href="#"><i className="fa fa-star"></i></a>
                                      <a href="#"><i className="fa fa-star"></i></a>
                                      <a href="#"><i className="fa fa-star"></i></a>
                                      <a href="#"><i className="fa fa-star"></i></a>
                                      <a href="#"><i className="fa fa-star-o"></i></a>
                                    </div>
                                    <div className="prodcut-price"><div className="new-price">$220</div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Slide 4 */}
                          <div>
                            <div className="product-item">
                              <div className="single-product">
                                <div className="product-img">
                                  <div className="single-prodcut-img product-overlay pos-rltv">
                                    <a href="single-product.html">
                                      <img alt="" src="/images/product/04.jpg" className="primary-image" />
                                      <img alt="" src="/images/product/03.jpg" className="secondary-image" />
                                    </a>
                                  </div>
                                  <div className="product-icon socile-icon-tooltip text-center">
                                    <ul>
                                      <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                      <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                      <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                      <li><a href="#" data-tooltip="Quick View" className="q-view" data-bs-toggle="modal" data-bs-target=".modal"><i className="fa fa-eye"></i></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="product-text">
                                  <div className="prodcut-name"><a href="single-product.html">Quisque fringilla</a></div>
                                  <div className="prodcut-ratting-price">
                                    <div className="prodcut-price"><div className="new-price">$220</div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Slide 5 */}
                          <div>
                            <div className="product-item">
                              <div className="single-product">
                                <div className="product-img">
                                  <div className="single-prodcut-img product-overlay pos-rltv">
                                    <a href="single-product.html">
                                      <img alt="" src="/images/product/05.jpg" className="primary-image" />
                                      <img alt="" src="/images/product/06.jpg" className="secondary-image" />
                                    </a>
                                  </div>
                                  <div className="product-icon socile-icon-tooltip text-center">
                                    <ul>
                                      <li><a href="#" data-tooltip="Add To Cart" className="add-cart" data-placement="left"><i className="fa fa-cart-plus"></i></a></li>
                                      <li><a href="#" data-tooltip="Wishlist" className="w-list"><i className="fa fa-heart-o"></i></a></li>
                                      <li><a href="#" data-tooltip="Compare" className="cpare"><i className="fa fa-refresh"></i></a></li>
                                      <li><a href="#" data-tooltip="Quick View" className="q-view" data-bs-toggle="modal" data-bs-target=".modal"><i className="fa fa-eye"></i></a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="product-text">
                                  <div className="prodcut-name"><a href="single-product.html">Quisque fringilla</a></div>
                                  <div className="prodcut-ratting-price">
                                    <div className="prodcut-ratting">
                                      <a href="#"><i className="fa fa-star"></i></a>
                                      <a href="#"><i className="fa fa-star"></i></a>
                                      <a href="#"><i className="fa fa-star"></i></a>
                                      <a href="#"><i className="fa fa-star"></i></a>
                                      <a href="#"><i className="fa fa-star-o"></i></a>
                                    </div>
                                    <div className="prodcut-price">
                                      <div className="new-price">$220</div>
                                      <div className="old-price"><del>$250</del></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>

                    {/* ---------- TAB: Best Seller ---------- */}
                    <div role="tabpanel" className="tab-pane fade in" id="bestsellr">
                      <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                        <Slider {...sliderSettings}>
                          {/* reuse the same slides structure or different images */}
                          {/* ... copy your slides here as above ... */}
                        </Slider>
                      </div>
                    </div>

                    {/* ---------- TAB: Special Offer ---------- */}
                    <div role="tabpanel" className="tab-pane fade in" id="specialoffer">
                      <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                        <Slider {...sliderSettings}>
                          {/* reuse the same slides structure or different images */}
                          {/* ... copy your slides here as above ... */}
                        </Slider>
                      </div>
                    </div>

                  </div>{/* .tab-content */}
                </div>{/* .content-tab-product-category */}
              </div>{/* .product-area */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscuntedArea;

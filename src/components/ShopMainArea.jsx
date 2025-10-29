import React from "react";
import Slider from "react-slick";
import { ProductCard } from "./NewArrivalArea";
import { productData } from "../data";

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  dots: false,
  arrows: true,
  // you can style .slick-prev / .slick-next with your theme CSS or add custom arrows like before
  responsive: [
    { breakpoint: 1169, settings: { slidesToShow: 4 } },
    { breakpoint: 969,  settings: { slidesToShow: 3 } },
    { breakpoint: 767,  settings: { slidesToShow: 2 } },
    { breakpoint: 479,  settings: { slidesToShow: 1 } },
  ],
};

const ShopMainArea = () => {
  return (
    <div>
      <div className="shop-main-area ptb-70">
        <div className="container">
          <div className="row">
            {/* Top bar */}
            <div className="col-lg-12">
              <div className="shop-area-top">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="sort product-show">
                      <label>View</label>
                      <select id="input-amount" defaultValue={25}>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                      </select>
                    </div>
                    <div className="sort product-type">
                      <label>Sort By</label>
                      <select id="input-sort" defaultValue="">
                        <option value="">Default</option>
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

            {/* spacer */}
            <div className="clearfix"></div>

            {/* Products */}
            <div className="col-lg-12">
              <div className="shop-total-product-area clearfix mt-35">
                <div className="tab-content">
                  {/* GRID TAB — slider */}
                  <div
                    role="tabpanel"
                    className="tab-pane fade show active"
                    id="grid"
                  >
                    <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                      <Slider {...sliderSettings}>
                        {productData.map((product, idx) => (
                          <div key={idx}>
                            <ProductCard product={product} />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>

                  {/* LIST TAB — stacked items */}
                  <div role="tabpanel" className="tab-pane fade" id="list">
                    <div className="row">
                      {productData.map((product, idx) => (
                        <div className="col-12 mb-4" key={`list-${idx}`}>
                          <div className="d-flex align-items-start gap-3 p-3 border rounded">
                            <div style={{ width: 120 }}>
                              {/* If your ProductCard exposes images you can reuse, or just show a small thumb */}
                              {/* Replace with product.thumb if you have it */}
                              <img
                                src={product.primaryImage || product.image || "/images/product/01.jpg"}
                                alt={product.name}
                                className="img-fluid"
                              />
                            </div>
                            <div className="flex-grow-1">
                              {/* You can reuse ProductCard internals; keeping simple here */}
                              <h6 className="mb-1">{product.name}</h6>
                              <div className="text-muted mb-2">
                                ${product.price}
                                {product.oldPrice && (
                                  <span className="ms-2">
                                    <del>${product.oldPrice}</del>
                                  </span>
                                )}
                              </div>
                              {/* optional: actions / add to cart */}
                              {/* keep styling identical to your theme if needed */}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* /LIST */}
                </div>
              </div>
            </div>
            {/* /Products */}
          </div>
        </div>
      </div>

      {/* your footer markup left untouched below */}
      <div class="footer-area ptb-50">
        {/* ... your existing footer code stays as-is ... */}
      </div>
    </div>
  );
};

export default ShopMainArea;

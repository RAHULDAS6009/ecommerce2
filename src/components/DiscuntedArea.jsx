import React from "react";
import Slider from "react-slick";
import { ProductCard } from "./NewArrivalArea";
import { productData } from "../data";

/* custom arrows to mirror your jQuery version */
const PrevArrow = ({ onClick }) => (
  <div
    className="arrow-left"
    onClick={onClick}
    role="button"
    aria-label="Previous"
  >
    <i className="zmdi zmdi-chevron-left"></i>
  </div>
);
const NextArrow = ({ onClick }) => (
  <div
    className="arrow-right"
    onClick={onClick}
    role="button"
    aria-label="Next"
  >
    <i className="zmdi zmdi-chevron-right"></i>
  </div>
);

/* slick settings same as your snippet */
const sliderSettings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  dots: false,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1169, settings: { slidesToShow: 4 } },
    { breakpoint: 969, settings: { slidesToShow: 3 } },
    { breakpoint: 767, settings: { slidesToShow: 2 } },
    { breakpoint: 479, settings: { slidesToShow: 1 } },
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
                          {productData.map((item, index) => (
                            <ProductCard key={index} product={item} />
                          ))}
                        </Slider>
                      </div>
                    </div>

                    {/* ---------- TAB: Best Seller ---------- */}
                    <div
                      role="tabpanel"
                      className="tab-pane fade in"
                      id="bestsellr"
                    >
                      <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                        <Slider {...sliderSettings}>
                          {/* reuse the same slides structure or different images */}
                          {/* ... copy your slides here as above ... */}
                        </Slider>
                      </div>
                    </div>

                    {/* ---------- TAB: Special Offer ---------- */}
                    <div
                      role="tabpanel"
                      className="tab-pane fade in"
                      id="specialoffer"
                    >
                      <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
                        <Slider {...sliderSettings}>
                          {/* reuse the same slides structure or different images */}
                          {/* ... copy your slides here as above ... */}
                        </Slider>
                      </div>
                    </div>
                  </div>
                  {/* .tab-content */}
                </div>
                {/* .content-tab-product-category */}
              </div>
              {/* .product-area */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscuntedArea;

import React from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { productData } from "../data";

// Custom arrow components to match your zmdi icons
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

export const ProductCard = ({ product }) => {
  const {
    id,
    name,
    primaryImage,
    secondaryImage,
    price,
    oldPrice,
    isNew,
    isSale,
    rating,
  } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="product-item">
      {/* single product start */}
      <div className="single-product">
        <div className="product-img">
         

          <div
            className="single-prodcut-img product-overlay pos-rltv"
            onClick={() => navigate(`/productdetails/${id}`)}
          >
            <a href="#">
              <img alt={name} src={primaryImage} className="primary-image" />
              <img alt={name} src={secondaryImage} className="secondary-image" />
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
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addToCart(product));
                  }}
                >
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
            <a href="#">{name}</a>
          </div>

          <div className="prodcut-ratting-price">
            {rating && (
              <div className="prodcut-ratting">
                {[...Array(5)].map((_, i) => (
                  <a href="#" key={i}>
                    <i className={`fa ${i < rating ? "fa-star" : "fa-star-o"}`}></i>
                  </a>
                ))}
              </div>
            )}
            <div className="prodcut-price">
              <div className="new-price"> ${price} </div>
              {oldPrice && (
                <div className="old-price">
                  <del>${oldPrice}</del>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* single product end */}
    </div>
  );
};

const NewArrivalArea = () => {
  // replicate your jQuery config
  const settings = {
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
      { breakpoint: 969,  settings: { slidesToShow: 3 } },
      { breakpoint: 767,  settings: { slidesToShow: 2 } },
      { breakpoint: 479,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="new-arrival-area pt-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="heading-title heading-style pos-rltv mb-50 text-center">
              <h5 className="uppercase">New Arrival</h5>
            </div>

            {/* keep your original classes so existing CSS still applies */}
            <div className="total-new-arrival new-arrival-slider-active carsoule-btn row">
              <Slider {...settings}>
                {productData.map((product, index) => (
                  // wrap each slide in a div; react-slick handles width
                  <div key={index}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </Slider>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalArea;

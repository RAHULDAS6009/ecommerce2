import React from "react";
import { productData } from "../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const {
    label,
    id,
    primaryImage,
    secondaryImage,
    name,
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
      <div className="single-product">
        <div className="product-img">
          {/* Product Label */}
          {(isNew || isSale) && (
            <div className="product-label">
              <div className={isNew ? "new" : "sale"}>
                {isNew ? "New" : "Sale"}
              </div>
            </div>
          )}

          {/* Product Images */}
          <div
            className="single-prodcut-img product-overlay pos-rltv"
            onClick={() => {
              navigate(`/productdetails/${id}`);
            }}
          >
            <a href="">
              <img alt={name} src={primaryImage} className="primary-image" />
              <img
                alt={name}
                src={secondaryImage}
                className="secondary-image"
              />
            </a>
          </div>

          {/* Product Icons */}
          <div className="product-icon socile-icon-tooltip text-center">
            <ul>
              {[
                { icon: "fa-cart-plus", tooltip: "Add To Cart" },
                { icon: "fa-heart-o", tooltip: "Wishlist" },
                { icon: "fa-refresh", tooltip: "Compare" },
                { icon: "fa-eye", tooltip: "Quick View" },
              ].map(({ icon, tooltip }, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                    data-tooltip={tooltip}
                    className={tooltip.toLowerCase().replace(/\s+/g, "-")}
                    data-placement="left"
                  >
                    <i className={`fa ${icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Text */}
        <div className="product-text">
          <div className="prodcut-name">
            <a href="#">{name}</a>
          </div>
          <div className="prodcut-ratting-price">
            {/* Rating */}
            {rating && (
              <div className="prodcut-ratting">
                {[...Array(5)].map((_, i) => (
                  <a href="#" key={i}>
                    <i
                      className={`fa ${i < rating ? "fa-star" : "fa-star-o"}`}
                    ></i>
                  </a>
                ))}
              </div>
            )}
            {/* Price */}
            <div className="prodcut-price">
              <div className="new-price">${price}</div>
              {oldPrice && (
                <div className="old-price">
                  <del>${oldPrice}</del>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Parent Component
const NewArrivalArea = () => {
  return (
    <div className="new-arrival-area pt-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="heading-title heading-style pos-rltv mb-50 text-center">
              <h5 className="uppercase">New Arrival</h5>
            </div>

            <div className="total-new-arrival new-arrival-slider-active carsoule-btn row ">
              {productData.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalArea;

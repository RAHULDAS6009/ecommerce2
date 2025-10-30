import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { productData } from "../data";

export const ProductCard = ({ product }) => {
  const {
    id,
    name,
    primaryImage,
    secondaryImage,
    price,
    oldPrice,
    rating,
  } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="product-item">
      <div className="single-product">
        <div className="product-img">
          <div
            className="single-prodcut-img product-overlay pos-rltv"
            onClick={() => navigate(`/productdetails/${id}`)}
            style={{ cursor: "pointer" }}
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
              {/* <li>
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
              </li> */}
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
                    <i
                      className={`fa ${i < rating ? "fa-star" : "fa-star-o"}`}
                    ></i>
                  </a>
                ))}
              </div>
            )}
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

const NewArrivalArea = () => {
  return (
    <div className="new-arrival-area pt-70">
      <div className="container">
        <div className="heading-title heading-style pos-rltv mb-50 text-center">
          <h5 className="uppercase">NEW ARRIVAL</h5>
          <div className="section-bar">
            <span className="bar-active"></span>
            <span className="bar-inactive"></span>
          </div>
        </div>

        {/* ⬇⬇ THIS is the important part */}
        <div className="new-arrival-grid">
          {productData.map((product, index) => (
            <div className="new-arrival-col" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {/* ⬆⬆ THIS must exist, not just a single <ProductCard /> */}
      </div>
    </div>
  );
};

export default NewArrivalArea;
